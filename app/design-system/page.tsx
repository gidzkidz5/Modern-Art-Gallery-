'use client'
import FadeIn from "@/components/animated/FadeIn";
import ButtonLink from "./components/Button";
import Color from "./components/Color";
import Title from "./components/Title";
import Typography, { TypographyProps } from "./components/Typography";
import { motion } from "framer-motion";

export default function DesignPage() {
  const DesignColors = [
    {
      hex: "D5966C",
      RGB: [213, 150, 108],
      HSV: [24, 49, 84],
    },
    {
      hex: "151515",
      RGB: [21, 21, 21],
      HSV: [0, 0, 8],
    },
    {
      hex: "444444",
      RGB: [68, 68, 68],
      HSV: [0, 0, 27],
    },
    {
      hex: "FFFFFF",
      RGB: [255, 255, 255],
      HSV: [0, 0, 100],
    },
  ];

  const DesignTypographyLeft: TypographyProps[] = [
    {
      heading: "Heading(XL)",
      font: "big",
      fontSize: 96,
      lineHeight: 88,
      text: "MORBI IN SEM PLACERA",
      className: "fs-XL",
    },
    {
      heading: "Heading(L)",
      font: "big",
      fontSize: 70,
      lineHeight: 70,
      text: "Praesent dapibus neq",
      className: "fs-L",
    },
    {
      heading: "Heading(M)",
      font: "big",
      fontSize: 60,
      lineHeight: 50,
      text: "Phasellus ultrices n",
      className: "fs-M",
    },
    {
      heading: "Heading(S)",
      font: "big",
      fontSize: 36,
      lineHeight: 36,
      text: "Nam nulla quam gravi",
      className: "fs-S",
    },
  ];

  const DesignTypographyRight: TypographyProps[] = [
    {
      heading: "Body(M)",
      font: "normal",
      fontSize: 22,
      lineHeight: 32,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      text2:
        " Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis.",
      className: "fs-M2",
    },
    {
      heading: "Body(S)",
      font: "normal",
      fontSize: 18,
      lineHeight: 28,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
      className: "fs-S2",
    },
  ];

  return (
    <main id="designSystem" className="mx-auto pt-24 flex flex-col gap-32">
      <div id="colors" className="flex flex-col gap-10">
        <Title title="COLORS" />
        <div className="flex gap-7 w-full justify-between">
          {DesignColors.map((color, id) => (
            <Color key={id} hex={color.hex} RGB={color.RGB} HSV={color.HSV} />
          ))}
        </div>
      </div>

      <div id="typography" className="">
        <Title title="TYPOGRAPHY" className="mb-10" />
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-16 w-full">
            {DesignTypographyLeft.map((item) => (
              <Typography
                key={item.heading}
                heading={item.heading}
                font={item.font}
                fontSize={item.fontSize}
                lineHeight={item.lineHeight}
                text={item.text}
                text2={item.text2}
                className={item.className}
              />
            ))}
          </div>
          <div className="flex flex-col gap-16 w-full">
            {DesignTypographyRight.map((item) => (
              <Typography
                key={item.heading}
                heading={item.heading}
                font={item.font}
                fontSize={item.fontSize}
                lineHeight={item.lineHeight}
                text={item.text}
                text2={item.text2}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>

      <div id="buttonsDesign" style={{ marginBottom: "150px" }}>
        <FadeIn>
          <Title title="BUTTONS" className="mb-10" />
        </FadeIn>
        <FadeIn>
          <div className="px-36 flex justify-between">
            <ButtonLink variant="right" text="Our Location" href="/" />
            <ButtonLink variant="left" text="Our Location" href="/" />
          </div>
        </FadeIn>
       
      </div>
    </main>
  );
}
