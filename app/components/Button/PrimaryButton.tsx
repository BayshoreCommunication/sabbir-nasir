import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <button className="px-6 py-[10px] text-sm font-semibold text-white bg-primary-color rounded-full">
      {children}
    </button>
  );
};

export default PrimaryButton;
