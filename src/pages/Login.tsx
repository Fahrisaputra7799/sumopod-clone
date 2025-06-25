import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Redirect to dashboard immediately after successful login
    navigate("/dashboard");
  };

  const handleLoginError = (error: string) => {
    console.error("Login error:", error);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center py-12 px-4" style={{minHeight: '100vh', minWidth: '1024px'}}>
      <div className="w-full" style={{maxWidth: '400px', gap: '32px', display: 'flex', flexDirection: 'column'}}>
        {/* Back to Home Button */}
        <div className="flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Please sign in to your account</p>
        </div>

        <div className="bg-white p-8 border border-gray-200" style={{borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
          <LoginForm
            onLoginSuccess={handleLoginSuccess}
            onLoginError={handleLoginError}
          />
        </div>
      </div>
    </div>
  );
}
