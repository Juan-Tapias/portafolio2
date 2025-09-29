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
      <div className="flex justify-evenly flex items-center justify-items-center">
          <Slider imagenes={mockImagenes} />
          <div className="text-white w-[40vw] h-[22vw] flex flex-col items-center justify-center text-center bg-[#111827] rounded-xl">
              <p className="text-white ">
              <h2 className="text-3xl [text-shadow:4px_4px_5px_rgba(207,207,207,0.6)]">Sobre mi</h2>
              <br />
              Soy Juan Sebastian Martinez Tapias, Algunos me conocen por mi nombre, otros por mis proyectos.
              Trabajo con React, Java y Python, construyendo ideas que pasen de un boceto a un producto real.
              Cuando no estoy frente a la pantalla, probablemente estoy con una raqueta de ping pong en la mano.
            </p>
          </div>
      </div>
      <div className="flex items-center justify-evenly mx-auto w-6xl">
        <div className="text-white rounded-xl h-[32vh] w-[14vw] mt-5 flex flex-col items-center justify-center text-center 56 bg-[#100525] ">
          <h2 className="text-xl [text-shadow:4px_4px_8px_rgba(207,207,207,0.6)]">Aprendizajes</h2>
          <br />
             <p>
              Siempre pruebo, fallo y vuelvo a intentar. Así es como crezco.
            </p>
          </div>
        <div className="text-white rounded-xl h-[32vh] w-[14vw] mt-5 flex flex-col items-center justify-center text-center 56 bg-[#100525] ">
          <h2 className="text-xl [text-shadow:4px_4px_8px_rgba(207,207,207,0.6)]">Retos</h2>
          <br />
          Me gustan los proyectos que parecen imposibles, ahí aprendo más.</div>
        <div className="text-white rounded-xl h-[32vh] w-[14vw] mt-5 flex flex-col items-center justify-center text-center 56 bg-[#100525] ">
          <h2 className="text-xl [text-shadow:4px_4px_8px_rgba(207,207,207,0.6)]">Más allá del código</h2> 
          <br />
          Cuando no programo, juego ping pong o aprendo algo nuevo.
        </div>
      </div>
    <ParticlesBackground/>
    </section>
    </>
      
  );
};

export default SobreMi;