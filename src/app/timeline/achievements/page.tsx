"use client"
import {Achievements, AchievementYear, TeamAchievements} from "@/data/achievements";


export default function AchievementsPage() {

  return (
    <div className="mx-10 -mt-24 pt-24 sm:flex">
      <div className="my-6 sm:mx-auto sm:max-w-screen-xl">
        {Achievements.map((achievement: AchievementYear) => {
          return (
            <div className="relative w-full py-6 pl-8 group sm:pl-32">
              <div
                className="font-medium text-3xl from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r mb-1 sm:mb-0 w-fit">{achievement.seasonName}</div>
              <div
                className="group-last:before:hidden before:absolute after:absolute before:left-2 after:left-2 mb-1 after:box-content flex after:h-2 before:h-full after:w-2 before:-translate-x-1/2 after:-translate-x-1/2 before:translate-y-3 flex-col items-start before:self-start after:rounded-full after:border-4 after:border-slate-50 before:bg-slate-300 after:bg-indigo-600 before:px-px after:translate-y-1.5 sm:before:ml-[6.5rem] sm:after:ml-[6.5rem] sm:before:left-0 sm:after:left-0 sm:flex-row">
                <time
                  className="left-0 mb-3 inline-flex h-6 w-20 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600 translate-y-0.5 sm:absolute sm:mb-0">
                  {achievement.seasonYears}
                </time>
                <div className="text-xl font-bold text-primary">{achievement.tagLine}</div>
              </div>
              <div className="text-primary">
                {achievement.achievements.map((teamAchievement: TeamAchievements) => {
                  return (
                    <div className="flex flex-col items-start">
                      <div className="font-bold text-gray-400 underline">{teamAchievement.teamNumber}</div>
                      <ul className="list-inside list-disc">
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
