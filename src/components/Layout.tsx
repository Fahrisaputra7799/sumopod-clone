import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from './Login';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // Function untuk handle login
  const handleLogin = (userData: { email: string; name: string }) => {
    const { login } = useAuth();
    login(userData);
    setShowLogin(false);
  };

  // Function untuk show login modal
  const handleShowLogin = () => {
    setShowLogin(true);
  };

  // Function untuk close login modal
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  // Check if current path is active
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center text-xl font-bold text-black">
              <img src="/vite.svg" alt="Logo" className="w-6 h-6 mr-2" />
              Sumo<span className="text-blue-600">Pod</span>
            </Link>
            <nav className="hidden md:flex gap-6 text-1xl font-medium">
              <Link 
                to="/" 
                className={`hover:text-blue-600 transition ${
                  isActivePath('/') ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/templates" 
                className={`hover:text-blue-600 transition ${
                  isActivePath('/templates') ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                Templates
              </Link>
              <Link 
                to="/pricing" 
                className={`hover:text-blue-600 transition ${
                  isActivePath('/pricing') ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/features" 
                className={`hover:text-blue-600 transition ${
                  isActivePath('/features') ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                Features
              </Link>
            </nav>
          </div>

          {/* Right: Buttons */}
          <div className="flex gap-2">
            {/* Conditional rendering untuk button Login/Dashboard */}
            {user === null ? (
              <button 
                onClick={handleShowLogin}
                className="text-black bg-gray-200 text-sm px-4 py-2 rounded-md hover:bg-gray-300 transition cursor-pointer"
              >
                Login
              </button>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/dashboard"
                  className={`text-sm px-4 py-2 rounded-md transition cursor-pointer ${
                    isActivePath('/dashboard') 
                      ? 'bg-blue-600 text-white' 
                      : 'text-black bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Dashboard ({user.name})
                </Link>
                <button 
                  onClick={logout}
                  className="text-red-600 bg-red-100 text-sm px-4 py-2 rounded-md hover:bg-red-200 transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center text-xl font-bold mb-4">
                <img src="/vite.svg" alt="Logo" className="w-6 h-6 mr-2" />
                Sumo<span className="text-blue-400">Pod</span>
              </div>
              <p className="text-gray-400">
                Deploy your applications in seconds with our powerful platform.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link to="/templates" className="hover:text-white transition">Templates</Link></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SumoPod. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <Login 
          onLogin={handleLogin}
          onClose={handleCloseLogin}
        />
      )}
    </div>
  );
}
