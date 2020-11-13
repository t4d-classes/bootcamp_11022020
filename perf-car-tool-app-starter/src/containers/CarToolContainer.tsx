import React from 'react';

import { useCarToolStoreContext } from '../contexts/CarToolStoreContext';
import { CarTool } from '../components/CarTool';

export function CarToolContainer() {

  return <CarTool {...useCarToolStoreContext()} />;

}