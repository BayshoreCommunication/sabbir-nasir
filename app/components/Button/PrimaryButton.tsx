import React, { ReactNode } from "react";

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
    <button
      className={`${size} px-6 py-[10px] text-sm font-semibold text-white bg-primary-color ${radius}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
