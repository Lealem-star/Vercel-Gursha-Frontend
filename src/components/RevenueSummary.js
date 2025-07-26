import React from 'react';

const RevenueSummary = ({ totalRevenue }) => {
  return (
    <div className="mb-4 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Total Revenue</h3>
      <p className="text-xl">${totalRevenue}</p>
    </div>
  );
};

export default RevenueSummary;
