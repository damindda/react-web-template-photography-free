import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import AnimateHeaderText from "./AnimateHeaderText";

// Animation constants
const ANIMATION_EASING = "power1.inOut";
const SCRUB_INTENSITY = 2;
const ANIMATION_DURATION = 1;
const INITIAL_MARGIN_TOP = "-120vh";
const Y_OFFSET = -300;
const IN_VIEW_THRESHOLD = 0.8;

// Animation variants
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

// Scroll trigger configurations
const FADE_OUT_TRIGGER = {
  trigger: ".recent-works-section",
  start: "top 60%",
  end: "10% center",
  scrub: SCRUB_INTENSITY,
};

const IMAGE_BOX_TRIGGER = {
  trigger: ".recent-works-section",
  start: "top center",
  end: "80% center",
  scrub: SCRUB_INTENSITY,
};

// Animation selectors
const SECTION_SELECTOR = ".recent-works-section";
const VIDEO_SELECTOR = ".about-me-video";
const IMAGE_BOX_SELECTOR = ".recent-works-section .img-box";

// Image paths
const FEATURED_IMAGES = [
  "/images/photo-1-recent-works.jpg",
  "/images/photo-2-recent-works.jpg",
];

const GALLERY_IMAGES = [
  "/images/photo-3-recent-works.jpg",
  "/images/photo-4-recent-works.jpg",
];

const RecentWorks = () => {
  useGSAP(() => {
    // Set initial state
    gsap.set(SECTION_SELECTOR, { marginTop: INITIAL_MARGIN_TOP });

    // Fade out previous video
    gsap
      .timeline({
        scrollTrigger: FADE_OUT_TRIGGER,
      })
      .to(VIDEO_SELECTOR, {
        opacity: 0,
        duration: ANIMATION_DURATION,
        ease: ANIMATION_EASING,
      });

    // Animate image box position
    gsap.to(IMAGE_BOX_SELECTOR, {
      scrollTrigger: IMAGE_BOX_TRIGGER,
      y: Y_OFFSET,
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASING,
    });
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: IN_VIEW_THRESHOLD });

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

        {FEATURED_IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </motion.div>

      <div className="space-y-5 mt-96 img-box">
        {GALLERY_IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
