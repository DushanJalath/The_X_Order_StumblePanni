import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/visaApplicationInsights.css';

const data = [
  { month: 'Jan', Applied: 35000, Approved: 25000, Rejected: 10000, Inquired: 5000 },
  { month: 'Feb', Applied: 38000, Approved: 28000, Rejected: 12000, Inquired: 8000 },
  { month: 'Mar', Applied: 40000, Approved: 30000, Rejected: 20000, Inquired: 15000 },
  { month: 'Apr', Applied: 38000, Approved: 25000, Rejected: 23000, Inquired: 20000 },
  { month: 'May', Applied: 35000, Approved: 23000, Rejected: 12000, Inquired: 5000 },
  { month: 'Jun', Applied: 37000, Approved: 25000, Rejected: 10000, Inquired: 8000 },
  { month: 'Jul', Applied: 40000, Approved: 30000, Rejected: 35000, Inquired: 25000 },
  { month: 'Aug', Applied: 42000, Approved: 35000, Rejected: 15000, Inquired: 20000 },
  { month: 'Sep', Applied: 45000, Approved: 38000, Rejected: 10000, Inquired: 25000 },
  { month: 'Oct', Applied: 45000, Approved: 37000, Rejected: 12000, Inquired: 22000 },
  { month: 'Nov', Applied: 43000, Approved: 35000, Rejected: 18000, Inquired: 15000 },
  { month: 'Dec', Applied: 41000, Approved: 33000, Rejected: 22000, Inquired: 12000 },
];

const VisaApplicationInsights = () => {
  return (
    <div className="visa-insights-container">
      <h2 className="visa-insights-title">Visa Application Insights</h2>
      <div className="visa-insights-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Applied" stroke="#8884d8" />
            <Line type="monotone" dataKey="Approved" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Rejected" stroke="#ff7300" />
            <Line type="monotone" dataKey="Inquired" stroke="#808080" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisaApplicationInsights;