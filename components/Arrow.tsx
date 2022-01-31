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
        type: 'spring',
        duration: 1,
        bounce: 0,
      },
    },
  },
};

export default function Arrow(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <motion.svg
        enableBackground="new 0 0 30 74"
        height="74"
        viewBox="0 0 30 74"
        width="30"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        >
          <motion.path d="m15.1 2.4v68.6" variants={draw} />
          <motion.path d="m29.2 57.1-14.1 14.2-14.2-14.2" variants={draw} />
        </g>
      </motion.svg>
    </div>
  );
}
