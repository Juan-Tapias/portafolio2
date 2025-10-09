import type { JSX } from "react";
import { ContactoData } from "../../data/contacto/ContactoData";


export const Contacto = (): JSX.Element => {
        return(
            <section>
                <h1 className="text-white text-5xl font-bold mt-10 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">Contacto</h1>
                <div className="flex flex-row flex-wrap gap-50 justify-center">
                    {ContactoData.map((item, index) =>{
                        const Icon = item.Icon
                        return (
                        <div key={index} className="text-white flex justify-center flex-col items-center mt-10">
                              <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-300 hover:scale-110 transition-transform hover:text-white"
                            >
                                <Icon className="text-5xl text-white transition-transform hover:scale-110"/>
                            </a>
                            <p>{item.title}</p>
                        </div>
                    )
                    })}
                </div>
            </section>
        );
}