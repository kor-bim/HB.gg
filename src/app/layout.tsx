import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import { ReactNode } from 'react'
import { PretendardFont } from '@/app/fonts'
import { TitleBar } from '@/app/_components/title-bar'

export const metadata: Metadata = {
  title: {
    default: 'HB.GG: 최신 LoL 전략 분석으로 당신의 게임을 업그레이드하세요',
    template: `%s | HB.GG: 최신 LoL 전략 분석으로 당신의 게임을 업그레이드하세요`
  },
  description:
    'HB.GG와 함께라면 더 이상 게임에서 뒤처지지 않습니다. 실시간 데이터와 첨단 분석으로 당신의 리그 오브 레전드 경험을 한 단계 업그레이드하세요. 승리를 향한 여정을 지금 시작하세요.',
  keywords: [
    'HB.GG',
    'hb.gg',
    'HB.gg',
    'hb',
    'gg',
    'lol',
    'LOL',
    'LoL',
    'league of legends',
    'league of legend',
    '리그 오브 레전드',
    '롤',
    '전전',
    '롤 전적',
    '실시간 데이터',
    '게임'
  ],
  authors: [
    {
      name: 'Yoon Hanbin',
      url: 'https://github.com/kor-bim'
    }
  ],
  icons: {
    icon: '/meta/favicon-32x32.png',
    apple: '/meta/apple-icon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang={'ko'} dir={'ltr'}>
      <body className={`antialiased ${PretendardFont.variable} font-sans`}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <main id="hbgg-app">
            <div className="flex flex-col h-[100vh] ">
              <TitleBar />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
