import React from "react";
import Image from "next/image";
import image from "../public/assets/PRD.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-4">A skillful and committed developer</p>
          <p className="py-2 text-gray-600">
            Full-Stack Developer with three-plus years of experience building
            complete SaaS solutions. I bring architectural designs to life by
            working across the entire application stack—from creating
            responsive, user-friendly interfaces to developing scalable backend
            APIs and database systems
          </p>
          <p className="py-2 text-gray-600">
            Proficient in modern frontend frameworks (React, Next.js, Angular)
            with complementary backend experience in Node.js, API development,
            and database management. My professional journey includes working on
            large applications where I've contributed to both client-side and
            server-side components, ensuring seamless integration and optimal
            performance.
          </p>

          <p className="py-2 text-gray-600">
            As a detail-oriented engineer who follows best practices and meets
            deadlines, I thrive in challenging environments and quickly adapt to
            new technologies, tools, and frameworks across the full development
            spectrum.
          </p>
          <p className="text-center border-2 border-blue-600 w-[115px] hover:scale-105 ease-in duration-300">
            <a href="/Ebenezer Adedeji.pdf" download="cv">
              Download CV
            </a>
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded"
            src={image}
            alt="PRD"
            width={500}
            height={55}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
