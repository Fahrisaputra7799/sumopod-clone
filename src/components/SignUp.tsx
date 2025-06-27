import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      setLoading(false);
      return;
    }

    try {
      const { error } = await signUp(email, password);

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        // Redirect to login after successful signup
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError("Terjadi kesalahan yang tidak terduga");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="container bg-white max-w-md mx-auto rounded-lg shadow-lg">
        <div className="max-w-md p-8 text-center">
          <h2 className="font-bold pb-2 text-center text-green-600 text-2xl">Berhasil!</h2>
          <p className="text-gray-600 mb-4">
            Akun berhasil dibuat. Silakan cek email Anda untuk verifikasi.
          </p>
          <p className="text-sm text-gray-500">
            Anda akan diarahkan ke halaman login dalam beberapa detik...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container bg-white max-w-md mx-auto rounded-lg shadow-lg">
      <form className="max-w-md p-8" onSubmit={handleSubmit}>
        <h2 className="font-bold pb-2 text-center text-black text-2xl">Daftar</h2>
        <p className="font-normal text-center text-gray-400 mb-6">
          Sudah punya akun? <Link to={"/login"} className="text-blue-600 hover:underline">Login</Link>
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            className="text-black border-gray-300 border-2 p-3 rounded-md focus:border-blue-500 focus:outline-none"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            className="text-black border-gray-300 border-2 p-3 rounded-md focus:border-blue-500 focus:outline-none"
            placeholder="Password (minimal 6 karakter)"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            minLength={6}
          />
          <input
            className="text-black border-gray-300 border-2 p-3 rounded-md focus:border-blue-500 focus:outline-none"
            placeholder="Konfirmasi Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 font-bold rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
        </div>
      </form>
    </div>
  );
}