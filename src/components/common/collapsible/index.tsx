import React, { useState, useRef, useEffect } from "react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import "./style.scss"; // Import the custom CSS file

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full"
      >
        <span>{title}</span>
        <TriangleDownIcon className={clsx({ "rotate-180": isOpen })} />
      </button>
      <div
        ref={contentRef}
        className={clsx("collapsible-content", { open: isOpen })}
      >
        <div className="p-4 flex flex-col gap-y-2">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
