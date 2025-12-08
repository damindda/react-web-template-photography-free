import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimateHeaderText from "./AnimateHeaderText";

// Animation constants
const ANIMATION_EASING = "power1.inOut";
const SCRUB_INTENSITY = 2.5;
const SCALE_OUT_VALUE = 2;

// Scroll trigger configuration
const SCROLL_TRIGGER_CONFIG = {
  trigger: ".main-banner-section",
  start: "top top",
  scrub: SCRUB_INTENSITY,
  end: "+=200%",
  pin: true,
};

// Animation selectors
const FADE_OUT_SELECTOR = ".fade-out";
const SCALE_OUT_SELECTOR = ".scale-out";

// Animation properties
const FADE_OUT_ANIMATION = { opacity: 0, ease: ANIMATION_EASING };
const SCALE_OUT_ANIMATION = { scale: SCALE_OUT_VALUE, ease: ANIMATION_EASING };

export const MainSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: SCROLL_TRIGGER_CONFIG,
    });

    tl.to(FADE_OUT_SELECTOR, FADE_OUT_ANIMATION).to(
      SCALE_OUT_SELECTOR,
      SCALE_OUT_ANIMATION
    );
  });

  return (
    <section className="main-banner-section">
      <div className="abs-center mt-80">
        <AnimateHeaderText
          text="|||||"
          className="text-white text-4xl header-text"
        />
      </div>
      <div className="size-full">
        <img src="/images/main-banner.jpg" alt="background" />
      </div>
    </section>
  );
};
