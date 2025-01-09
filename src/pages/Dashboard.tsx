import React from 'react';
import { Home, TrendingUp, DollarSign, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';


const MenuBar = [
    { icon: <Home className="w-6 h-6" />, label: 'Dashboard', active: true },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Insights' },
    { icon: <DollarSign className="w-6 h-6" />, label: 'Cashflow' },
    { icon: <Users className="w-6 h-6" />, label: 'Advisory' },
];

const data = [
    { year: '2019', amount: 10000 },
    { year: '2020', amount: 15000 },
    { year: '2021', amount: 12000 },
    { year: '2022', amount: 25000 },
    { year: '2023', amount: 18000 },
    { year: '2024', amount: 20000 },
];


const NetworthDashboard = () => {
    const navigate = useNavigate()

    const handleClick = (name: string) => {
        switch (name) {
            case 'Insights':
                navigate('/assets');
                break;
                case 'Cashflow':
                    navigate('/transaction');
                    break;
            default:
                break;
        }
    }

    return (
        <div className="max-w-2xl mx-auto bg-white min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center space-x-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">VS</span>
                    <h1 className="text-xl font-semibold">Networth</h1>
                </div>
                <button className="rounded-full p-2 bg-gray-100">
                    <img src="/api/placeholder/24/24" alt="Profile" className="w-6 h-6 rounded-full" />
                </button>
            </header>

            {/* Main Content */}
            <div className="p-4 space-y-6">
                {/* Networth Card */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg">Hello Jash,</h2>
                    <p className="text-sm text-gray-600">Your current <span className="text-blue-600">Networth</span> is</p>
                    <p className="text-3xl font-bold my-2">₹ 1,23,55,059</p>
                    <p className="text-xs text-gray-500 flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" /> Your networth is updated every 24 hours
                    </p>
                </div>

                {/* Chart */}
                <div className="bg-gray-50 p-4 rounded-lg h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="amount"
                                stroke="#4F46E5"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                fill="url(#colorGradient)"
                            />
                            <defs>
                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Assets Section */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Assets</h2>
                        <button className="text-blue-600 text-sm">See All →</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: 'Banks', amount: '10.5 K', icon: '🏦', trend: 'up' },
                            { title: 'Investments', amount: '10.5 K', icon: '📈', trend: 'up' },
                            { title: 'Investments', amount: '10.5 K', icon: '🔄', trend: 'up' },
                            { title: 'Investments', amount: '10.5 K', icon: '📊', trend: 'down' },
                            { title: 'Loans', amount: 'Add', icon: '💼', isAdd: true },
                            { title: 'Personal', amount: '10.5 Cr', icon: '👤' },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl">{item.icon}</span>
                                    {item.trend && (
                                        <span className={`text-xs ${item.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                            {item.trend === 'up' ? '↑' : '↓'}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm mt-2">{item.title}</p>
                                <p className="font-semibold mt-1">
                                    {item.isAdd ? (
                                        <span className="text-blue-600">+ Add</span>
                                    ) : (
                                        <>₹ {item.amount}</>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Recent Transactions</h2>
                        <button className="text-blue-600 text-sm">See All →</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { title: 'Amazon Fresh', amount: '10.5 K', type: 'expense' },
                            { title: 'Netflix', amount: '10.5 K', type: 'expense' },
                            { title: 'Dividend', amount: '10.5 K', type: 'income' },
                            { title: 'Income', amount: '10.5 K', type: 'income' },
                            { title: 'Amazon Fresh', amount: '10.5 K', type: 'expense' },
                        ].map((transaction, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{transaction.title}</p>
                                    <p className="text-sm text-gray-500">Visa Card •0976</p>
                                </div>
                                <p className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                                    ₹ {transaction.amount}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
                <div className="flex justify-around p-4">
                    {MenuBar.map((item, index) => (
                        <button
                            onClick={() => handleClick(item.label)}

                            key={index}
                            className={`flex flex-col items-center ${item.active ? 'text-blue-600' : 'text-gray-500'
                                }`}
                        >
                            {item.icon}
                            <span className="text-xs mt-1">{item.label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default NetworthDashboard;