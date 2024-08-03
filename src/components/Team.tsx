import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

const team = cva([
  // Base styles for the team component
  "flex items-center py-4 px-6 rounded-xl bg-neutral-900 backdrop-blur-2xl shadow-2xl",
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
    <div className={twMerge(team({ intent, className }))}>
      <div className="flex items-center sm:flex-row flex-col">
        <div className="bg-neutral-800 rounded-lg p-2 sm:mr-4 sm:mb-0 mb-4 shadow-lg shadow-black">
          <Image
            src={imageUrl}
            className="rounded-md"
            alt={`Image of ${teamName}`}
            width={250}
            height={250}
          />
        </div>
        <div className="ml-4 flex flex-col">
          <h1 className="text-3xl font-bold sm:text-left text-center pb-3">{teamNumber} - {teamName}</h1>
          {captainName && <p className="text-gray-500 font-bold pb-1">Captain: {captainName}</p>}
          {memberNames && (
            <p className="list-disc list-inside text-gray-500 font-bold">
              Members: {memberNames.map((name) => name).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
