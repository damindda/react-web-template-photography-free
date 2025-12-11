import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// Animation constants
const ANIMATION_EASING = "power1.inOut";
const INITIAL_MARGIN_TOP = "-60vh";
const FADE_IN_DURATION = 1;
const VIDEO_SCRUB_DURATION = 3;
const SCRUB_INTENSITY = 2;

// Scroll trigger configuration
const SCROLL_TRIGGER_CONFIG = {
  trigger: ".second-video",
  start: "top top",
  end: "bottom top",
  scrub: SCRUB_INTENSITY,
  pin: true,
};

// Animation selectors
const VIDEO_SELECTOR = ".second-video";

const SecondVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(VIDEO_SELECTOR, { marginTop: INITIAL_MARGIN_TOP, opacity: 0 });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: SCROLL_TRIGGER_CONFIG,
    });

    // Fade in video
    tl.to(VIDEO_SELECTOR, {
      opacity: 1,
      duration: FADE_IN_DURATION,
      ease: ANIMATION_EASING,
    });

    // Play video with scroll
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current!.duration,
          duration: VIDEO_SCRUB_DURATION,
          ease: ANIMATION_EASING,
        });
      };
    }
  });

  return (
    <section className="second-video">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{
            objectPosition: "15% 0%",
          }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
