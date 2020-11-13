import React, { useMemo } from "react";

import { useQuery, gql } from "@apollo/client";
import { editVendorId } from "./localVars";
import { useVendors } from "./hooks/useVendors";

import { VendorList } from "./components/VendorList";
import { VendorForm } from "./components/VendorForm";

const APP_QUERY = gql`
  query App {
    editVendorId @client
    editVendorId2 @client
    vendors {
      id
      name
    }
  }
`;

export function App() {
  const { loading, error, data, client } = useQuery(APP_QUERY);

  const { appendVendor, replaceVendor, removeVendor } = useVendors({
    query: APP_QUERY,
  });

  const cancelEditVendor = () => {
    editVendorId(-1);

    client.writeQuery({
      query: APP_QUERY,
      data: {
        editVendorId2: -1,
      },
    });
  };

  const addVendor = (newVendor) => {
    return appendVendor(newVendor).then(cancelEditVendor);
  };

  const saveVendor = (vendor) => {
    return replaceVendor(vendor).then(cancelEditVendor);
  };

  const deleteVendor = (vendorId) => {
    return removeVendor(vendorId).then(cancelEditVendor);
  };

  const editVendor = (vendorId) => {
    editVendorId(vendorId);
  };

  const cancelVendor = () => {
    editVendorId(-1);
  };

  const editVendor2 = (vendorId) => {
    client.writeQuery({
      query: gql`
        query EditVendorId2 {
          editVendorId2
        }
      `,
      data: {
        editVendorId2: vendorId,
      },
    });
  };

  const cancelVendor2 = () => {
    client.writeQuery({
      query: gql`
        query EditVendorId2 {
          editVendorId2
        }
      `,
      data: {
        editVendorId2: -1,
      },
    });
  };

  const dataVendors = data?.vendors;

  const vendors = useMemo(() => {
    if (!dataVendors) {
      return [];
    }

    return dataVendors.map((v) => {
      const v2 = { ...v };
      delete v2.__typename;
      return v2;
    });
  }, [dataVendors]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <header>
        <h1>Vendors Tool</h1>
      </header>
      <VendorList
        vendors={vendors}
        editVendorId={data.editVendorId}
        onEdit={editVendor}
        onDelete={deleteVendor}
        onSave={saveVendor}
        onCancel={cancelVendor}
      />
      <VendorForm buttonText="Add Vendor" onSubmitVendor={addVendor} />
    </>
  );
}
