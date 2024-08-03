import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

const team = cva([
  // Base styles for the team component
  "flex items-center py-4 md:px-6 px-4 rounded-xl bg-neutral-900 backdrop-blur-2xl shadow-2xl hover:brightness-150 hover:cursor-pointer",
], {
  variants: {
    intent: {
      primary: ["text-primary"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface TeamProps extends VariantProps<typeof team> {
  imageUrl: string;
  teamName: string;
  teamNumber: string;
  captainName?: string; // Optional captain name
  memberNames?: string[]; // Optional array of member names
  className?: string;
}

export function Team({
  imageUrl,
  teamName,
  teamNumber,
  captainName,
  memberNames,
  intent,
  className,
}: TeamProps) {
  return (
    // <Link className={twMerge(team({ intent, className }))} href={`/teams/${teamNumber}`}>
    <div className={twMerge(team({ intent, className }))} >
      <div className="flex items-center flex-col w-full">
        <div className="rounded-lg md:flex p-2 mb-4 hidden">
          <Image
            src={imageUrl}
            className="rounded-md"
            alt={`Image of ${teamName}`}
            width={250}
            height={250}
          />
        </div>
        <div className="rounded-lg flex p-2 mb-4 md:hidden">
          <Image
            src={imageUrl}
            className="rounded-md"
            alt={`Image of ${teamName}`}
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="sm:text-3xl text-xl font-bold text-center pb-3">{teamNumber}</h1>
          <h2 className="sm:text-xl text-md font-bold text-center pb-3">{teamName}</h2>
          {captainName && <p className="text-neutral-500 font-bold pb-1 sm:text-md text-sm text-center">Led By <span className="italic">{captainName}</span></p>}
          {memberNames && (
            <p className="list-disc list-inside text-neutral-500 font-bold sm:text-md text-sm text-center mt-2">
              <span className="italic">{memberNames.map((name) => name).join(", ")}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
