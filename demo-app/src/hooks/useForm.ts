import { useState, ChangeEvent } from "react";

export type HTMLFormControls =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type UseForm = <T>(
  initialForm: T
) => [T, (e: ChangeEvent<HTMLFormControls>) => void, () => void];

export const useForm: UseForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const change = (e: ChangeEvent<HTMLFormControls>) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  const resetForm = () => setForm(initialForm);

  return [form, change, resetForm];
};
