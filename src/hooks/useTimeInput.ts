import { useState } from "react";

export const useTimeInput = (maxValue: number = 99) => {
  const [value, setValue] = useState("00");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "").slice(0, 2);
    if (inputValue === "" || parseInt(inputValue, 10) <= maxValue) {
      setValue(inputValue);
    }
  };

  const handleBlur = () => {
    setValue((prev) => prev.padStart(2, "0"));
  };

  return {
    value,
    setValue,
    handleBlur,
    handleChange,
  };
};
