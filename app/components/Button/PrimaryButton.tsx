import React, { ReactNode } from "react";
import { MotionButton } from "../Motion/Motion";

interface PrimaryButtonProps {
  children: ReactNode;
  width?: string;
  rounded?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  width,
  children,
  rounded,
}) => {
  const size = width || "w-max";
  const radius = rounded || "rounded-full";
  return (
    <MotionButton
      initial={{ opacity: 0, scale: 0 }}
      whileTap={{ scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${size} px-6 py-[10px] text-sm font-semibold text-white bg-primary-color ${radius} bg-primary-color hover:bg-gradient-to-tr from-black via-primary-color to-sky-200`}
    >
      {children}
    </MotionButton>
  );
};

export default PrimaryButton;
