import React from "react";

import { useForm } from "../hooks/useForm";

export const VendorEditListItem = ({ vendor, onSave, onCancel: cancel }) => {
  const [vendorForm, change] = useForm({
    name: vendor.name,
  });

  const save = () => {
    onSave({
      ...vendor,
      ...vendorForm,
    });
  };

  return (
    <li>
      <input
        type="text"
        id="vendor-name-input"
        name="name"
        value={vendorForm.name}
        onChange={change}
      />
      <button type="button" onClick={save}>
        Save
      </button>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
    </li>
  );
};
