import React, { useState } from 'react';

// Dummy Link component jika react-router-dom tidak tersedia
const Link = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => <a href={to} className={className}>{children}</a>;

// Dummy useAuth hook jika AuthContext tidak tersedia
const useAuth = () => ({
  user: { name: 'Firliswastara', email: 'firliswastara799@gmail.com' },
  logout: () => alert('Logout clicked (dummy)'),
});


// Main Dashboard Component
const App = () => { // Changed from export default function Dashboard() to const App = () => to match the previous login form pattern
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('billing');

  const sidebarItems = [
    {
      id: 'billing',
      name: 'Billing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Manage your balance and view transaction history'
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'billing':
        return <BillingContent user={user} />;
      default:
        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
                <p>Select an option from the sidebar.</p>
            </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-200 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-400 min-h-screen py-6 px-4">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center text-xl font-bold text-gray-800 mb-8 px-2">
            <img src="https://placehold.co/24x24/000000/FFFFFF?text=S" alt="Logo" className="w-6 h-6 mr-2" />
            Sumo<span className="text-blue-700">Pod</span>
          </Link>

          {/* Navigation */}
          <nav className="mb-auto">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-2 text-left border ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white border-blue-700'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-3 text-lg flex items-center justify-center">{item.icon}</span>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="border-t border-gray-400 pt-4 mt-6"> {/* Border lebih jelas */}
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-2 text-left text-red-700 hover:bg-red-100 border border-red-500" // Border dan hover lebih jelas
            >
              <span className="mr-3 text-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
              <div>
                <div className="font-bold">Logout</div> {/* Font lebih tebal */}
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 border border-gray-300 m-4">
        {/* Top Bar for User Info and Actions */}
        <header className="flex items-center justify-end mb-6 bg-white p-3 border border-gray-300">
          <div className="flex items-center space-x-3">
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
        {renderContent()}
      </main>
    </div>
  );
};

// Billing Content Component
function BillingContent({ user: _user }: { user: any }) {
    const [activeBillingTab, setActiveBillingTab] = useState('transactions');
    const [showAddCreditModal, setShowAddCreditModal] = useState(false);

    const transactions = [
        { date: '24/6/2025', description: 'Service purchase: rdin test (monthly)', type: 'Usage', amount: '-Rp 30.000 credits', color: 'text-red-600' },
        { date: '24/6/2025', description: 'Credit purchase: 50000 credits', type: 'Purchase', amount: '+Rp 50.000 credits', color: 'text-green-600' },
    ];

    const payments = [
        { date: '20/6/2025', description: 'Payment for 100000 credits', method: 'Credit Card', status: 'Completed', amount: 'Rp 100.000' },
        { date: '15/5/2025', description: 'Payment for 20000 credits', method: 'Bank Transfer', status: 'Completed', amount: 'Rp 20.000' },
    ];

    const handleAddCredit = (amount: number) => {
        console.log(`Adding ${amount} credits`);
        setShowAddCreditModal(false);
    };

  return (
    <>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Billing</h1>
        <p className="text-gray-700 mt-2">Manage your balance and view transaction history</p>
      </header>

      {/* Action Buttons at Top Right */}
      <div className="flex justify-end mb-5">
        <div className="flex space-x-3">
          <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 font-semibold hover:bg-gray-200 border border-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Redeem
          </button>
          <button
            onClick={() => setShowAddCreditModal(true)}
            className="flex items-center bg-blue-700 text-white px-4 py-2 font-semibold hover:bg-blue-800 border border-blue-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Credit
          </button>
        </div>
      </div>

      {/* Current Credits Card */}
      <section className="bg-white border border-gray-400 p-5 mb-7">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mr-4 border border-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700">Current Credits</p>
            <p className="text-2xl font-bold text-gray-900">Rp 20.000</p>
          </div>
        </div>
      </section>

      {/* Tabs for Transactions and Payments */}
      <div className="mb-4 border-b border-gray-400">
        <nav aria-label="Tabs">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => setActiveBillingTab('transactions')}
                className={`py-2 px-1 border-b-2 font-bold text-sm ${
                  activeBillingTab === 'transactions'
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-500'
                }`}
              >
                Transactions
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveBillingTab('payments')}
                className={`py-2 px-1 border-b-2 font-bold text-sm ${
                  activeBillingTab === 'payments'
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-500'
                }`}
              >
                Payments
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content based on active billing tab */}
      {activeBillingTab === 'transactions' && (
        <section className="bg-white border border-gray-400 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Date
                  </th>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Description
                  </th>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Type
                  </th>
                  <th scope="col" className="px-5 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-300">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((tx, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      {tx.date}
                    </td>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      {tx.description}
                    </td>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      <span className="inline-flex items-center px-2 py-0.5 border border-blue-500 text-xs font-bold bg-blue-100 text-blue-800">
                        {tx.type}
                      </span>
                    </td>
                    <td className={`px-5 py-3 whitespace-nowrap text-sm font-bold text-right ${tx.color}`}>
                      {tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {transactions.length === 0 && (
            <div className="p-6 text-center text-gray-600 border-t border-gray-300">
              No transactions found.
            </div>
          )}
        </section>
      )}

      {activeBillingTab === 'payments' && (
        <section className="bg-white border border-gray-400 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Date
                  </th>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Description
                  </th>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Method
                  </th>
                  <th scope="col" className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300">
                    Status
                  </th>
                  <th scope="col" className="px-5 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-300">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      {payment.date}
                    </td>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      {payment.description}
                    </td>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      {payment.method}
                    </td>
                    <td className="px-5 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      <span className="inline-flex items-center px-2 py-0.5 border border-green-500 text-xs font-bold bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 whitespace-nowrap text-sm font-bold text-right text-gray-900">
                      {payment.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {payments.length === 0 && (
            <div className="p-6 text-center text-gray-600 border-t border-gray-300">
              No payment records found.
            </div>
          )}
        </section>
      )}

      {/* Add Credit Modal */}
      {showAddCreditModal && (
        <AddCreditModal
            onClose={() => setShowAddCreditModal(false)}
            onConfirm={handleAddCredit}
        />
      )}
    </>
  );
}

// AddCreditModal Component (Downgraded Style)
function AddCreditModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: (amount: number) => void }) {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const numAmount = parseFloat(amount);
        if (!isNaN(numAmount) && numAmount > 0) {
            onConfirm(numAmount);
        } else {
            // Mengganti alert() dengan pesan sederhana di dalam modal jika diinginkan,
            // tapi untuk downgrade style dan permintaan "dummy", alert mungkin "cukup"
            alert('Please enter a valid positive number for the amount.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white border border-gray-500 p-5 w-full max-w-md mx-auto">
                <header className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
                    <h2 className="text-xl font-bold text-gray-800">Add Credit</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="credit-amount" className="block text-sm font-bold text-gray-700 mb-1">
                            Amount (Rp)
                        </label>
                        <input
                            type="number"
                            id="credit-amount"
                            className="block w-full px-2 py-1 border border-gray-500 bg-gray-50 text-gray-800"
                            placeholder="e.g., 50000"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end space-x-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 py-1 bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 border border-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-700 text-white font-bold hover:bg-blue-800 border border-blue-900"
                        >
                            Confirm Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Export the main App component
export default App;
