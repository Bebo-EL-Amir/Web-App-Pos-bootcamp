import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000, revenue: 2400 },
  { name: 'Tue', sales: 3000, revenue: 1398 },
  { name: 'Wed', sales: 2000, revenue: 9800 },
  { name: 'Thu', sales: 2780, revenue: 3908 },
  { name: 'Fri', sales: 1890, revenue: 4800 },
  { name: 'Sat', sales: 2390, revenue: 3800 },
  { name: 'Sun', sales: 3490, revenue: 4300 },
];

export default function LineChartComponent() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Weekly Performance</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#6B7280', fontSize: 12}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#6B7280', fontSize: 12}}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff', 
                borderRadius: '8px', 
                border: '1px solid #E5E7EB', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{color: '#374151'}}
            />
            <Legend wrapperStyle={{paddingTop: '20px'}}/>
            <Line 
              type="monotone" 
              name="Revenue"
              dataKey="revenue" 
              stroke="#8B5CF6" 
              strokeWidth={3} 
              dot={{fill: '#8B5CF6', strokeWidth: 2, r: 4, stroke: '#fff'}}
              activeDot={{r: 6, stroke: '#8B5CF6', strokeWidth: 2}} 
            />
            <Line 
              type="monotone" 
              name="Sales"
              dataKey="sales" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{fill: '#10B981', strokeWidth: 2, r: 4, stroke: '#fff'}}
              activeDot={{r: 6, stroke: '#10B981', strokeWidth: 2}} 
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
