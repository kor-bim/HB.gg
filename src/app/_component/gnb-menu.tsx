import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import Image from 'next/image'
import { Button } from '@nextui-org/button'

export const GnbMenu = () => {
  return (
    <Navbar className="bg-transparent backdrop-filter-none" classNames={{ wrapper: 'w-full max-w-full' }}>
      <NavbarContent justify="start">
        <NavbarBrand className="flex gap-2">
          <Image src="/assets/logo-text.svg" alt="Logo" width={20} height={20} priority />
          <span>HB.GG</span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex px-8 h-12 rounded-full bg-content1 gap-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            홈
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            챔피언
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            티어 리스트
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            오버레이
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button>로그인</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
