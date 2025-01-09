import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginForm from './pages/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NetworthDashboard from './pages/Dashboard';
import AssetAllocation from './pages/Assets';
import TransactionsPage from './pages/Transactions';

const App = () => (
  <>
    {/* <LoginForm></LoginForm>  */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<NetworthDashboard />} />
        <Route path="/assets" element={<AssetAllocation />} />
        <Route path="/transaction" element={<TransactionsPage />} />




      </Routes>
    </BrowserRouter>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
