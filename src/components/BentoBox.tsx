import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const bentoBox = cva(["w-full", "relative", "glass-container", "glass-container-hover", "rounded-lg", "md:rounded-xl", "transition-all", "duration-300", "overflow-hidden", "group", "text-primary",
  "lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px]"], {
  variants: {
    size: {
      onexy: [],
      twoxoney: ["md:col-span-2"],
    }
  },
  defaultVariants: {
    size: "onexy",
  },
})

export interface BentoBoxProps extends VariantProps<typeof bentoBox> {
  title: string
  description: string
  date?: string
  image: string
  className?: string
  link?: string
}


export function BentoBox({ size, className, title, description, date, image, link }: BentoBoxProps) {
  return (
    <div className={twMerge(bentoBox({ size, className }))}>
      <div
        className="opacity-0 group-hover:opacity-100 transition-all duration-500 animate-rotate absolute inset-0 h-full w-full rounded-full bg-[#8FB5E7]"
      ></div>
      <div className="relative h-full w-full">
        <Image src={image} alt="Rocket" width={1500} height={1500} className="h-full w-full rounded-lg object-cover brightness-[0.4] group-hover:brightness-[0.5]" />
        <div className="absolute inset-0 rounded-lg backdrop-saturate-[1.2]"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center outlinedText">
        <h1 className={`mt-4 ${size !== "onexy" ? "xl:text-5xl" : ""} xl:text-3xl lg:text-2xl md:text-xl text-lg font-extrabold text-center md:px-4 px-2 w-full`}>{title}</h1>
        {date && <p className={`mt-5 ${size !== "onexy" ? "xl:text-2xl" : ""} xl:text-xl lg:text-lg md:text-md text-sm font-bold leading-relaxed text-center text-balance md:px-4 px-2 w-full`}>{date}</p>}
        <p className={`mt-5 ${size !== "onexy" ? "xl:text-2xl" : ""} xl:text-xl lg:text-lg md:text-md text-sm font-bold leading-relaxed text-center text-balance md:px-4 px-2 w-full`}>{description}</p>
      </div>
      {link && <>
        <Link href={link} className="absolute inset-0 flex h-full w-full flex-col outlinedText"></Link>
        <FaArrowRightLong className="absolute right-8 bottom-5 h-8 w-8 outlinedText md:h-10 md:w-10" />
      </>}
    </div>
  );
}