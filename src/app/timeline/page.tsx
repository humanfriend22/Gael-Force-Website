"use client"
import { HERO_GRID_ITEMS } from "@/data/hero-grid-items"
import Image from 'next/image';
import {ImageWithDescription} from "@/components/ImageWithDescription";
import {BentoBox} from "@/components/BentoBox";
import Marquee from "react-fast-marquee";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import userPrefersReducedMotion from "@/hooks/userPrefersReducedMotion";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';

import BentoBoxFlip from "@/components/BentoBoxFlip";



export default function Web() {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = userPrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".hero_bento, .hero_heading_title, .hero_heading_description",
        {opacity: 1}
      )

      return
    }

    const tl = gsap.timeline({ defaults: {ease: "power2.inOut"}})

    tl.fromTo(".hero_heading_title", {scale: 0.5}, {scale: 1, opacity: 1, duration: 1.4})
      .fromTo(".hero_heading_description", {y: 20}, {y: 0, opacity: 1, duration: 1})
      .fromTo(".hero_bento", {y: 40}, {y: 0, opacity: 1, duration: 1.5})



  }, {scope: container})

  return (
    <div ref={container}>
      <section className="">
        <div className="mx-auto flex max-w-screen-xl py-16 pt-48">
          <div className="w-1/2 flex flex-col">
            <h1 className="mb-6 max-w-5xl text-1xl font-semibold leading-none tracking-tight text-primary sm:text-2xl lg:text-3xl xl:text-5xl text-balance">
              Hello! I'm Lukas Somwong.
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">
              Im a Junior at Dublin High School pursuing a career applying computer science. I am passionate in the process of creating software that can help people in their daily lives.
            </p>
            <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl text-balance">
              Contact me at <span className="font-bold">somwonglukas@gmail.com</span>
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center pl-5">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="">
              <Image className="rounded-lg" src="/me2.jpg" alt="Lukas Somwong" width={400} height={400} />
            </Tilt>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16">
          <h1 className="mb-6 max-w-2xl text-2xl font-semibold leading-none tracking-tight text-primary md:text-3xl xl:text-4xl">
            About Me
          </h1>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col md:w-1/2 pr-5">
              <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                Hello, I am Lukas Somwong, and I am a student at Dublin High. I want a career where I utilize my best skills,
                improve them, and enjoy myself. I have grown a passion for computer science and aspire to have a future
                career in the field.  To reach my aspirations, I have and will continue to take computer science courses,
                teach myself outside of school, work on personal projects, and face more challenging problems to improve
                my knowledge in the field and gain other beneficial skills.
              </p>
              <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                My passion for computer science comes from the many fascinating technologies that we
                are surrounded by in the modern world that I would like to understand
                and contribute towards. Essential skills to have as a software engineer are curiosity, critical thinking,
                diligence, and communication. I love to learn new things and am compelled to find solutions to any
                challenges I face. I always ensure I have enough evidence and a strong understanding before making
                claims and decisions.
              </p>
            </div>
            <p className="mb-6 md:w-1/2 md:max-w-1/2 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
              I love and often help, work with, communicate, and share ideas with others while
              being open-minded. As a part of Gael Force Robotics at Dublin High, I have worked with other team members
              to meet our goals, growing my communication and engineering skills. I have gained many skills and learned
              much about myself from my experiences, and I hope to continue. Thank you for your time; please feel free
              to explore my website.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        {/*display my resume*/}
        <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col md:w-1/2 pr-5">
              <h1 className="mb-6 max-w-2xl text-2xl font-semibold leading-none tracking-tight text-primary md:text-3xl xl:text-4xl">
                Resume
              </h1>
              <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">
                Here is my resume. It contains my education, work experience, and projects.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:w-1/2 pr-5">
              <iframe src={"http://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=1uqjd6DnM56rylftQtsStEGiSQlBQF0pEoooFOnM76Y0&hl=en&embedded=true"}
                      width="70%" height="500px"
              />
            </div>
          </div>
        </div>
      </section>
      {/*projects */}
      <section className="">
        <div className="mx-auto max-w-screen-xl py-8 flex flex-col lg:py-16">
          <h1 className="mb-6 max-w-2xl text-2xl font-semibold leading-none tracking-tight text-primary md:text-3xl xl:text-4xl">
            Projects
          </h1>
          {/*project 1 using bento box flip*/}
          <div className="hero_bento opacity-0 grid grid-cols-2 grid-rows-1 gap-8">
            <BentoBoxFlip
              title="Resume Website"
              shortDescription="Personal Project"
              description="This is my first project. It is a project where I created a website that displays my resume."
              image="/raspberry_pi.jpg"
            />
            <BentoBoxFlip
              title="Gael Force Robotics"
              shortDescription="Dublin High School"
              description="This is my second project. It is a project where I created a website that displays my resume."
              image="/raspberry_pi.jpg"
            />
          </div>
        </div>
      </section>
      {/* bento boxes */}
      <section className="">
        <div className="mx-auto max-w-screen-xl xl:px-4 px-7 py-8 lg:pb-16 lg:pt-0">
          <div className="hero_bento opacity-0 grid grid-cols-1 gap-8 md:grid-cols-3 md:auto-rows-[300px] auto-rows-[400px]">
            {HERO_GRID_ITEMS.map((item) => {
              const i = item.type;

              if (i) {
                return (
                  <BentoBox
                    key={item.title}
                    size={i === 1 ? "twoxy" : i === 2 ? "onexy" : i === 3 ? "onexy" : i === 4 ? "onexy" : i === 5 ? "twox" : i === 6 ? "twox" : i === 7 ? "onexy" : "onexy"}
                    {...item}
                  />
                )
              }
            })}
          </div>
        </div>
      </section>
      <section className="">
        <div className="hero_marquee mx-auto max-w-screen-xl xl:px-4 px-7 py-8 lg:py-16">
          <h1 className="text-xl mx-auto max-w-screen-xl mb-16 font-bold text-primary uppercase tracking-wider">Supported by industry leaders</h1>
          <Marquee pauseOnHover={true} speed={50} className="mx-auto max-w-screen-xl overflow-hidden">
              <img src="/TVA_Logo_Trans.png" alt="TVA Logo" width={100} height={100} className="mr-10"/>
              <img src="/micronics.png" alt="Micronics" width={250} height={150} className="mr-10"/>
              <img src="/new_tva_logo.png" alt="TVA Logo" width={100} height={100} className="mr-10"/>
              <img src="/TVA_Logo_Trans.png" alt="TVA Logo" width={100} height={100} className="mr-10"/>
              <img src="/micronics.png" alt="Micronics" width={250} height={150} className="mr-10"/>
              <img src="/new_tva_logo.png" alt="TVA Logo" width={100} height={100} className="mr-10"/>
              <img src="/TVA_Logo_Trans.png" alt="TVA Logo" width={100} height={100} className="mr-10"/>
              <img src="/micronics.png" alt="Micronics" width={250} height={150} className="mr-10"/>
              <img src="/new_tva_logo.png" alt="TVA Logo" width={100} height={100} className="mr-10"/>
          </Marquee>
        </div>
      </section>
      <section className="">
        <div className="mx-auto flex max-w-screen-xl xl:px-4 px-7 py-8 lg:py-16 items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="mb-6 max-w-2xl text-4xl font-semibold leading-none tracking-tight text-primary md:text-5xl xl:text-6xl">
              What do we do?
            </h1>
            {/*use our tools to <span className="font-bold">deploy a network of seamlessly connected rockets with ease*/}
            <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed">
              Create innovative <span className="font-bold">educational tools and platforms</span>, aimed at <span className="font-bold">revolutionizing aerospace engineering education</span>.
              We provide students with the resources, mentorship, and collaborative opportunities needed to foster their growth
              and fuel their passion for exploration and innovation.
            </p>
          </div>
          <div className="w-1/2 hidden md:flex justify-center pl-20">
            <div className="glass-container rounded-xl">
              <Image className="rounded-xl" src="/teachingPlaceholder.jpg" alt="Rocket" width={500} height={350} />
            </div>
          </div>
        </div>
      </section>
      {/*<section className="">*/}
      {/*  <div className="mx-auto flex max-w-screen-xl xl:px-4 px-7 py-8 lg:py-16 items-center">*/}
      {/*    <div className="w-full flex justify-between">*/}
      {/*      <ImageWithDescription className="w-96" image="spaceShuttle.jpg" title="Comprehensive Programs" description="We enable learners to join our competitive teams, engage in meaningful research, and receive unparalleled support in their academic and professional pursuits." />*/}
      {/*      <ImageWithDescription className="w-96" image="teacher_project.jpg" title="Mentorship" description="Our experienced mentors provide personalized guidance, mentorship, and guidance to help students develop their skills and knowledge." />*/}
      {/*      <ImageWithDescription className="w-96" image="printer.jpg" title="Rocketry Tools" description="We provide tools that help students navigate the exciting world of rocketry with ease, including our pre-built rockets and web platform to manage a network of rockets." />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="">
        <div className="mx-auto flex max-w-screen-xl xl:px-4 px-7 py-8 lg:py-16 items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="mb-6 max-w-2xl text-4xl font-semibold leading-none tracking-tight text-primary md:text-5xl xl:text-6xl">
              Aerospace Engineering Education Platform
            </h1>
            {/*use our tools to <span className="font-bold">deploy a network of seamlessly connected rockets with ease*/}
            <p className="mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed">
              Our mentors are <span className="font-bold">highly experienced</span> in the field of Aerospace Engineering.
              Let us lead your aerospace journey, and <span className="font-bold">gain invaluable knowledge and experience. </span>
              Meet new people and <span className="font-bold">build a network of connections</span>
            </p>
          </div>
          <div className="w-1/2 hidden md:flex justify-center pl-20">
            <div className="glass-container rounded-xl">
              <Image className="rounded-xl" src="/teacher_project.jpg" alt="Rocket" width={500} height={350} />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto flex max-w-screen-xl xl:px-4 px-7 py-8 lg:py-16 items-center">
          <div className="md:w-1/2 w-full">
            <h1 className="mb-6 max-w-2xl text-4xl font-semibold leading-none tracking-tight text-primary md:text-5xl xl:text-6xl">
              Who We Are
            </h1>
            {/*use our tools to <span className="font-bold">deploy a network of seamlessly connected rockets with ease*/}
            <p className="flex flex-col gap-4 mb-6 max-w-2xl font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed">
              <span>
                We’re Tri-Valley Aerospace, a <span className="font-bold">non-profit dedicated to the development of technology in aerospace engineering and making aerospace education accessible
                for all</span> by sponsoring and providing mentorship to teams and facilitating and sponsoring research for public benefit.
              </span>
              <span>
                Our team consists of talented high schoolers and undergraduate students involved in industry, and all with past experience in aerospace engineering.
                All of us have experienced the struggles of learning to engineer, code, and gain access to resources which make a real difference.
              </span>
            </p>
            <Link className="bg-primary-900 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded" href={"/about"}>
              Learn More
            </Link>
          </div>
          <div className="w-1/2 hidden md:flex justify-center pl-20">
            <div className="glass-container rounded-xl">
            <Image className="rounded-xl" src="/friend_group.jpg" alt="Rocket" width={500} height={350} />
            </div>
          </div>
        </div>
      </section>
      {/*<section className="bg-primary">*/}
      {/*  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">*/}
      {/*    <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">*/}
      {/*      {[LP_GRID_ITEMS[0], LP_GRID_ITEMS[1], LP_GRID_ITEMS[2]].map((singleItem) => (*/}
      {/*        <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">*/}
      {/*          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-blue-700 bg-primary-900 lg:h-12 lg:w-12">*/}
      {/*            {singleItem.icon}*/}
      {/*          </div>*/}
      {/*          <h3 className="mb-2 text-xl font-bold text-primary">{singleItem.title}</h3>*/}
      {/*          <p className="text-gray-400">{singleItem.description}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  )
}
