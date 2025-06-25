import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Apps', value: '3', color: 'text-blue-600' },
    { label: 'Total Deployments', value: '12', color: 'text-green-600' },
    { label: 'Storage Used', value: '2.4 GB', color: 'text-purple-600' },
    { label: 'Bandwidth', value: '45.2 GB', color: 'text-orange-600' },
  ];

  const recentApps = [
    {
      id: 1,
      name: 'My React App',
      status: 'Running',
      url: 'my-react-app.sumopod.com',
      lastDeploy: '2 hours ago',
      statusColor: 'text-green-600 bg-green-100'
    },
    {
      id: 2,
      name: 'API Server',
      status: 'Running',
      url: 'api-server.sumopod.com',
      lastDeploy: '1 day ago',
      statusColor: 'text-green-600 bg-green-100'
    },
    {
      id: 3,
      name: 'Landing Page',
      status: 'Stopped',
      url: 'landing.sumopod.com',
      lastDeploy: '3 days ago',
      statusColor: 'text-red-600 bg-red-100'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening with your applications
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} flex items-center justify-center`}>
                  <span className={`text-xl ${stat.color}`}>📊</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Deploy New App
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
              Browse Templates
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
              View Analytics
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
              Manage Domains
            </button>
          </div>
        </div>

        {/* Recent Apps */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Applications</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentApps.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {app.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${app.statusColor}`}>
                      {app.status}
                    </span>
                    <span className="text-sm text-gray-500">{app.lastDeploy}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State for New Users */}
        {recentApps.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ready to deploy your first app?
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by deploying from our template library or upload your own code.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Browse Templates
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
                Upload Code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
