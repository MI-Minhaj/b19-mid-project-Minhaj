// pages/index.js
import React from 'react';

const ExpenseTracker = () => {
  const recentTransactions = [
    { name: 'Samosa', date: 'March 20, 2024' },
    { name: 'Moyle', date: 'March 21, 2024' },
    { name: 'Auto', date: 'March 22, 2024' },
  ];

  const topExpenses = ['Entertainment', 'Food', 'Travel', 'Total'];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>

        {/* Extensions Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Extensions: ₹4500</h2>
            </div>
            <div className="space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Add Income
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Add Expense
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
            <ul className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="font-medium">{transaction.name}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Expenses */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Expenses</h3>
            <ul className="space-y-3">
              {topExpenses.map((expense, index) => (
                <li key={index} className="text-gray-700">
                  {expense}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;