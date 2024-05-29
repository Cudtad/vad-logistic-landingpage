import { TriangleDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React, { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full"
      >
        <span>{title}</span>
        <TriangleDownIcon className={clsx({"rotate-180": isOpen})} />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-4 flex flex-col gap-y-2">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
