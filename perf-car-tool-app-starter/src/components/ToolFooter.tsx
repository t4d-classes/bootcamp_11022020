import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './ToolFooter.styles';

export type ToolFooterProps = {
  companyName: string;
};

export function ToolFooter({ companyName }: ToolFooterProps) {

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography component="small" className={classes.text}>&copy; {new Date().getFullYear()} {companyName}</Typography>
    </footer>
  );
}
