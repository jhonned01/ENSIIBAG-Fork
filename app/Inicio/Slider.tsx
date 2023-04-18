import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = ({ imageSlider }: any) => {
  return (
    <Carousel
      // autoPlay
      // infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      className=" md:w-auto max-h-[500px]  "
    >
      {imageSlider.map((slider: any) => (
        <div key={slider?.lugar}>
          <Image
            src={`https://ensiibague.edu.co/portal/img/${slider?.imagen}`}
            alt={slider?.lugar}
            style={{ objectFit: "contain" }}
            width={1200}
            height={500}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
