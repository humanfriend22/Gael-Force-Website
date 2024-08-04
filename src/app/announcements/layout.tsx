import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Announcements | GFR",
  description: "Stay up to date with the latest news and announcements from Gael Force Robotics."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
