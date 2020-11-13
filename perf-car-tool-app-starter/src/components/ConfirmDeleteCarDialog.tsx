import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

export type ConfirmDeleteCarDialogProps = {
  message: string;
  carId: number;
  onCancel: () => void;
  onOk: (carId: number) => void;
};

export function ConfirmDeleteCarDialog({
  message,
  carId,
  onCancel: cancel,
  onOk: ok,
}: ConfirmDeleteCarDialogProps) {
  return (
    <Dialog open={true}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={cancel} color="primary">
          Cancel
        </Button>
        <Button onClick={() => ok(carId)} color="primary">
          Ok
        </Button>
      </DialogActions>{' '}
    </Dialog>
  );
}
