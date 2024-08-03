import NextImage from 'next/image';
import Link from 'next/link';
import GalleryWithLightBox from "@/components/GalleryWithLightBox";

import { getTeamBySlug } from '@/lib/teams'
import { TeamMeta } from "@/lib/definitions";


const getPageContent = async (slug: any): Promise<{ content: TeamMeta }> => {
  const { content } = await getTeamBySlug(slug)
  return { content }
}

export default async function TeamPage({ params }: any) {
  const { content } = await getPageContent(params.slug)

  return <>
    <div className="relative w-full">
      <div className="absolute h-[500px] w-full -mt-24">
        <NextImage src={content.teamPicture} alt="teamphoto" fill className="object-cover opacity-40 object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-background-color)] via-transparent to-[var(--primary-background-color)]" />
      </div>
      <div className="mx-auto max-w-screen-xl py-8 px-5 text-primary z-[5] relative">
        <section className="flex sm:flex-row flex-col justify-center items-center mb-28 sm:mb-64">
          <div className="flex flex-col h-min outlinedText">
            <h1 className="md:text-9xl sm:text-8xl text-7xl font-bold">{content.teamNumber}</h1>
            <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold">{content.teamName}</h2>
          </div>
          {content.teamLogo && <img src={content.teamLogo} alt="Team Logo" width={200} height={200} />}
        </section>

        {/*<hr className="border-primary mb-10" />*/}

        {/*<section className="mb-10">*/}
        {/*  <h2 className="text-2xl font-semibold mb-4 text-white">Notable Awards</h2>*/}
        {/*  <div className="flex overflow-x-auto space-x-4">*/}
        {/*    {awards.map((award, index) => (*/}
        {/*      <div key={index} className="flex-shrink-0">*/}
        {/*        <Image src={award.image} alt={award.name} width={200} height={200} />*/}
        {/*        <p className="text-center mt-2 text-gray-300">{award.name}</p>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="flex items-center mb-16">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-white">About Us</h2>
            <p className="text-lg text-gray-400">
              {content.aboutSection}
            </p>
          </div>
        </section>

        {content.socials.length > 0 &&
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-4 text-white">Team Socials</h2>
            <div className="flex space-x-4">
              {content.socials.map((social, index) => (
                <Link key={index} href={social.link}><NextImage src={`/${social.name}.png`} alt={social.name} width={32} height={32} /></Link>
              ))}
            </div>
          </section>
        }

        {content.members.length > 0 &&
          <section className="mb-16">
            <div className="flex flex-wrap items-start justify-center">
              {content.members.map((member, index) => (
                <div key={index} className="lg:w-48 lg:min-h-72 w-40 min-h-60 flex flex-col items-center group">
                  <div className="lg:w-40 lg:h-40 w-32 h-32 relative">
                    <NextImage src={member.image || "/placeholder.png"} alt={member.name} fill className="object-cover rounded-full border-2 border-primary transition-all group-hover:brightness-125 group-hover:scale-105 group-hover:border-blue-600" />
                  </div>
                  <p className="text-center mt-2 text-gray-300 lg:text-xl text-md font-extrabold w-full">{member.name}</p>
                  <p className="text-center text-gray-300 w-full lg:text-lg text-sm">{member.caption}</p>
                </div>
              ))}
            </div>
          </section>
        }

        {content.gallery.length > 0 &&
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Photos</h2>
            <GalleryWithLightBox imageUrls={content.gallery} />
          </section>
        }
      </div>
    </div>
  </>
}