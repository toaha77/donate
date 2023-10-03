 
import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

 

const COLORS = ['#FF444A', '#00C49F', ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
const Statistics = () => {
  const [chart, setChart] = useState(0)
    useEffect(()=>{
       const pieChart = JSON.parse(localStorage.getItem('donation'))  ||  []
    
      setChart(pieChart.length * 100 / 12)
    
}, [])
const data = [
   
     { name:" Total Donation", value: 100- chart},
     { name:"Your Donation", value:  chart},
       
   ];
  return (
    <div>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div>
        <div className='flex items-center gap-2'>
        <h2 >Your Donation</h2>
       
        <div className='w-[60px] h-[12px] bg-[#00C49F]'>
        </div>
        <h2>Total Donation</h2>
        <div className='w-[60px] h-[12px] bg-[#FF444A]'>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
 

