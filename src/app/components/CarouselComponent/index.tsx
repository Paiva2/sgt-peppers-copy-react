import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ArrowsContainer, CarouselAreaContainer, Carousel } from "./styles";
import { imagesData } from "./images/carouselImages";
import "keen-slider/keen-slider.min.css";
import useResponsive from "@/hooks/useResponsive";

const CarouselComponent = () => {
  const { isMobile } = useResponsive();

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: isMobile ? "snap" : "free-snap",
    loop: true,

    slides: {
      origin: "center",
      perView: isMobile ? 1 : 2,
    },
  });

  return (
    <CarouselAreaContainer>
      <Carousel ref={sliderRef} className="keen-slider">
        {imagesData.map((image) => {
          return (
            <div key={image.id} className="keen-slider__slide number-slide">
              <Image width={589} height={882} alt={image.alt} src={image.src} />
            </div>
          );
        })}
      </Carousel>

      <ArrowsContainer>
        <button onClick={() => instanceRef.current?.prev()}>
          <CaretLeft size={40} weight="bold" />
        </button>
        <button onClick={() => instanceRef.current?.next()}>
          <CaretRight size={40} weight="bold" />
        </button>
      </ArrowsContainer>
    </CarouselAreaContainer>
  );
};

export default CarouselComponent;
