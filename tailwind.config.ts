import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#714eff',
      brand: {
        50: '#f0f4fd',
      },
      dark: 'rgba(136, 136, 136, 0.30)',
      neutral: {
        100: '#e5e5ea',
        200: 'rgba(255, 255, 255, 0.50)',
        300: '#9d9da1',
        400: '#3c3c43',
      },
      label: {
        secondary: 'rgba(60, 60, 67, 0.8)',
        tertiary: 'rgba(60, 60, 67, 0.5)',
        quaternary: 'rgba(60, 60, 67, 0.18)',
      },
      black: '#000',
      white: '#fff',
      backdrop: 'rgba(0,0,0,0.7)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sf-pro-text': ['var(--font-sf-pro-text)'],
      },
      boxShadow: {
        'elevation-10':
          '0px 0px 0px 0.5px rgba(151, 151, 151, 0.30), 0px 2px 3px 0px rgba(0, 0, 0, 0.03);',
      },
      fontSize: {
        xs: [
          '0.812rem', // 13px
          {
            lineHeight: '1rem', // 16px
          },
        ],
        sm: [
          '0.937rem', // 15px
          {
            lineHeight: '1.312rem', // 21px
          },
        ],
        xl: [
          '1.25rem', // 20px
          {
            lineHeight: '1.5rem', // 24px
          },
        ],
        '2xl': [
          '1.375rem', // 22px
          {
            lineHeight: '1.75rem', // 28px
          },
        ],
        '3xl': [
          '1.75rem', // 28px
          {
            lineHeight: '2.25rem', // 36px
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
