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
        className={`pointer-events-auto z-50 fixed top-8 flex items-center justify-around space-x-4 p-3 rounded-full bg-gray-500 
                      w-3xs opacity-50 scale-90 shadow-[0_0_20px_rgba(186,85,211,1)] 
                      hover:opacity-100 hover:scale-100 hover:bg-gray-100 hover:w-md
                      transition-all duration-500 ease-in-out
                      ${visible ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}`}
        aria-label="[translate:Barra de navegación de iconos sociales]"
      >
        {headerItems.map(({ icon: Icon, link }: HeaderItem, index: number) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link a ${link}`}
          >
            <Icon
              className="w-8 h-8 transition-transform duration-300 
                         hover:scale-110 hover:-translate-y-2 
                         hover:drop-shadow-[0_0_7px_purple] cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
