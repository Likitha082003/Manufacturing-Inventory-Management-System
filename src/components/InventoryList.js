import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Button, Paper, Typography } from '@mui/material';

function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/inventory').then(res => setItems(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/inventory/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  const handleUpdate = async (id) => {
    const newQuantity = prompt("Enter new quantity:");
    if (newQuantity) {
      const res = await axios.put(`http://localhost:5000/inventory/${id}`, { quantity: newQuantity });
      setItems(items.map(item => item._id === id ? res.data : item));
    }
  };

  // Separate items by category
  const rawMaterials = items.filter(item => item.category.toLowerCase() === 'raw material');
  const finishedGoods = items.filter(item => item.category.toLowerCase() === 'finished goods');

  return (
    <div>
      {/* Raw Materials Section */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#e0f7fa' }}>
        <Typography variant="h5" gutterBottom>🟢 Raw Materials</Typography>
        <List>
          {rawMaterials.length === 0 ? (
            <Typography>No raw materials added yet</Typography>
          ) : (
            rawMaterials.map(item => (
              <ListItem key={item._id} divider>
                <ListItemText primary={`${item.name} - ${item.quantity}`} />
                <Button variant="outlined" color="secondary" onClick={() => handleUpdate(item._id)}>Update</Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(item._id)}>Delete</Button>
              </ListItem>
            ))
          )}
        </List>
      </Paper>

      {/* Finished Goods Section */}
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#fce4ec' }}>
        <Typography variant="h5" gutterBottom>🔵 Finished Goods</Typography>
        <List>
          {finishedGoods.length === 0 ? (
            <Typography>No finished goods added yet</Typography>
          ) : (
            finishedGoods.map(item => (
              <ListItem key={item._id} divider>
                <ListItemText primary={`${item.name} - ${item.quantity}`} />
                <Button variant="outlined" color="secondary" onClick={() => handleUpdate(item._id)}>Update</Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(item._id)}>Delete</Button>
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </div>
  );
}

export default InventoryList;
