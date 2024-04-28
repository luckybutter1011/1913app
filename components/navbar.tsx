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
            <span className="lg:text-[36px] text-[20px]">1913$</span>
          </button>
          <div className="hidden sm:flex items-center justify-center">
            <p className="text-black text-[16px] sm:text-[20px] lg:text-[24px] bg-[rgba(255,255,255,0.9)] rounded-lg px-4 gap-2 flex items-center flex-col sm:flex-row">
              1913$ Price<span className="hidden sm:block">:</span>
              <span className="text-[16px] sm:text-[24px] lg:text-[36px] text-black">$31.35</span>
            </p>
          </div>
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