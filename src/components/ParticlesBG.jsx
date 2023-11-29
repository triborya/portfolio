import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBG() {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={{
          background: {
            color: "#000000",
          },
          particles: {
            number: {
              value: 100,
            },
            links: {
              distance: 150,
              enable: true,
            },
            move: {
              enable: true,
            },
            size: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
          },
        }}
      />
    </div>
  );
}
