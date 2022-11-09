import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperContainer = styled.div`
  width: 100%;
  height: 40vh; 
  @media (max-width: 900px)  {
        height: fit-content;
       
    }
`


const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  @media (max-width: 900px)  {
        height: 60vh;
    }
`
const VideoContainert = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  @media (max-width: 900px)  {
        height: 50vh;
    }
`

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100%;

`


function ImageSlider({ setIndex }) {
    return (

        <SwiperContainer>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    400: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 2.4,
                        spaceBetween: 0,
                    },
                    2000: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                }}
                initialSlide={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}

                loop={true}
                //loopFillGroupWithBlank={true}
                onSlideChange={(swiper) => setIndex(swiper.realIndex)}
                modules={[EffectCoverflow]}
            >
                <SwiperSlide>
                    <SlideContainer>
                        <ImageContainer>
                            <Image
                                src="/images/websites/tixyLanding.jpg"
                                layout='fill'
                                objectFit='contain'
                            />
                        </ImageContainer>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContainer>
                        <ImageContainer>
                            <Image
                                src="/images/websites/logistics.jpg"
                                layout='fill'
                                objectFit='contain'
                            />

                        </ImageContainer>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoContainert>
                        <video muted autoPlay={true} loop style={{ width: '100%', height: '100%' }}>
                            <source src="./images/websites/tixyCropped.mp4" />
                        </video>
                    </VideoContainert>
                </SwiperSlide>
            </Swiper>
        </SwiperContainer>



    )
}

export default ImageSlider