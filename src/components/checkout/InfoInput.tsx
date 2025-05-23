import React, { forwardRef } from 'react';

type InputInfoProps = {
    label: string;
    id: string;
    placeholder: string;
    type?: string;
    errorMessage?: string;
    required?: boolean;
    value: string | number;
    maxLength?: number;
    inputMode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
    handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InfoInput = forwardRef<HTMLInputElement, InputInfoProps>(
  ({ label, id, placeholder, type = "text", errorMessage = "", value, handleValue, maxLength = 100, required, inputMode = 'text' }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm font-bold mb-1 flex justify-between items-center">
          <span>{label}</span>
          <span className="text-xs text-red-500">{errorMessage}</span>
        </label>
        <input
          ref={ref}
          onChange={handleValue}
          value={value === 0 ? "" : value} // empty string if value is zero
          id={id}
          type={type}
          name={id}
          inputMode={inputMode}
          maxLength={maxLength}
          placeholder={value === "" ? placeholder : ""} // Update placeholder conditionally
          required={required}
          className={`border p-3 rounded-md outline-none caret-custom-orange ${
            errorMessage ? 'border-red-500' : 'focus:border-custom-orange'
          }`}
          aria-invalid={errorMessage ? 'true' : 'false'}
        />
      </div>
    );
  }
);

export default InfoInput;
