# Guia de Briefing para Reformulação de Design

Use este documento sempre que quiser me pedir uma reformulação visual.  
Quanto mais completo o briefing, mais fiel e rápido fica o resultado.

## Como me enviar

Copie o template da seção **Template de Pedido** e preencha os campos.

Se preferir, pode mandar só os itens essenciais:
- objetivo da reformulação
- páginas/componentes afetados
- estilo visual desejado
- paleta e tipografia
- restrições técnicas

## Ordem recomendada de trabalho

1. Definir direção visual (estilo + referências)
2. Fechar tokens (cor, tipografia, espaçamento, raio, sombra)
3. Reformular layout da página base (geralmente Home)
4. Ajustar componentes compartilhados
5. Propagar para páginas secundárias
6. Revisar responsividade e acessibilidade

## Template de Pedido

```md
## 1) Objetivo
- O que queremos melhorar com esse redesign?
- Exemplo: "deixar mais premium", "aumentar conversão no CTA", "melhorar legibilidade mobile".

## 2) Escopo
- Páginas: [Home, Eventos, Certificados...]
- Componentes: [Header, Footer, Cards, Botões, Formulários...]
- O que NÃO deve ser alterado:

## 3) Público e contexto
- Público principal:
- Dispositivo prioritário: [desktop/mobile]
- Concorrentes/referências:

## 4) Direção visual
- Estilo desejado: [minimalista, institucional, moderno, ousado...]
- Sensação da marca: [confiança, energia, tecnologia...]
- Nível de mudança: [leve, médio, radical]

## 5) Paleta de cores
- Primary:
- Secondary:
- Accent:
- Neutras:
- Semantic (success/warning/error):
- Regras de uso (ex.: "CTA sempre primary"):

## 6) Tipografia
- Fonte título:
- Fonte texto:
- Escala (h1, h2, body, caption):
- Peso padrão:

## 7) Componentes e UI
- Botões (shape, estados, ícones):
- Inputs/formulários:
- Cards:
- Navbar/Header:
- Footer:
- Ícones/ilustrações:

## 8) Layout e espaçamento
- Grid: [12 colunas, container max-width...]
- Espaçamento base: [4/8/12/16...]
- Borda/raio:
- Sombras:

## 9) Interações e animações
- Quer animações? [sim/não]
- Intensidade: [sutil/média/alta]
- Onde animar:
- Restrições de performance:

## 10) Responsividade e acessibilidade
- Breakpoints prioritários:
- Regras mobile-first:
- Contraste mínimo (AA/AAA):
- Estados de foco e navegação por teclado:

## 11) Restrições técnicas
- Framework/UI libs em uso:
- O que manter (Tailwind classes, estrutura atual, libs):
- O que evitar:

## 12) Critérios de aceite
- Como você vai validar que ficou bom?
- Exemplo:
  - "Header limpo e legível em mobile"
  - "CTA principal mais destacado"
  - "Contraste AA em textos principais"

## 13) Prioridade de entrega
- Fase 1 (obrigatório):
- Fase 2 (importante):
- Fase 3 (nice to have):
```

## Exemplo rápido (resumido)

```md
Objetivo: modernizar visual e melhorar escaneabilidade mobile.
Escopo: Home + Header + Footer + Cards de Eventos.
Estilo: clean, premium, foco em confiança.
Paleta: manter cyan/lime, reduzir saturação, neutros mais suaves.
Tipografia: títulos com mais peso; body com leitura confortável.
Restrições: manter Vue 3 + Tailwind v4; sem trocar estrutura de rotas.
Aceite: CTA principal visível em 3s, contraste AA, header funcional em 360px.
```

## Dicas para acelerar o processo

- Envie links de 2 a 3 referências visuais (sites, Dribbble, Behance).
- Diga claramente o que você gostou em cada referência.
- Se tiver identidade de marca, inclua logo e regras de uso.
- Indique a ordem de prioridade por página para evitar retrabalho.

