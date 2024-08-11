import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Join Us | GFR",
  description: "Join Gael Force Robotics and become a part of our competitive robotics club."
}

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
