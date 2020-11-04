import React from "react";

import { NewColor } from "../models/colors";
import { useForm } from "../hooks/useForm";

export type ColorFormProps = {
  buttonText: string;
  onSubmitColor: (newColor: NewColor) => void;
};

export function ColorForm(props: ColorFormProps) {
  const [colorForm, change, resetColorForm] = useForm({
    name: "",
    hexcode: "",
  });

  const submitColor = () => {
    props.onSubmitColor({
      ...colorForm,
    });

    resetColorForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          id="name-input"
          name="name"
          value={colorForm.name}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="hexcode-input">Hexcode</label>
        <input
          type="text"
          id="hexcode-input"
          name="hexcode"
          value={colorForm.hexcode}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );
}
