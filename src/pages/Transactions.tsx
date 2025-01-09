import React from 'react';
import { ChevronLeft, Download, ChevronDown } from 'lucide-react';
import { Chart } from "react-google-charts";

const TransactionsPage = () => {
    const pieData = [
        ["Category", "Value"],
        ["Food", 40],
        ["Transportation", 20],
        ["Tax", 10],
        ["Entertainment", 15],
        ["Shopping", 15],
    ];

    const options = {
        title: "",
        is3D: true,
        pieHole: 0.4,
        legend: "none",
        tooltip: { 
            text: 'value',
            trigger: 'selection'
        },
        pieSliceText: "percentage",
        pieSliceTextStyle: {
            color: "#000",
            fontSize: 14,
        },
        slices: {
            0: { color: "#4285F4" },  // Blue
            1: { color: "#DB4437" },  // Red
            2: { color: "#F4B400" },  // Yellow
            3: { color: "#0F9D58" },  // Green
            4: { color: "#8A2BE2" }   // Purple
        },
        backgroundColor: "transparent",
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        },
        tooltip: {
            showColorCode: true,
            text: 'both',
            textStyle: {
                fontSize: 13
            }
        }
    };

    // Format the data to include both category and percentage
    const formattedPieData = [
        ["Category", "Value", { role: "tooltip", type: "string", p: { html: true } }],
        ...pieData.slice(1).map(([category, value]) => [
            category,
            value,
            `${category}\n${value} (${(value)}%)`
        ])
    ];

    // Rest of your component remains the same...
    const transactions = [
        {
            title: 'Amazon Fresh',
            cardInfo: 'Visa Card •0976',
            amount: '10.8 K',
            type: 'expense',
            category: 'Shopping',
            date: 'Mon Dec 01, 2024',
            time: '19:45:10'
        },
        {
            title: 'Dividend',
            cardInfo: 'Visa Card •0976',
            amount: '10.8 K',
            type: 'income',
            category: 'Income',
            date: 'Mon Dec 01, 2024',
            time: '19:45:10'
        },
        {
            title: 'Investment',
            cardInfo: 'Visa Card •0976',
            amount: '10.8 K',
            type: 'income',
            category: 'Income',
            date: 'Mon Dec 01, 2024',
            time: '19:45:10'
        },
        {
            title: 'Netflix',
            cardInfo: 'Visa Card •0976',
            amount: '10.8 K',
            type: 'expense',
            category: 'Entertainment',
            date: 'Mon Dec 01, 2024',
            time: '19:45:10'
        },
        {
            title: 'Salary',
            cardInfo: 'Visa Card •0976',
            amount: '10.8 K',
            type: 'income',
            category: 'Income',
            date: 'Mon Dec 01, 2024',
            time: '19:45:10'
        }
    ];

    return (
        <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white p-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center space-x-4">
                    <button className="p-2">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-semibold">Transactions</h1>
                </div>
                <button className="p-2">
                    <Download className="w-6 h-6" />
                </button>
            </div>

            <div className="p-4 space-y-4">
                {/* Time Period Selector */}
                <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span>Last 30 days</span>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>

                {/* Summary */}
                <div className="flex justify-between text-sm p-2">
                    <div>
                        <div className="text-gray-600">Expense</div>
                        <div className="text-red-500">₹ 1.5 Lac</div>
                    </div>
                    <div>
                        <div className="text-gray-600">Income</div>
                        <div className="text-green-500">₹ 3 Lac</div>
                    </div>
                    <div>
                        <div className="text-gray-600">Total</div>
                        <div className="text-red-500">₹ 1.5 Lac</div>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-lg p-4" style={{ width: "100%" }}>
                    <div className="h-80">
                        <Chart
                            chartType="PieChart"
                            data={formattedPieData}
                            options={options}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>

                {/* Transactions List */}
                <div className="bg-white rounded-lg">
                    <div className="p-4 border-b">
                        <h2 className="text-blue-700 font-semibold">Transactions</h2>
                    </div>
                    <div className="divide-y">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="font-medium">{transaction.title}</div>
                                        <div className="text-sm text-gray-500">{transaction.cardInfo}</div>
                                    </div>
                                    <div className={`text-right ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                                        ₹ {transaction.amount}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        <span>{transaction.category}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                    <div className="text-sm text-gray-500">
                                        {transaction.date}
                                        <div>{transaction.time}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionsPage;