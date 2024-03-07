import { Button } from "@nextui-org/react";
import React from "react";

const OutlineButton = ({ title }: { title: string }) => {
  return (
    <Button
      radius="full"
      className="outline outline-2 hover:outline-none outline-primary-color hover:border-none bg-transparent hover:bg-gradient-to-tr from-black via-primary-color to-sky-200 text-primary-color hover:text-white w-max text-xs font-bold font-sans"
    >
      {title}
    </Button>
  );
};

export default OutlineButton;
