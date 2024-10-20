"use client"; 


import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { SkillData } from "../../constants";
import Image from "next/image";

interface SliderProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export const DynamicSlider: React.FC<SliderProps> = ({ backgroundImage, title, subtitle }) => {
  const settings = {
    infinite: true, 
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    speed: 2000, 
    arrows: false, 
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const leftToRightSettings = {
    ...settings,
    rtl: false,
  };

  const rightToLeftSettings = {
    ...settings,
    rtl: true,
  };
  return (
    <div
    style={{ backgroundImage: `url(${backgroundImage})` }}      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center mx-auton">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
          {" "} {" "} {" "} Recognized By {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}{" "}  &{" "}
            </span>
            Affiliated To
          </h1>
          <br></br>
          <br></br>
          <p className="text-gray-400 text-[20px]">
          {" "} {" "} {" "} {" "} Endorsed by the World Authority of Fitness and Bodybuilding
          </p>
        </div>
        <br></br>
        <Slider {...leftToRightSettings} className="max-w-[80%]">
          {SkillData.map((skill, index) => (
            <div key={index} className="p-4"> 
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                className="mx-auto" 
              />
            </div>
          ))}
        </Slider>
        <Slider {...rightToLeftSettings} className="max-w-[80%]">
          {SkillData.map((skill, index) => (
            <div key={index} className="p-4"> 
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                className="mx-auto" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DynamicSlider;