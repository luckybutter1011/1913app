'use client'
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";
import WalletModal from "@/components/modals/wallet";
import CookieModal from "@/components/modals/cookie";
import { tokenBuyAtoms } from "@/components/jotai/atom";
import { useAtom } from "jotai";
import {Input, Button, Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from "next/image";
import BuyTokenCard from "@/components/cards/buyToken";
import RewardsCard from "@/components/cards/rewardsCard";

export default function Home() {
  const [isTokenBuy, setTokenBuy] = useAtom(tokenBuyAtoms);
  return (
    <main className="w-full flex bg-background justify-center min-h-[800px]">
      <div className="flex flex-col  w-[1200px]">
        <div className="flex items-center justify-center">
          <p className="text-gray-200 text-[28px] mt-4">
            $1913 Token: <span className="px-4 text-[36px] text-gray-400">$0.0412</span>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
        { isTokenBuy ?
            <>
              <div className="mt-20">
                <BuyTokenCard />
              </div>
              {/* <RewardsCard /> */}
            </>
          :
          <>
            <div className="w-1/2 gap-6 flex flex-col mx-[20px] animate-fade-right animate-once animate-ease-out">
              <p className="text-gray-200 text-[48px] leading-none font-bold">The 1913$ is a new Stable coin</p>
              <p className="text-gray-400 text-[20px]">The 1913$ is a new Stable coin that is inflation resistant. It goes up in value based on the CPI data for inflation.</p>
              <a href="https://1913dollar.com" className="mx-6 bg-gradient-to-r from-cyan-500 to-blue-500 font-bold hover:ring-2 hover:ring-gray-200 active:scale-95 text-gray-200 rounded-full py-3 w-[180px] text-[16px]">
                <span className="flex flex-row gap-4 items-center justify-center">
                  Open dAPP
                  <GoArrowUpRight />
                </span>
              </a>
              <div className="flex flex-row gap-6 items-center mt-6">
                <div className="flex -space-x-2 overflow-hidden mt-2">
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-200 text-[28px] font-bold"> 3k+</p>
                  <p className="text-gray-200 text-[16px]"> Community members</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 animate-fade-left animate-ease-in-out">
              <Image className="" src="/1dollar.png" alt="" width={800} height={800}></Image>
            </div>
          </>
        }
        </div>
        <WalletModal />
        <CookieModal />
      </div>
    </main>
  );
}
