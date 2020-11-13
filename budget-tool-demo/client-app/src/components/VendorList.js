import React from "react";

import { VendorViewListItem } from "./VendorViewListItem";
import { VendorEditListItem } from "./VendorEditListItem";

export function VendorList({
  vendors,
  editVendorId,
  onEdit: edit,
  onDelete: deleteItem,
  onSave: save,
  onCancel: cancel,
}) {
  return (
    <ul>
      {vendors.map((vendor) =>
        vendor.id === editVendorId ? (
          <VendorEditListItem
            key={vendor.id}
            vendor={vendor}
            onSave={save}
            onCancel={cancel}
          />
        ) : (
          <VendorViewListItem
            key={vendor.id}
            vendor={vendor}
            onEdit={edit}
            onDelete={deleteItem}
          />
        )
      )}
    </ul>
  );
}

VendorList.defaultProps = {
  vendors: [],
};
