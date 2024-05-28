import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

const team = cva([
  // Base styles for the team component
  "flex items-center py-4 px-6 border rounded-md bg-black/30",
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
  captainName?: string; // Optional captain name
  memberNames?: string[]; // Optional array of member names
  className?: string;
}

export function Team({
  imageUrl,
  teamName,
  captainName,
  memberNames,
  intent,
  className,
}: TeamProps) {
  return (
    <div className={twMerge(team({ intent, className }))}>
      <div className="flex items-center">
        <Image
          src={imageUrl}
          className="rounded-md"
          alt={`Image of ${teamName}`}
          width={250}
          height={250}
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{teamName}</h1>
          {captainName && <p className="text-gray-600 font-bold">Captain: {captainName}</p>}
          {memberNames && (
            <p className="list-disc list-inside text-gray-600 font-bold">
              Members: {memberNames.map((name) => name).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
