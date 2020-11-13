import React from "react";

export const VendorViewListItem = ({
  vendor,
  onEdit: edit,
  onDelete: deleteItem,
}) => {
  return (
    <li>
      {vendor.name}
      <button type="button" onClick={() => edit(vendor.id)}>
        Edit
      </button>
      <button type="button" onClick={() => deleteItem(vendor.id)}>
        Delete
      </button>
    </li>
  );
};
