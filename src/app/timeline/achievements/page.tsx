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
import {Achievements, TeamAchievements, AchievementYear} from "@/data/achievements";


export default function Web() {
  // const container = useRef<HTMLDivElement>(null);
  // const prefersReducedMotion = userPrefersReducedMotion();
  // gsap.registerPlugin(useGSAP);
  //
  // useGSAP(() => {
  //   // If the user prefers reduced motion, set the opacity to 1
  //   if (prefersReducedMotion || window.location.hash) {
  //     gsap.set(
  //       ".hero_rest, .hero_heading_title",
  //       {opacity: 1}
  //     )
  //
  //     return
  //   }
  //
  //   const tl = gsap.timeline({ defaults: {ease: "power2.inOut"}})
  //
  //   tl.fromTo(".hero_heading_title", {scale: 0.5}, {scale: 1, opacity: 1, duration: 1.4})
  //     .fromTo(".hero_rest", {y: 60}, {y: 0, opacity: 1, duration: 1.5})
  //
  //
  //
  // }, {scope: container})
  //

  return (
    <div className="mx-10 gap-16 flex flex-col pt-24">
      <div className="my-6">
        {Achievements.map((achievement: AchievementYear) => {
          return (
            <div className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-medium text-3xl from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r mb-1 sm:mb-0 w-fit">{achievement.seasonName}</div>
              <div
                className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time
                  className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {achievement.seasonYears}
                </time>
                <div className="text-xl font-bold text-primary">{achievement.tagLine}</div>
              </div>
              <div className="text-primary">
                {achievement.achievements.map((teamAchievement: TeamAchievements) => {
                  return (
                    <div className="flex flex-col items-start">
                      <div className="font-bold text-gray-400 underline">{teamAchievement.teamNumber}</div>
                      <ul className="list-disc list-inside">
                        {teamAchievement.awards.map((achievement: string) => {
                          return (
                            <li className="text-gray-400">{achievement}</li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
