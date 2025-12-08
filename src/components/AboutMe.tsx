import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// Animation constants
const ANIMATION_EASING = "power1.inOut";
const INITIAL_MARGIN_TOP = "-220vh";
const FADE_OUT_DELAY = 0.5;
const FADE_IN_DURATION = 2;
const VIDEO_SCRUB_DURATION = 3;

const SCROLL_TRIGGER_CONFIG = {
  trigger: ".about-me-video-container",
  start: "top top",
  end: "+=250% top",
  scrub: true,
  pin: true,
};

const AboutMe = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(".about-me-video-container", {
      marginTop: INITIAL_MARGIN_TOP,
      opacity: 0,
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: SCROLL_TRIGGER_CONFIG,
    });

    // Fade out main banner
    tl.to(".main-banner-section", {
      delay: FADE_OUT_DELAY,
      opacity: 0,
      ease: ANIMATION_EASING,
    });

    // Fade in about section
    tl.to(".about-me-video-container", {
      opacity: 1,
      duration: FADE_IN_DURATION,
      ease: ANIMATION_EASING,
    });

    // Play video with scroll
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current!.duration,
            duration: VIDEO_SCRUB_DURATION,
            ease: ANIMATION_EASING,
          },
          "<"
        );
      };
    }
  }, []);

  return (
    <section className="about-me-video-container">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="about-me-video"
        />
      </div>
    </section>
  );
};

export default AboutMe;
