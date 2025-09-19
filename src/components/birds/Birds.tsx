import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const VantaBirds: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        BIRDS({
            el: vantaRef.current,
            THREE: THREE,
            backgroundColor: 0x0a0a0a, 
            color1: 0x6a0dad,           
            color2: 0x6a0dad,    
            wingSpan: 5.0,
            speedLimit: 5.0,
            separation: 50.0,
            quantity: 4.0
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
      </div>
    </div>
  );
};

export default VantaBirds;
