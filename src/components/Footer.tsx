import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";

const footer = cva(["flex", "lg:h-40", "h-96", "w-full", "mx-auto", "max-w-screen-xl", "flex", "sm:gap-52", "gap-10", "flex-col", "sm:flex-row", "mt-20", "xl:px-0", "px-7", "mb-10"], {
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
      <a className="font-extrabold flex items-center gap-2 tracking-wide" href="/">
        <Image src="/GFRLogo.png" alt="GFR Logo" width={50} height={50} />
        Gael Force Robotics
      </a>
      <h1 className="font-light">© 2024. All Rights Reserved.</h1>
    </div>
    <div className="flex lg:flex-row flex-col gap-8 mt-5 [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
      <Link href="/#events" className="hover:text-[#DB4A4A]">Events</Link>
      <Link href="/#about" className="hover:text-[#DB4A4A]">About Us</Link>
      <Link href="/#teams" className="hover:text-[#DB4A4A]">Teams</Link>
      <Link href="/join" className="hover:text-[#DB4A4A]">Join Us</Link>
      <Link href="/timeline" className="hover:text-[#DB4A4A]">Timeline</Link>
    </div>
  </div>
}
