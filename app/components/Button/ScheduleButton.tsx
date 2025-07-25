import { Button } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface ScheduleButtonProps {
  children: ReactNode;
  className?: string;
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({
  children,
  className = "",
}) => {
  const baseClasses = "bg-[#00bcd4] hover:bg-[#00acc1] text-white font-medium px-6 py-2 rounded-sm";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Button
      className={combinedClasses}
    >
      {children}
    </Button>
  );
};

export default ScheduleButton; 