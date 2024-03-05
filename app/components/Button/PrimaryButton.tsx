import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  width?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ width, children }) => {
  const size = width || "w-max";
  return (
    <button
      className={`${size} px-6 py-[10px] text-sm font-semibold text-white bg-primary-color rounded-full`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
