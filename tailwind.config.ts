import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)']
      },
      backgroundImage: {
        'hero-pattern':
          'radial-gradient( 100% 150% at 50% -35%, rgba(14, 16, 21, 0) 0%, rgb(14, 16, 21, 0.75) 100% ), linear-gradient( 180deg, rgba(14, 16, 21, 0) -35%, rgba(14, 16, 21, 0.375) 100% ), linear-gradient( 180deg, rgba(14, 16, 21, 0.375) -35%, rgba(14, 16, 21, 0) 100% ), url(/assets/main_hero.png)'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#07090E',
            foreground: '#f3f4f6'
          }
        }
      }
    })
  ]
}
export default config
