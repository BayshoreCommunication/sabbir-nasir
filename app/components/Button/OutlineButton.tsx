import { Button } from "@nextui-org/react";
import React from "react";

const OutlineButton = ({ title }: { title: string }) => {
  return (
    <Button
      radius="full"
      className="z-50 outline outline-1 hover:outline-none outline-primary-color hover:border-none bg-transparent hover:bg-gradient-to-tr from-[#00070f] via-primary-color to-[#6e8fb5] text-primary-color hover:text-white w-max text-xs font-bold font-sans"
    >
      {title}
    </Button>
  );
};

export default OutlineButton;
