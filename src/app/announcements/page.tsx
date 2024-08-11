import Link from "next/link";
import {getAllPostsMeta} from "@/lib/mdx";
import {PageMeta} from "@/lib/definitions";
import Image from "next/image";

export default async function AnnouncementsLayout() {
  const posts: PageMeta[] = await getAllPostsMeta()

  return (
    <div className="mx-10 flex flex-col gap-16 pt-24 text-primary">
      <section className="relative min-h-screen flex flex-col bg-[var(--primary-background-color)]">
        <section className="">
          <div className="mx-auto flex h-full max-w-screen-xl flex-col">
            <h1 className='text-3xl font-bold'>Announcements</h1>
            <hr className="my-4 border-primary"/>
            <div className='mt-6 grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 xl:grid-cols-3'>
              {posts?.map(post => (
                <Link
                  href={`announcements/${post.slug}`}
                  key={post?.title}
                  className='relative h-72 rounded-md bg-neutral-900 p-3 shadow-md hover:brightness-125 md:h-64 xl:h-64'
                >
                  {post.image &&
                    <Image src={`/${post.image}`} alt="Rocket" width={1500} height={1500}
                           className="h-full w-full rounded-sm object-cover brightness-[0.25]"/>
                  }
                  <div className="absolute inset-0 p-8 pt-12 outlinedText">
                    <h3 className='text-xl font-semibold md:text-md md:text-lg lg:text-xl'>{post.title}</h3>
                    <p className='mt-4 text-lg md:text-sm lg:text-md'>{post.author}</p>
                    <time className='text-lg text-gray-100 md:text-sm lg:text-md'>
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
