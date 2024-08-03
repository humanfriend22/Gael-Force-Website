export interface PageMeta {
  title: string
  description: string
  author: string
  date: string
  image?: string
  slug: string
}

export interface TeamMeta {
  teamNumber: string
  teamName: string
  teamLogo?: string
  teamPicture: string
  captainName: string
  aboutSection: string
  teamColor?: string
  members: {
    name: string
    caption?: string
    image?: string
  }[]
  socials: {
    name: string
    link: string
  }[]
  gallery: string[]
}

export interface GalImage {
  id: number;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
}