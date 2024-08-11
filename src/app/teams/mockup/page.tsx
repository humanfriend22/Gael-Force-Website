"use client"
import NextImage from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {Gallery} from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalImage {
  id: number;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
}

export default function TeamPage() {

  const teamMembers = [
    {name: "Atiksh Paul", caption: "Team Captain", image: "/atikshsize.jpg"},
    {name: "Lukas Somwong", caption: "Programmer, Documentation, Build", image: "/atikshsize.jpg"},
    {name: "Someone Withlongname", caption: "Programmer", image: "/atikshsize.jpg"},
    {name: "Paulian Atiksh", caption: "Designer", image: "/atikshsize.jpg"},
    {name: "Mayden Jusset", caption: "Documentation", image: "/atikshsize.jpg"},
    {name: "Naman Garg", caption: "Team Admin", image: "/atikshsize.jpg"},
    {name: "Jia Aggarwal", caption: "Drive Team", image: "/atikshsize.jpg"},
    {name: "Atiksh Pa", caption: "Driver", image: "/atikshsize.jpg"},
    {name: "Atiksh Paulatraides", caption: "Public Relations", image: "/atikshsize.jpg"},
    {name: "Atiksh Sometingverylong", caption: "Coder", image: "/atikshsize.jpg"},
    {name: "Atiksh test", caption: "Notebooker, Secretary", image: "/atikshsize.jpg"},
    {name: "Atiksh Fury", caption: "Programmer, Builder, Notebooker", image: "/atikshsize.jpg"},
  ];

  const [images, setImages] = useState<GalImage[]>([])

  // @ts-ignore
  const getImgSize = (imgSrc, index) => {
    const newImg = new Image()
    newImg.onload = () => {
      setImages((images: GalImage[]) => {
        // Check if the image already exists in the state
        if (!images.some((image: GalImage) => image.id === index)) {
          return [
            ...images,
            {
              id: index,
              src: imgSrc,
              thumbnail: imgSrc,
              width: newImg.width,
              height: newImg.height,
            },
          ]
        }
        return images
      })
    }
    newImg.src = imgSrc
  }

  const galleryUrls = [
    "/botb2022.jpg",
    "/botb2024.jpg",
    "/girlpowered2024.jpg",
    "/gfrworlds2023.jpg",
    "/showcase2024.jpg",
    "/smilingofficers.jpg",
    "/steambooth.jpg",
    "/steamworlds.jpg",
    "/atikshsize.jpg",
    "/atikshsize.jpg",
  ];

  useEffect(() => {
    galleryUrls.map((url, index) => {
      getImgSize(url, index)
    })
  }, [])

  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: any) => setIndex(index);

  // @ts-ignore
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full">
      <div className="absolute -mt-24 w-full h-[500px]">
        <NextImage src="/steamworlds.jpg" alt="teamphoto" fill className="object-cover object-top opacity-40"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--primary-background-color)] via-transparent to-[var(--primary-background-color)]"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-5 py-8 text-primary z-[5]">
        <section className="mb-28 flex flex-col items-center justify-center sm:mb-64 sm:flex-row">
          <div className="flex h-min flex-col outlinedText">
            <h1 className="text-7xl font-bold sm:text-8xl md:text-9xl">5327M</h1>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Gael Force Mockup</h2>
          </div>
          <img src="/KLogo.png" alt="Team Logo" width={200} height={200}/>
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
              Team 5327S, known as "Gael Force Swag," is a dynamic group of high school students passionate about
              engineering, programming, and innovation. We pride ourselves on our collaborative spirit, problem-solving
              abilities, and dedication to excellence.
              Beyond competition, we're committed to promoting STEM education in our community. We regularly host
              workshops for younger students, participate in local tech fairs, and mentor aspiring robotics teams in
              nearby schools. We're also proud to have been recognized with numerous awards for our sportsmanship,
              teamwork, and technical achievements.
            </p>
          </div>
        </section>

        <section className="mb-28">
          <h2 className="mb-4 text-2xl font-semibold text-white">Team Socials</h2>
          <div className="flex space-x-4">
            <Link href=""><NextImage src="/instagram.png" alt="Instagram" width={32} height={32}/></Link>
            <Link href="#"><NextImage src="/youtube.png" alt="YouTube" width={32} height={32}/></Link>
            <Link href="#"><NextImage src="/email.png" alt="Email" width={32} height={32}/></Link>
            <Link href="#"><NextImage src="/tiktok.png" alt="TikTok" width={32} height={32}/></Link>
            <Link href="#"><NextImage src="/discord.png" alt="Discord" width={32} height={32}/></Link>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap items-start justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex w-40 flex-col items-center min-h-60 group lg:min-h-72 lg:w-48">
                <div className="relative h-32 w-32 lg:h-40 lg:w-40">
                  <NextImage src={member.image} alt={member.name} fill
                             className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125"/>
                </div>
                <p className="mt-2 w-full text-center font-extrabold text-gray-300 text-md lg:text-xl">{member.name}</p>
                <p className="w-full text-center text-sm text-gray-300 lg:text-lg">{member.caption}</p>
              </div>
            ))}
          </div>
        </section>


        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">Photos</h2>
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          <Lightbox
            styles={{container: {backgroundColor: "rgba(0, 0, 0, .8)"}}}
            slides={images}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </section>
      </div>
    </div>
  </>
}