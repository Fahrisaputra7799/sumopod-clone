import { useState } from "react";
import DashboardSidebar from '../components/DashboardSidebar';
import BillingPage from '../components/BillingPage';
import DashboardHeader from '../components/DashboardHeader';

// Dummy useAuth hook jika AuthContext tidak tersedia
const useAuth = () => ({
  user: { name: "Firliswastara", email: "firliswastara799@gmail.com" },
  logout: () => {
    // Clear any stored user data (if any)
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    // Redirect to login page
    window.location.href = "/login";
  },
});

// Main Dashboard Component
const App = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("billing");

  const renderContent = () => {
    switch (activeTab) {
      case "billing":
        return <BillingPage user={user} />;
      default:
        return (
          <div className="p-4 text-black">
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <p>Select an option from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex bg-gray-200" style={{minHeight: '100vh', minWidth: '1024px'}}>
      {/* Sidebar */}
      <DashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        logout={logout}
      />

      {/* Main Content */}
      <main className="p-6 bg-gray-100 border border-gray-300 m-4" style={{flex: 1, minWidth: '768px'}}>
        {/* Top Bar for User Info and Actions */}
        <DashboardHeader user={user} />
        {renderContent()}
      </main>
    </div>
  );
};

// Export the main App component
export default App;
