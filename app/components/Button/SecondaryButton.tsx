import React, { ReactNode } from "react";
import { MotionButton } from "../Motion/Motion";

interface SecondaryButtonProps {
  children: ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children }) => {
  return (
    <MotionButton
      initial={{ opacity: 0, scale: 0 }}
      whileTap={{ scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="px-6 py-[10px] text-sm font-bold text-primary-color hover:text-white bg-white rounded-full hover:bg-gradient-to-tr from-black via-primary-color to-sky-200"
    >
      {children}
    </MotionButton>
  );
};

export default SecondaryButton;
