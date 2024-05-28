"use client"
import Image from 'next/image';
import {BentoBox} from "@/components/BentoBox";
import Marquee from "react-fast-marquee";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import userPrefersReducedMotion from "@/hooks/userPrefersReducedMotion";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';

import EmojiScene from "@/components/EmojiCanvas";
import {Team} from "@/components/Team";

export default function Web() {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = userPrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // If the user prefers reduced motion, set the opacity to 1
    if (prefersReducedMotion || window.location.hash) {
      gsap.set(
        ".hero_rest, .hero_heading_title",
        {opacity: 1}
      )

      return
    }

    const tl = gsap.timeline({ defaults: {ease: "power2.inOut"}})

    tl.fromTo(".hero_heading_title", {scale: 0.5}, {scale: 1, opacity: 1, duration: 1.4})
      .fromTo(".hero_rest", {y: 60}, {y: 0, opacity: 1, duration: 1.5})



  }, {scope: container})

  const emojis = ['😀', '🎉', '🚀', '🌟', '🐱', '🍕'];

  return (
    <div ref={container} className="mx-10">
      <section className="relative">
        <div className="hero_heading_title opacity-0 mx-auto flex max-w-screen-xl py-16 pt-48 px-5">
          <div className="w-1/2 flex flex-col">
            <h1 className="mb-6 max-w-5xl text-2xl font-semibold leading-none tracking-tight text-primary sm:text-3xl lg:text-4xl xl:text-6xl text-balance">
              Dublin High&apos;s
              <div> </div>
              <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">
                Gael Force Robotics
              </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">
              We are a <span className="font-extrabold">student-run</span> robotics club at Dublin High School that competes in the VEX Robotics Competition.
              Our community is diverse, inclusive, and welcoming to all students interested in STEM, exploring who they are,
              or just looking to have fun.
            </p>
            {/*<p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">*/}
            {/*  Contact me at <span className="font-bold">somwonglukas@gmail.com</span>*/}
            {/*</p>*/}
          </div>
          <div className="w-1/2 flex items-center justify-center pl-5">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="" tiltAngleXInitial={10} tiltAngleYInitial={-5}>
              <Image className="rounded-lg ring-4 ring-gray-700" src="/gfrworlds2023.jpg" alt="GFR at 2023 worlds" width={500} height={400} />
            </Tilt>
          </div>
        </div>
        <EmojiScene />
      </section>
      <section className="hero_rest opacity-0">
        <section className="">
          <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16 px-5">
            <h1 id="about" className="mb-10 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
              About Us
            </h1>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col md:w-1/2 pr-5">
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  &emsp;We are an experienced and <span className="font-extrabold">completely student-run</span> high school club whose members work on both real life
                  engineering projects and participate in the VEX Robotics Competition.
                  Around <span className="font-extrabold">15 years old</span> now, our club takes pride in its members’ teamwork and problem solving skills.
                  We also heavily emphasize the engineering design process and ensure that all members have knowledge of
                  such engineering aspects through our yearly seminars.
                </p>
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  &emsp;Our club is driven by a strong passion for engineering. Due to this, we have always stressed the
                  importance of the <span className="font-extrabold">Engineering Design Process</span> and ensure that each and every one of our members
                  knows about proper design protocol through our Academy program. The <span className="font-extrabold">Gael Force Academy</span> program
                  displays another one of our priorities: sharing knowledge. We make sure that everyone has a place
                  in Gael Force, regardless of experience.
                </p>
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  &emsp;We think that a good team has more than just a good bot. Our teams stress a <span className="font-extrabold">well-rounded design process</span>.
                  Each of our teams focuses on their <span className="font-extrabold">Documentation</span> just as much as their bot performance.
                  The process of properly documenting work ensures that the team gains a concrete understanding of the
                  multitude of engineering concepts that go into every bot. The documentation is used by new members and
                  the Gael Force Academy as a reference tool to teach and reflect on the design process using live examples
                  from our numerous teams.
                </p>
              </div>
              <div className="flex flex-col md:w-1/2">
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  &emsp;Our club has roots that run deep. When we started off, Gael Force Robotics consisted of a single team of robotics
                  enthusiasts. It was a club purely for those with a burning passion for innovation and deep knowledge of engineering.
                  Throughout the years, we’ve managed to expand to a scale that none of the founding members could have imagined.
                  The club is now open to anyone with an interest, we can handle giving them the technical skills needed.
                </p>
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  &emsp;We take pride in staying connected with our previous members.
                  Many of them stay active in our Discord servers and will pop into meets and competitions whenever they are able to.
                  Their wisdom and input is highly respected and extremely valuable. They are a vital part of our teaching system
                  and many of them end up mentoring other VRC teams after they graduate in order to give back to the community that
                  allowed them to learn so much.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="hero_marquee mx-auto max-w-screen-xl xl:px-4 px-7 py-8 lg:py-16">
            <h1 className="text-xl mx-auto max-w-screen-xl mb-16 font-bold text-primary uppercase tracking-wider">Our Sponsors</h1>
            <Marquee pauseOnHover={true} speed={50} className="mx-auto max-w-screen-xl overflow-hidden h-22">
              <img src="/GFRLogo.png" alt="GFR Logo" width={200} height={200} className="mr-10"/>
              <img src="/GFRLogo.png" alt="GFR Logo" width={200} height={200} className="mr-10"/>
              <img src="/GFRLogo.png" alt="GFR Logo" width={200} height={200} className="mr-10"/>
            </Marquee>
          </div>
        </section>
        <section className="">
          <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16 px-5">
            <h1 id="events" className="mb-6 max-w-2xl scroll-m-24 text-2xl font-semibold leading-none tracking-tight text-primary md:text-3xl xl:text-4xl">
              Events for 2024-2025
            </h1>
            {/*project 1 using bento box flip*/}
            <div className="grid grid-cols-2 grid-rows-1 gap-8">
              <BentoBox
                title="Fall GFR Showcase"
                description="Meet us and learn about what we do and see if you want to join this season!"
                date="August 30, 2024"
                image="/showcase2024.jpg"
                size="onexy"
                link="/fallshowcase"
              />
              <BentoBox
                title="GirlPowered Workshop"
                description="Promoting diversity in STEM, girls are invited to learn about robotics and engineering!"
                date="Oct 11-12, 2024"
                image="/girlpowered2024.jpg"
                size="onexy"
                link="/girlpowered"
              />
              <BentoBox
                title="Battle of The Bay"
                description="Our annual competition where teams from all over the Bay Area come to compete!"
                date="Jan 19, 2025"
                image="/botb2024.jpg"
                size="twoxy"
                link="/botb"
              />
              <BentoBox
                title="All-Inclusive Workshop"
                description="A workshop for all students to learn about robotics and engineering!"
                date="Nov 11-12, 2024"
                image="/showcase2024.jpg"
                size="onexy"
                link="/allinclusiveworkshop"
              />
              <BentoBox
                title="Battle of The Bay Skills"
                description="Come to our late season skills event to get in your last minute skills scores in!"
                date={"Feb 22, 2025"}
                image="/atikshsize.jpg"
                size="onexy"
                link="/botbskills"
              />
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16 px-5">
            <h1 id="teams" className="mb-6 max-w-2xl scroll-m-24 text-2xl font-semibold leading-none tracking-tight text-primary md:text-3xl xl:text-4xl">
              Teams
            </h1>
            <div className="flex flex-col gap-9">
              <Team
                imageUrl={"/ALogo.jpg"}
                teamName={"Gael Force Ascension"}
                captainName={"Sahith Ajay"}
                memberNames={["Lukas Somwong", "dont know", "dont know", "dont know", "dont know", "dont know"]}
              />
              <Team
                imageUrl={"/CLogo.png"}
                teamName={"Gael Force Corn"}
                captainName={"Arpit Jena"}
                memberNames={["Lukas Somwong", "dont know", "dont know", "dont know", "dont know", "dont know"]}
              />
              <Team
                imageUrl={"/KLogo.png"}
                teamName={"Gael Force Kreamers"}
                captainName={"Aidan Wang"}
                memberNames={["Lukas Somwong", "dont know", "dont know", "dont know", "dont know", "dont know"]}
              />
              <Team
                imageUrl={"/RLogo.jpg"}
                teamName={"Gael Force Rams"}
                captainName={"Kaushik Chandolu"}
                memberNames={["Lukas Somwong", "dont know", "dont know", "dont know", "dont know", "dont know"]}
              />
              <Team
                imageUrl={"/VLogo.png"}
                teamName={"Gael Force V"}
                captainName={"Aarav Kashyap"}
                memberNames={["Lukas Somwong", "dont know", "dont know", "dont know", "dont know", "dont know"]}
              />
              <Team
                imageUrl={"/GFRLogo.png"}
                teamName={"Gael Force Y"}
                captainName={"Arjun Chakraborty"}
                memberNames={["Lukas Somwong", "dont know", "dont know", "dont know", "dont know", "dont know"]}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
