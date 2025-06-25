

interface User {
  name: string;
  email: string;
}

interface DashboardHeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-end mb-6 bg-white p-3 border border-gray-300" style={{minWidth: '600px'}}>
      <div className="flex items-center" style={{gap: '12px'}}>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-800">User</div>
          <div className="text-xs text-gray-600">{user?.email}</div>
        </div>
        <img
          src="https://placehold.co/32x32/FFD700/000000?text=U"
          alt="User Avatar"
          className="w-8 h-8 border border-gray-400"
        />
      </div>
    </header>
  );
}
