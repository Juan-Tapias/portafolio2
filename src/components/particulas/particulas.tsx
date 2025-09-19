import ParticlesBackground from "../particulas/particulas";

const SobreMi = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold">Conóceme un poco</h1>
      </div>
    </section>
  );
};

export default SobreMi;