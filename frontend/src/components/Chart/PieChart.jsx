import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const size = {
  width: 250,
  height: 200,
};

export default function CustomPie({data}) {
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
      {/* Title Section */}
      <Grid container sx={{ justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ fontSize: 20, color: "GrayText" }}>Available Book</Typography>
        <Typography variant="body2" sx={{ fontSize: 14, color: "GrayText" }}>Today</Typography>
      </Grid>

      {/* Pie Chart Section */}
      <PieChart
        series={[
          {
            innerRadius: 50,
            outerRadius: 70,
            data,
          },
        ]}
        {...size}
        slotProps={{
          legend: { hidden: true },
        }}
        sx={{ alignSelf: 'center', ml: 12 }}
      />

      {/* Legend Section */}
      <Box sx={{ width: '80%' }}>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {data.map((item, index) => (
            <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemIcon sx={{ minWidth: 30, color: item.color }}>
                <CircleIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ flex: '1 1 auto', '.MuiTypography-root': { fontSize: '0.75rem' } }}
              />
              <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>{item.value}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
