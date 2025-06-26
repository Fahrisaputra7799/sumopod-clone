import { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full text-black p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          style={{borderRadius: '8px'}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full text-black p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          style={{borderRadius: '8px'}}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Link
        to="/dashboard/services"
        className="w-full bg-blue-600 text-white py-3 hover:bg-blue-700 font-medium text-center block"
        style={{borderRadius: '8px', textDecoration: 'none'}}
      >
        Login (Dummy)
      </Link>

      <div className="text-center text-sm text-gray-500">
        <p>This is a dummy login form.</p>
        <p>Click "Login (Dummy)" to go to dashboard.</p>
      </div>
    </div>
  );
}