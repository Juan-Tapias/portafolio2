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
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-8 text-center [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">
        Conóceme un poco
      </h1>
      <Slider imagenes={mockImagenes} />
    <ParticlesBackground/>
    </section>
    </>
      
  );
};

export default SobreMi;