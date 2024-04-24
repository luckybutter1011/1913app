'use client'
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";
import WalletModal from "@/components/modals/wallet";
import CookieModal from "@/components/modals/cookie";
import { tokenBuyAtoms } from "@/components/jotai/atom";
import { useAtom } from "jotai";
import { Input, Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import BuyTokenCard from "@/components/cards/buyToken";
import RewardsCard from "@/components/cards/rewardsCard";

export default function Home() {
  const [isTokenBuy, setTokenBuy] = useAtom(tokenBuyAtoms);
  return (
    <main className="w-full flex bg-background justify-center min-h-[800px] bg-bk-img">
      <div className="flex flex-col w-[1400px]">
        <div className="flex items-center justify-center ">
          <p className="text-black text-[28px] mt-4 bg-[rgba(255,255,255,0.9)] rounded-lg px-4">
            $1913 Token: <span className="text-[36px] text-black">$0.0412</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-20">
          <div className="w-1/3 gap-6 flex flex-col mx-[20px] animate-fade-right animate-once animate-ease-out">
            <div className="bg-[rgba(255,255,255,0.9)] py-6 px-8 rounded-xl">
              <div className="flex flex-col gap-6">
                <p className="text-gray-800 drop-shadow-lg underline text-[48px] leading-none font-bold">The 1913$ is a new Stable coin</p>
                <p className="text-gray-600 drop-shadow text-[20px]">The 1913$ is a new Stable coin that is inflation resistant. It goes up in value based on the CPI data for inflation.</p>
              </div>
              <div className="flex flex-row gap-6 items-center mt-6">
                <div className="flex -space-x-2 overflow-hidden mt-2">
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 drop-shadow-lg font-bold"> 3k+</p>
                  <p className="text-gray-700 drop-shadow-lg font-bold text-[16px]"> Community members</p>
                </div>
              </div>
            </div>
            <a href="https://1913dollar.com" className="mx-6 border-white border-2 bg-black rounded-xl font-bold hover:ring-2 hover:ring-black active:scale-95 text-white py-3 w-[180px] text-[16px]">
              <span className="flex flex-row gap-4 items-center justify-center">
                Open dAPP
                <GoArrowUpRight />
              </span>
            </a>
          </div>
          <div className="animate-fade-left animate-ease-in-out">
            <BuyTokenCard />
            {/* <Image className="" src="/1dollar.png" alt="" width={800} height={800}></Image> */}
          </div>
        </div>
        <CookieModal />
      </div>
    </main>
  );
}
