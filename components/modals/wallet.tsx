import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useAtom } from "jotai";
import { walletOpenAtoms } from "../jotai/atom";
import Image from "next/image";

export default function WalletModal() {
  const [isOpen, setOpen] = useAtom(walletOpenAtoms);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                <p className="text-gray-900 font-bold text-[20px]">Connect a Wallet</p>
                <p className="text-gray-600 text-[16px] font-light">Choose which card you want to connect</p>
              </ModalHeader>
              <ModalBody className="mt-6">
                <div className="flex flex-col gap-8">
                  <p className="text-[16px] font-bold text-gray-500">POPULAR</p>
                  <Button variant="solid" className="flex bg-white shadow-md flex-row gap-3 text-black font-bold text-[16px] py-6">
                    <Image width={26} height={26} src="/icons/metamask.svg" alt="" />
                    CONNECT WITH METAMASK
                  </Button>
                  <Button variant="solid" className="flex bg-white shadow-md flex-row gap-3 text-black font-bold text-[16px] py-6">
                    <Image width={26} height={26} src="/icons/coinbase.svg" alt="" />
                    CONNECT WITH COINBASE
                  </Button>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="text-[16px] font-bold text-gray-500">OTHER</p>
                  <Button variant="solid" className="flex bg-white shadow-md flex-row gap-3 text-black font-bold text-[16px] py-6">
                    <Image width={26} height={26} src="/icons/trust-wallet.svg" alt="" />
                    Connect with trusted wallet
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="bordered">
                  Learn More
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}