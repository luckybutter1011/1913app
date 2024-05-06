import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import HeaderNetWorkComponent from "./HeaderNetwork";
import { useEffect, useState } from "react";

const Chains = [
  { chainName: 'Ethereum', ImageUrl: '/icons/ethereum.png' },
  { chainName: 'Arbitrum One', ImageUrl: '/icons/arbitrumone.png' },
  { chainName: 'Polygon', ImageUrl: '/icons/polygon.svg' },
  { chainName: 'BNB Smart Chain', ImageUrl: '/icons/bnb.png' },
]

export default function ChangeNetWorkComponent() {
  const [chain, setChain] = useState<any>({ chainName: 'Polygon', ImageUrl: '/icons/polygon.svg' }); // Select Network

  // Get the network from local storage
  useEffect(()=>{
    localStorage.getItem('chain') && setChain(Chains.find((chain) => chain?.chainName === localStorage.getItem('chain')));
  },[])

  // Save the network to local storage
  const handleSetChain = (key: any) => {
    localStorage.setItem('chain', key);
    setChain(Chains.find((chain) => chain?.chainName === key))
  }

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="text-white px-2 active:scale-90 border-white bg-black text-[14px] lg:text-[16px] xl:text-[20px] hover:bg-gray-400"
          >
            <HeaderNetWorkComponent key={chain?.chainName} chain={chain} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key) => handleSetChain(key)}
        >
          {
            Chains.map((chain) => (
              <DropdownItem key={chain?.chainName}>
                <HeaderNetWorkComponent key={chain?.chainName} chain={chain} />
              </DropdownItem>
            ))
          }
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}