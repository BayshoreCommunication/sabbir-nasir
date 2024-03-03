import React, { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children }) => {
  return (
    <button className="px-6 py-[10px] text-sm font-bold text-primary-color bg-white rounded-full">
      {children}
    </button>
  );
};

export default SecondaryButton;
