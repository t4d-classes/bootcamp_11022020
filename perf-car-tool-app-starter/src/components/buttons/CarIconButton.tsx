import React, { FunctionComponent } from 'react';
import IconButton from '@material-ui/core/IconButton';

export type CarIconButtonProps = {
  icon: FunctionComponent;
  title: string;
  onClick: () => void;
};

export function CarIconButton({ icon: Icon, title, onClick: click }: CarIconButtonProps) {
  return (
    <IconButton aria-label={title} title={title} onClick={click}>
      <Icon />
    </IconButton>
  );
}
