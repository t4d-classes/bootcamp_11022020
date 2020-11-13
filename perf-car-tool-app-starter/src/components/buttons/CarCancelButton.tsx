import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

import { CarIconButton } from './CarIconButton';

export type CarCancelButtonProps = {
  onClick: () => void;
};

export function CarCancelButton({ onClick: click }: CarCancelButtonProps) {
  return <CarIconButton icon={CancelIcon} title="Cancel Car" onClick={click} />;
}
