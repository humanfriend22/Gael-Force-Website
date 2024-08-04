export interface EventType {
  title: string;
  date: string;
  description: string;
  image: string;
  size: "onexy" | "twoxoney"; // take up one column or two columns
}

// UPDATE ANNUALLY
export const events: EventType[] = [
  {
    title: "Fall GFR Showcase",
    date: "August 30, 2024",
    description: "Meet us and learn about what we do and see if you want to join this season!",
    image: "/showcase2024.jpg",
    size: "onexy",
  },
  {
    title: "GirlPowered Workshop",
    date: "Oct 11-12, 2024",
    description: "Promoting diversity in STEM, girls are invited to learn about robotics and engineering!",
    image: "/girlpowered2024.jpg",
    size: "onexy",
  },
  {
    title: "Battle of The Bay",
    date: "Jan 19, 2025",
    description: "Our annual competition where teams from all over the Bay Area come to compete!",
    image: "/botb2024.jpg",
    size: "twoxoney",
  },
  {
    title: "All-Inclusive Workshop",
    date: "Nov 11-12, 2024",
    description: "A workshop for all students to learn about robotics and engineering!",
    image: "/showcase2024.jpg",
    size: "onexy",
  },
  {
    title: "Battle of The Bay Skills",
    date: "Feb 22, 2025",
    description: "Come to our late season skills event to get in your last minute skills scores in!",
    image: "/atikshsize.jpg",
    size: "onexy",
  },
];