import ParticlesBackground from "../particulas/particulas";

const SobreMi = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 flex justify-center h-full">
        <h1 className="text-white text-5xl font-bold mt-25 [text-shadow:4px_4px_7px_rgba(207,207,207,0.3)]">Conóceme un poco</h1>
      </div>
    </section>
  );
};

export default SobreMi;