import ParticlesBackground from "../particulas/Particulas";
import Slider from '../slider/Slider'
import foto1 from '../../assets/gato1.jpg'
import foto2 from '../../assets/gato2.jpg'
import foto3 from '../../assets/gato3.jpg'
import foto4 from '../../assets/gato4.jpg'
const SobreMi = () => {
  const mockImagenes = [foto1, foto2, foto3, foto4];

  return (
    <>
    <section className="relative w-full h-screen">
      <h1 className="text-white text-5xl font-bold mb-8 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Conóceme un poco
      </h1>
      <div className="flex justify-evenly border-1">
          <Slider imagenes={mockImagenes} />
            <p className="text-white border-1 w-[30vw] mr-16.5 h-lg">
              Soy Juan Sebastian Martinez Tapias, Algunos me conocen por mi nombre, otros por mis proyectos.
              Trabajo con React, Java y Python, construyendo ideas que pasen de un boceto a un producto real.
              Cuando no estoy frente a la pantalla, probablemente estoy con una raqueta de ping pong en la mano.
            </p>
      </div>
      <div className="flex items-center justify-evenly border mx-auto w-6xl">
        <div className="text-white border h-[32vh] w-[14vw] mt-5">Aprendizajes <br />
Siempre estoy probando, fallando y volviendo a intentar. Así es como crezco.</div>
        <div className="text-white border h-[32vh] w-[14vw] mt-5">Retos <br />
Me gustan los proyectos que parecen imposibles al inicio, ahí es donde más aprendo.</div>
        <div className="text-white border h-[32vh] w-[14vw] mt-5">Más allá del código <br />
Cuando no estoy programando, probablemente estoy jugando ping pong o buscando algo nuevo que aprender.</div>
      </div>
    <ParticlesBackground/>
    </section>
    </>
      
  );
};

export default SobreMi;