import React, { useState, ChangeEvent } from "react";

export type ColorFormProps = {};

export function ColorForm() {
  const [colorForm, setColorForm] = useState(
    {
      name: "",
      hexcode: "",
    } /* initial value of colorForm */
  );

  // const colorForm = colorFormState[0];
  // const setColorForm = colorFormState[1];

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm, // object spread operation, it copies the properties from colorForm into the new object
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  console.log(colorForm);

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
    </form>
  );
}
