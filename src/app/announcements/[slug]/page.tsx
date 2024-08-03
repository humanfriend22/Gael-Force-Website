import { getPostBySlug } from '@/lib/mdx'
import {PageMeta} from "@/lib/definitions";
import Image from 'next/image'

const getPageContent = async (slug: any): Promise<{ meta: PageMeta, content: any }> => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const Blog = async ({ params }: any) => {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <div className="mx-0 lg:mx-10 gap-16 flex flex-col pt-20 lg:pt-12 text-primary">
      <section className="relative h-full flex flex-col px-5 bg-[var(--primary-background-color)]">
        <section className="">
          <div className="mx-auto max-w-screen-md flex flex-col px-5">
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

export default Blog