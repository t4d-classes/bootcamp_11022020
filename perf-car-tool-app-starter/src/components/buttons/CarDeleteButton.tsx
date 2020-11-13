import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import { CarIconButton } from './CarIconButton';

export type CarDeleteButtonProps = {
  onClick: () => void;
};

export function CarDeleteButton({ onClick: click }: CarDeleteButtonProps) {
  return <CarIconButton icon={DeleteIcon} title="Delete Car" onClick={click} />;
}
