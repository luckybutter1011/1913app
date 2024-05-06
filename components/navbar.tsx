// Navbar.tsx
'use client'
import Image from "next/image"
import { useAtom } from "jotai"
import { visibleAtom } from "./jotai/atom"
import { ConnectWallet } from "./wallet/connectWallet"
import ChangeNetWorkComponent from "./UI/ChangeNetwork"
import { Button } from "@nextui-org/react"

export default function Navbar() {
  const [visible, setVisible] = useAtom(visibleAtom);

  return (
    <>
      <div className="w-full flex flex-row p-3 bg-background">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <a href="https://1913dollar.com" className="text-gray-200 text-[30px] font-bold flex flex-row items-center gap-4 font-mono active:scale-95 lg:w-[450px]">
            <Image alt="" src="/logo.png" height={40} width={40} className="w-[40px] h-[40px]" />
            <span className="lg:text-[36px] text-[20px]">1913$</span>
          </a>
          <div className="hidden lg:flex items-center justify-center">
            <div className="text-black text-[16px] sm:text-[20px] lg:text-[24px] bg-[rgba(255,255,255,0.9)] rounded-lg px-2 flex items-center flex-col sm:flex-col">
              <p className="text-[14px] md:text-[16px] text-center xl:text-[18px] underline">Guaranteed floor price of 1913$ is:</p>
              <span className="text-[16px] sm:text-[20px] lg:text-[24px] text-black font-bold">$31.55</span>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-2 items-center w-[450px]">
            <div className="hidden sm:flex">
              <ChangeNetWorkComponent />
            </div>
            <Button variant="bordered" className="text-[14px] lg:text-[16px] xl:text-[20px] border-white bg-black border-1 sm:border-2 sm:flex order-white text-white px-2 hidden  active:scale-90 hover:bg-gray-400" onClick={() => setVisible(!visible)} > MoonPay </Button>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </>
  )
}