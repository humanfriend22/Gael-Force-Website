import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";
import NextImage from "next/image";

const footer = cva(["flex", "md:h-52", "h-[550px]", "w-full", "mx-auto", "max-w-screen-xl", "flex", "lg:gap-52", "gap-24", "flex-col", "md:flex-row", "mt-20", "xl:mx-auto", "mx-8", "px-7", "mb-10"], {
  variants: {
    intent: {
      primary: ["text-primary"],
    }
  },
  defaultVariants: {
    intent: "primary",
  },
})

export interface FooterProps extends VariantProps<typeof footer> {
  className?: string
}

export function Footer({ intent, className }: FooterProps) {
  return <div className={twMerge(footer({ intent, className }))}>
    <div className="flex flex-col gap-6">
      <a className="flex items-center gap-2 font-extrabold tracking-wide" href="/">
        <Image src="/GFRLogo.png" alt="GFR Logo" width={50} height={50} />
        Gael Force Robotics
      </a>
      <div className="flex flex-col gap-1">
        <h1 className="font-light">© 2024. All Rights Reserved.</h1>
        <h1 className="font-light">Developed by Lukas Somwong</h1>
      </div>

      <div className="flex space-x-4">
        <a target="_blank" href="https://www.instagram.com/gfr5327/"><NextImage src="/instagram.png" alt="Instagram" width={32} height={32} /></a>
        <a target="_blank" href="https://www.youtube.com/@GaelForceRobotics"><NextImage src="/youtube.png" alt="YouTube" width={32} height={32} /></a>
        <a target="_blank" href="https://discord.gg/tpNP8Pte7u"><NextImage src="/discord.png" alt="Discord" width={32} height={32} /></a>
        <a target="_blank" href="mailto:gaelforcerobotics@gmail.com"><NextImage src="/email.png" alt="Email" width={32} height={32} /></a>
      </div>
    </div>
    <div className="flex xl:flex-row sm:flex-col flex-row gap-8 sm:mt-3 mt-5 [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
      <div className="flex flex-col gap-8 sm:flex-row">
        <Link href="/#about" className="hover:text-[#DB4A4A]">About Us</Link>
        <Link href="/#events" className="hover:text-[#DB4A4A]">Events</Link>
        <Link href="/teams" className="hover:text-[#DB4A4A]">Teams</Link>
        <Link href="/join" className="hover:text-[#DB4A4A]">Join</Link>
      </div>
      <div className="flex flex-col gap-8 sm:flex-row">
        <Link href="/announcements" className="hover:text-[#DB4A4A]">Blog</Link>
        <a target="_blank" href="https://docs.google.com/presentation/d/1ZvMV6ziZNt63Mm3749HrOVxo322CvukH_DT45OQRQqM/edit?usp=sharing" className="hover:text-[#DB4A4A]">Sponsor Packet</a>
        <Link href="/officers" className="hover:text-[#DB4A4A]">Officers</Link>
        <Link href="/timeline/awards" className="hover:text-[#DB4A4A]">Awards</Link>
      </div>
    </div>
  </div>
}
