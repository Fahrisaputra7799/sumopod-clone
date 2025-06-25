import { useState } from 'react';

interface LoginFormProps {
  onLoginSuccess?: () => void;
  onLoginError?: (error: string) => void;
}

export function LoginForm({ onLoginSuccess, onLoginError }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dummy credentials
  const dummyUser = {
    email: 'fhrisaputra7799@gmail.com',
    password: 'qweasdzxc',
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMsg('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === dummyUser.email && password === dummyUser.password) {
        onLoginSuccess?.();
      } else {
        const error = 'Email or password is incorrect.';
        setErrorMsg(error);
        onLoginError?.(error);
      }
    } catch (error) {
      const errorMessage = 'An error occurred during login.';
      setErrorMsg(errorMessage);
      onLoginError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
      {errorMsg && (
        <div className="text-red-500 text-sm bg-red-50 p-3 border border-red-200" style={{borderRadius: '6px'}}>
          {errorMsg}
        </div>
      )}

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
          required
          disabled={isLoading}
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
          required
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !email || !password}
        className="w-full bg-blue-600 text-white py-3 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed font-medium"
        style={{borderRadius: '8px'}}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}