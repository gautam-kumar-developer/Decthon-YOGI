import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import Main from './components/Main';

// Pages
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import RegisterComplaint from './pages/RegisterComplaint';
import TrackComplaint from './pages/TrackComplaint';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import AdminDashboard from './pages/AdminDashboard';
import AdminAnalytics from './pages/AdminAnalytics';

function App() {
  return (

      <RoleProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />

            {/* User Routes */}
            <Route path="user">
              <Route path="login" element={<UserLogin />} />
              <Route path="register" element={<UserRegister />} />
              <Route path="complaint/new" element={<RegisterComplaint />} />
              <Route path="complaint/track" element={<TrackComplaint />} />
            </Route>

            {/* Admin Routes */}
            <Route path="admin">
              <Route path="login" element={<AdminLogin />} />
              <Route path="register" element={<AdminRegister />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </RoleProvider>
  );
}

export default App;
