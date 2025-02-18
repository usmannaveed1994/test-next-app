import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 bg-pattern-2 object-cover lg:h-screen w-screen">
      <div>
        <Image src="/camp.svg" width={50} height={50} alt="camp icon" />

        <h1 className="bold-52 lg:bold-88">The Camping Site</h1>
        <p className="regular-16 text-gray-30 mt-4 lg:max-w-[750px]">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          design, publishing, and web development to fill empty spaces in a
          layout that does not yet have content.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <div className="py-8 flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                width={24}
                height={24}
                alt="star"
              />
            ))}
          </div>
          <p>
            198k <span>Reviews</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-3">
          <Button type="button" variant="btn_green" title="Download Now" />
          <Button
            type="button"
            variant="btn_white_text"
            title="How it works"
            icon="/play.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
