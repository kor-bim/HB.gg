import { ReactNode } from 'react'
import { GnbMenu } from '@/app/(main)/_component/gnb-menu'

export default function MainLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <GnbMenu />
      <div className="overflow-x-hidden overflow-y-auto">{children}</div>
    </>
  )
}
