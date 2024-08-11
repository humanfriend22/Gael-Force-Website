import NextImage from 'next/image';
import {officers} from '@/data/officers';

export interface Officer {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

export interface OfficerGroup {
  position: string;
  bio: string;
  officers:
    {
      name: string;
      imageUrl: string;
    }[];
}

export default function OfficersPage() {

  // @ts-ignore
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full">
      <div className="absolute w-full h-[500px]">
        <NextImage src="/gfr-bg.png" alt="teamphoto" fill priority className="object-cover opacity-40 object-middle"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--primary-background-color)] via-transparent to-[var(--primary-background-color)]"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-5 py-8 text-primary z-[5] sm:py-16">
        <section className="mb-52 flex flex-col items-center justify-center sm:flex-row lg:mb-64">
          <div className="flex h-min flex-col outlinedText">
            <h1 className="text-center text-7xl font-bold sm:text-8xl md:text-8xl lg:text-9xl">Club Officers</h1>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap items-start justify-center gap-x-3 gap-y-8">
            {/*{officers.map((member, index) => (*/}
            {/*  <div key={index} className="flex w-40 flex-col items-center min-h-60 group lg:min-h-72 lg:w-48">*/}
            {/*    <div className="relative h-32 w-32 lg:h-40 lg:w-40">*/}
            {/*      <NextImage src={member.image} alt={member.name} fill className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125" />*/}
            {/*    </div>*/}
            {/*    <p className="mt-2 w-full text-center font-extrabold text-gray-300 text-md lg:text-xl">{member.name}</p>*/}
            {/*    <p className="w-full text-center text-sm text-gray-300 lg:text-lg">{member.caption}</p>*/}
            {/*  </div>*/}
            {/*))}*/}
            {/* larger box with background, if more than one photo have them slightly overlap like a stack. Include bio and role. Some are of type Officer, some are of type OfficerGroup */}
            {officers.map((group: OfficerGroup | Officer, index) => {
              if ((group as OfficerGroup).officers) {
                return (
                  <div key={index}
                       className="flex w-full flex-col items-center rounded-xl bg-neutral-900 pb-3 shadow-xl min-h-72 group sm:min-h-56 sm:w-56 md:min-h-[450px] md:w-96">
                    <div className="flex flex-row items-center justify-center">
                      {(group as OfficerGroup).officers.map((officer, index) => (
                        <div key={index}
                             className="relative -mr-3 -ml-3 flex h-32 w-32 flex-row items-center justify-center md:h-40 md:w-40">
                          <NextImage src={officer.imageUrl} alt={officer.name} fill
                                     className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125"/>
                        </div>
                      ))}
                    </div>
                    <p
                      className="mt-2 w-full text-center font-black text-gray-300 text-md md:text-xl">{(group as OfficerGroup).officers.map((officer) => officer.name).join(" & ")}</p>
                    <p
                      className="mb-2 w-full text-center text-sm italic text-gray-300 md:text-lg">{(group as OfficerGroup).position}</p>
                    <p
                      className="w-full text-center text-sm text-gray-400 text-balance md:text-lg">{(group as OfficerGroup).bio}</p>
                  </div>
                )
              } else {
                return (
                  <div key={index}
                       className="flex w-full flex-col items-center rounded-xl bg-neutral-900 pb-3 shadow-xl min-h-72 group sm:min-h-56 sm:w-56 md:min-h-[450px] md:w-96">
                    <div className="relative h-32 w-32 md:h-52 md:w-52">
                      <NextImage src={(group as Officer).imageUrl} alt={(group as Officer).name} fill
                                 className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125"/>
                    </div>
                    <p
                      className="mt-2 w-full text-center font-black text-gray-300 text-md md:text-xl">{(group as Officer).name}</p>
                    <p
                      className="mb-2 w-full text-center text-sm italic text-gray-300 md:text-lg">{(group as Officer).position}</p>
                    <p
                      className="w-full text-center text-sm text-gray-400 text-balance md:text-lg">{(group as Officer).bio}</p>
                  </div>
                )
              }
            })}
          </div>
        </section>

      </div>
    </div>
  </>
}