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
      dark: 'rgba(136, 136, 136, 0.30)',
      neutral: {
        100: 'rgba(255, 255, 255, 0.50)',
        200: '#e5e5ea',
      },
      label: {
        secondary: 'rgba(60, 60, 67, 0.8)',
        tertiary: 'rgba(60, 60, 67, 0.5)',
      },
      black: '#000',
      white: '#fff',
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
        sm: [
          '0.937rem',
          {
            lineHeight: '1.312rem',
          },
        ],
        '3xl': [
          '1.75rem',
          {
            lineHeight: '2.25rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
