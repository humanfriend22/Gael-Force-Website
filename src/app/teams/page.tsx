"use client"
import Image from 'next/image';

import Tilt from 'react-parallax-tilt';

import EmojiScene from "@/components/EmojiCanvas";
import {Team} from "@/components/Team";
import {Teams, TeamType} from "@/data/teams";

export default function Web() {
  return (
    <div className="mx-10 gap-16 flex flex-col pt-24 lg:pt-0 -mt-24 bg-[var(--primary-background-color)]">
      <section className="relative flex h-screen flex-col px-5">
        <div className="mx-auto flex h-1/2 max-w-screen-xl items-center justify-center sm:h-full">
          <div className="flex w-full flex-col lg:w-1/2">
            <h1
              className="mb-6 max-w-5xl text-5xl font-semibold leading-none tracking-tight text-primary text-balance sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Meet Our
              <div></div>
              <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">
                Competitive Teams
              </span>
            </h1>
            <p
              className="mb-6 max-w-2xl text-sm font-light text-gray-400 text-balance sm:text-lg md:text-lg lg:mb-8 lg:text-lg xl:text-xl 2xl:text-2xl">
              We currently have 6 competitive teams that compete in the VEX Robotics Competition. We have approximately
              80 students on teams, each made up of 10-15 students. Here you can find more information about each.
            </p>
          </div>
          <div className="hidden w-1/2 items-center justify-center pl-5 lg:flex">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="" tiltAngleXInitial={10} tiltAngleYInitial={-5}>
              <Image className="hidden rounded-lg ring-4 ring-gray-700 2xl:block" src="/steambooth.jpg" alt="Team Photo"
                     width={500} height={500} priority/>
              <Image className="hidden rounded-lg ring-4 ring-gray-700 xl:block 2xl:hidden" src="/steambooth.jpg"
                     alt="Team Photo" width={425} height={425} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 lg:block xl:hidden" src="/steambooth.jpg"
                     alt="Team Photo" width={325} height={325} priority/>
            </Tilt>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} tiltAngleXInitial={10} tiltAngleYInitial={-5}>
            <Image className="block rounded-lg ring-4 ring-gray-700 lg:hidden" src="/steambooth.jpg" alt="Team Photo"
                   width={550} height={550} priority/>
          </Tilt>
        </div>
        <EmojiScene/>
      </section>
      <section className="mb-20">
        <div className="mx-auto flex max-w-screen-xl flex-col px-5">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 xl:grid-cols-3">
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
