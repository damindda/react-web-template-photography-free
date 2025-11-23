import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimateHeaderText from "./AnimateHeaderText";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";

const MoreWorks = () => {
  useGSAP(() => {
    gsap.set(".more-works-section", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".more-works-section",
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(".more-works-section .img-box", {
      scrollTrigger: {
        trigger: ".more-works-section",
        start: "top center",
        end: "80% center",
        scrub: 2,
      },
      y: -200,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="more-works-section relative">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <img src="/images/more-works-1.jpg" alt="" />
        <img src="/images/birthday-1.jpg" alt="" />
        <img src="/images/new-born-1.jpg" alt="" />
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
          <img src="/images/more-works-3.jpg" alt="" />
          <img src="/images/more-works-4.jpg" alt="" />
          <img src="/images/more-works-2.jpg" alt="" />
          <img src="/images/more-works-1.jpg" alt="" />
          <img src="/images/photo-1-recent-works.jpg" alt="" />
          <img src="/images/photo-2-recent-works.jpg" alt="" />
          <img src="/images/photo-3-recent-works.jpg" alt="" />
          <img src="/images/photo-4-recent-works.jpg" alt="" />
        </div>
      </div>
      <Contact /> <SocialMedia />
    </section>
  );
};

export default MoreWorks;
