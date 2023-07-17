import { useRef } from "react";
import LogoWhite from "../components/LogoWhite";
import MainSearchBar from "../features/search/components/mainSearchBar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeaderSearch() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgLy5 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bgLy4 = useTransform(scrollYProgress, [0, 2], ["0%", "125%"]);
  const bgLy3 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const bgLy2 = useTransform(scrollYProgress, [0, 1], ["0%", "175%"]);
  const bgLy1 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    // <div className=" bg-[url('/src/assets/pic/cover1.jpg')] relative h-screen w-full flex flex-col text-center items-center py-16 bg-cover">
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex flex-col text-center items-center py-16 bg-cover"
    >
      <motion.div
        className="absolute inset-0 z-0"
        // initial={{ opacity: 0 }}
        // transition={{
        //   duration: 3,
        //   // ease: "easeIn",
        //   times: [0, 1],
        //   repeat: 0,
        //   repeatDelay: 0,
        // }}
        style={{
          backgroundImage: `url('/src/assets/pic/whitecloud.jpeg')`,
          backgroundPosition: "buttom",
          backgroundSize: "cover",
          y: bgLy5,
        }}
      />
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('/src/assets/pic/bg-ly4.png')`,
          backgroundPosition: "buttom",
          backgroundSize: "cover",
          y: bgLy4,
        }}
      />
      {/* <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url('/src/assets/pic/bg-ly3.png')`,
          backgroundPosition: "buttom",
          backgroundSize: "cover",
          y: bgLy3,
        }}
      /> */}
      <motion.div
        className="absolute inset-0 z-[33]"
        style={{
          backgroundImage: `url('/src/assets/pic/bg-ly2.png')`,
          backgroundPosition: "buttom",
          backgroundSize: "cover",
          // y: bgLy2,
        }}
      />
      <motion.div
        className="absolute inset-0 z-40"
        style={{
          backgroundImage: `url('/src/assets/pic/bg-ly1.png')`,
          backgroundPosition: "buttom",
          backgroundSize: "cover",
          // y: bgLy1,
        }}
      />

      <div className=" w-[70%] h-full  flex flex-col text-center items-center  mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1],
            // scaleX: [0, 0, 1],
            transform: "translateY(10px)",
          }}
          transition={{
            duration: 3,
            // ease: "easeIn",
            times: [0, 1],
            repeat: 0,
            repeatDelay: 0,
          }}
          className="flex flex-col flex-1 gap-2  justify-start items-center z-0"
        >
          <div className="text-2xl text-c-white1 font-bold fill-c-white1">
            <LogoWhite />
          </div>
          <div className="text-2xl text-c-white1 w-screen ">
            Find your rent in , Fit your rent out
          </div>
        </motion.div>

        <motion.div
          className="flex-[2] w-full z-[41] flex flex-col items-center gap-10"
          style={{
            y: bgLy5,
          }}
        >
          <MainSearchBar />
        </motion.div>
      </div>
    </div>
  );
}
