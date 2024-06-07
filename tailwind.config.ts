import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      colors: {
        neutral: {
          200: '#e5e5ea',
        },
      },
    },
  },
  plugins: [],
}
export default config
