import {getPostBySlug} from '@/lib/mdx'
import {PageMeta} from "@/lib/definitions";
import Image from 'next/image'

const getPageContent = async (slug: any): Promise<{ meta: PageMeta, content: any }> => {
  const {meta, content} = await getPostBySlug(slug)
  return {meta, content}
}

const Blog = async ({params}: any) => {
  const {content, meta} = await getPageContent(params.slug)

  return (
    <div className="mx-0 flex flex-col gap-16 pt-20 text-primary lg:mx-10 lg:pt-12">
      <section className="relative h-full flex flex-col px-5 bg-[var(--primary-background-color)]">
        <section className="">
          <div className="mx-auto flex max-w-screen-md flex-col px-5">
            <h1 className='text-3xl font-bold leading-tight text-pretty sm:text-4xl md:text-6xl'>{meta.title}</h1>
            <p className='mt-5 text-xl text-gray-400'>{meta.description}</p>
            {meta.author && <p className='mt-5 text-sm'>{meta.author}</p>}
            {meta.date && <time className='mt-1 text-sm text-gray-400'>{meta.date}</time>}
            <hr className='mt-6'/>
            {meta.image &&
              <>
                <Image src={`/${meta.image}`} alt={meta.title} width={800} height={400} className='mt-3 w-full'/>
                <p className='mt-3 text-sm text-gray-400'>{meta.imageDescription}</p>
                <hr className='mt-3'/>
              </>
            }
            <div className='mt-20 markdown'>
              {content}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Blog