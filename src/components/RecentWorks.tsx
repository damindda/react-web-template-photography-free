import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import AnimateHeaderText from "./AnimateHeaderText";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    translation: {
      duration: 1,
    },
  },
};

const RecentWorks = () => {
  useGSAP(() => {
    gsap.set(".recent-works-section", { marginTop: "-120vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".recent-works-section",
          start: "top 60%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".about-me-video", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(".recent-works-section .img-box", {
      scrollTrigger: {
        trigger: ".recent-works-section",
        start: "top center",
        end: "80% center",
        scrub: 2,
      },
      y: -300,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <section className="recent-works-section">
      <motion.div className="max-w-3xl">
        <AnimateHeaderText
          text="Hello"
          className="text-white header-text-italic-theme text-8xl pb-10 font-black"
          el="h1"
        />
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.p
            className="text-white text-3xl pb-8"
            variants={defaultAnimation}
          >
            Thanks so much for visiting our site! I am Erica Bennon, the face
            behind Erica Bennon Photography.
          </motion.p>
          <motion.p
            className="text-white text-2xl pb-12"
            variants={defaultAnimation}
          >
            I am based in Manchester, United Kingdom. My photography is
            clean-cut and top-of-the-line quality, as apparent from my various
            styles if you already have visited my portfolio, you now already
            know.
          </motion.p>
          <motion.h2
            className="header-text-italic-theme text-8xl text-white"
            variants={defaultAnimation}
          >
            Recent Works
          </motion.h2>
          <motion.p
            className="text-white text-2xl pb-12"
            ref={ref}
            variants={defaultAnimation}
          >
            Here are my Recent photography. Showcase my few best works, love to
            book an appointment, give me a give me a shout today...!
          </motion.p>
        </motion.div>

        <img src="/images/photo-1-recent-works.jpg" alt="" />
        <img src="/images/photo-2-recent-works.jpg" alt="" />
      </motion.div>

      <div className="space-y-5 mt-96 img-box">
        <img src="/images/photo-3-recent-works.jpg" alt="" />
        <img src="/images/photo-4-recent-works.jpg" alt="" />
      </div>
    </section>
  );
};

export default RecentWorks;
