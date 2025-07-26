import type { ReactNode } from "react";

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  icon: ReactNode;
}

export default function InputField({ id, type, placeholder, icon }: InputFieldProps) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1 block font-medium text-gray-500">
        {placeholder}
      </label>
      <div className="relative">
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-lg text-gray-400">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border-none bg-white py-2 pr-3 pl-10 text-sm shadow-sm focus:outline-none md:text-base"
          required
        />
      </div>
    </div>
  );
}
