import { motion, useInView } from "motion/react";
import { type JSX, useRef } from "react";

type AnimateHeaderTextPros = {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
};

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    translation: {
      duration: 1,
    },
  },
};
const AnimateHeaderText = ({ text, className, el: Wrapper = "h2" }: AnimateHeaderTextPros) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split("").map((char, i) => (
          <motion.span className="inline-block" variants={defaultAnimation} key={i.toString()}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateHeaderText;
