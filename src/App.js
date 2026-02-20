import React from 'react';
import AddItemForm from './components/AddItemForm';
import InventoryList from './components/InventoryList';
import Alerts from './components/Alerts';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Typography variant="h3" align="center" gutterBottom style={{ color: '#1976d2' }}>
        🏭 Manufacturing Inventory Management
      </Typography>
      <AddItemForm />
      <InventoryList />
      <Alerts />
    </Container>
  );
}

export default App;
