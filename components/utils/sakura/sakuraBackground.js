import React, { useEffect, useState } from 'react';
import SakuraPetal from './sakuraPetal';
import styled from 'styled-components';

const FullPageDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;


function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function randomFloat(min, max) {
    return min + Math.random() * (max - min);
}

const Sakura = ({ numPetals = 5, maxPetals = 30 }) => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const initialDelay = 30; // Delay before first petal starts to fall, in milliseconds

        setTimeout(() => {
            const interval = setInterval(() => {
                const fallTime = randomFloat(20, 40);
                const size = randomInt(7, 15);
                const left = randomInt(0, 100);
                const opacity = randomFloat(0.6, 1);
                const rotate = randomInt(-30, 30);
                const blowDirection = randomInt(0, 1);
                const blowTime = randomInt(18, 22);

                setPetals((prevPetals) => {
                    const newPetal = (
                        <SakuraPetal
                            key={Math.random() * Math.random()}
                            size={size}
                            left={`${left}%`}
                            opacity={opacity}
                            rotate={rotate}
                            fallTime={fallTime}
                            blowDirection={blowDirection}
                            blowTime={blowTime}
                        />
                    );
                    // If max number of petals reached, remove the oldest one (at index 0)
                    return prevPetals.length >= maxPetals ? [...prevPetals.slice(1), newPetal] : [...prevPetals, newPetal];
                });
            }, 200 * numPetals);

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }, initialDelay);

    }, [numPetals, maxPetals]);

    return (
        <FullPageDiv>
            {petals}
        </FullPageDiv>
    );
};

export default Sakura;
