import { motion, useInView } from "motion/react";
import { type JSX, useRef } from "react";

// Animation constants
const HIDDEN_STATE = {
  opacity: 0,
  y: -80,
};

const VISIBLE_STATE = {
  opacity: 1,
  y: 0,
  translation: {
    duration: 1,
  },
};

const CHARACTER_ANIMATION = {
  hidden: HIDDEN_STATE,
  visible: VISIBLE_STATE,
};

const STAGGER_CONFIG = {
  staggerChildren: 0.1,
};

const IN_VIEW_THRESHOLD = 0.8;

type AnimateHeaderTextProps = {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
};

const AnimateHeaderText = ({
  text,
  className,
  el: Wrapper = "h2",
}: AnimateHeaderTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: IN_VIEW_THRESHOLD });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={STAGGER_CONFIG}
      >
        {text.split("").map((char, i) => (
          <motion.span
            className="inline-block"
            variants={CHARACTER_ANIMATION}
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateHeaderText;
