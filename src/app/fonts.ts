import { Manrope } from 'next/font/google';

export const manrope = Manrope({
  weight: ['500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-manrope',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});
