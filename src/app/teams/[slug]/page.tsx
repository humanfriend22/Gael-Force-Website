import NextImage from 'next/image';
import Link from 'next/link';
import GalleryWithLightBox from "@/components/GalleryWithLightBox";

import {getTeamBySlug} from '@/lib/teams'
import {TeamMeta} from "@/lib/definitions";


const getPageContent = async (slug: any): Promise<{ content: TeamMeta }> => {
  const {content} = await getTeamBySlug(slug)
  return {content}
}

export default async function TeamPage({params}: any) {
  const {content} = await getPageContent(params.slug)

  return <>
    <div className="relative w-full">
      <div className="absolute -mt-24 w-full h-[500px]">
        <NextImage src={content.teamPicture} alt="teamphoto" fill className="object-cover object-top opacity-40"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--primary-background-color)] via-transparent to-[var(--primary-background-color)]"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-5 py-8 text-primary z-[5]">
        <section className="mb-28 flex flex-col items-center justify-center sm:mb-64 sm:flex-row">
          <div className="flex h-min flex-col outlinedText">
            <h1 className="text-7xl font-bold sm:text-8xl md:text-9xl">{content.teamNumber}</h1>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{content.teamName}</h2>
          </div>
          {content.teamLogo && <img src={content.teamLogo} alt="Team Logo" width={200} height={200}/>}
        </section>

        {/*<hr className="mb-10 border-primary" />*/}

        {/*<section className="mb-10">*/}
        {/*  <h2 className="mb-4 text-2xl font-semibold text-white">Notable Awards</h2>*/}
        {/*  <div className="flex overflow-x-auto space-x-4">*/}
        {/*    {awards.map((award, index) => (*/}
        {/*      <div key={index} className="flex-shrink-0">*/}
        {/*        <Image src={award.image} alt={award.name} width={200} height={200} />*/}
        {/*        <p className="mt-2 text-center text-gray-300">{award.name}</p>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="mb-16 flex items-center">
          <div className="flex flex-col">
            <h2 className="mb-4 text-2xl font-semibold text-white">About Us</h2>
            <p className="text-lg text-gray-400">
              {content.aboutSection}
            </p>
          </div>
        </section>

        {content.socials.length > 0 &&
          <section className="mb-28">
            <h2 className="mb-4 text-2xl font-semibold text-white">Team Socials</h2>
            <div className="flex space-x-4">
              {content.socials.map((social, index) => (
                <Link key={index} href={social.link}><NextImage src={`/${social.name}.png`} alt={social.name} width={32}
                                                                height={32}/></Link>
              ))}
            </div>
          </section>
        }

        {content.members.length > 0 &&
          <section className="mb-16">
            <div className="flex flex-wrap items-start justify-center">
              {content.members.map((member, index) => (
                <div key={index} className="flex w-40 flex-col items-center min-h-60 group lg:min-h-72 lg:w-48">
                  <div className="relative h-32 w-32 lg:h-40 lg:w-40">
                    <NextImage src={member.image || "/placeholder.png"} alt={member.name} fill
                               className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125"/>
                  </div>
                  <p
                    className="mt-2 w-full text-center font-extrabold text-gray-300 text-md lg:text-xl">{member.name}</p>
                  <p className="w-full text-center text-sm text-gray-300 lg:text-lg">{member.caption}</p>
                </div>
              ))}
            </div>
          </section>
        }

        {content.gallery.length > 0 &&
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">Photos</h2>
            <GalleryWithLightBox imageUrls={content.gallery}/>
          </section>
        }
      </div>
    </div>
  </>
}