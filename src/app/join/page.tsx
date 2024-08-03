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

export default function Web() {
  return (
    <div className="mx-10 gap-16 flex flex-col pt-24 lg:pt-0 -mt-24">
      <section className="relative h-screen flex flex-col px-5 bg-[var(--primary-background-color)]">
        <div className="mx-auto flex max-w-screen-xl sm:h-full h-1/2 items-center justify-center">
          <div className="lg:w-1/2 w-full flex flex-col">
            <h1 className="mb-6 max-w-5xl font-semibold leading-none tracking-tight text-primary text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-balance">
              Join us for
              <div> </div>
              <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">
                Life-Changing Experiences
              </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-400 text-sm sm:text-lg md:text-lg lg:mb-8 lg:text-lg xl:text-xl 2xl:text-2xl text-balance">
              We are always looking for new members to join our teams. If you are interested in robotics,
              engineering, or just want to learn more about the field, we would love to have you on board.
            </p>
            {/*<p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">*/}
            {/*  Contact me at <span className="font-bold">somwonglukas@gmail.com</span>*/}
            {/*</p>*/}
          </div>
          <div className="lg:flex hidden w-1/2 items-center justify-center pl-5">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="" tiltAngleXInitial={10} tiltAngleYInitial={-5}>
              <Image className="rounded-lg ring-4 ring-gray-700 hidden 2xl:block" src="/steamworlds.jpg" alt="Team Photo" width={550} height={550} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 hidden xl:block 2xl:hidden" src="/steamworlds.jpg" alt="Team Photo" width={450} height={450} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 lg:block xl:hidden" src="/steamworlds.jpg" alt="Team Photo" width={350} height={350} priority/>
            </Tilt>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} tiltAngleXInitial={10} tiltAngleYInitial={-5}>
            <Image className="rounded-lg ring-4 ring-gray-700 block lg:hidden" src="/steamworlds.jpg" alt="Team Photo" width={600} height={600} priority/>
          </Tilt>
        </div>
        <EmojiScene />
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16 px-5 bg-[var(--primary-background-color)]">
          <h1 className="mb-10 max-w-2xl text-3xl scroll-m-44 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            The Process
          </h1>
          <ol className="mb-10 list-decimal list-inside">
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Apply to join Gael Force Robotics
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Join the Gael Force Academy
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Attend Academy meetings
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Become an intern for a Competitive Team
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Join a Competitive Team
            </li>
          </ol>
          <h1 className="mb-10 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Club Application
          </h1>
          <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
            First things first, you need to apply to become a member of GFR. Fill out our
            &nbsp;<a href="/" className="font-bold text-primary underline">application form</a>
            &nbsp;so we know you're interested. After filling out our form, we will reach out to you with more information.
          </p>
          <h1 className="mb-10 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Gael Force Academy
          </h1>
          <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
            If you're completely new to robotics, you'll be joining the Gael Force Academy (hereafter referred to as GFA).
            GFA is our way of teaching new members that may not be all too familiar with VEX, VRC, or robotics. GFA has meetings
            after school, twice a week, in portable P5. These meetings typically run from 3:30 to 5:30. They are led by our developer team officers.
            They often have guest appearances from captains, board members, and competition team members that help teach.
            GFA will teach you everything you need to know about robotics. Important topics such as build methods, design,
            VEX terminology, programming, CAD, and many more will all be covered in the curriculum.
            Check out the GFA page for more information about our Academy program.
          </p>
          <h1 className="mb-10 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Competitive Teams
          </h1>
          <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
            After spending a considerable amount of time in the Academy program, learning the basics of Robotics,
            and showing a willingness to cooperate and dedicate time to robotics, you will be given the chance to join a competitive team.
            Two interviews will be conducted throughout the year by captains to determine if you are ready to join a competitive team. Because
            of the limited space on the competitive teams, not everyone will be able to join. However, those that do join will get to experience
            the thrill of competition and the joy of working with a team to accomplish a common goal.
          </p>
        </div>
      </section>
    </div>
  )
}
