export interface AchievementYear {
  seasonName: string;
  seasonYears: string;
  tagLine?: string;
  achievements: TeamAchievements[];
}

export interface TeamAchievements {
  teamNumber: string;
  awards: string[];
}

// UPDATE ANNUALLY
export const Achievements: AchievementYear[] = [
  {
    seasonName: "In The Zone",
    seasonYears: "2017-2018",
    tagLine: "Cones!",
    achievements: [
      {
        teamNumber: "5327A",
        awards: ["Excellence Award @ DV (qualified to states)", "Design Award @ Vanden", "Excellence Award @ Tracy", "Tournament Finalists @ Tracy"]
      },
      {
        teamNumber: "5327C",
        awards: ["Create Award @ DRC", "Amaze Award @ Bell", "Build Award @ Riverdale", "Tournament Champions @ Tracy (qualified to states)", "Tournament Champions @ San Jose States (qualified to worlds)"]
      },
      {
        teamNumber: "5327R",
        awards: ["Design Award @ DV (qualified to states)", "Judges @ Vanden", "Design @ Sacramento States (qualified to worlds)"]
      },
      {
        teamNumber: "5327S",
        awards: ["Tournament Finalists @ DV", "Tournament Champions @ 7th Annual (qualified to states)", "Create Award @ 7th Annual", "Tournament Finalists @ Armijo", "Tournament Finalists @ Tracy", "Robot Skills Champion @ Tracy", "Think Award @ Sacramento States", "Create Award @ Worlds"]
      },
      {
        teamNumber: "5327X",
        awards: ["Excellence Award @ DRC", "Tournament Finalists @ DV (qualified to states)", "Create Award @ 7th Annual", "Tournament Finalists @ Armijo", "Robot Skills Champion @ Armijo", "Create Award @ Armijo", "Design Award @ CV", "Skills Finalists @ CV"]
      }
    ]
  },
  {
    seasonName: "Turning Point",
    seasonYears: "2018-2019",
    tagLine: "Flags!",
    achievements: []
  },
  {
    seasonName: "Tower Takeover",
    seasonYears: "2019-2020",
    tagLine: "Cubular!",
    achievements: []
  },
  {
    seasonName: "Change Up",
    seasonYears: "2020-2021",
    tagLine: "Virtual Competitions!",
    achievements: []
  },
  {
    seasonName: "Tipping Point",
    seasonYears: "Mo Goals!",
    tagLine: "Tipping!",
    achievements: []
  },
  {
    seasonName: "Spin Up",
    seasonYears: "2022-2023",
    tagLine: "Discs!",
    achievements: []
  },
  {
    seasonName: "Over Under",
    seasonYears: "2023-2024",
    tagLine: "Tribals!",
    achievements: [
      {
        teamNumber: "5327A",
        awards: ["Tournament Champions @ Central Valley #5 (Regional Qual)", "Tournament Champions @ Mecha Mayhem Sig (Worlds Qual)"]
      },
      {
        teamNumber: "5327B",
        awards: ["Tournament Finalist @ Panther Roar Tournament"]
      },
      {
        teamNumber: "5327J",
        awards: ["Design Award @ Central Valley #5", "Tournament Champions @ NorCal Silicon Valley #1 (Regional Qual)"]
      },
      {
        teamNumber: "5327K",
        awards: ["Think Award @ Winters Robotics FarmBots Tournament", "Design Award @ Central Valley (Regional Qual)", "Excellence Award @ Robolabs Tournament #3 (Regional Qual)", "Tournament Champions @ Maker Showcase - Tehama District Fair 3.0"]
      },
      {
        teamNumber: "5327R",
        awards: ["Amaze Award @ VRC, Duel in Dublin #1", "Tournament Champions @ Placer Robotics Tournament", "Tournament Champions @ River Islands High School Tournament (Regional Qual)", "Think Award @ River Islands High School Tournament"]
      },
      {
        teamNumber: "5327S",
        awards: ["Excellence Award @ Bay Area Cesar Chavez (Regional Qual)"]
      },
      {
        teamNumber: "5327V",
        awards: ["Build Award @ Robolabs Tournament #1", "Excellence Award @ Central Valley (Regional Qual)", "Excellence Award @ DVHS Robotics 13th Annual Tournament (Regional Qual)", "Tournament Finalist @ Panther Roar Tournament", "Design Award @ Panther Roar Tournament (Regional Qual)", "Amaze Award @ Tracy CA Region 2 Championship"]
      }
    ]
  }
]