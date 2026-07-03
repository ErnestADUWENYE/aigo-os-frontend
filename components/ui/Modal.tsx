"use client";

import { ReactNode } from "react";
import Button from "./Button";

type ModalProps = {
  title: string;
  description?: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({
  title,
  description,
  isOpen,
  children,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
          </div>

          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
}