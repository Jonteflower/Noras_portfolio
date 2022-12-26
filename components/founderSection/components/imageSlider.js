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
  min-height: 40vh; 
  height: fit-content;
  @media (max-width: 900px)  {
        
    }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 10px;

    @media (max-width: 900px)  {
        width: 90%;
        height: 350px;
    }
`
const VideoContainert = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  @media (max-width: 900px)  {
        width: 90vw;
        height: 300px;
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
                navigation
                pagination={{ clickable: true }}
                modules={[ Pagination, EffectCoverflow]}

                breakpoints={{
                    768: {
                        slidesPerView: 2.1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 2.5,
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
            >
                <SwiperSlide>
                    <SlideContainer>
                        <ImageContainer>
                            <Image
                                src="/images/websites/tixyLanding.webp"
                                fill
                                style={{objectFit:"contain"}}
                                alt='Image of my previous startup Tixy-NFT'
                            />
                        </ImageContainer>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContainer>
                        <ImageContainer>
                            <Image
                                src="/images/websites/logistics.webp"
                                fill
                                style={{objectFit:"contain"}}
                                alt={'Picture of Tixy Logistics webapp'}
                            />
                        </ImageContainer>
                    </SlideContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <VideoContainert>
                        <video muted autoPlay={true} loop style={{ width: '100%', height: '100%' }} alt='Video of the Tixy-NFT Flutter app'>
                            <source src="./images/websites/tixyCropped.mp4" />
                        </video>
                    </VideoContainert>
                </SwiperSlide>
            </Swiper>
        </SwiperContainer>



    )
}

export default ImageSlider