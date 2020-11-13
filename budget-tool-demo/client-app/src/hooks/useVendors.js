import { useMutation, gql } from "@apollo/client";

export const APPEND_VENDOR_MUTATION = gql`
  mutation AppendVendor($newVendor: NewVendor) {
    appendVendor(vendor: $newVendor) {
      id
      name
      archived
    }
  }
`;

export const REPLACE_VENDOR_MUTATION = gql`
  mutation ReplaceVendor($existingVendor: ExistingVendor) {
    replaceVendor(vendor: $existingVendor) {
      id
      name
      archived
    }
  }
`;

export const REMOVE_VENDOR_MUTATION = gql`
  mutation RemoveVendor($vendorId: ID) {
    removeVendor(vendorId: $vendorId) {
      id
      name
      archived
    }
  }
`;

export function useVendors(appQuery) {
  const [mutateAppendVendor] = useMutation(APPEND_VENDOR_MUTATION);
  const [mutateReplaceVendor] = useMutation(REPLACE_VENDOR_MUTATION);
  const [mutateRemoveVendor] = useMutation(REMOVE_VENDOR_MUTATION);

  const appendVendor = (newVendor) => {
    return mutateAppendVendor({
      variables: { newVendor: { ...newVendor, archived: false } },
      refetchQueries: [appQuery],
    });
  };

  const replaceVendor = (existingVendor) => {
    return mutateReplaceVendor({
      variables: { existingVendor: { ...existingVendor } },
      optimisticResponse: {
        replaceVendor: {
          ...existingVendor,
          __typename: "Vendor",
        },
      },
      update(cache, { data: { replaceVendor: vendor } }) {
        const data = cache.readQuery(appQuery);

        const vendorIndex = data.vendors.findIndex((v) => v.id === vendor.id);

        const newVendors = [...data.vendors];
        newVendors[vendorIndex] = vendor;

        cache.writeQuery({
          ...appQuery,
          data: {
            vendors: newVendors,
          },
        });
      },
    });
  };

  const removeVendor = (vendorId) => {
    return mutateRemoveVendor({
      variables: { vendorId },
      update(cache) {
        const data = cache.readQuery(appQuery);

        cache.writeQuery({
          ...appQuery,
          data: {
            vendors: data.vendors.filter((v) => v.id !== vendorId),
          },
        });
      },
    });
  };

  return { appendVendor, replaceVendor, removeVendor };
}
