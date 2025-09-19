import { useEffect, useState } from "react";
import type { JSX } from "react";
import { headerItems } from "../../data/encabezado/encabezado";
import type { HeaderItem } from "../../interfaces/encabezado/Encabezado";

const Header = (): JSX.Element => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setVisible(true);
      }

      setLastScrollY(window.scrollY);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setVisible(false), 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`z-50 fixed top-8 flex items-center justify-around space-x-4 p-3 rounded-full bg-gray-500 
                    w-3xs opacity-50 scale-90 shadow-[0_0_20px_rgba(186,85,211,1)] 
                    hover:opacity-100 hover:scale-100 hover:bg-gray-100 hover:w-md
                    transition-all duration-500 ease-in-out
                    ${visible ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}`}
      >
        {headerItems.map(({ icon: Icon }: HeaderItem, index: number) => (
          <Icon
            key={index}
            className="w-8 h-8 transition-transform duration-300 
                       hover:scale-110 hover:-translate-y-2 
                       hover:drop-shadow-[0_0_7px_purple] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
