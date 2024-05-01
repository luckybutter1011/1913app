import { Input, Button, Card, CardHeader, CardBody, Tabs, Tab } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useAtom } from "jotai";
import { useState } from "react";

export default function BuyTokenCard() {
  const [token, setToken] = useState("ETH");
  const [img_token, setImageToken] = useState('/icons/ether.png');
  const [selected, setSelected] = useState<any>("Buy");
  return (
    <>
      <Card className="animate-fade-right animate-once animate-ease-out sm:w-[400px]">
        <CardHeader className="px-4 flex-col items-center bg-white">
          <div className="w-full flex justify-center items-center">
            <Tabs variant="underlined" size="lg" fullWidth selectedKey={selected} onSelectionChange={setSelected}>
              <Tab key="Buy" title="Buy" className="text-[24px]" />
              <Tab key="Sell" title="Sell" className="text-[24px]" />
            </Tabs>
          </div>
          {/* <p className="uppercase font-bold text-[20px] text-gray-700">BUY 1913$ TOKEN</p> */}
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          {selected === "Buy" ?
            <p className="text-default-500 text-[16px] px-4 py-2">Use 0x-xxxxxxxxxxxxxxxxxxxxxxxxxxxx to add 1913$ to your wallet.</p>
            :
            <p className="text-default-500 text-[16px] px-4 py-2">Sell the 1913$ to get the cryptocurrency.</p>
          }
          <div className="w-full gap-6 p-4 flex flex-row">
            <div className="w-1/2 flex flex-col gap-3">
              <Button variant="bordered" className={`${token === "ETH" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("ETH"); setImageToken('/icons/ether.png'); }}>
                <Image alt="" src='/icons/ether.png' width={25} height={25} />
                ETH
              </Button>
              <Button variant="bordered" className={`${token === "DAI" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("DAI"); setImageToken('/icons/dai.png'); }}>
                <Image alt="" src='/icons/dai.png' width={25} height={25} />
                DAI
              </Button>
              {selected === "Buy" ?
                <>
                  <p className="px-2 py-2 text-gray-400 flex flex-row">
                    <span>Amount in <strong>{token}</strong> you pay</span>
                    <button className="font-bold text-black">Max</button>
                  </p>
                  <Input
                    type="number"
                    placeholder="0"
                    labelPlacement="outside"
                    endContent={
                      <Image className="pointer-events-none flex-shrink-0" alt="" src={img_token} width={25} height={25} />
                    }
                  />
                </>
                :
                <>
                  <p className="px-2 py-2 text-gray-400 flex flex-row">
                    <span>Amount in <strong>1913$</strong> you pay</span>
                    <button className="font-bold text-black">Max</button>
                  </p>
                  <Input
                    type="number"
                    placeholder="0"
                    labelPlacement="outside"
                    endContent={
                      <Image className="pointer-events-none flex-shrink-0" alt="" src="/logo.png" width={25} height={25} />
                    }
                  />
                </>
              }
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <Button variant="bordered" className={`${token === "USDT" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("USDT"); setImageToken('/icons/usdt.png'); }}>
                <Image alt="" src='/icons/usdt.png' width={25} height={25} />
                USDT
              </Button>
              <Button variant="bordered" className={`${token === "USDC" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("USDC"); setImageToken('/icons/usdc.png'); }}>
                <Image alt="" src='/icons/usdc.png' width={25} height={25} />
                USDC
              </Button>
              {selected === "Buy" ?
                <>
                  <p className="px-2 py-2 text-gray-400">
                    Amount in <strong>1913$</strong> you recieve
                  </p>
                  <Input
                    type="number"
                    placeholder="0"
                    labelPlacement="outside"
                    endContent={
                      <Image className="pointer-events-none flex-shrink-0" alt="" src="/logo.png" width={25} height={25} />
                    }
                  />
                </>
                :
                <>
                  <p className="px-2 py-2 text-gray-400 flex flex-row">
                    <span>Amount in <strong>{token}</strong> you will get</span>
                  </p>
                  <Input
                    type="number"
                    placeholder="0"
                    labelPlacement="outside"
                    endContent={
                      <Image className="pointer-events-none flex-shrink-0" alt="" src={img_token} width={25} height={25} />
                    }
                  />
                </>
              }
            </div>
          </div>
          {/* <div className="flex justify-center p-2">
            <ConnectWallet />
          </div> */}
          {/* <Button variant="solid" className="uppercase bg-gray-700 my-4 mx-4 text-white text-[16px]" onPress={()=>setOpen(true)}>Connect Wallet</Button> */}
          <div className="flex w-full flex-col items-center gap-4 py-4">
            <a href="#" className="uppercase text-gray-700 underline text-[12px]">WANT TO CLAIM YOUR 1913$? CLICK HERE</a>
            <p className="text-gray-600 text-[12px]">Powered by <strong>1913$.com</strong></p>
          </div>
        </CardBody>
      </Card>
    </>
  )
}