import { useEffect, useState, useRef } from "react";
import type { JSX } from "react";
import { headerItems } from "../../data/encabezado/encabezado";
import type { HeaderItem } from "../../interfaces/encabezado/Encabezado";

const Header = (): JSX.Element => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      if (timeoutId.current) clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => setVisible(false), 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center pointer-events-none">
      <div
        className={`pointer-events-auto z-50 fixed top-6 md:top-8 flex items-center justify-around space-x-2 md:space-x-4 p-2 md:p-3 rounded-full bg-gray-600/50 backdrop-blur-md 
                      w-[70%] max-w-xs md:w-3xs opacity-90 scale-95 shadow-[0_0_20px_rgba(186,85,211,0.5)] 
                      hover:opacity-100 hover:scale-100 hover:bg-gray-700/80 hover:w-[90%] md:hover:w-md
                      transition-all duration-500 ease-in-out
                      ${visible ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}`}
        aria-label="[translate:Barra de navegación de iconos sociales]"
      >
        {headerItems.map(({ icon: Icon, link }: HeaderItem, index: number) => {
          const isExternal = link?.startsWith("http");
          return (
            <a
              key={index}
              href={link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`Link a ${link}`}
            >
            <Icon
              className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 
                         hover:scale-110 hover:-translate-y-1 
                         hover:drop-shadow-[0_0_7px_purple] cursor-pointer"
            />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
