import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

import { CarIconButton } from './CarIconButton';

export type CarSaveButtonProps = {
  onClick: () => void;
};

export function CarSaveButton({ onClick: click }: CarSaveButtonProps) {
  return <CarIconButton icon={SaveIcon} title="Save Car" onClick={click} />;
}
