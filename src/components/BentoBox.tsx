import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const bentoBox = cva(["w-full", "relative", "glass-container", "glass-container-hover", "rounded-lg", "md:rounded-xl", "transition-all", "duration-300", "overflow-hidden", "group", "text-primary"], {
  variants: {
    size: {
      onexy: [],
      twoxy: ["md:col-span-2", "md:row-span-2"],
      twox: ["md:col-span-2"],
      threex: ["md:col-span-3"],
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
      <div className="relative w-full h-full">
        <Image src={image} alt="Rocket" width={1500} height={1500} className="rounded-lg h-full w-full brightness-[0.4] group-hover:brightness-[0.5] object-cover" />
        <div className="absolute inset-0 backdrop-saturate-[1.2] rounded-lg"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center outlinedText">
        <h1 className={`mt-4 ${size !== "onexy" ? "lg:text-5xl" : ""} text-3xl font-extrabold text-center px-4 sm:w-full w-3/4`}>{title}</h1>
        {date && <p className={`mt-5 ${size !== "onexy" ? "lg:text-2xl" : ""} text-xl font-bold leading-relaxed text-center text-balance px-4 md:w-full w-3/5`}>{date}</p>}
        <p className={`mt-5 ${size !== "onexy" ? "lg:text-2xl" : ""} text-xl font-bold leading-relaxed text-center text-balance px-4 md:w-full w-3/5`}>{description}</p>
      </div>
      {link && <>
        <Link href={link} className="absolute inset-0 flex flex-col outlinedText h-full w-full"></Link>
        <FaArrowRightLong className="absolute right-8 bottom-5 outlinedText h-10 w-10" />
      </>}
    </div>
  );
}