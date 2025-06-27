import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  const sidebarItems = [
    { id: "service", name: "Services", path: "/dashboard/services" },
    { id: "ai", name: "AI", path: "/dashboard/ai" },
    { id: "affiliate", name: "Affiliate", path: "/dashboard/affiliate" },
    { id: "billing", name: "Billing", path: "/dashboard/billing" },
    { id: "settings", name: "Settings", path: "/dashboard/settings" },
    { id: "support", name: "Support", path: "/dashboard/support" },
    { id: "beli-emas", name: "Beli Emas", path: "/dashboard/beli-emas" },
  ];

  function handleLogout() {
    // Clear any stored user data
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    // Redirect to login page
    window.location.href = "/";
  };

  return (
    <div
      className="flex bg-gray-200 min-h-screen"
    >
      {/* Sidebar */}
      <aside
        className="bg-white border-r border-gray-400 py-6 px-4"
      >
        <div className="flex flex-col h-full w-60">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-gray-800 mb-8 px-2"
          >
            Sumo<span className="text-blue-700">Pod</span>
          </Link>

          {/* Navigation */}
          <nav className="mb-auto">
            <ul className="space-y-1">
              {sidebarItems.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    className={`w-full flex items-center px-4 py-2 text-left border ${
                      location.pathname === menu.path
                        ? "bg-blue-600 text-white border-blue-700"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    <div>
                      <div className="font-bold">{menu.name}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="border-t border-gray-400 pt-4 mt-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-left text-red-700 hover:bg-red-100 border border-red-500"
            >
              <span className="mr-3 text-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <div>
                <div className="font-bold">Logout</div>
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="p-6 bg-gray-100 border border-gray-300 m-4"
        style={{ flex: 1, minWidth: "768px" }}
      >
        {/* Top Bar for User Info */}
        <header
          className="flex items-center justify-end mb-6 bg-white p-3 border border-gray-300"
          style={{ minWidth: "600px" }}
        >
          <div className="flex items-center" style={{ gap: "12px" }}>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-800">User</div>
              <div className="text-xs text-gray-600">user@example.com</div>
            </div>
            <img
              src="https://placehold.co/32x32/FFD700/000000?text=U"
              alt="User Avatar"
              className="w-8 h-8 border border-gray-400"
            />
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
