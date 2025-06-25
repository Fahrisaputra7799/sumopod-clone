import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Templates from './pages/Template';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Routes with Layout (navbar) */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/templates" element={<Layout><Templates /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

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
