import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

import { CarIconButton } from './CarIconButton';

export type CarEditButtonProps = {
  onClick: () => void;
};

export function CarEditButton({ onClick: click }: CarEditButtonProps) {
  return <CarIconButton icon={EditIcon} title="Edit Car" onClick={click} />;
}
