import React from "react";

interface FormErrorMessageProps {
  message?: string;
}

export function FormErrorMessage({ message }: FormErrorMessageProps) {
  if (!message) return null;

  return (
    <span className="text-xs text-red-500 text-start">
      {message}
    </span>
  );
}
