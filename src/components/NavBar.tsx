import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";

import { FaShoppingCart } from "react-icons/fa";


const navBar = cva(["flex", "items-center", "justify-center", "h-24",
  "w-full", "fixed", "top-0", "left-0", "right-0", "z-20", "pr-4", "bg-gradient-to-b", "from-black/80", "to-black/1"], {
  variants: {
    intent: {
      primary: ["text-primary"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
})

export interface NavBarProps extends VariantProps<typeof navBar> {
  className?: string
}

export function NavBar({ intent, className }: NavBarProps) {
  return <div className={twMerge(navBar({ intent, className }))}>
    <div className="max-w-screen-xl 2xl:mx-4 mx-8 flex w-full">
      <Link className="font-extrabold flex items-center gap-2 tracking-wide sm:text-lg text-sm" href="/">
        <Image src="/GFRLogo.png" alt="GFR Logo" width={50} height={50} className="hidden sm:block" />
        <Image src="/GFRLogo.png" alt="GFR Logo" width={30} height={30} className="block sm:hidden" />
        <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">Gael Force Robotics</span>
      </Link>
      <div  className="hidden justify-center space-x-8 lg:flex ml-auto sm:text-lg text-sm [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
        <Link href="/#events" className="hover:text-[#DB4A4A]">Events</Link>
        <Link href="/#about" className="hover:text-[#DB4A4A]">About Us</Link>
        <Link href="/#teams" className="hover:text-[#DB4A4A]">Teams</Link>
        <Link href="/join" className="hover:text-[#DB4A4A]">Join Us</Link>
        <Link href="/timeline" className="hover:text-[#DB4A4A]">Timeline</Link>
      </div>
    </div>
  </div>
}
