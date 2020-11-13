import React, { ReactNode, memo } from 'react';
import { Grid } from '@material-ui/core';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';

export type CarToolLayoutProps = {
  children: ReactNode;
};

const CarToolHeader = memo(function CarToolHeader() {
  return <ToolHeader headerText="Car Tool" />;
});

const CarToolFooter = memo(function CarToolFooter() {
  return <ToolFooter companyName="A Cool Company, Inc." />;
});

export function CarToolLayout({ children }: CarToolLayoutProps) {
  return (
    <Grid container direction="column">
      <Grid item component={CarToolHeader} />
      <Grid item component="main">
        {children}
      </Grid>
      <Grid item component={CarToolFooter} />
    </Grid>
  );
}
