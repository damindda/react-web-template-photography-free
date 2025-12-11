import { motion, easeOut } from "motion/react";
import { type SVGProps, useState } from "react";

// Animation constants
const ANIMATION_DURATION = 0.25;
const HOVER_SCALE = 1.1;
const TAP_SCALE = 0.95;
const STAGGER_AMOUNT = 0.05;
const STAGGER_DIRECTION = -8;
const TRANSITION_DURATION = 1;

// SVG constants
const SVG_SIZE = "32px";
const SVG_VIEWBOX = "0 0 400 300";

// Button styling
const BUTTON_CLASS =
  "relative w-20 h-20 rounded-full border-transparent bg-white/0 transition-colors hover:bg-white/20 hover:border-2 hover:border-amber-50";
const ICON_WRAPPER_CLASS = "cursor-pointer ml-6";

// SVG paths
const OPEN_PATH_1 =
  "M11.0647 275.327C1.41792 283.329 0.660645 298.331 9.37284 308.835C18.085 319.339 32.9686 321.368 42.6154 313.367L11.0647 275.327ZM368.67 42.9298C378.317 34.9287 379.074 19.9264 370.362 9.42242C361.65 -1.08152 346.766 -3.11068 337.12 4.89039L368.67 42.9298ZM42.6154 313.367L368.67 42.9298L337.12 4.89039L11.0647 275.327L42.6154 313.367Z";
const OPEN_PATH_2 =
  "M340.957 309.61C350.802 317.365 365.63 314.962 374.075 304.242C382.52 293.522 381.385 278.544 371.54 270.788L340.957 309.61ZM38.778 8.64749C28.933 0.891888 14.105 3.2952 5.66009 14.0152C-2.78482 24.7352 -1.64979 39.7137 8.19521 47.4693L38.778 8.64749ZM371.54 270.788L38.778 8.64749L8.19521 47.4693L340.957 309.61L371.54 270.788Z";
const CLOSED_PATH =
  "M22.6936 131.789C10.1604 131.789 0 142.853 0 156.5C0 170.147 10.1604 181.211 22.6936 181.211V131.789ZM446.306 181.211C458.839 181.211 469 170.147 469 156.5C469 142.853 458.839 131.789 446.306 131.789V181.211ZM22.6936 0C10.1604 0 0 11.0634 0 24.7105C0 38.3577 10.1604 49.4211 22.6936 49.4211V0ZM305.092 49.4211C317.625 49.4211 327.786 38.3577 327.786 24.7105C327.786 11.0634 317.625 0 305.092 0V49.4211ZM22.6936 263.579C10.1604 263.579 0 274.643 0 288.289C0 301.936 10.1604 313 22.6936 313V263.579ZM305.092 313C317.625 313 327.786 301.936 327.786 288.289C327.786 274.643 317.625 263.579 305.092 263.579V313ZM22.6936 181.211H446.306V131.789H22.6936V181.211ZM22.6936 49.4211H305.092V0H22.6936V49.4211ZM22.6936 313H305.092V263.579H22.6936V313Z";

// Animation variants
const MENU_ICON_VARIANTS = {
  open: {
    rotate: "0deg",
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_AMOUNT,
      staggerDirection: STAGGER_DIRECTION,
    },
  },
  closed: { rotate: "0deg", opacity: 1 },
};

const MOTION_G_ANIMATION = {
  transition: { duration: TRANSITION_DURATION, ease: easeOut },
  animate: {
    transition: { duration: ANIMATION_DURATION },
    scale: 1,
  },
  initial: { scale: 0 },
  variants: MENU_ICON_VARIANTS,
};

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      className={BUTTON_CLASS}
      onClick={() => setActive((state) => !state)}
      animate={active ? "open" : "closed"}
    >
      <motion.div
        whileHover={{ scale: HOVER_SCALE }}
        whileTap={{ scale: TAP_SCALE }}
        className={ICON_WRAPPER_CLASS}
      >
        <svg
          width={SVG_SIZE}
          height={SVG_SIZE}
          viewBox={SVG_VIEWBOX}
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title id="menu-icon">Menu Icon</title>
          <motion.g {...MOTION_G_ANIMATION}>
            {active ? (
              <g>
                <path d={OPEN_PATH_1} fill="#fff" />
                <path d={OPEN_PATH_2} fill="#fff" />
              </g>
            ) : (
              <g>
                <path d={CLOSED_PATH} fill="#fff" />
              </g>
            )}
          </motion.g>
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default MenuIcon;
