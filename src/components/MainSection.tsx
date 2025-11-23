import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimateHeaderText from "./AnimateHeaderText";

export const MainSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-banner-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" }).to(".scale-out", {
      scale: 2,
      ease: "power1.inOut",
    });
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
