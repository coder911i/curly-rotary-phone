import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  scaleOnHover = 1.02,
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xPercentage = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPercentage = (mouseY / height - 0.5) * 2; // -1 to 1

    setRotateX(-yPercentage * maxTilt);
    setRotateY(xPercentage * maxTilt);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective-1000" style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        className={`relative transition-shadow duration-300 ${className}`}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? scaleOnHover : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  );
};
