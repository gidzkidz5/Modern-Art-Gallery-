import ButtonLink from "@/app/design-system/components/Button"
import Image from "next/image"

const Location = () => {

    return (
      <div className="bg-grey lg:flex lg:justify-center">
        <main className="w-full bg-black">
        <div className="relative">
            <div className="absolute top:0 left-0 w-full md:left-14 lg:left-36">
                <ButtonLink 
                    variant="left"
                    text="Back to Home"
                    href="/"
                />
            </div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/desktop/image-map@2x.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/tablet/image-map@2x.png"
            />
            <source srcSet="/assets/mobile/image-map@2x.png" />
            <Image
              src="/assets/desktop/image-map@2x.png"
              alt="hero-image"
              style={{ objectFit: "contain" }}
              width={1440}
              height={1440}
            />
          </picture>
        </div>
        <div className="bg-black pt-12 pb-14 px-4 md:py-20 md:px-10 md:grid md:grid-cols-2 md:grid-flow-row lg:px-40 lg:pt-24 lg:pb-32">
            <h1 className="ff-big-shoulders-display uppercase cl-white desc-title mb-12 md:row-span-6">Our Location</h1>
            <h2 className="ff-big-shoulders-display cl-gold fs-S mb-5">99 King Street</h2>
            
            <p className="ff-outfit cl-white desc-text">NewPort</p>
            <p className="ff-outfit cl-white desc-text">RI 02840</p>
            <p className="ff-outfit cl-white desc-text mb-5">United States of America</p>
            
            <p className="ff-outfit cl-white desc-text">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>


        </div>
      </main>
      </div>
    )

}

export default Location