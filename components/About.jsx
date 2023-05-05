import React from "react";
import Image from "next/image";
import image from "../public/assets/PRD.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-4">A skillful and committed developer</p>
          <p className="py-2 text-gray-600">
            A Frontend Engineer with three years plus of appreciable experience
            developing SaaS applications. I have worked in Frontend positions
            where I bring architectural designs to life. I am comfortable as an
            independent developer or team player, and eager to obtain a
            challenging position in a prestigious Company like yours.
          </p>
          <p className="py-2 text-gray-600">
            I’m adept in OOP, follow best practices and keep up with standards.
            I’m proficient in frontend from conception to publishing. My
            professional time has been spent modifying and building large
            applications. I’ve worked extensively with modern frameworks such as
            React, Next, Redux, Tailwind, Angular, Bootstrap. I strive to
            deliver quality results. I’m driven by meeting deadlines. I learn
            quickly and I’m willing to work with new frameworks, languages,
            tools and technologies.
          </p>
          <p>Check out some of my latest projects.</p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className="rounded" src={image} alt="PRD" width={500} height={55} />
        </div>
      </div>
    </div>
  );
};

export default About;
