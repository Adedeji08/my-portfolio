import React from "react";
import Image from "next/image";
import propertyImg from "../public/projects/vendpal.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Vendpal = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2"> Vendstash</h2>
          <h3>React TS / Tailwind / Antd</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Vendpal is a digital procurement platform. It streamlines the
            cumbersome processes involved in procurement, while optimising costs
            at the same time. It is a centralised platform for vendor services
            that simplifies the vendor selection process, and its target
            audiences include companies seeking vendor services, procurement
            professionals, decision-makers, finance officers, procurement
            intermediaries, vendors in strategic industries, and vendor
            management teams and executives. Basically, it empowers these
            audiences to achieve outstanding procurement results.
          </p>
         
          <a href="https://vendpal.vercel.app/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Antd
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer bg-blue-700 rounded w-[50px] text-center text-white shadow-xl shadow-blue-600">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Vendpal;
