import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/alerts').then(res => setAlerts(res.data));
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#ffe4e1' }}>
      <Typography variant="h5" gutterBottom>⚠️ Alerts</Typography>
      <List>
        {alerts.length === 0 ? (
          <Typography>No alerts at the moment 🎉</Typography>
        ) : (
          alerts.map((alert, index) => (
            <ListItem key={index}>
              <ListItemText primary={alert.message} />
            </ListItem>
          ))
        )}
      </List>
    </Paper>
  );
}

export default Alerts;
