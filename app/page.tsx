'use client'

import Image from "next/image";
import ButtonLink from "./design-system/components/Button";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animated/FadeIn";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function Home() {
  const deviceType = useScreenWidth();

  return (
    <>
      <main className="mx-auto flex flex-col gap-24 md:gap-32 lg:gap-44 mb-32">
        <div className="flex lg:w-full lg:relative">
          <div className="hero-black"></div>
          <div className="hidden lg:flex lg:flex-col lg:absolute lg:top-48 lg:z-10 lg:max-w-lg lg:mix-blend-difference title-text">
            <div className="ff-big-shoulders-display uppercase cl-white fs-M md:text-7xl lg:text-8xl lg:max-w-lg"  >
              Modern
            </div>
            <div className="ff-big-shoulders-display uppercase cl-white fs-M md:text-7xl lg:text-8xl lg:max-w-lg"  >
              Art Gallery
            </div>
          </div>
          <div className="md:flex lg:gap-0 lg:w-min bg-white">
            <div className="hero-image-container" >
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/assets/desktop/image-hero@2x.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/assets/tablet/image-hero@2x.jpg"
                />
                <source srcSet="/assets/mobile/image-hero@2x.jpg" />
                <Image
                  src="/assets/desktop/image-hero@2x.jpg"
                  alt="hero-image"
                  fill={true}
                />
              </picture>
            </div>
            <div className="mx-4 flex flex-col gap-8 mt-8 hero-text-container md:-translate-x-12 md:mt-36 md:mx-0 lg:-translate-x-16 lg:max-w-sm">
              <h1 className="ff-big-shoulders-display uppercase cl-black fs-M md:text-7xl lg:hidden">
                Modern Art Gallery
              </h1>
              <p className="ff-outfit cl-grey fs-S2 lg:w-3/4">
                The arts in the collection of the Modern Art Gallery all started
                from a spark of inspiration. Will these pieces inspire you?
                Visit us and find out.
              </p>
              <ButtonLink
                variant="right"
                text="Our Location"
                href="/location"
              />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 lg:px-40 flex flex-col gap-8 md:gap-3 lg:gap-8">
          <div >
            <div className="flex flex-col gap-6 md:flex-row-reverse md:gap-16 lg:gap-32 lg:justify-between">
              <div className="gallery-img1 relative w-full md:w-7/12">
                <picture className="">
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/desktop/image-grid-1@2x.jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/assets/tablet/image-grid-1@2x.jpg"
                  />
                  <source srcSet="/assets/mobile/image-grid-1@2x.jpg" />
                  <Image
                    src="/assets/desktop/image-grid@2x.jpg"
                    alt="gallery image"
                    // fill={true}
                    height={1000}
                    width={10000}
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </picture>
              </div>

              <div className="desc-container flex flex-col gap-5 md:w-5/12 md:items-start md:justify-center">
                <div >
                  <h2 className="ff-big-shoulders-display font-black desc-title uppercase cl-black">
                    Your day at the gallery
                  </h2>
                </div>
                <div >
                  <p className="ff-outfit desc-text cl-grey">
                    Wander through our distinct collections and find new
                    insights about our artists. Dive into the details of their
                    creative process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-[51.8229vw_1fr] md:grid-rows-[0.44146685472fr_1fr] md:h-max lg:grid-cols-[auto_1fr] lg:grid-rows-[0.auto_1fr] lg:gap-x-7 lg:gap-y-7">
            <div className="relative md:row-span-2">
              <div >
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/desktop/image-grid-2@2x.jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/assets/tablet/image-grid-2@2x.jpg"
                  />
                  <source srcSet="/assets/mobile/image-grid-2@2x.jpg" />
                  <Image
                    src="/assets/desktop/image-grid-2@2x.jpg"
                    alt="hero-image"
                    style={{ objectFit: "contain" }}
                    width={635}
                    height={720}
                  />
                </picture>
              </div>
            </div>

            <div >
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet="/assets/desktop/image-grid-3@2x.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/assets/tablet/image-grid-3@2x.jpg"
                />
                <source srcSet="/assets/mobile/image-grid-3@2x.jpg" />
                <Image
                  src="/assets/desktop/image-grid-3@2x.jpg"
                  alt="hero-image"
                  style={{ objectFit: "contain" }}
                  width={635}
                  height={720}
                />
              </picture>
            </div>

            <div
              className="bg-black p-6 flex flex-col gap-6 md:justify-center md:items-center md:py-20 md:px-7 lg:px-12 lg:py-16"
              id="desc-container"
            
              
            >
              <h2 className="ff-big-shoulders-display cl-white uppercase desc-title">
                Come & Be Inspired
              </h2>

              <p className="ff-outfit cl-white desc-text">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer background="black" />
    </>
  );
}
//
