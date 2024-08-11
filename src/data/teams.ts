export interface TeamType {
  teamNumber: string;
  teamName: string;
  captainName: string;
  memberNames: string[];
  imageUrl: string;
}

// UPDATE ANNUALLY
export const Teams: TeamType[] = [
  {
    teamNumber: "5327A",
    teamName: "Gael Force Ascension",
    captainName: "Sahith Ajay",
    memberNames: ["Johnathan", "Kimson", "Iji", "Sophia", "Anirudha", "Nathan", "Stephanie", "Aarav", "Phoebe", "Shrinidhi", "Advaith", "Rishi"],
    imageUrl: "/ALogo.jpg",
  },
  {
    teamNumber: "5327C",
    teamName: "Gael Force Corn",
    captainName: "Arpit Jena",
    memberNames: ["Kishore", "Aryan", "Sai", "Sudith", "Anish", "Shaaktiram", "Kevin", "Shane", "Rucha", "Prianka", "Amir", "Rohith", "Kavya", "Nirupa", "Aarav", "Nikhilesh"],
    imageUrl: "/CLogo.png",
  },
  {
    teamNumber: "5327K",
    teamName: "Gael Force Kreamers",
    captainName: "Aidan Wang",
    memberNames: ["Kaito", "Ayush", "William", "Lukas", "David", "Jayden", "Easton", "Landon", "Alicia", "Jay", "Austin", "Sean", "Angela", "Moon", "Jack"],
    imageUrl: "/KLogo.png",
  },
  {
    teamNumber: "5327R",
    teamName: "Gael Force Rams",
    captainName: "Kaushik Chandolu",
    memberNames: ["Aditya", "Arjun", "Sohail", "Chittresh", "Jayden", "Rishi", "Saketh", "Abhiram", "Samarth"],
    imageUrl: "/RLogo.jpg",
  },
  {
    teamNumber: "5327V",
    teamName: "Gael Force V",
    captainName: "Aarav Kashyap",
    memberNames: ["Ishaan", "Shikhar", "Rutvik", "Amato", "Kabir", "Raajika", "Eric", "Connor", "Sammy", "Samarth", "Tanisha"],
    imageUrl: "/VLogo.png",
  },
  {
    teamNumber: "5327Y",
    teamName: "Gael Force Y",
    captainName: "Arjun Chakraborty",
    memberNames: ["Laksh", "Vikrant", "Vivek", "Pranay", "Nakul", "Sonia", "Rithika", "Haziq", "Aadrika", "Sumedha", "Medha", "Ashish"],
    imageUrl: "/GFRLogo.png",
  }
];