'use client'
import Image from "next/image"
import { useAtom } from "jotai"
import { visibleAtom } from "./jotai/atom"
import { ConnectWallet } from "./wallet/connectWallet"
import { useState } from "react"

export default function Navbar() {
  const [visible, setVisible] = useAtom(visibleAtom);

  return (
    <>
      <div className="w-full flex flex-row p-3 bg-background">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <button className="text-gray-200 text-[30px] font-bold flex flex-row items-center gap-4 font-mono active:scale-95 lg:w-[300px]">
            <Image alt="" src="/logo.png" height={40} width={40} className="w-[40px] h-[40px]" />
            <span className="lg:text-[36px] text-[20px]">1913$</span>
          </button>
          <div className="hidden lg:flex items-center justify-center">
            <p className="text-black text-[16px] sm:text-[20px] lg:text-[24px] bg-[rgba(255,255,255,0.9)] rounded-lg px-4 flex items-center flex-col sm:flex-col">
              <p className="text-[16px] underline">Supported of 1913$ token Price is</p>
              <span className="text-[16px] sm:text-[20px] lg:text-[24px] text-black">$31.35</span>
            </p>
          </div>
          <div className="flex flex-row gap-6 items-center lg:w-[300px]">
            <button className="hidden sm:flex text-white px-6 active:scale-90" onClick={() => setVisible(!visible)} > MoonPay </button>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </>
  )
}