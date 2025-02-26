"use client";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaPlus, FaTrash, FaEdit, FaPizzaSlice, FaGift, FaSuitcaseRolling } from "react-icons/fa";

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(4500);
  const [expenses, setExpenses] = useState(500);
  const [showModal, setShowModal] = useState(false);
  const [income, setIncome] = useState("");
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      icon: <FaPizzaSlice />, name: "Food",
      name: "Samosa",
      amount: 150,
      category: "Food",
      date: "March 20, 2024",
    },
    {
      id: 2,
      icon: <FaGift />, name: "Gift",
      name: "Movie",
      amount: 300,
      category: "Entertainment",
      date: "March 21, 2024",
    },
    {
      id: 3,
      icon: <FaSuitcaseRolling />, name: "Travel",
      name: "Auto",
      amount: 50,
      category: "Travel",
      date: "March 22, 2024",
    },
  ]);

  const data = [
    { name: "Entertainment", value: 70, color: "#FFA500" }, // Orange
    { name: "Food", value: 30, color: "#800080" }, // Purple
    { name: "Travel", value: 10, color: "#FFD700" }, // Yellow
  ];

  const COLORS = ["#800080", "#FFA500"];

  const balanceData = [
    { name: "Wallet Balance", value: balance },
    { name: "Expenses", value: expenses },
  ];

  const topExpenses = [
    { name: "Entertainment", value: 300 },
    { name: "Food", value: 150 },
    { name: "Travel", value: 50 },
  ];
  const addIncome = () => {
    if (income) {
      setBalance(balance + parseFloat(income));
      setIncome("");
      setShowModal(false);
    }
  };

  const addExpense = () => {
    if (
      newExpense.title &&
      newExpense.price &&
      newExpense.category &&
      newExpense.date
    ) {
      setTransactions([...transactions, newExpense]);
      setExpenses(expenses + parseFloat(newExpense.price));
      setNewExpense({ title: "", price: "", category: "", date: "" });
      setShowExpenseModal(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>

      {/* Wallet Balance, Expenses, and Expense Breakdown in a single row */}
      <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-800 p-4 rounded-lg">
        {/* Wallet Balance */}
        {/* Wallet Balance Section */}
        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-800 p-4 rounded-lg">
          <div className="bg-gray-600 p-6 rounded-lg w-60 flex flex-col items-center">
            <h2 className="text-lg text-white">
              Wallet Balance: <span className="text-green-400">₹{balance}</span>
            </h2>
            <button
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded-full flex items-center"
              onClick={() => setShowModal(true)}
            >
              <FaPlus className="mr-2" /> Add Income
            </button>
          </div>
        </div>

        {/* Modal for Adding Balance */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4 text-black">Add Balance</h2>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full p-2 border rounded text-black"
                placeholder="Income Amount"
              />
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={addIncome}
                >
                  Add Balance
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-800 p-4 rounded-lg">
          {/* Expenses Section */}
          <div className="bg-gray-600 p-6 rounded-lg w-60 flex flex-col items-center">
            <h2 className="text-lg text-white">
              Expenses: <span className="text-yellow-400">₹{expenses}</span>
            </h2>
            <button
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-full flex items-center"
              onClick={() => setShowExpenseModal(true)}
            >
              <FaPlus className="mr-2" /> Add Expense
            </button>
          </div>
        </div>

        {/* Modal for Adding Expense */}
        {showExpenseModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4 text-black">
                Add Expenses
              </h2>

              {/* Input Fields */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newExpense.title}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, title: e.target.value })
                  }
                  className="p-2 border rounded text-black w-full"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newExpense.price}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, price: e.target.value })
                  }
                  className="p-2 border rounded text-black w-full"
                />
                <input
                  type="text"
                  placeholder="Select Category"
                  value={newExpense.category}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, category: e.target.value })
                  }
                  className="p-2 border rounded text-black w-full"
                />
                <input
                  type="date"
                  value={newExpense.date}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, date: e.target.value })
                  }
                  className="p-2 border rounded text-black w-full"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={addExpense}
                >
                  Add Expense
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={() => setShowExpenseModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center w-72">
          <ResponsiveContainer width="100%" height={200}>
          <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={80}
        // innerRadius={50} // ✅ To create a donut effect
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
          const RADIAN = Math.PI / 180;
          const x =
            cx + ((innerRadius + outerRadius) / 2) * Math.cos(-midAngle * RADIAN);
          const y =
            cy + ((innerRadius + outerRadius) / 2) * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={14}
              fontWeight="bold"
            >
              {`${(percent * 100).toFixed(0)}%`} {/* ✅ Show percentage inside */}
            </text>
          );
        }}
        labelLine={false} // ❌ Remove label lines
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>

          </ResponsiveContainer>

          {/* Legend Section */}
          <div className="flex space-x-4 mt-2 text-white text-sm">
            {data.map((item, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="w-4 h-3 inline-block mr-2 rounded"
                  style={{ background: item.color }}
                ></span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg text-white">
          {/* Heading */}
          <h3 className="text-2xl font-semibold italic mb-4">
            Recent Transactions
          </h3>

          {/* Transaction List */}
          <div className="bg-white p-4 rounded-xl shadow-lg">
            {transactions.map((t) => (
              <div
                key={t.id}
                className="flex justify-between items-center border-b last:border-b-0 py-4 px-3"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-500 text-xl">{t.icon}</div>
                  <div>
                    <h4 className="text-black">{t.name}</h4>
                    <p className="text-gray-400 text-sm">{t.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-yellow-500 font-semibold">
                    ₹{t.amount}
                  </span>
                  <button className="text-red-500 bg-red-100 p-2 rounded-full hover:bg-red-200">
                    <FaTrash />
                  </button>
                  <button className="text-yellow-500 bg-yellow-100 p-2 rounded-full hover:bg-yellow-200">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 gap-3">
            <button className="bg-gray-300 p-2 rounded-full text-gray-700 hover:bg-gray-400">
              ←
            </button>
            <span className="bg-green-500 text-white px-4 py-1 rounded-lg">
              1
            </span>
            <button className="bg-gray-300 p-2 rounded-full text-gray-700 hover:bg-gray-400">
              →
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg text-white">
          {/* Heading */}
          <h3 className="text-2xl font-semibold italic mb-4">Top Expenses</h3>

          {/* Chart Container */}
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={topExpenses} layout="vertical" barSize={18}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="#9089fc" radius={[10, 10, 10, 10]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
