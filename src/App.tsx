import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Dashboard from './pages/Dashboard';

// Placeholder for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-text-main mb-4">{title}</h1>
    <div className="bg-white p-8 rounded-[20px] shadow-sm flex flex-col items-center justify-center min-h-[400px] text-center">
      <img src="./assets/images/upgrade-illustration.png" alt="Construction" className="w-48 opacity-50 mb-4 grayscale" />
      <p className="text-text-muted text-lg">This page is under construction.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Placeholder title="Analytics" />} />
          <Route path="invoice" element={<Placeholder title="Invoice" />} />
          <Route path="schedule" element={<Placeholder title="Schedule" />} />
          <Route path="calendar" element={<Placeholder title="Calendar" />} />
          <Route path="messages" element={<Placeholder title="Messages" />} />
          <Route path="notification" element={<Placeholder title="Notification" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}