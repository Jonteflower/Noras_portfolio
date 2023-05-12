import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Stars({ setLoaded }) {

  const particlesInit = async (main) => {
    //console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

    await loadFull(main);
    setLoaded(true)
  };

  const particlesLoaded = (container) => {
    //console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        autoPlay: true,
        background: {
          color: '#08080e',

        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true
          },
        },
        particles: {
          color: {
            value: "f1f1f1"
            //value: ['#f1f1f1','#8F2E36', '']
          },
          number: {
            density: {
              enable: true,
              area: 1080
            },
            limit: 0,
            value: 150,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.5,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 1,
          },
          shape: {
            type: 'circle',

          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5
            },
            value: 1
          },
          move: {
            enable: true,
            speed: 0.15,
          },
        }
      }}
    />
  );
}
