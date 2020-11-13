import React from 'react';
import { Button } from '@material-ui/core';

export type CarAddButtonProps = {
  onClick: () => void;
};

export function CarAddButton({ onClick: click }: CarAddButtonProps) {
  return (
    <Button color="primary" onClick={click}>
      Add Car
    </Button>
  );
}
