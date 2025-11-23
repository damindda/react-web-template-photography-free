import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const AboutMe = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".about-me-video-container", { marginTop: "-220vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me-video-container",
        start: "top top",
        end: "+=250% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".main-banner-section", {
      delay: 0.5,
      opacity: 0,
      ease: "power1.inOut",
    });
    tl.to(".about-me-video-container", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<",
      );
    };
  }, []);

  return (
    <section className="about-me-video-container">
      <div className="h-dvh">
        <video ref={videoRef} muted playsInline preload="auto" src="/videos/output1.mp4" className="about-me-video" />
      </div>
    </section>
  );
};

export default AboutMe;
