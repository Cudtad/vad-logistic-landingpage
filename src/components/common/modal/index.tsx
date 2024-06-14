import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-50 w-[350px] md:w-[600px] relative">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-black">{title}</h2>
          <button className="text-black absolute top-5 right-5" onClick={onClose}>
            <Cross2Icon width={20} height={20}/>
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
