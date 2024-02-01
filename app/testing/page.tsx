'use client'
import { motion } from "framer-motion";
const TestPage = () => {
  return (
    <>
      <motion.div
        className="box"
        style={{width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "black"}}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >Hello</motion.div>
    </>
  );
};
export default TestPage;
