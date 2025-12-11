import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimateHeaderText from "./AnimateHeaderText";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";

// Animation constants
const ANIMATION_EASING = "power1.inOut";
const SCRUB_INTENSITY = 2;
const ANIMATION_DURATION = 1;
const INITIAL_MARGIN_TOP = "-80vh";
const Y_OFFSET = -200;

// Scroll trigger configurations
const FADE_OUT_TRIGGER = {
  trigger: ".more-works-section",
  start: "top 80%",
  end: "10% center",
  scrub: SCRUB_INTENSITY,
};

const IMAGE_BOX_TRIGGER = {
  trigger: ".more-works-section",
  start: "top center",
  end: "80% center",
  scrub: SCRUB_INTENSITY,
};

// Animation selectors
const SECTION_SELECTOR = ".more-works-section";
const VIDEO_SELECTOR = ".second-vd";
const IMAGE_BOX_SELECTOR = ".more-works-section .img-box";

// Image paths
const TOP_IMAGES = [
  "/images/more-works-1.jpg",
  "/images/birthday-1.jpg",
  "/images/new-born-1.jpg",
];

const BOTTOM_IMAGES = [
  "/images/more-works-3.jpg",
  "/images/more-works-4.jpg",
  "/images/more-works-2.jpg",
  "/images/more-works-1.jpg",
  "/images/photo-1-recent-works.jpg",
  "/images/photo-2-recent-works.jpg",
  "/images/photo-3-recent-works.jpg",
  "/images/photo-4-recent-works.jpg",
];

const MoreWorks = () => {
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

  return (
    <section className="more-works-section relative">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        {TOP_IMAGES.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
      <div className="lg:w-1/2">
        <div className="max-w-3xl">
          <span className="header-text-italic-theme text-6xl text-white">
            Check out my latest
          </span>
          <AnimateHeaderText
            text="Award"
            className="header-text text-8xl text-white uppercase font-black"
            el="h2"
          />
          <AnimateHeaderText
            text="Winning"
            className="header-text text-8xl text-white uppercase front-black"
            el="h2"
          />
          <h2 className="header-text-italic-theme text-6xl text-white">
            Photos collection
          </h2>
          <p className="text-white text-3xl pt-10 font-light">
            I specialise in wedding, maternity, newborn, birth, baby, child, and
            family photography. These are some of the award winning captures,
            and my featured works captivating intro, concise location-based
            services...!
          </p>
          <p className="text-white text-2xl pt-20 font-light">
            Capturing your best moments is a more than a job for, Every event is
            especial.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-end img-box lg:1/2 mt-8">
          {BOTTOM_IMAGES.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
      </div>
      <Contact /> <SocialMedia />
    </section>
  );
};

export default MoreWorks;
