import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Badge } from '@nextui-org/badge'
import { Link } from '@nextui-org/link'
import { Search } from '@/app/_component/search'

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center min-h-[756px] py-[96px] px-[16px] bg-cover bg-top bg-hero-pattern gap-12">
        <Search />
        <Button size="lg" color="danger">
          Premium++ 기능 사용하기
        </Button>
        <div className="flex items-center justify-center gap-12">
          <span className="font-bold text-xl">1B+ 분석된 매치</span>
          <span className="font-bold text-xl">풀최적화 오버레이</span>
        </div>
      </div>
      <div className="max-w-screen-2xl flex flex-col gap-8 px-4 sm:px-20 mx-auto items-center justify-center p-5">
        <div className="w-full max-w-[73.5rem] flex flex-col sm:flex-row items-center justify-center gap-8 py-8">
          <Card className="p-3">
            <CardHeader className="flex flex-col items-start gap-1">
              <span>통계</span>
              <span className="text-[#999CA3] text-sm">
                포괄적인 챔피언 개요를 통해 리그 오브 레전드 게임플레이를 최적화하세요. 챔피언 통계, 가이드, 빌드 등을
                알아보세요
              </span>
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter>
              <Button fullWidth size="lg">
                통계 보기
              </Button>
            </CardFooter>
          </Card>
          <Card className="p-3">
            <CardHeader className="flex flex-col items-start gap-1">
              <span>프로 빌드</span>
              <span className="text-[#999CA3] text-sm">
                HB.gg와 함께 LoL 메타에서 앞서나가세요. 프로 플레이어 빌드의 과거 데이터를 탐색하고 승리하기 위한 전략을
                따라해보세요!
              </span>
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter>
              <Button fullWidth size="lg">
                빌드 보기
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full max-w-[73.5rem] flex flex-col sm:flex-row items-center justify-center gap-3">
          <Card isHoverable isPressable className="h-[500px]">
            <Image
              removeWrapper
              aria-label="Card background"
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://blitz-cdn.blitz.gg/blitz/lol/champion_centered/Smolder.webp"
            />
            <CardFooter className="absolute bottom-0 flex-col !items-start gap-3">
              <div className="w-full flex items-center justify-center gap-2">
                <Badge content="P" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/passive/Icons_Smolder_Passive.webp" alt="용 훈련" />
                </Badge>
                <Badge content="Q" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/SmolderQ.webp" alt="초강력 화염 숨결" />
                </Badge>
                <Badge content="W" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/SmolderW.webp" alt="에취!" />
                </Badge>
                <Badge content="E" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/SmolderE.webp" alt="펄럭펄럭" />
                </Badge>
                <Badge content="R" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/SmolderR.webp" alt="엄마아아아!" />
                </Badge>
              </div>
              <div className="w-full flex items-center justify-start gap-3">
                <span className="font-bold text-2xl">스몰더</span>
                <Chip color="success" variant="flat">
                  New
                </Chip>
              </div>
              <span className="font-medium">새로운 챔피언을 확인해보세요.</span>
            </CardFooter>
          </Card>
          <Card isHoverable isPressable className="h-[500px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://blitz-cdn.blitz.gg/blitz/lol/champion_centered/Hwei.webp"
            />
            <CardFooter className="absolute bottom-0 flex-col !items-start gap-3">
              <div className="w-full flex items-center justify-center gap-2">
                <Badge content="P" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/passive/HweiPassive.webp" alt="몽상가의 서명" />
                </Badge>
                <Badge content="Q" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/HweiQ.webp" alt="주제: 참사" />
                </Badge>
                <Badge content="W" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/HweiW.webp" alt="주제: 평온" />
                </Badge>
                <Badge content="E" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/HweiE.webp" alt="주제: 고통" />
                </Badge>
                <Badge content="R" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/HweiR.webp" alt="절망의 소용돌이" />
                </Badge>
              </div>
              <div className="w-full flex items-center justify-start gap-3">
                <span className="font-bold text-2xl">화웨이</span>
                <Chip color="success" variant="flat">
                  New
                </Chip>
              </div>
              <span className="font-medium">새로운 챔피언을 확인해보세요.</span>
            </CardFooter>
          </Card>
          <Card isHoverable isPressable className="h-[500px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://blitz-cdn.blitz.gg/blitz/lol/champion_centered/Briar.webp"
            />
            <CardFooter className="absolute bottom-0 flex-col !items-start gap-3">
              <div className="w-full flex items-center justify-center gap-2">
                <Badge content="P" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/passive/BriarP.webp" alt="몽상가의 서명" />
                </Badge>
                <Badge content="Q" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/BriarQ.webp" alt="주제: 참사" />
                </Badge>
                <Badge content="W" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/BriarW.webp" alt="주제: 평온" />
                </Badge>
                <Badge content="E" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/BriarE.webp" alt="주제: 고통" />
                </Badge>
                <Badge content="R" shape="circle" placement="bottom-right">
                  <Image src="https://blitz-cdn.blitz.gg/blitz/lol/spell/BriarR.webp" alt="절망의 소용돌이" />
                </Badge>
              </div>
              <div className="w-full flex items-center justify-start gap-3">
                <span className="font-bold text-2xl">브라이어</span>
                <Chip color="success" variant="flat">
                  New
                </Chip>
              </div>
              <span className="font-medium">새로운 챔피언을 확인해보세요.</span>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full flex flex-col gap-8 mx-auto items-center justify-center">
          <div className="w-full max-w-[73.5rem] flex flex-col sm:flex-row items-center justify-center gap-8 py-8">
            <Card fullWidth className="p-3 flex-1">
              <CardHeader className="flex flex-col items-start gap-1">
                <span className="font-extrabold">HB.gg 공지사항</span>
                <span className="text-[#999CA3] text-sm">HB.gg 제공하는 공지와 최신 패치노트를 확인하세요</span>
              </CardHeader>
              <CardBody className="gap-3">
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">HB.gg 오픈기념 프로구독 이벤트!!</span>
                      <span className="text-[#00804d]">[53]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>3시간 전</span>
                      <span>운영자</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">[14.4 패치노트] 볼리베어는 사람을 찢어..</span>
                      <span className="text-[#00804d]">[24]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>4시간 전</span>
                      <span>운영자</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">OP.GG 커뮤니티 전체 공지사항</span>
                      <span className="text-[#00804d]">[2]</span>
                    </div>

                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>1시간 전</span>
                      <span>운영자</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">개인정보 처리방침 개정 안내 (3/12)</span>
                      <span className="text-[#00804d]">[17]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>3시간 전</span>
                      <span>운영자</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">이용 약관, 개인정보 처리방침 개정 안내 (3/12)</span>
                      <span className="text-[#00804d]">[31]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>2시간 전</span>
                      <span>운영자</span>
                    </div>
                  </div>
                </Link>
              </CardBody>
            </Card>
            <Card fullWidth className="p-3 flex-1">
              <CardHeader className="flex flex-col items-start gap-1">
                <span className="font-extrabold">커뮤니티</span>
                <span className="text-[#999CA3] text-sm">팁, 노하우 etc 유저들의 플레이스</span>
              </CardHeader>
              <CardBody className="gap-3">
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">LCK 최초 900전 기록한 선수</span>
                      <span className="text-[#00804d]">[31]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>19시간 전</span>
                      <span>예비브론즈입니다</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">요즘 정글러로 롤하면서 느끼는 고찰</span>
                      <span className="text-[#00804d]">[31]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>1시간 전</span>
                      <span>달빛조각사</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">점검 언제끝남?</span>
                      <span className="text-[#00804d]">[4]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>4시간 전</span>
                      <span>C28</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">롤 경력 5년차의 티어학개론</span>
                      <span className="text-[#00804d]">[762]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>2시간 전</span>
                      <span>모모귀신</span>
                    </div>
                  </div>
                </Link>
                <Link color="foreground">
                  <div className="w-full bg-content2 p-3 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-2">
                    <div className="w-full flex items-center justify-start gap-2">
                      <span className="text-xl font-bold">실시간 손흥민 인스타 게시물</span>
                      <span className="text-[#00804d]">[33]</span>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 text-sm text-gray-400">
                      <span>3일 전</span>
                      <span>버거형</span>
                    </div>
                  </div>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
