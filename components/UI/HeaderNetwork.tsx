const HeaderNetWorkComponent: React.FC<{ chain: any }> = ({ chain }) => {
  return (
    <div className="flex flex-row gap-2 p-2">
      <img src={chain?.ImageUrl} className="w-5 h-5"/>
      <span className="text-[14px]">{chain?.chainName}</span>
    </div>
  );
}

export default HeaderNetWorkComponent;