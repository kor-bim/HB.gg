'use client'

import { WebviewWindow } from '@tauri-apps/api/window'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

export const TitleBar = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>()

  async function setupAppWindow() {
    setAppWindow((await import('@tauri-apps/api/window')).appWindow)
  }

  useEffect(() => {
    setupAppWindow().then((r) => console.log(r))
  }, [])

  function windowMinimize() {
    appWindow?.minimize()
  }

  function windowToggleMaximize() {
    appWindow?.toggleMaximize()
  }

  function windowClose() {
    appWindow?.close()
  }

  return (
    <div className="w-full flex items-center justify-between overflow-hidden h-[100px] px-3 mt-2 pb-2 border-b-1 border-neutral-800">
      <div className="h-[30px] flex items-center justify-center gap-3">
        <Image src="/assets/logo-text.svg" alt="Logo" width={20} height={20} priority />
        <span>HB.GG</span>
      </div>
      <div data-tauri-drag-region="true" className="w-full h-[30px] flex items-center justify-end gap-2">
        <div className="titlebar-button" id="titlebar-minimize" onClick={windowMinimize}>
          <Icon
            icon="solar:minimize-square-outline"
            width={30}
            className="cursor-pointer text-neutral-500 hover:text-neutral-100"
          />
        </div>
        <div className="titlebar-button" id="titlebar-maximize" onClick={windowToggleMaximize}>
          <Icon
            icon="solar:maximize-square-outline"
            width={30}
            className="cursor-pointer text-neutral-500 hover:text-neutral-100"
          />
        </div>
        <div className="titlebar-button" id="titlebar-close" onClick={windowClose}>
          <Icon
            icon="solar:close-square-outline"
            width={30}
            className="cursor-pointer text-neutral-500 hover:text-neutral-100"
          />
        </div>
      </div>
    </div>
  )
}
