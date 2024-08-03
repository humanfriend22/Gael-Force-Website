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
import {TeamType, Teams} from "@/data/teams";

export default function Web() {
  return (
    <div className="mx-10 gap-16 flex flex-col pt-24 lg:pt-0 -mt-24">
      <section className="relative h-screen flex flex-col px-5 bg-[var(--primary-background-color)]">
        <div className="mx-auto flex max-w-screen-xl sm:h-full h-1/2 items-center justify-center">
          <div className="lg:w-1/2 w-full flex flex-col">
            <h1 className="mb-6 max-w-5xl font-semibold leading-none tracking-tight text-primary text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-balance">
              Meet Our
              <div> </div>
              <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">
                Competitive Teams
              </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-400 text-sm sm:text-lg md:text-lg lg:mb-8 lg:text-lg xl:text-xl 2xl:text-2xl text-balance">
              We currently have 6 competitive teams that compete in the VEX Robotics Competition. We have approximately 80 students on teams, each made up of 10-15 students. Here you can find more information about each.
            </p>
            {/*<p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">*/}
            {/*  Contact me at <span className="font-bold">somwonglukas@gmail.com</span>*/}
            {/*</p>*/}
          </div>
          <div className="lg:flex hidden w-1/2 items-center justify-center pl-5">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="" tiltAngleXInitial={10} tiltAngleYInitial={-5}>
              <Image className="rounded-lg ring-4 ring-gray-700 hidden 2xl:block" src="/steamworlds.jpg" alt="GFR officers laughing" width={550} height={550} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 hidden xl:block 2xl:hidden" src="/steamworlds.jpg" alt="GFR officers laughing" width={450} height={450} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 lg:block xl:hidden" src="/steamworlds.jpg" alt="GFR officers laughing" width={350} height={350} priority/>
            </Tilt>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} tiltAngleXInitial={10} tiltAngleYInitial={-5}>
            <Image className="rounded-lg ring-4 ring-gray-700 block lg:hidden" src="/steamworlds.jpg" alt="GFR at 2023 worlds" width={600} height={600} priority/>
          </Tilt>
        </div>
        <EmojiScene />
      </section>
      <section className="mb-20">
          <div className="mx-auto max-w-screen-xl flex flex-col px-5">
            <div className="gap-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {Teams.map((team: TeamType) => {
                return (
                  <Team
                    key={team.teamNumber}
                    imageUrl={team.imageUrl}
                    teamName={team.teamName}
                    teamNumber={team.teamNumber}
                    captainName={team.captainName}
                    memberNames={team.memberNames}
                  />
                )
              })}
            </div>
          </div>
        </section>
    </div>
  )
}
