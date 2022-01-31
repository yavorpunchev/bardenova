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
        duration: 5,
      },
    },
  },
};

export default function Flower(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <motion.svg
        viewBox="0 0 844 690"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        fill="none"
      >
        <motion.path
          d="m327.1689 91.46328c-3.628 29.105 7.027 59.304 4.779 88.835-1.968 25.842-18.758 54.0808-44.649 55.22879-10.061.446-19.898-3.34189-28.53-8.5293-24.436-14.6845-40.363-39.75549-56.373-63.3435-16.011-23.589-34.345-47.652-60.798-58.28-37.482-15.058-86.14211 11.805-71.1425 56.168 4.3405 12.838 13.74209 24.318 24.01109 32.917 14.3244 11.996 33.0744 17.835 48.0724 28.983 17.306 12.8634 19.705 22.174 13.324 41.6153-6.702 20.4198-29.55 22.98951-48.251 29.7647-42.4641 15.3841-86.2738 30.60559-102.33913 76.9957-5.8883 17.005-6.49068 44.2809 6.60433 58.28131 6.8255 7.298 17.1508 11.344 27.6479 13.237 42.4738 7.659 83.5819-16.43 115.55791-43.21891 10.513-8.80809 20.562-18.729 32.388-25.83609 12.778-7.6791 39.15-20.37871 54.568-14.73721 14.351 5.251 7.067 25.3983.055 33.95641-15.798 19.27919-34.112 31.93779-56.386 42.45479-11.365 5.365-24.175 11.411-40.52 22.107-44.9214 29.393-87.5385 69.249-91.7726 119.244-.5456 6.442-.3718 12.97 2.2792 18.773 3.1418 6.878 9.5928 12.263 16.85981 16.093 30.68459 16.172 71.4466 4.519 96.81359-17.991 22.788-20.221 36.27-47.198 49.641-73.952 12.866-25.741 24.833-54.152 47.646-73.556 7.943-6.756 20.67-14.402 31.621-10.345 15.981 5.921 14.326 37.04 12.33 50.986-2.473 17.281-8.666 34.808-14.496 51.156-7.403 20.758-14.177 41.861-15.054 63.569-.876 21.692 4.681 44.265 19.61 61.156 16.307 18.451 45.916 28.267 69.015 18.275 20.889-9.037 31.334-30.916 35.368-52.06 4.569-23.941 3.134-48.182.312-72.62-.823-7.13-1.765-14.282-2.709-21.449-2.287-17.348-4.583-34.777-5.223-52.147-.36-9.751 1.946-22.339 10.215-28.665 14.683-11.235 34.137 5.641 42.146 17.448 12.139 17.895 20.788 37.318 28.811 56.963q2.56952 6.28949 5.079 12.595c6.211 15.501 12.408 30.968 20.006 45.853 8.756 17.154 21.158 34.636 40.673 39.725a43.66813 43.66813 0 0 0 20.079.431c26.154-5.655 38.968-34.948 33.692-59.381-5.208-24.113-22.853-44.296-39.977-63.883l-.818-.936c-17.3-19.793-35.076-41.504-38.382-66.93-4.487-34.50149 26.795-40.35409 53.46-28.9935 15.415 6.5677 28.271 17.8675 40.487 29.3355 23.235 21.812 46.873 64.488 84.215 59.571 16.563-2.181 36.038-12.364 37.236-31.133 1.279-20.045-20.95606-34.266-36.33905-42.32041l-87.133-45.62289c-12.464-6.52651-23.87-15.33891-27.4-29.591-4.749-19.1748 10.123-25.01025 27.012-27.70177 35.843-5.71233 72.484-2.152 108.697-4.59164s74.231-12.18159 98.95-38.75788c22.069-23.7269 30.224-59.54341 20.602-90.4854-3.354-10.788-9.03-21.325-18.292-27.794-10.31-7.201-23.756-8.44-36.229-6.833q-1.87353.249-3.738.557c-31.435 5.318-56.91394 25.971-80.888 45.573-17.093 13.976-54.87 52.71309-79.54 47.82979-46.872-9.278 27.599-93.48979 36.948-108.4098a171.00348 171.00348 0 0 0 25.777-82.499c1.084-23.572-5.624-48.911-32.892-49.581-27.506-.676-47.499 20.49-59.623 43.266a1315.72126 1315.72126 0 0 0 -84.024 194.01018c-8.958 26.3043-31.465 50.665-58.997 26.23851-24.073-21.357-24.47339-53.77253-19.444-82.6187 6.73811-38.64655 32.82569-117.234 4.311-156.859-13.97993-19.42702-102.17562-66.1805-104.93995 62.46002z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          variants={draw}
        />
      </motion.svg>
    </div>
  );
}
