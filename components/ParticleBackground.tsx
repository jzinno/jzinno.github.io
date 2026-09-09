import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

async function initParticles(engine: Engine) {
  const { loadSlim } = await import("@tsparticles/slim");
  await loadSlim(engine);
}

const ParticleBackground = () => {
  return (
    <ParticlesProvider init={initParticles}>
    <Particles
      id="tsparticles"
      style={{ zIndex: -10 }}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          paint: {
            color: { value: "#ff5e62" },
          },
          links: {
            color: "#ff9966",
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 250,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    </ParticlesProvider>
  );
};

export default ParticleBackground;
