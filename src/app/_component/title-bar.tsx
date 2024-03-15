'use client'

import { getCurrent, LogicalPosition } from '@tauri-apps/api/window'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

export const TitleBar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const minimizeWebview = async () => {
    await getCurrent().minimize()
  }
  const maximizeWebview = async () => {
    if (await getCurrent().isMaximized()) {
      await getCurrent().setPosition(new LogicalPosition(position.x, position.y))
    } else {
      const { x, y } = await getCurrent().innerPosition()
      await getCurrent().maximize()
      setPosition({ x, y })
    }
  }
  const closeWebview = async () => {
    await getCurrent().close()
  }

  return (
    <div
      data-tauri-drag-region="true"
      className="relative w-full h-[50px] min-h-[50px] flex items-center justify-between overflow-hidden px-3 border-b-1 border-neutral-800 select-none"
    >
      <div data-tauri-drag-region="true" className="flex items-center justify-center gap-3">
        <Image src="/assets/logo-text.svg" alt="Logo" width={100} height={35} priority />
      </div>
      <div data-tauri-drag-region="true" className="w-full flex items-center justify-end gap-2">
        <div className="titlebar-button" id="titlebar-minimize" onClick={minimizeWebview}>
          <Icon
            icon="solar:minimize-square-3-outline"
            width={30}
            className="cursor-pointer text-neutral-500 hover:text-neutral-100 object-cover"
          />
        </div>
        <div className="titlebar-button" id="titlebar-maximize" onClick={maximizeWebview}>
          <Icon icon="tabler:maximize" width={30} className="cursor-pointer text-neutral-500 hover:text-neutral-100" />
        </div>
        <div className="titlebar-button" id="titlebar-close" onClick={closeWebview}>
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
