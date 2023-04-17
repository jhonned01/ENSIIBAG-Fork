import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = ({ imageSlider }: any) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      {imageSlider.map((images: any) => (
        <div key={images?.lugar}>
          <figure className="bg-white center w-full h-full">
            {/* 
            <Image
              src={`https://ensiibague.edu.co/portal/img/${images?.imagen}`}
              alt={images?.lugar}
              width={1500}
              height={900}
              className="object-fill"
            /> 
            */}

            <img
              src={`https://ensiibague.edu.co/portal/img/${images?.imagen}`}
              alt={`imagen slider #${images?.lugar}`}
              className="w-screen h-screen object-cover"
            />
          </figure>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
