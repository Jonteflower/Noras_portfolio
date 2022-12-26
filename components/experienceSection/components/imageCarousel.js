import React from 'react';
import styled from 'styled-components';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

const WrapperDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 2px;
    width: 100%;
    height: fit-content;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media screen and (max-width:400px) {
       margin: 0px;
        height: 220px;
  }
`;

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 220px;
    aspect-ratio: 1.5;

    @media screen and (max-width:400px) {
        width: 50vw;
  }

`;

export default function ImageCarousel({ }) {
    const items = ['/images/logos/kth1.webp', '/images/logos/logistics1.webp', '/images/logos/pwcLogo.webp', '/images/logos/speedGroup.webp', '/images/logos/StingWhite.webp', '/images/logos/StockholmUni.webp', '/images/logos/tixySmall.webp', '/images/logos/uppsala.webp']

    return (
        <WrapperDiv>
            <Swiper
                className='swiperCarousell'
                modules={[Autoplay, Pagination]}
                slidesPerView={'auto'}
                spaceBetween={10}
                speed={15000}
                loop={true}
                observer={false}
                allowTouchMove={true}
                freemode={{ enabled: true }}
                watchSlidesProgress={false}
                resizeObserver={false}

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
                        spaceBetween: 0,

                    },
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 0
                    },
                    // when window width is >= 400px

                    400: {
                        slidesPerView: 1.8,
                        spaceBetween: 5
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1.8,
                        spaceBetween: 10
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
                        <SwiperSlide key={i}>
                            <ImageWrapper>
                                <Image
                                    src={item}
                                    layout={'fill'}
                                    objectFit={'contain'}
                                    alt={'Logo of a company i have worked wtij'}
                                />
                            </ImageWrapper>
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </WrapperDiv>
    )
}

