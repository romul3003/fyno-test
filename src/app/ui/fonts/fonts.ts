import localFont from 'next/font/local'

export const SFProText = localFont({
  src: [
    {
      path: './SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SFProText-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sf-pro-text',
})
