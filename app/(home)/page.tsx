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
      <div className="flex flex-col mx-8 mt-[5rem]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-20 my-6 mx-[20px] gap-6">
          <div className="lg:w-1/3 gap-8 flex flex-col animate-fade-right animate-once animate-ease-out">
            <div className="bg-[rgba(255,255,255,0.9)] py-6 lg:py-16 px-8 rounded-xl">
              <div className="flex flex-col gap-6 lg:gap-16">
                <p className="text-gray-800 drop-shadow-lg underline text-[32px] xl:text-[48px] leading-none font-bold">The 1913$ is a new Stable coin</p>
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
                    <a href="https://twitter.com/1913$" target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
                      Community members
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
