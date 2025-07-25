import React, { ReactNode } from "react";
import { IoArrowForward } from "react-icons/io5";
import { MotionButton } from "../Motion/Motion";

interface ArrowButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  size = "md",
  className = "",
  onClick,
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  return (
    <MotionButton
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          delay: 0.7,
          type: "spring",
          bounce: 0.5,
        },
      }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center font-normal italic transition-colors duration-300 group font-lumios-marker text-[#19ACC9] ${sizeClasses[size]} ${className} overflow-hidden`}
    >
      {children}
      <IoArrowForward className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </MotionButton>
  );
};

export default ArrowButton; 