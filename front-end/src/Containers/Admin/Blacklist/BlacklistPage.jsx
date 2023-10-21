import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const BlacklistDialog = ({ open, onClose, onAddToBlacklist }) => {
  const [reason, setReason] = useState('');

  const handleAddToBlacklist = () => {
    onAddToBlacklist(reason);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" maxHeight="lg"> 
      <DialogTitle>Add User to Blacklist</DialogTitle>
      <DialogContent>
        <TextField
          label="Reason"
          variant="outlined"
          fullWidth
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddToBlacklist} color="primary">
          Add to Blacklist
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlacklistDialog;
