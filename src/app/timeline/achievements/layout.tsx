import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "See all the achievements of Gael Force Robotics throughout the years."
}

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
