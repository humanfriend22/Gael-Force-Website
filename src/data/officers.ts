export interface Officer {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

export interface OfficerGroup {
  position: string;
  bio: string;
  officers:
  {
    name: string;
    imageUrl: string;
  }[];
}

export const officers: Array<Officer | OfficerGroup> = [
  {
    name: "Atiksh Paul",
    position: "President",
    imageUrl: "/officers/atikshPaul.jpg",
    bio: "As President this season, I want to repay GFR for an amazing three years and expand the club to new heights, fostering a great environment for GFA, events, and competition teams!!"
  },
  {
    name: "Naman Garg",
    position: "Vice President",
    imageUrl: "/officers/namanGarg.jpg",
    bio: "Hey everyone! I’m Naman, and I’m excited to help lead GFR to an amazing High Stakes season, by working with competition teams, structuring events, and further developing GFA!"
  },
  {
    name: "Shaaktiram Balakumar",
    position: "Treasurer",
    imageUrl: "/officers/shaaktiramBalakumar.jpg",
    bio: "Hey y’all, I’m Shaakti, GFR’s Treasurer for 2024-2025. I’d like to ensure our club's wealth rivals that of Scrooge McDuck, setting us up for a bountiful future of spreading and engaging in robotics."
  },
  {
    name: "Easton Nguyen",
    position: "Secretary",
    imageUrl: "/officers/eastonNguyen.jpg",
    bio: "Hey everyone! im easton, your 2024-2025 secretary, and im looking forward to a great robotics season! im looking forward to seeing our club grow, excelling in tournaments, and raising the stakes at worlds."
  },
  {
    position: "PR/EDs",
    bio: "Hello Gaels! We are this year’s Public Relation/Event Director Officers. We aim to create lasting events that empower students to shine in robotics and allow the club to give back to the community!",
    officers: [
      {
        name: "Ishaan Choudhury",
        imageUrl: "/officers/ishaanChoudhury.jpg",
      },
      {
        name: "Jia Aggarwal",
        imageUrl: "/officers/jiaAggarwal.jpg",
      },
    ],
  },
  {
    position: "GFA Directors",
    bio: "We are this year’s GFA directors, the entry program to the club’s coveted competition teams. We both have maintained an unparalleled commitment to robotics in the past year, and we are yearning to teach interested students (you!) the fundamentals of robotics.",
    officers: [
      {
        name: "Kevin Geng",
        imageUrl: "/officers/kevinGeng.jpg",
      },
      {
        name: "Kaito Suzuki",
        imageUrl: "/officers/kaitoSuzuki.jpg",
      },
    ],
  }
];
