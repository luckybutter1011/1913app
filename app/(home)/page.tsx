// Home.tsx
'use client'
import React from "react";
import CookieModal from "@/components/modals/cookie";
import { visibleAtom } from "@/components/jotai/atom";
import { useAtom } from "jotai";
import ChangeNetWorkComponent from "@/components/UI/ChangeNetwork";
import { Button } from "@nextui-org/react";
import BuyTokenCard from "@/components/cards/buyToken";
import dynamic from 'next/dynamic';

const MoonPayBuyWidget = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayBuyWidget),
  { ssr: false },
);

export default function Home() {
  // For MoonPay
  const [visible, setVisible] = useAtom(visibleAtom);

  return (
    <main className="w-full flex bg-background justify-center min-h-[800px] bg-bk-img">
      <div className="flex flex-col mt-[1rem] lg:mt-[5rem] transition-all delay-500 w-full mx-[3rem] xl:mx-[8rem]">
        <div className="w-full justify-center items-center py-1 flex sm:hidden gap-2 mb-1">
          <ChangeNetWorkComponent />
          <Button variant="bordered" className="border-white bg-black text-white px-6 active:scale-90 text-[12px] sm:text-[14px]" onClick={() => setVisible(!visible)} > MoonPay </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center">
          <div className="text-black text-[16px] sm:text-[20px] lg:text-[24px] bg-[rgba(255,255,255,0.9)] rounded-lg px-4 flex items-center flex-col">
            <p className="text-[16px] underline">Guaranteed floor price of 1913$ is:</p>
            <span className="text-[16px] sm:text-[20px] lg:text-[24px] text-black">$31.55</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-20 my-6  gap-6 w-full">
          <div className="gap-8 flex flex-col animate-fade-right animate-once animate-ease-out justify-start items-center sm:w-[400px]">
            <div className="bg-[rgba(255,255,255,0.9)] py-6 lg:py-10 px-8 rounded-xl sm:h-[500px] flex-col items-center">
              <div className="flex flex-col gap-6 lg:gap-16">
                <p className="text-gray-800 drop-shadow-lg underline text-[28px] sm:text-[48px] leading-none font-bold">The 1913$ is a new Stable coin</p>
                <p className="text-gray-600 drop-shadow text-[16px] xl:text-[20px]">The 1913$ is a new Stable coin that is inflation resistant. It goes up in value based on the CPI data for inflation.</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 items-center mt-6">
                <div className="flex -space-x-2 overflow-hidden mt-2">
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 drop-shadow-lg font-bold"> 3k+</p>
                  <p className="text-gray-700 drop-shadow-lg font-bold text-[14px] xl:text-[16px]">
                    <a href="https://twitter.com/RealAssetDAO" target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
                      Community members
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-left animate-ease-in-out">
            <BuyTokenCard />
          </div>
        </div>
        <MoonPayBuyWidget
          variant="overlay"
          baseCurrencyCode="usd"
          baseCurrencyAmount="100"
          defaultCurrencyCode="eth"
          visible={visible}
        />
        <CookieModal />
      </div>
    </main>
  );
}
