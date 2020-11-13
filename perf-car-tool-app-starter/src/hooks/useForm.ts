import { useState } from 'react';

import { FormControlChangeEvent, FormControlChange } from '../models/FormControls';

type UseForm = <FormDataType>(
  initialForm: FormDataType,
) => [FormDataType, FormControlChange, () => void];

export const useForm: UseForm = (initialForm) => {
  const [form, setForm] = useState({ ...initialForm });

  const change = (e: FormControlChangeEvent) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    });
  };

  const resetForm = () => setForm({ ...initialForm });

  return [form, change, resetForm];
};
