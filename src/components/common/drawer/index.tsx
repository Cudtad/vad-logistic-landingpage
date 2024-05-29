// src/components/Drawer.tsx

import { Cross2Icon } from '@radix-ui/react-icons';
import React, { ReactNode } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-0 flex z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute top-4 right-4" onClick={onClose}>
          <Cross2Icon />
        </button>
        <div className="px-4 py-16">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
