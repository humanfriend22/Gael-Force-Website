import Link from "next/link";
import {getAllPostsMeta} from "@/lib/mdx";
import {PageMeta} from "@/lib/definitions";
import Image from "next/image";

export default async function AnnouncementsLayout() {
  const posts: PageMeta[]  = await getAllPostsMeta()

  return (
    <div className="mx-10 gap-16 flex flex-col pt-24 text-primary">
      <section className="relative min-h-screen flex flex-col px-5 bg-[var(--primary-background-color)]">
        <section className="">
          <div className="mx-auto h-full max-w-screen-xl flex flex-col">
            <h1 className='text-3xl font-bold '>Announcements</h1>
            <hr className="border-primary my-4" />
            <div className='grid gap-6 mt-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-10'>
              {posts?.map(post => (
                <Link
                  href={`announcements/${post.slug}`}
                  key={post?.title}
                  className='p-3 relative rounded-md shadow-md bg-neutral-900 xl:h-64 md:h-64 h-72 hover:brightness-125'
                >
                  {post.image &&
                    <Image src={`/${post.image}`} alt="Rocket" width={1500} height={1500} className="rounded-sm h-full w-full brightness-[0.25] object-cover" />
                  }
                  <div className="p-8 pt-12 absolute inset-0 outlinedText">
                    <h3 className='lg:text-xl md:text-lg md:text-md text-xl font-semibold'>{post.title}</h3>
                    <p className='mt-4 lg:text-md md:text-sm text-lg'>{post.author}</p>
                    <time className='lg:text-md md:text-sm text-lg text-gray-100'>
                      {post.date}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
