import React from "react";

import { useForm } from "../hooks/useForm";

export function VendorForm({ buttonText, onSubmitVendor }) {
  const [vendorForm, change, resetVendorForm] = useForm({
    name: "",
  });

  const submitVendor = () => {
    onSubmitVendor({ ...vendorForm });
    resetVendorForm();
  };

  return (
    <form>
      <div>
        <label>Vendor Name:</label>
        <input
          type="text"
          value={vendorForm.name}
          name="name"
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitVendor}>
        {buttonText}
      </button>
    </form>
  );
}
