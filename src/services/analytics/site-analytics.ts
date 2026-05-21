import { captureUtmsFromSearch, getUtmsForWebhook } from '../../utils/utm'

const SESSION_KEY = 'fitcertify_session_v1'
const MAX_PAGE_VIEWS = 30
const MAX_EVENTOS = 80

export type EventoTipo =
  | 'pageview'
  | 'click'
  | 'modal_aberto'
  | 'modal_fechado'
  | 'form_submit'
  | 'form_error'

export type Evento = {
  tipo: EventoTipo
  at: string
  path: string
  dataTrack?: string
  texto?: string
  href?: string
  detalhe?: string
}

export type PageView = {
  path: string
  fullPath: string
  at: string
}

type SessionData = {
  sessionId: string
  startedAt: string
  landingPage: string
  landingUrl: string
  referrer: string
  pageViews: PageView[]
  eventos: Evento[]
}

export type CadastroCore = {
  nomeCompleto: string
  email: string
  numberWhatsapp: string
  promocaoRef: string
}

class SiteAnalytics {
  private ready = false
  private session: SessionData | null = null
  private onClick: ((e: MouseEvent) => void) | null = null

  init() {
    if (this.ready || typeof window === 'undefined') return
    this.ready = true

    captureUtmsFromSearch(window.location.search)
    this.session = this.loadSession()
    this.onClick = (e) => this.handleClick(e)
    document.addEventListener('click', this.onClick, true)
  }

  onRouteChange(fullPath: string, querySearch: string) {
    captureUtmsFromSearch(querySearch || window.location.search)
    this.trackPageView(fullPath)
  }

  trackPageView(fullPath: string) {
    if (!this.session) this.session = this.loadSession()

    const pv: PageView = {
      path: fullPath.split('?')[0] || '/',
      fullPath,
      at: new Date().toISOString(),
    }

    this.session.pageViews.push(pv)
    if (this.session.pageViews.length > MAX_PAGE_VIEWS) {
      this.session.pageViews = this.session.pageViews.slice(-MAX_PAGE_VIEWS)
    }

    this.pushEvento({ tipo: 'pageview', path: pv.path, detalhe: fullPath })
    this.saveSession()
  }

  trackEvento(partial: Omit<Evento, 'at' | 'path'> & { path?: string }) {
    this.pushEvento({
      path: partial.path ?? window.location.pathname,
      ...partial,
    })
  }

  /** Payload do cadastro para API (só campos do formulário). */
  buildApiPayload(core: CadastroCore): CadastroCore {
    return core
  }

  /** Payload completo para o webhook (form + UTMs + métricas da sessão). */
  buildWebhookPayload(core: CadastroCore) {
    const utms = getUtmsForWebhook()
    return {
      ...core,
      ...utms,
      metricas: this.getMetricasSnapshot(),
    }
  }

  private getMetricasSnapshot() {
    const s = this.session ?? this.loadSession()
    const clicks = s.eventos.filter((e) => e.tipo === 'click')

    return {
      sessionId: s.sessionId,
      startedAt: s.startedAt,
      landingPage: s.landingPage,
      landingUrl: s.landingUrl,
      referrer: s.referrer,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: { width: window.screen.width, height: window.screen.height },
      pageViews: s.pageViews,
      eventos: s.eventos,
      resumo: {
        totalPageViews: s.pageViews.length,
        totalEventos: s.eventos.length,
        totalClicks: clicks.length,
        ultimaPagina: s.pageViews.at(-1)?.path ?? null,
      },
      enviadoEm: new Date().toISOString(),
    }
  }

  private pushEvento(partial: Omit<Evento, 'at'>) {
    if (!this.session) this.session = this.loadSession()

    this.session.eventos.push({
      at: new Date().toISOString(),
      ...partial,
    })

    if (this.session.eventos.length > MAX_EVENTOS) {
      this.session.eventos = this.session.eventos.slice(-MAX_EVENTOS)
    }

    this.saveSession()
  }

  private handleClick(e: MouseEvent) {
    const target = e.target
    if (!(target instanceof Element)) return

    const el = target.closest(
      'a, button, [role="button"], input[type="submit"], [data-track]',
    )
    if (!(el instanceof HTMLElement)) return

    const dataTrack =
      el.getAttribute('data-track') ??
      el.closest('[data-track]')?.getAttribute('data-track') ??
      undefined

    this.pushEvento({
      tipo: 'click',
      path: window.location.pathname,
      dataTrack,
      texto: this.labelDoClique(el),
      href: el instanceof HTMLAnchorElement ? el.href : undefined,
    })
  }

  private labelDoClique(el: HTMLElement): string {
    if (el.getAttribute('data-track')) return el.getAttribute('data-track')!
    const text = el.textContent?.replace(/\s+/g, ' ').trim()
    if (text) return text.slice(0, 100)
    if (el instanceof HTMLAnchorElement && el.pathname) return el.pathname
    return el.tagName.toLowerCase()
  }

  private loadSession(): SessionData {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY)
      if (raw) return JSON.parse(raw) as SessionData
    } catch {
      /* ignore */
    }

    return {
      sessionId: crypto.randomUUID(),
      startedAt: new Date().toISOString(),
      landingPage: window.location.pathname,
      landingUrl: window.location.href,
      referrer: document.referrer || '',
      pageViews: [],
      eventos: [],
    }
  }

  private saveSession() {
    if (!this.session) return
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(this.session))
    } catch {
      /* ignore */
    }
  }
}

export const siteAnalytics = new SiteAnalytics()
