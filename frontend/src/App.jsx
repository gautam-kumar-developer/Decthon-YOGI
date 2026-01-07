import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="submit" element={<SubmitComplaint />} />
        <Route path="status" element={<ComplaintStatus />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="analytics" element={<Analytics />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
