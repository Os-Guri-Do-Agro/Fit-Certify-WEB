export const themePalette = {
  primary: {
    50: '#ecfeff',
    100: '#cffafe',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
  },
  secondary: {
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
  },
  accent: {
    500: '#10b981',
  },
  semantic: {
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    500: '#6b7280',
    700: '#374151',
    900: '#111827',
  },
  surface: {
    base: '#ffffff',
    inverse: '#000000',
  },
} as const;

export type ThemePalette = typeof themePalette;
