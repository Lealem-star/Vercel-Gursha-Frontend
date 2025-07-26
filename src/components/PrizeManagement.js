import React from 'react';

const PrizeManagement = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Set Daily Prizes</h3>
      <form className="bg-white p-4 rounded shadow">
        <input type="number" placeholder="Daily Prize Amount" className="border p-2 mb-2 w-full" />
        <input type="number" placeholder="Entrance Fee" className="border p-2 mb-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Set Prizes</button>
      </form>
    </div>
  );
};

export default PrizeManagement;
