import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/LandingPage';
import Templates from './pages/Template';
import Login from './pages/Login';

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
      <Router>
        <Routes>
          {/* Routes with Layout (navbar) */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/templates" element={<Layout><Templates /></Layout>} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/services" element={<DashboardLayout><DashboardServices /></DashboardLayout>} />
          <Route path="/dashboard/ai" element={<DashboardLayout><DashboardAI /></DashboardLayout>} />
          <Route path="/dashboard/affiliate" element={<DashboardLayout><DashboardAffiliate /></DashboardLayout>} />
          <Route path="/dashboard/billing" element={<DashboardLayout><DashboardBilling /></DashboardLayout>} />
          <Route path="/dashboard/settings" element={<DashboardLayout><DashboardSettings /></DashboardLayout>} />
          <Route path="/dashboard/support" element={<DashboardLayout><DashboardSupport /></DashboardLayout>} />
          <Route path="/dashboard/beli-emas" element={<DashboardLayout><DashboardBeliEmas /></DashboardLayout>} />

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
