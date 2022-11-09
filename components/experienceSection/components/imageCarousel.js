import React from 'react';
import styled from 'styled-components';
import { Autoplay } from "swiper";
import "swiper/css";
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

const Buttonsdiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 2px;
    width: 100%;
    height: fit-content;
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 300px;
    height: 150px;

    @media screen and (max-width:400px) {
        width: 200px;
        height: 150px;
  }

`;

export default function ImageCarousel({ }) {
    const items = ['/images/logos/kth1.png', '/images/logos/logistics1.png', '/images/logos/pwcLogo.png', '/images/logos/speedGroup.png', '/images/logos/StingWhite.png', '/images/logos/StockholmUni.png', '/images/logos/tixySmall.webp', '/images/logos/uppsala.png']

    return (
        <Buttonsdiv>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={'auto'}
                spaceBetween={10}
                speed={15000}
                loop={true}
                observer={true}
                allowTouchMove={false}
                freemode={{ enabled: true }}
                watchSlidesProgress={true}
                resizeObserver={true}
                effect={'fade'}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    stopOnLastSlide: false
                }}
                onSwiper={(swiper) => {
                    swiper.$wrapperEl[0].style.transitionTimingFunction = "linear";
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1.8,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 40
                    },
                    840: {
                        slidesPerView: 3.2,
                        spaceBetween: 40
                    },
                    1040: {
                        slidesPerView: 4.2,
                        spaceBetween: 40
                    }
                }}

            >
                {
                    items.map((item, i) =>

                        <SwiperSlide className="slide" key={i}>

                            <ImageWrapper>
                                <Image 
                                    src={item}
                                    layout={'fill'}
                                    objectFit={'contain'}
                                    alt={'Company logo i have worked with'}
                                />
                            </ImageWrapper>



                        </SwiperSlide>
                    )
                }

            </Swiper>

        </Buttonsdiv>
    )
}

