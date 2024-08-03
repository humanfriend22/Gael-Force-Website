"use client"
import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";
import {TeamType, Teams} from "@/data/teams";
import Hamburger from 'hamburger-react'
import {useEffect, useState} from "react";
import {useParams, usePathname, useRouter} from "next/navigation";



const navBar = cva(["flex", "items-center", "justify-center", "h-24",
  "w-full", "sticky", "top-0", "left-0", "", "z-10", "pr-4"], {
  variants: {
    intent: {
      primary: ["text-primary"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
})

export interface NavBarProps extends VariantProps<typeof navBar> {
  className?: string
}

export function NavBar({ intent, className }: NavBarProps) {
  const pathname = usePathname()
  const params = useParams()

  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [mobileTeamsExpanded, setMobileTeamsExpanded] = useState(false)
  const [mobileTimelinesExpanded, setMobileTimelinesExpanded] = useState(false)

  useEffect(() => {
    setHamburgerOpen(false)
    setMobileTeamsExpanded(false)
    setMobileTimelinesExpanded(false)
  }, [pathname, params])

  return <div className={twMerge(navBar({ intent, className })) + (hamburgerOpen ? " bg-[var(--primary-background-color)]" : " bg-gradient-to-b from-black/80 to-black/1")}>
    <div className="max-w-screen-xl 2xl:mx-4 ml-8 mr-4 flex w-full">
      <Link className="font-extrabold flex items-center gap-2 tracking-wide sm:text-lg text-sm" href="/">
        <Image src="/GFRLogo.png" alt="GFR Logo" width={50} height={50} className="hidden sm:block" />
        <Image src="/GFRLogo.png" alt="GFR Logo" width={30} height={30} className="block sm:hidden" />
        <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">Gael Force Robotics</span>
      </Link>
      <div className="lg:hidden ml-auto text-primary">
        <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen} direction="left" size={28} />
      </div>
      <div  className="hidden justify-center space-x-8 lg:flex ml-auto sm:text-lg text-sm [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
        <Link href="/#events" className="hover:text-[#DB4A4A]">Events</Link>
        <Link href="/announcements" className="hover:text-[#DB4A4A]">Blog</Link>
        <Link href="/#about" className="hover:text-[#DB4A4A]">About Us</Link>
        <Link href="/teams" className="hover:text-[#DB4A4A]">Teams</Link>
        {/*<div className="relative group">*/}
        {/*  <Link className="hover:text-[#DB4A4A]" href="/#teams">Teams <IoIosArrowDown className="inline" /></Link>*/}
        {/*  <div className="group-hover:max-h-80 group-hover:visible group-hover:p-3 mt-3 max-h-0 invisible overflow-hidden flex flex-col gap-3 absolute z-10 bg-neutral-800/80 text-white rounded-md p-0 max-w-[200px] min-w-[80px] transition-all duration-500">*/}
        {/*    {Teams.map((team: TeamType) => {*/}
        {/*      return <Link key={team.teamNumber} href={`/team/${team.teamNumber}`} className="hover:text-[#DB4A4A]">{team.teamNumber}</Link>*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Link href="/join" className="hover:text-[#DB4A4A]">Join Us</Link>
        <div className="relative group">
          <button className="hover:text-[#DB4A4A]">Timelines <IoIosArrowDown className="inline" /></button>
          <div className="group-hover:max-h-80 group-hover:visible group-hover:p-3 mt-3 max-h-0 invisible overflow-hidden flex flex-col gap-3 absolute z-10 bg-neutral-800/80 text-white rounded-md p-0 max-w-[200px] min-w-[80px] transition-all duration-500">
            <Link href="/timeline/photos" className="hover:text-[#DB4A4A]">Photos</Link>
            <Link href="/timeline/officers" className="hover:text-[#DB4A4A]">Officers</Link>
            <Link href="/timeline/achievements" className="hover:text-[#DB4A4A]">Awards</Link>
          </div>
        </div>
        {/*<div className="relative group">*/}
        {/*  <button className="hover:text-[#DB4A4A]">More <IoIosArrowDown className="inline" /></button>*/}
        {/*  <div className="group-hover:max-h-80 group-hover:visible group-hover:p-3 mt-3 max-h-0 invisible overflow-hidden flex flex-col gap-3 absolute z-10 bg-neutral-800/50 text-white rounded-md p-0 max-w-[200px] min-w-[100px] transition-all duration-500">*/}
        {/*    <Link href="/idk" className="hover:text-[#DB4A4A]">More Stuff</Link>*/}
        {/*    <Link href="/idk" className="hover:text-[#DB4A4A]">More</Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
    <div className={`lg:hidden ${hamburgerOpen ? "block" : "hidden"} w-full pb-5 pl-5 sm:text-xl text-lg font-medium bg-[var(--primary-background-color)] text-white absolute top-24 left-0 right-0 z-10`}>
      <div className="flex flex-col gap-3 p-4">
        <Link href="/#events" className="hover:text-[#DB4A4A]">Events</Link>
        <Link href="/announcements" className="hover:text-[#DB4A4A]">Blog</Link>
        <Link href="/#about" className="hover:text-[#DB4A4A]">About Us</Link>
        <Link href="/teams" className="hover:text-[#DB4A4A]">Teams</Link>
        {/*<div className="relative flex flex-col items-start">*/}
        {/*  <div className="hover:text-[#DB4A4A]">*/}
        {/*    <Link className="hover:text-[#DB4A4A]" href="/#teams">Teams</Link>*/}
        {/*    <IoIosArrowDown className="ml-2 inline" onClick={() => setMobileTeamsExpanded(!mobileTeamsExpanded)} />*/}
        {/*  </div>*/}
        {/*  <div className={`${mobileTeamsExpanded ? "max-h-80 visible mt-2" : "max-h-0 invisible"} overflow-hidden flex flex-col gap-3`}>*/}
        {/*    {Teams.map((team: TeamType) => {*/}
        {/*      return <Link key={team.teamNumber} href={`/team/${team.teamNumber}`} className="hover:text-[#DB4A4A] ml-4">{team.teamNumber}</Link>*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        <Link href="/join" className="hover:text-[#DB4A4A]">Join Us</Link>
        <div className="relative group">
          <button className="hover:text-[#DB4A4A]" onClick={() => setMobileTimelinesExpanded(!mobileTimelinesExpanded)}>Timelines <IoIosArrowDown className="ml-2 inline" /></button>
          <div className={`${mobileTimelinesExpanded ? "max-h-80 visible mt-2" : "max-h-0 invisible"} overflow-hidden flex flex-col gap-3`}>
            <Link href="/timeline/photos" className="hover:text-[#DB4A4A] ml-4">Photos</Link>
            <Link href="/timeline/officers" className="hover:text-[#DB4A4A] ml-4">Officers</Link>
            <Link href="/timeline/achievements" className="hover:text-[#DB4A4A] ml-4">Achievements</Link>
          </div>
        </div>
        {/*<div className="relative group">*/}
        {/*  <button className="hover:text-[#DB4A4A]">More <IoIosArrowDown className="inline" /></button>*/}
        {/*  <div className="group hover:max-h-80 hover:visible hover:p-3 mt-3 max-h-0 invisible overflow-hidden flex flex-col gap-3 absolute z-10 bg-neutral-800/50 text-white rounded-md p-0 max-w-[200px] min-w-[100px] transition-all duration-500">*/}
        {/*    <Link href="/idk" className="hover:text-[#DB4A4A]">More Stuff</Link>*/}
        {/*    <Link href="/idk" className="hover:text-[#DB4A4A]">More</Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  </div>
}
