import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'

export const GnbMenu = () => {
  return (
    <Navbar className="select-none">
      <NavbarContent justify="start"></NavbarContent>
      <NavbarContent className="gap-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/public">
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
          <Button
            href={'/login'}
            as={Link}
            className="border-2 hover:border-[#C89B8C] border-[#785A28] font-bold text-lg"
            variant="bordered"
          >
            전투준비 완료!
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
