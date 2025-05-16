import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

type MarginValue = `${number}${'px' | '%'}`;

export type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

type AppearingContentProps = {
  children: React.ReactNode;
  margin?: MarginType;
  y?: number | string;
  className?: string;
};

const AppearingContent = ({ children, margin = '0px 0px -50% 0px', y = '10%', className }: AppearingContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { margin });

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0, duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AppearingContent;
