'use client'
import Image from "next/image"
import { ConnectWallet } from "./wallet/connectWallet"

export default function Navbar() {
  // const [isTokenBuy, setTokenBuy] = useAtom(tokenBuyAtoms);
  // const init = () => {
  //   setTokenBuy(false)
  // }

  return (
    <>
      <div className="w-full flex flex-row p-3 bg-background">
        <div className="flex flex-row items-center justify-between w-full px-4">
          <button className="text-gray-200 text-[30px] font-bold flex flex-row items-center gap-4 font-mono active:scale-95">
            <Image alt="" src="/logo.png" height={40} width={40} className="w-[40px] h-[40px]" />
            <span className="sm:text-[36px] text-[16px]">1913dollar</span>
          </button>
          <div className="flex flex-row gap-6 items-center">
            {/* <button className="text-[14px] px-4 py-3 rounded-full text-white sm:text-[16px] flex flex-row gap-6 active:scale-95 hover:bg-gray-500" onClick={()=>setTokenBuy(true)}>
              Buy Token
            </button> */}
            <ConnectWallet />
          </div>
        </div>
      </div>
    </>
  )
}