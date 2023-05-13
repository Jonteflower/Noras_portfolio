import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'


const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  @media (max-width: 900px)  {
        width: 90vw;
        height: 300px;
    }
`

export default function LazyVideo() {
    const containerRef = useRef();
    const [videoLoaded, setVideoLoaded] = useState(false);

    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Trigger the observer only once
        threshold: 0.1, // Start loading the video when 10% of it is visible
    });

    useEffect(() => {
        if (inView) {
            setVideoLoaded(true);
        }
    }, [inView]);

    return (
        <VideoContainer ref={inViewRef} >
            {videoLoaded && (
                <video
                    muted
                    autoPlay={true}
                    loop
                    style={{ width: '100%', height: '100%' }}
                    alt='Video of the Tixy-NFT Flutter app'
                >
                    <source src='./images/websites/tixyCropped.mp4' />
                </video>
            )}
        </VideoContainer>
    );
}
