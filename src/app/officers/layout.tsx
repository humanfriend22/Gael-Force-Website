import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Officers | GFR",
  description: "Meet the officers of Gael Force Robotics."
}

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
