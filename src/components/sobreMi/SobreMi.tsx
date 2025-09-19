// SobreMi.tsx
import ParticlesBackground from "../particulas/particulas";

const SobreMi = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        <ParticlesBackground />
        <h1 style={{
          color: 'white',
          fontSize: '2.25rem',
          fontWeight: 'bold'
        }}>Conóceme un poco</h1>
      </div>
    </section>
  );
};

export default SobreMi;