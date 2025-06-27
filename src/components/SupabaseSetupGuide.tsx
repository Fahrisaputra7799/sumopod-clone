import { isSupabaseConfigured } from '../lib/supabase';

export function SupabaseSetupGuide() {
  if (isSupabaseConfigured) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl mx-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🔧 Setup Supabase Authentication
          </h2>
          <p className="text-gray-600">
            Untuk menggunakan fitur authentication, Anda perlu mengkonfigurasi Supabase terlebih dahulu.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📋 Langkah-langkah Setup:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Buat project baru di{' '}
                <a 
                  href="https://supabase.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  supabase.com
                </a>
              </li>
              <li>Copy file <code className="bg-gray-100 px-2 py-1 rounded">.env.example</code> ke <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code></li>
              <li>Isi <code className="bg-gray-100 px-2 py-1 rounded">VITE_SUPABASE_URL</code> dengan URL project Anda</li>
              <li>Isi <code className="bg-gray-100 px-2 py-1 rounded">VITE_SUPABASE_ANON_KEY</code> dengan anon key dari project Anda</li>
              <li>Restart development server (<code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code>)</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Cara mendapatkan credentials:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
              <li>Buka project Supabase Anda</li>
              <li>Pergi ke Settings → API</li>
              <li>Copy "Project URL" dan "anon public" key</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Penting:</h4>
            <p className="text-yellow-700 text-sm">
              Pastikan Authentication sudah diaktifkan di project Supabase Anda. 
              Pergi ke Authentication → Settings dan pastikan "Enable email confirmations" sesuai kebutuhan.
            </p>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              🔄 Refresh Halaman
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
