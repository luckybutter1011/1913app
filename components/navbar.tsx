'use client'
import Image from "next/image"
import { GoBrowser } from "react-icons/go";
import { Button } from "@nextui-org/react";
import { walletOpenAtoms, tokenBuyAtoms } from "./jotai/atom";
import { useAtom } from "jotai";

export default function Navbar() {
  const [isOpen, setOpen] = useAtom(walletOpenAtoms);
  const [isTokenBuy, setTokenBuy] = useAtom(tokenBuyAtoms);
  const init = () => {
    setTokenBuy(false)
    setOpen(false);
  }

  return (
    <>
      <div className="w-full flex flex-row min-h-[100px] bg-background justify-center">
        <div className="w-[1200px] flex flex-row items-center justify-between">
          <button className="text-gray-200 text-[30px] font-bold flex flex-row items-center gap-4 font-mono active:scale-95" onClick={init}>
            <Image alt="" src="/logo.png" height={40} width={40} className="w-[40px] h-[40px]" />
            1913dollar
          </button>
          <div className="flex flex-row gap-6 items-center">
            <button className="px-4 py-3 rounded-full text-white text-[16px] flex flex-row gap-6 active:scale-95 hover:bg-gray-500" onClick={()=>setTokenBuy(true)}>
              Buy Token
            </button>
            <Button onPress={()=>setOpen(true)} className="active:scale-95 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-5 px-4 rounded-full flex flex-row gap-2 items-center"><GoBrowser /> Connect Wallet</Button>
          </div>
        </div>
      </div>
    </>
  )
}