import React from "react";
import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl `}
    >
      <div className="flex flex-col justify-between items-start h-full p-4 lg:p-10">
        <div className="flexCenter gap-4">
          <div className="p-5 rounded-full bg-green-600">
            <Image
              src="/folded-map.svg"
              alt="map icon"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-sm text-gray-10">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center -space-x-3">
            {PEOPLE_URL.map((person) => (
              <Image
                src={person}
                key={person}
                width={52}
                height={52}
                alt="person image"
              />
            ))}
          </div>
          <p className="font-bold text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative max-container flex flex-col py-20 lg:py-10">
      <div className="flex w-full h-[340px] justify-start items-start gap-8 overflow-x-auto hide-scrollbar lg:h-[400px] xl:h-[600px]">
        <CampSite
          title="Camp Site A"
          subtitle="Located at mount everest"
          peopleJoined="50+ Joined"
          backgroundImage="bg-bg-img-1"
        />
        <CampSite
          title="Camp Site B"
          subtitle="Located at K2 Base Camp"
          peopleJoined="90+ Joined"
          backgroundImage="bg-bg-img-2"
        />
      </div>

      <div className="relative flexEnd lg:-mt-60 lg:mr-5">
        <div className="p-20 mx-5 bg-green-600 mt-10 rounded-5xl lg:max-w-[500px] xl:max-w-[700px]">
          <h2 className="text-white regular-24 lg:regular-32 xl:regular-64">
            <span className="font-bold">Feeling lost</span> and not knowing the
            way?
          </h2>
          <p className="text-white mt-8">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development to fill empty spaces in a
            layout that does not yet have content.
          </p>
          <Image
            src="/quote.svg"
            alt="quote image"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
