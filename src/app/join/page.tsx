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
        <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16 bg-[var(--primary-background-color)]">
          <h1 className="mb-10 max-w-2xl text-3xl scroll-m-44 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            The Process
          </h1>
          <ol className="mb-10 list-decimal list-inside">
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Join the GFR Discord Server
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Fill out Club Enrollment Form
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Attend Parent Information Meeting
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Attend Development Academy (GFA)
            </li>
            <li className="mb-2 font-light text-gray-400 md:text-lg lg:mb-4 lg:text-xl leading-relaxed text-balance">
              Get Drafted to a Competitive Team
            </li>
          </ol>
          <h1 className="mb-6 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            GFR Discord Server
          </h1>
          <p className="mb-16 font-light text-gray-400 md:text-lg lg:mb-12 lg:text-xl leading-relaxed text-balance">
            The first step to joining GFR is to join our Discord server. This is where we communicate with our members,
            post announcements, and host meetings. you can find an invite to our server <a href="https://discord.gg/tpNP8Pte7u" target="_blank" className="font-bold text-primary underline">here</a>
          </p>
          <h1 className="mb-6 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Club Enrollment Form
          </h1>
          <p className="mb-16 font-light text-gray-400 md:text-lg lg:mb-12 lg:text-xl leading-relaxed text-balance">
            Before becoming an official member of our club, you must first fill out our <a href="https://tinyurl.com/gfrenrollment24-25" target="_blank" className="font-bold text-primary underline">enrollment form</a> after looking at our <a href="https://tinyurl.com/gfrexpectations24-25" target="_blank" className="font-bold text-primary underline">expectations</a>. Upon completion, you will become a member of our club development academy.
            If you would like to make a donation to our club, you can do so <a href="https://tinyurl.com/gfrdonation" target="_blank" className="font-bold text-primary underline">here</a>.
          </p>
          <h1 className="mb-6 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Parent Information Meeting
          </h1>
          <p className="mb-16 font-light text-gray-400 md:text-lg lg:mb-12 lg:text-xl leading-relaxed text-balance">
            Parents are required to attend a parent information meeting. This meeting will provide parents with information
            about the club, the development academy, and the competitive teams. We want your parents to have a lot of exposure
            into GFR and we want to keep them well informed. If you join the club late, we will schedule a meeting with you or your parents.
          </p>
          <h1 className="mb-6 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Gael Force Academy
          </h1>
          <p className="mb-16 font-light text-gray-400 md:text-lg lg:mb-12 lg:text-xl leading-relaxed text-balance">
            If you're completely new to robotics, you'll be joining the Gael Force Academy (hereafter referred to as GFA).
            GFA is our way of <span className="font-bold">teaching new members that may not be all too familiar</span> with VEX, VRC, or robotics. GFA has meetings
            after school, twice a week, in portable P6. These meetings typically run from 3:30 to 5:30. They are led by our developer team officers.
            They often have guest appearances from captains, board members, and competition team members that help teach.
            GFA will teach you everything you need to know about robotics. Important topics such as build methods, design,
            VEX terminology, programming, CAD, and many more will all be covered in the curriculum.
          </p>
          <h1 className="mb-6 max-w-2xl text-3xl scroll-m-24 font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Competitive Team Drafts
          </h1>
          <p className="mb-16 font-light text-gray-400 md:text-lg lg:mb-12 lg:text-xl leading-relaxed text-balance">
            After spending a considerable amount of time in the Academy program, learning the basics of Robotics,
            and showing a willingness to cooperate and dedicate time to robotics, you will be given the chance to join a competitive team.
            <span className="font-bold"> After two months into the season, the drafting season starts and all the DEV Academy students get the opportunity to join a team.</span>
            The club will put out a Google Form for DEV students to apply for a team in their rank of choice. <span className="font-bold">Team Captains will then choose
            students based on activeness, participation in DEV, and potentially a short interview.</span> Two months after the first draft, DEV
            students that didn't make it onto a team will try to apply again. Hopefully, with more knowledge and growth than the first time.
            The process is similar to the first draft. Because of the limited space on the competitive teams, not everyone will be
            able to join. However, those that do join will get to experience the thrill of competition and the joy of working with a
            team to accomplish a common goal.
          </p>
        </div>
      </section>
    </div>
  )
}
