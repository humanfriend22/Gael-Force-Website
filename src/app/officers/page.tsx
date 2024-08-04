import NextImage from 'next/image';
import { officers } from '@/data/officers';

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
    { /* image in background takes up full width and fades to black downwards */ }
    <div className="relative w-full">
      <div className="absolute h-[500px] w-full">
        <NextImage src="/gfr-bg.png" alt="teamphoto" fill priority className="object-cover opacity-40 object-middle" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-background-color)] via-transparent to-[var(--primary-background-color)]" />
      </div>
      <div className="mx-auto max-w-screen-xl py-8 sm:py-16 px-5 text-primary z-[5] relative">
        <section className="flex sm:flex-row flex-col justify-center items-center mb-52 lg:mb-64">
          <div className="flex flex-col h-min outlinedText">
            <h1 className="lg:text-9xl md:text-8xl sm:text-8xl text-7xl font-bold text-center">Club Officers</h1>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap items-start justify-center gap-x-3 gap-y-8">
            {/*{officers.map((member, index) => (*/}
            {/*  <div key={index} className="lg:w-48 lg:min-h-72 w-40 min-h-60 flex flex-col items-center group">*/}
            {/*    <div className="lg:w-40 lg:h-40 w-32 h-32 relative">*/}
            {/*      <NextImage src={member.image} alt={member.name} fill className="object-cover rounded-full border-2 border-primary transition-all group-hover:brightness-125 group-hover:scale-105 group-hover:border-blue-600" />*/}
            {/*    </div>*/}
            {/*    <p className="text-center mt-2 text-gray-300 lg:text-xl text-md font-extrabold w-full">{member.name}</p>*/}
            {/*    <p className="text-center text-gray-300 w-full lg:text-lg text-sm">{member.caption}</p>*/}
            {/*  </div>*/}
            {/*))}*/}
            {/* larger box with background, if more than one photo have them slightly overlap like a stack. Include bio and role. Some are of type Officer, some are of type OfficerGroup */}
            {officers.map((group: OfficerGroup | Officer, index) => {
              if ((group as OfficerGroup).officers) {
                return (
                  <div key={index} className="md:w-96 md:min-h-[450px] sm:w-56 sm:min-h-56 w-full min-h-72 flex flex-col items-center group bg-neutral-900 rounded-xl shadow-xl pb-3">
                    <div className="flex flex-row justify-center items-center">
                      {(group as OfficerGroup).officers.map((officer, index) => (
                        <div key={index} className="md:w-40 md:h-40 w-32 h-32 flex flex-row justify-center items-center relative -mr-3 -ml-3">
                            <NextImage src={officer.imageUrl} alt={officer.name} fill className="object-cover rounded-full border-2 border-primary transition-all group-hover:brightness-125 group-hover:scale-105 group-hover:border-blue-600" />
                        </div>
                      ))}
                    </div>
                    <p className="text-center mt-2 text-gray-300 md:text-xl text-md font-black w-full">{(group as OfficerGroup).officers.map((officer) => officer.name).join(" & ")}</p>
                    <p className="text-center text-gray-300 w-full md:text-lg text-sm italic mb-2">{(group as OfficerGroup).position}</p>
                    <p className="text-center text-gray-400 w-full md:text-lg text-sm text-balance">{(group as OfficerGroup).bio}</p>
                  </div>
                )
              } else {
                return (
                  <div key={index} className="md:w-96 md:min-h-[450px] sm:w-56 sm:min-h-56 w-full min-h-72 flex flex-col items-center group bg-neutral-900 rounded-xl shadow-xl pb-3">
                    <div className="md:w-52 md:h-52 w-32 h-32 relative">
                      <NextImage src={(group as Officer).imageUrl} alt={(group as Officer).name} fill className="object-cover rounded-full border-2 border-primary transition-all group-hover:brightness-125 group-hover:scale-105 group-hover:border-blue-600" />
                    </div>
                    <p className="text-center mt-2 text-gray-300 md:text-xl text-md font-black w-full">{(group as Officer).name}</p>
                    <p className="text-center text-gray-300 w-full md:text-lg text-sm italic mb-2">{(group as Officer).position}</p>
                    <p className="text-center text-gray-400 w-full md:text-lg text-sm text-balance">{(group as Officer).bio}</p>
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