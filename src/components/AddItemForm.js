import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Typography } from '@mui/material';

function AddItemForm() {
  const [form, setForm] = useState({ name: '', quantity: 0, category: '', threshold: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/inventory', form);
    alert('Item added!');
    window.location.reload();
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f0f8ff' }}>
      <Typography variant="h5" gutterBottom>➕ Add New Item</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <TextField label="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <TextField label="Quantity" type="number" onChange={e => setForm({ ...form, quantity: e.target.value })} />
        <TextField label="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
        <TextField label="Threshold" type="number" onChange={e => setForm({ ...form, threshold: e.target.value })} />
        <Button variant="contained" color="primary" type="submit">Add Item</Button>
      </form>
    </Paper>
  );
}

export default AddItemForm;
