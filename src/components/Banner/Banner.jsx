import "./Banner.css";
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import banner from "assets/images/bg01.PNG";
import banner1 from "assets/images/bg02.png";
import banner2 from "assets/images/bg03.PNG";
import Carousel from 'react-bootstrap/Carousel';



function Banner( {changeBannerHandle} ) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    changeBannerHandle(selectedIndex);
  };

  return (
    <Carousel id="banner" className="banner" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
