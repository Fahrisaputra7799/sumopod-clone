import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './context/AuthContext';
import { SupabaseSetupGuide } from './components/SupabaseSetupGuide';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/LandingPage';
import Templates from './pages/Template';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Dashboard Pages
import DashboardServices from './pages/dashboard/Services';
import DashboardAI from './pages/dashboard/AI';
import DashboardAffiliate from './pages/dashboard/Affiliate';
import DashboardBilling from './pages/dashboard/Billing';
import DashboardSettings from './pages/dashboard/Settings';
import DashboardSupport from './pages/dashboard/Support';
import DashboardBeliEmas from './pages/dashboard/BeliEmas';

export default function App() {
  return (
    <AuthProvider>
      <SupabaseSetupGuide />
      <Router>
        <Routes>
          {/* Public Routes with Layout (navbar) */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/templates" element={<Layout><Templates /></Layout>} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <RequireAuth>
              <DashboardLayout><DashboardBilling /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/services" element={
            <RequireAuth>
              <DashboardLayout><DashboardServices /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/ai" element={
            <RequireAuth>
              <DashboardLayout><DashboardAI /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/affiliate" element={
            <RequireAuth>
              <DashboardLayout><DashboardAffiliate /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/billing" element={
            <RequireAuth>
              <DashboardLayout><DashboardBilling /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/settings" element={
            <RequireAuth>
              <DashboardLayout><DashboardSettings /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/support" element={
            <RequireAuth>
              <DashboardLayout><DashboardSupport /></DashboardLayout>
            </RequireAuth>
          } />
          <Route path="/dashboard/beli-emas" element={
            <RequireAuth>
              <DashboardLayout><DashboardBeliEmas /></DashboardLayout>
            </RequireAuth>
          } />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <Layout>
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <p className="text-xl text-gray-600 mb-8">Page not found</p>
                    <a
                      href="/"
                      className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}