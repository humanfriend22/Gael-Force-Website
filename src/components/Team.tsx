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
      <div className="flex w-full flex-col items-center">
        <div className="mb-4 hidden rounded-lg p-2 md:flex">
          <Image
            src={imageUrl}
            className="rounded-md"
            alt={`Image of ${teamName}`}
            width={250}
            height={250}
          />
        </div>
        <div className="mb-4 flex rounded-lg p-2 md:hidden">
          <Image
            src={imageUrl}
            className="rounded-md"
            alt={`Image of ${teamName}`}
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="pb-3 text-center text-xl font-bold sm:text-3xl">{teamNumber}</h1>
          <h2 className="pb-3 text-center font-bold text-md sm:text-xl">{teamName}</h2>
          {captainName && <p className="pb-1 text-center text-sm font-bold text-neutral-500 sm:text-md">Led By <span className="italic">{captainName}</span></p>}
          {memberNames && (
            <p className="mt-2 list-inside list-disc text-center text-sm font-bold text-neutral-500 sm:text-md">
              <span className="italic">{memberNames.map((name) => name).join(", ")}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
