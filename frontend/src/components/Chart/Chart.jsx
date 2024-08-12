import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function CustomeChart() {
  return (
    <LineChart
      xAxis={[{ data: [0, 100, 200, 300] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5],
          area: true,
        },
      ]}
      colors={['lightblue']}
      width={750}
      height={300}
    />
  );
}