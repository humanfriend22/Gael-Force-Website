"use client";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {GalImage} from "@/lib/definitions";
import { useEffect, useState } from 'react';
import "yet-another-react-lightbox/styles.css";


interface GalleryProps {
  imageUrls: string[];
}

export default function GalleryWithLightBox({ imageUrls }: GalleryProps) {

  const [images, setImages] = useState<GalImage[]>([])

  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: any) => setIndex(index);

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

  useEffect(() => {
    imageUrls.map((url, index) => {
      getImgSize(url, index)
    })
  }, [])


  // @ts-ignore
  return <>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
  </>
}