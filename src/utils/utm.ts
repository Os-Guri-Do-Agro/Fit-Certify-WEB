export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
] as const

export type UtmKey = (typeof UTM_KEYS)[number]
export type UtmParams = Partial<Record<UtmKey, string>>

const STORAGE_KEY = 'fitcertify_utms_v1'

export type StoredUtms = {
  first: UtmParams
  last: UtmParams
  firstCapturedAt: string | null
  lastCapturedAt: string | null
}

export function parseUtmsFromSearch(search: string): UtmParams {
  const normalized = search.startsWith('?') ? search : search ? `?${search}` : ''
  const params = new URLSearchParams(normalized)
  const utms: UtmParams = {}

  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim()
    if (value) utms[key] = value
  }

  return utms
}

function hasValues(utms: UtmParams): boolean {
  return Object.keys(utms).length > 0
}

export function readStoredUtms(): StoredUtms | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as StoredUtms) : null
  } catch {
    return null
  }
}

export function captureUtmsFromSearch(search: string): StoredUtms {
  const incoming = parseUtmsFromSearch(search)
  const now = new Date().toISOString()
  const stored: StoredUtms = readStoredUtms() ?? {
    first: {},
    last: {},
    firstCapturedAt: null,
    lastCapturedAt: null,
  }

  if (hasValues(incoming)) {
    if (!hasValues(stored.first)) {
      stored.first = { ...incoming }
      stored.firstCapturedAt = now
    }
    stored.last = { ...incoming }
    stored.lastCapturedAt = now
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    /* quota / modo privado */
  }

  return stored
}

export function getUtmsForWebhook(): UtmParams {
  const stored = readStoredUtms()
  return stored?.last ?? {}
}
