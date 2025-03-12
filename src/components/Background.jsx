import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const Background = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent", // Прозрачный фон, чтобы не затирал основной
          },
          particles: {
            color: { value: ["#FFD700", "#E6A8D7"]},
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.3,
              random: true,
              animation: { enable: true, speed: 0.5 },
            },
            size: {
              value: 5,
              random: true,
            },
            number: {
              value: 20,
            },
          },
        }}
      />
    </div>
  );
};

export default Background;
