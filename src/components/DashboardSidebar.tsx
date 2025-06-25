

// Dummy Link component jika react-router-dom tidak tersedia
const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => <a href={to} className={className}>{children}</a>;

interface SidebarItem {
  id: string;
  name: string;
  clickable: boolean;
}

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  logout: () => void;
}

export default function DashboardSidebar({ activeTab, setActiveTab, logout }: DashboardSidebarProps) {
  const sidebarItems: SidebarItem[] = [
    {
      id: "billing",
      name: "Billing",
      clickable: true
    },
    {
      id: "services",
      name: "Services",
      clickable: true
    },
    {
      id: "ai",
      name: "AI",
      clickable: true
    },
    {
      id: "affiliate",
      name: "Affiliate",
      clickable: true
    },
    {
      id: "settings",
      name: "Settings",
      clickable: true
    },
    {
      id: "support",
      name: "Support",
      clickable: true
    },
  ];

  return (
    <aside className="bg-white border-r border-gray-400 py-6 px-4" style={{width: '256px', minHeight: '100vh'}}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-gray-800 mb-8 px-2"
        >
          <img src="https://placehold.co/24x24/000000/FFFFFF?text=S" alt="Logo" className="w-6 h-6 mr-2" />
          Sumo<span className="text-blue-700">Pod</span>
        </Link>

        {/* Navigation */}
        <nav className="mb-auto">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                {item.clickable ? (
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-2 text-left border ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white border-blue-700"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </button>
                ) : (
                  <div className="w-full flex items-center px-4 py-2 text-left border bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed">
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                    <span className="ml-auto text-xs bg-gray-300 text-gray-600 px-2 py-1">
                      Soon
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="border-t border-gray-400 pt-4 mt-6">
          <button
            onClick={logout}
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
  );
}
