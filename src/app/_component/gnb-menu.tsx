import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'

export const GnbMenu = () => {
  return (
    <Navbar className="select-none">
      <NavbarContent justify="start"></NavbarContent>
      <NavbarContent className="gap-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            홈
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={'/champion'}>
            챔피언
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={'/tier'}>
            티어 리스트
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={'/overlay'}>
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
