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
import { EventType, events } from "@/data/events";


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

  return (
    <div ref={container} className="mx-10 gap-16 flex flex-col pt-24 lg:pt-0 -mt-24">
      <section className="relative h-screen flex flex-col bg-[var(--primary-background-color)]">
        <div className="hero_heading_title opacity-0 mx-auto flex max-w-screen-xl sm:h-full h-1/2 items-center justify-center">
          <div className="lg:w-1/2 w-full flex flex-col">
            <h1 className="mb-6 max-w-5xl font-semibold leading-none tracking-tight text-primary text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-balance">
              Dublin High&apos;s
              <div> </div>
              <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">
                Gael Force Robotics
              </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-400 text-sm sm:text-lg md:text-lg lg:mb-8 lg:text-lg xl:text-xl 2xl:text-2xl text-balance">
              We are a <span className="font-extrabold">student-run</span> robotics club at Dublin High School that competes in the VEX Robotics Competition.
              Our community is diverse, inclusive, and welcoming to all students interested in STEM, exploring who they are,
              or just looking to have fun.
            </p>
            {/*<p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">*/}
            {/*  Contact me at <span className="font-bold">somwonglukas@gmail.com</span>*/}
            {/*</p>*/}
          </div>
          <div className="lg:flex hidden w-1/2 items-center justify-center pl-5">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="" tiltAngleXInitial={10} tiltAngleYInitial={-5}>
              <Image className="rounded-lg ring-4 ring-gray-700 hidden 2xl:block" src="/gfrworlds2023.jpg" alt="GFR at 2023 worlds" width={550} height={550} priority />
              <Image className="rounded-lg ring-4 ring-gray-700 hidden xl:block 2xl:hidden" src="/gfrworlds2023.jpg" alt="GFR at 2023 worlds" width={450} height={450} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 lg:block xl:hidden" src="/gfrworlds2023.jpg" alt="GFR at 2023 worlds" width={350} height={350} priority/>
            </Tilt>
          </div>
        </div>
        <div className="hero_rest opacity-0 flex items-center justify-center">
          <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} tiltAngleXInitial={10} tiltAngleYInitial={-5}>
            <Image className="rounded-lg ring-4 ring-gray-700 block lg:hidden" src="/gfrworlds2023.jpg" alt="GFR at 2023 worlds" width={600} height={600} priority/>
          </Tilt>
        </div>
        <EmojiScene />
      </section>
      <section className="hero_rest opacity-0 gap-16 flex flex-col">
        <section className="">
          <div className="mx-auto max-w-screen-xl flex flex-col">
            <h1 id="events" className="mb-6 max-w-2xl scroll-m-24 font-semibold leading-none tracking-tight text-primary text-3xl md:text-4xl xl:text-5xl">
              Events for 2024-2025
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
              {events.map((event: EventType, index: number) => (
                <BentoBox
                  key={index}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  image={event.image}
                  size={event.size}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto max-w-screen-xl flex flex-col">
            <h1 id="about" className="mb-10 max-w-2xl scroll-m-24 font-semibold leading-none tracking-tight text-primary text-3xl md:text-4xl xl:text-5xl">
              About Us
            </h1>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-col lg:w-1/2">
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  We are an experienced and <span className="font-extrabold">completely student-run</span> high school club whose members work on both real life
                  engineering projects and participate in the VEX Robotics Competition.
                  Around <span className="font-extrabold">15 years old</span> now, our club takes pride in its members’ teamwork and problem solving skills.
                  We also heavily emphasize the engineering design process and ensure that all members have knowledge of
                  such engineering aspects through our yearly seminars.
                </p>
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  Our club is driven by a strong passion for engineering. Due to this, we have always stressed the
                  importance of the <span className="font-extrabold">Engineering Design Process</span> and ensure that each and every one of our members
                  knows about proper design protocol through our Academy program. The <span className="font-extrabold">Gael Force Academy</span> program
                  displays another one of our priorities: sharing knowledge. We make sure that everyone has a place
                  in Gael Force, regardless of experience.
                </p>
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  We think that a good team has more than just a good bot. Our teams stress a <span className="font-extrabold">well-rounded design process</span>.
                  Each of our teams focuses on their <span className="font-extrabold">Documentation</span> just as much as their bot performance.
                  The process of properly documenting work ensures that the team gains a concrete understanding of the
                  multitude of engineering concepts that go into every bot. The documentation is used by new members and
                  the Gael Force Academy as a reference tool to teach and reflect on the design process using live examples
                  from our numerous teams.
                </p>
              </div>
              <div className="flex flex-col lg:w-1/2">
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  Our club has roots that run deep. When we started off, Gael Force Robotics consisted of a single team of robotics
                  enthusiasts. It was a club purely for those with a burning passion for innovation and deep knowledge of engineering.
                  Throughout the years, we’ve managed to expand to a scale that none of the founding members could have imagined.
                  The club is now open to anyone with an interest, we can handle giving them the technical skills needed.
                </p>
                <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                  We take pride in staying connected with our previous members.
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
          <div className="mx-auto max-w-screen-xl">
            <h1 id="sponsors" className="mb-10 max-w-2xl font-semibold leading-none uppercase tracking-wider text-primary text-xl md:text-2xl xl:text-3xl">
              Our Sponsors
            </h1>
            <Marquee pauseOnHover={true} speed={50} className="mx-auto max-w-screen-xl min-h-36">
              <img src="/logoboss.png" alt="LogoBoss Logo" width={200} height={200} className="mr-10 md:block hidden"/>
              <img src="/robosource.png" alt="robosource Logo" width={200} height={200} className="mr-10 md:block hidden"/>
              {/*<img src="/GFRLogo.png" alt="GFR Logo" width={200} height={200} className="mr-10 md:block hidden"/>*/}

              <img src="/logoboss.png" alt="LogoBoss Logo" width={100} height={100} className="mr-10 md:hidden block"/>
              <img src="/robosource.png" alt="RoboSource Logo" width={100} height={100} className="mr-10 md:hidden block"/>
              {/*<img src="/GFRLogo.png" alt="GFR Logo" width={100} height={100} className="mr-10 md:hidden block"/>*/}
            </Marquee>
          </div>
        </section>
      </section>
    </div>
  )
}
