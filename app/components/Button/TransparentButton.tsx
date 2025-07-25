import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface TransparentButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const baseClasses = "bg-transparent hover:bg-transparent text-cyan-500 hover:text-cyan-600 font-semibold transition-all duration-300 group font-lumios";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Button
      size={size}
      className={combinedClasses}
      variant="light"
    >
      {children}
    </Button>
  );
};

export default TransparentButton; 