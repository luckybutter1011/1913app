import { Input, Button, Card, CardHeader, CardBody, Tabs, Tab } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from "react";

export default function BuyTokenCard() {
  const [token, setToken] = useState("ETH"); // Select Tokens
  const [img_token, setImageToken] = useState('/icons/ether.png'); // Select Tokens
  const [selected, setSelected] = useState<any>("Buy"); // Sell or Buy option

  return (
    <>
      <Card className="animate-fade-right animate-once animate-ease-out sm:w-[400px] sm:h-[500px]">
        <CardHeader className="px-4 flex-col items-center bg-white">
          <div className="w-full flex justify-center items-center">
            <Tabs variant="underlined" size="lg" fullWidth selectedKey={selected} onSelectionChange={setSelected}>
              <Tab key="Buy" title="Buy" className="text-[24px]" />
              <Tab key="Sell" title="Sell" className="text-[24px]" />
            </Tabs>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible">
          <p className="text-default-500 text-[16px] px-4">Use 0x-xxxxxxxxxxxxxxxxxxxxxxxxxxxx to add 1913$ to your wallet.</p>
          <div className="w-full p-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant="bordered" className={`${token === "ETH" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("ETH"); setImageToken('/icons/ether.png'); }}>
                <Image alt="" src='/icons/ether.png' width={25} height={25} />
                ETH
              </Button>
              <Button variant="bordered" className={`${token === "DAI" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("DAI"); setImageToken('/icons/dai.png'); }}>
                <Image alt="" src='/icons/dai.png' width={25} height={25} />
                DAI
              </Button>
              <Button variant="bordered" className={`${token === "USDT" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("USDT"); setImageToken('/icons/usdt.png'); }}>
                <Image alt="" src='/icons/usdt.png' width={25} height={25} />
                USDT
              </Button>
              <Button variant="bordered" className={`${token === "USDC" ? "bg-slate-400" : ""} w-full gap-2`} onClick={() => { setToken("USDC"); setImageToken('/icons/usdc.png'); }}>
                <Image alt="" src='/icons/usdc.png' width={25} height={25} />
                USDC
              </Button>
            </div>
            <div className="flex flex-row gap-6 py-2">
              <p className="px-2 py-2 text-gray-400 flex flex-row">
                {selected === "Buy" ?
                  <span>Amount in <strong>{token}</strong> you pay.</span>
                  :
                  <span>Amount in <strong>1913$</strong> you sell</span>
                }
                <button className="font-bold text-black">Max</button>
              </p>
              <p className="px-2 py-2 text-gray-400">
                {selected === "Sell" ?
                  <span>Amount in <strong>{token}</strong> you receive.</span>
                  :
                  <span>Amount in <strong>1913$</strong> you receive.</span>
                }
              </p>
            </div>
            <div className="flex flex-row gap-2 py-2">
              <Input
                type="number"
                placeholder="0"
                labelPlacement="outside"
                endContent={
                  selected === "Sell" ?
                    <Image className="pointer-events-none flex-shrink-0" alt="" src="/logo.png" width={25} height={25} />
                    :
                    <Image className="pointer-events-none flex-shrink-0" alt="" src={img_token} width={25} height={25} />
                }
              />
              <IoArrowForwardOutline size={40} className="text-black" />
              <Input
                type="number"
                placeholder="0"
                labelPlacement="outside"
                endContent={
                  selected === "Buy" ?
                    <Image className="pointer-events-none flex-shrink-0" alt="" src="/logo.png" width={25} height={25} />
                    :
                    <Image className="pointer-events-none flex-shrink-0" alt="" src={img_token} width={25} height={25} />
                }
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 py-4">
            <a href="#" className="uppercase text-gray-700 underline text-[12px]">WANT TO CLAIM YOUR 1913$? CLICK HERE</a>
            <p className="text-gray-600 text-[12px]">Powered by <strong>Realassetdao.com</strong></p>
          </div>
        </CardBody>
      </Card>
    </>
  )
}