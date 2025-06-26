import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard/services', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center" style={{minWidth: '1024px'}}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Redirecting...</h1>
        <p className="text-xl text-gray-600">
          Taking you to the dashboard...
        </p>
      </div>
    </div>
  );
}
