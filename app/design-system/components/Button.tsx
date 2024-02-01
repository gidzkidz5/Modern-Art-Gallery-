"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "left" | "right";
  text: string;
  href: string
}

const ButtonLink = ({ variant = "right", text, href }: ButtonProps) => {
  const router = useRouter();

  const redirect = () => {
    router.push(`${href}`)
  }

  if (variant === "left" || variant == undefined) {
    return (
      <motion.button className="w-full max-w-72" style={{ aspectRatio: "3.61111" }} onClick={redirect} whileTap={{scale: 0.9}}>
        <div className="cl-white flex buttonContainerAlt flex-row-reverse">
          <div
            className="py-6 p-7 firstchild ff-big-shoulders-display leading-normal uppercase font-extrabold"
            style={{ fontSize: "1.25rem", letterSpacing: "3.63px"}}
          >
            {text}
          </div>
          <div className="flex secondchild items-center justify-center">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
            </svg>
          </div>
        </div>
      </motion.button>
    );
  } else {
    return (
      <motion.button className="w-full max-w-72" style={{ aspectRatio: "3.61111" }} onClick={redirect} whileTap={{scale: 0.9}}>
        <div className="cl-white flex buttonContainer">
          <div
            className="py-6 p-7 firstchild ff-big-shoulders-display leading-normal uppercase font-extrabold"
            style={{ fontSize: "1.25rem", letterSpacing: "3.63px" }}
          >
            {text}
          </div>
          <div className="flex secondchild items-center justify-center">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
            </svg>
          </div>
        </div>
      </motion.button>
    );
  }


};


export default ButtonLink;

{
  /* <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0"/></svg> */
}
