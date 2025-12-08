import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

// Animation timing constants
const DURATION = 0.25;
const STAGGER = 0.025;

// Styling constants
const LINK_CLASS_NAME =
  "relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-7xl md:text-6xl lg:text-4xl lg:pr-12 lg:pl-24";

const animationVariants: Variants = {
  initial: {
    opacity: 1,
    color: "#fff",
  },
  hovered: {
    opacity: 0.5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface ContactMeLinkProps {
  children: string;
  href: string;
}

const ContactMeLink = ({ children, href }: ContactMeLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={LINK_CLASS_NAME}
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={animationVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i.toString()}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export const Contact = () => {
  return (
    <div className="absolute grid place-content-center gap-2px-8 py-24 -bottom-60">
      <ContactMeLink href="#">+4412345678</ContactMeLink>
      <ContactMeLink href="#">info@erica-test-photography.com</ContactMeLink>
    </div>
  );
};
