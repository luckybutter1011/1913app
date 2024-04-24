import { Input, Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { walletOpenAtoms } from "../jotai/atom";
import { useAtom } from "jotai";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectWallet } from "../wallet/connectWallet";

export default function BuyTokenCard() {
  const [isOpen, setOpen] = useAtom(walletOpenAtoms);
  return (
    <>
      <Card className="animate-fade-right animate-once animate-ease-out w-[400px]">
        <CardHeader className="px-4 flex-col items-center bg-white border-b-1 border-gray-300">
          <p className="uppercase font-bold text-[20px] text-gray-700">BUY $1913 TOKEN</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className="text-default-500 text-[16px] px-4 py-2">Use 0x-xxxxxxxxxxxxxxxxxxxxxxxxxxxx to add $1913 to your wallet.</p>
          <div className="w-full gap-6 p-4 flex flex-row">
            <div className="w-1/2 flex flex-col gap-3">
              <Button variant="bordered" className="w-full gap-2">
                <Image alt="" src='/icons/bnb.png' width={25} height={25} />
                BNB
              </Button>
              <p className="px-2 py-2 text-gray-400 flex flex-row">
                <span>Amount in <strong>BNB</strong> you pay</span>
                <button className="font-bold text-black">Max</button>
              </p>
              <Input
                type="number"
                placeholder="0"
                labelPlacement="outside"
                endContent={
                  <Image className="pointer-events-none flex-shrink-0" alt="" src='/icons/bnb.png' width={25} height={25} />
                }
              />
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <Button variant="bordered" className="w-full gap-2">
                <Image alt="" src='/icons/usdt.png' width={25} height={25} />
                USDT
              </Button>
              <p className="px-2 py-2 text-gray-400">
                Amount in <strong>$1913</strong> you recieve
              </p>
              <Input
                type="number"
                placeholder="0"
                labelPlacement="outside"
                endContent={
                  <Image className="pointer-events-none flex-shrink-0" alt="" src='/icons/usdt.png' width={25} height={25} />
                }
              />
            </div>
          </div>
          {/* <div className="flex justify-center p-2">
            <ConnectWallet />
          </div> */}
          {/* <Button variant="solid" className="uppercase bg-gray-700 my-4 mx-4 text-white text-[16px]" onPress={()=>setOpen(true)}>Connect Wallet</Button> */}
          <div className="flex w-full flex-col items-center gap-4 py-4">
            <a href="#" className="uppercase text-gray-700 underline text-[12px]">WANT TO CLAIM YOUR $1913? CLICK HERE</a>
            <p className="text-gray-600 text-[12px]">Powered by <strong>$1913.com</strong></p>
          </div>
        </CardBody>
      </Card>
    </>
  )
}