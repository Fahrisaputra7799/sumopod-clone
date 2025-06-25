import { useState } from 'react';

interface Transaction {
  date: string;
  description: string;
  type: string;
  amount: string;
  color: string;
}

interface Payment {
  date: string;
  description: string;
  method: string;
  status: string;
  amount: string;
}

interface BillingPageProps {
  user: any;
}

export default function BillingPage({ user: _user }: BillingPageProps) {
  const [activeBillingTab, setActiveBillingTab] = useState("transactions");
  const [showAddCreditModal, setShowAddCreditModal] = useState(false);

  const transactions: Transaction[] = [
    {
      date: "24/6/2025",
      description: "Service purchase: rdin test (monthly)",
      type: "Usage",
      amount: "-Rp 30.000 credits",
      color: "text-red-600",
    },
    {
      date: "24/6/2025",
      description: "Credit purchase: 50000 credits",
      type: "Purchase",
      amount: "+Rp 50.000 credits",
      color: "text-green-600",
    },
  ];

  const payments: Payment[] = [
    {
      date: "20/6/2025",
      description: "Payment for 100000 credits",
      method: "Credit Card",
      status: "Completed",
      amount: "Rp 100.000",
    },
    {
      date: "15/5/2025",
      description: "Payment for 20000 credits",
      method: "Bank Transfer",
      status: "Completed",
      amount: "Rp 20.000",
    },
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
        <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 font-semibold hover:bg-gray-200 mr-3 border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Redeem
        </button>
        <button
          onClick={() => setShowAddCreditModal(true)}
          className="flex items-center bg-blue-700 text-white px-4 py-2 font-semibold hover:bg-blue-800 border border-blue-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Credit
        </button>
      </div>

      {/* Current Credits Card */}
      <section className="bg-white border border-gray-400 p-5 mb-7">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center mr-4 border border-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
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
                onClick={() => setActiveBillingTab("transactions")}
                className={`py-2 px-1 border-b-2 font-bold text-sm ${
                  activeBillingTab === "transactions"
                    ? "border-blue-700 text-blue-700"
                    : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-500"
                }`}
              >
                Transactions
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveBillingTab("payments")}
                className={`py-2 px-1 border-b-2 font-bold text-sm ${
                  activeBillingTab === "payments"
                    ? "border-blue-700 text-blue-700"
                    : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-500"
                }`}
              >
                Payments
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content based on active billing tab */}
      {activeBillingTab === "transactions" && (
        <section className="bg-white border border-gray-400 overflow-hidden">
          <div>
            <table className="w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-300"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((tx, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      {tx.date}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      {tx.description}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      <span className="inline-flex items-center px-2 py-0.5 border border-blue-500 text-xs font-bold bg-blue-100 text-blue-800">
                        {tx.type}
                      </span>
                    </td>
                    <td className={`px-5 py-3 text-sm font-bold text-right ${tx.color}`}>
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

      {activeBillingTab === "payments" && (
        <section className="bg-white border border-gray-400 overflow-hidden">
          <div>
            <table className="w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Method
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-r border-gray-300"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-300"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      {payment.date}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      {payment.description}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      {payment.method}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-900 border-r border-gray-200">
                      <span className="inline-flex items-center px-2 py-0.5 border border-green-500 text-xs font-bold bg-green-100 text-green-800">
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm font-bold text-right text-gray-900">
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

// AddCreditModal Component
function AddCreditModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: (amount: number) => void;
}) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      onConfirm(numAmount);
    } else {
      alert("Please enter a valid positive number for the amount.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-500 p-5 w-full mx-auto" style={{maxWidth: '400px'}}>
        <header className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
          <h2 className="text-xl font-bold text-gray-800">Add Credit</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="credit-amount"
              className="block text-sm font-bold text-gray-700 mb-1"
            >
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
