import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Teams | GFR",
  description: "Meet the active competitive teams of Gael Force Robotics."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
