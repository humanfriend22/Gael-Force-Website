import { getPostBySlug } from '@/lib/mdx'
import {PageMeta} from "@/lib/definitions";
import Image from 'next/image'

const getPageContent = async (slug: any): Promise<{ meta: PageMeta, content: any }> => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }: any) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const Page = async ({ params }: any) => {
  const { content } = await getPageContent(params.slug)
  const { meta } = await getPageContent(params.slug)

  return (
    <div className="mx-0 lg:mx-10 gap-16 flex flex-col pt-20 lg:pt-12 text-primary">
      <section className="relative h-full flex flex-col px-5 bg-[var(--primary-background-color)]">
        <section className="">
          <div className="mx-auto max-w-screen-md flex flex-col px-5">
            {/*<h1 id="about" className="mb-10 max-w-2xl scroll-m-24 font-semibold leading-none tracking-tight text-primary text-3xl md:text-4xl xl:text-5xl">*/}
            {/*  About Us*/}
            {/*</h1>*/}
            {/*<div className="flex flex-col lg:flex-row gap-2">*/}
            {/*  <div className="flex flex-col lg:w-1/2 pr-5">*/}
            {/*    <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">*/}
            {/*      We are an experienced and <span className="font-extrabold">completely student-run</span> high school club whose members work on both real life*/}
            {/*      engineering projects and participate in the VEX Robotics Competition.*/}
            {/*      Around <span className="font-extrabold">15 years old</span> now, our club takes pride in its members’ teamwork and problem solving skills.*/}
            {/*      We also heavily emphasize the engineering design process and ensure that all members have knowledge of*/}
            {/*      such engineering aspects through our yearly seminars.*/}
            {/*    </p>*/}
            {/*    <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">*/}
            {/*      Our club is driven by a strong passion for engineering. Due to this, we have always stressed the*/}
            {/*      importance of the <span className="font-extrabold">Engineering Design Process</span> and ensure that each and every one of our members*/}
            {/*      knows about proper design protocol through our Academy program. The <span className="font-extrabold">Gael Force Academy</span> program*/}
            {/*      displays another one of our priorities: sharing knowledge. We make sure that everyone has a place*/}
            {/*      in Gael Force, regardless of experience.*/}
            {/*    </p>*/}
            {/*    <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">*/}
            {/*      We think that a good team has more than just a good bot. Our teams stress a <span className="font-extrabold">well-rounded design process</span>.*/}
            {/*      Each of our teams focuses on their <span className="font-extrabold">Documentation</span> just as much as their bot performance.*/}
            {/*      The process of properly documenting work ensures that the team gains a concrete understanding of the*/}
            {/*      multitude of engineering concepts that go into every bot. The documentation is used by new members and*/}
            {/*      the Gael Force Academy as a reference tool to teach and reflect on the design process using live examples*/}
            {/*      from our numerous teams.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div className="flex flex-col lg:w-1/2">*/}
            {/*    <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">*/}
            {/*      Our club has roots that run deep. When we started off, Gael Force Robotics consisted of a single team of robotics*/}
            {/*      enthusiasts. It was a club purely for those with a burning passion for innovation and deep knowledge of engineering.*/}
            {/*      Throughout the years, we’ve managed to expand to a scale that none of the founding members could have imagined.*/}
            {/*      The club is now open to anyone with an interest, we can handle giving them the technical skills needed.*/}
            {/*    </p>*/}
            {/*    <p className="mb-6 font-light text-gray-400 md:text-lg lg:mb-8 lg:text-xl leading-relaxed text-balance">*/}
            {/*      We take pride in staying connected with our previous members.*/}
            {/*      Many of them stay active in our Discord servers and will pop into meets and competitions whenever they are able to.*/}
            {/*      Their wisdom and input is highly respected and extremely valuable. They are a vital part of our teaching system*/}
            {/*      and many of them end up mentoring other VRC teams after they graduate in order to give back to the community that*/}
            {/*      allowed them to learn so much.*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold leading-tight text-pretty'>{meta.title}</h1>
            <p className='text-xl mt-5 text-gray-400'>{meta.description}</p>
            {meta.author && <p className='text-sm mt-5'>{meta.author}</p>}
            {meta.date && <time className='text-sm text-gray-400 mt-1'>{meta.date}</time>}
            <hr className='mt-6'/>
            {meta.image &&
              <>
                <Image src={`/${meta.image}`} alt={meta.title} width={800} height={400} className='mt-6 w-full'/>
                <hr className='mt-6'/>
              </>
            }
            <div className='markdown mt-20'>
              {content}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Page