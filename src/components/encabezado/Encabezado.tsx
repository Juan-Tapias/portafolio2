import type { JSX } from "react";
import { headerItems, type HeaderItem } from "../../data/encabezado/encabezado";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className="sticky flex items-center justify-around space-x-4 m-10 p-3 rounded-full bg-purple-500 
                      w-lg opacity-50 scale-90 transition-all duration-500 ease-in-out 
                      hover:opacity-100 hover:scale-100 hover:bg-purple-700">
        {headerItems.map(({ icon: Icon }: HeaderItem, index: number) => (
          <Icon
            key={index}
            className="w-8 h-8 transition-transform duration-300 
                       hover:scale-110 hover:-translate-y-2 
                       hover:drop-shadow-[0_0_7px_blue] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
