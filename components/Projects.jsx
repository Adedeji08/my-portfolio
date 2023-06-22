import Image from "next/image";
import React from "react";
import Update from "../public/projects/Melio-1024x621.png";
import Heineken from "../public/projects/brand-hero.jpg";
import Link from "next/link";
import ProjectItems from "./ProjectItems";
import rewardApp from "../public/projects/reward-app.png";
import Port from "../public/projects/How-to-make-portfolio-for-design-admission.jpg";
import CountrySearch from "../public/projects/worldmap-webistes-hi-res.png";
import TikTik from "../public/projects/TikTik.jpg";
import Notify from "../public/projects/unnamed.png";
import Crypto from '../public/projects/Crypto.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
           <ProjectItems
            title="Kenya CDP"
            backgroundImg={Heineken}
            projectUrl="/Heineken"
            tech="Angular"
          />
          <ProjectItems
            title="Business Update"
            backgroundImg={Update}
            projectUrl="/Update"
            tech="Next JS"
          />
          <ProjectItems
            title="Country Search"
            backgroundImg={CountrySearch}
            projectUrl="/CountrySearch"
            tech="React JS"
          />
          <ProjectItems
            title="Crypto-App"
            backgroundImg={Crypto}
            projectUrl="/Crypto"
            tech="React JS"
          />
          <ProjectItems
            title="Tik Video App"
            backgroundImg={TikTik}
            projectUrl="/Tik"
            tech="Next JS"
          />
          <ProjectItems
            title="My portfolio"
            backgroundImg={Port}
            projectUrl="/Portfolio"
            tech="React JS"
          />
          <ProjectItems
            title="Notification Box"
            backgroundImg={Notify}
            projectUrl="/Notification"
            tech="Angular"
          />
          <ProjectItems
            title="Reawrd App"
            backgroundImg={rewardApp}
            projectUrl="/Reward"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
