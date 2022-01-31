import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const draw = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: {
        duration: 2.5,
      },
    },
  },
};

export default function Line(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <motion.svg
        enableBackground="new 0 0 950 668"
        viewBox="0 0 950 668"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        fill="none"
      >
        <motion.path
          d="m.2 3.4s20.6 189.4 164.5 179.6 261.5-214.2 421.7-93.7c162.4 122.1-106.8 246.3-62.1 378.1 45.1 133 175.5 97 261.5 113.3 86.1 16.3 150.1 66.2 162.8 87h-948c0 .1 1.8-662.1-.4-664.3z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
          variants={draw}
        />
      </motion.svg>
    </div>
  );
}
