# 🔐 Setup Authentication dengan Supabase

Panduan lengkap untuk mengkonfigurasi authentication menggunakan Supabase di aplikasi SumoPod.

## 📋 Prerequisites

- Node.js dan npm terinstall
- Akun Supabase (gratis di [supabase.com](https://supabase.com))

## 🚀 Langkah-langkah Setup

### 1. Buat Project Supabase

1. Pergi ke [supabase.com](https://supabase.com)
2. Sign up atau login ke akun Anda
3. Klik "New Project"
4. Isi nama project dan password database
5. Pilih region terdekat
6. Tunggu project selesai dibuat (sekitar 2 menit)

### 2. Dapatkan Credentials

1. Buka project Supabase yang baru dibuat
2. Pergi ke **Settings** → **API**
3. Copy dua nilai berikut:
   - **Project URL** (contoh: `https://abcdefghijk.supabase.co`)
   - **anon public** key (key yang panjang dimulai dengan `eyJ...`)

### 3. Konfigurasi Environment Variables

1. Copy file `.env.example` ke `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit file `.env.local` dan isi dengan credentials Anda:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
   ```

### 4. Konfigurasi Authentication di Supabase

1. Di dashboard Supabase, pergi ke **Authentication** → **Settings**
2. Konfigurasi sesuai kebutuhan:
   - **Enable email confirmations**: Aktifkan jika ingin email verification
   - **Enable phone confirmations**: Nonaktifkan jika tidak perlu
   - **Site URL**: Set ke `http://localhost:5173` untuk development

### 5. Jalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 🧪 Testing Authentication Flow

### Test Signup
1. Buka `http://localhost:5173/signup`
2. Isi email dan password (minimal 6 karakter)
3. Klik "Daftar"
4. Cek email untuk verifikasi (jika email confirmation diaktifkan)

### Test Login
1. Buka `http://localhost:5173/login`
2. Isi email dan password yang sudah didaftarkan
3. Klik "Login"
4. Anda akan diarahkan ke dashboard

### Test Protected Routes
1. Coba akses `http://localhost:5173/dashboard` tanpa login
2. Anda akan diminta untuk login terlebih dahulu
3. Setelah login, Anda bisa mengakses semua halaman dashboard

### Test Logout
1. Di dashboard, klik tombol "Logout" di sidebar
2. Anda akan diarahkan kembali ke halaman utama
3. Coba akses dashboard lagi, Anda akan diminta login

## 🔧 Troubleshooting

### Error: "Missing env.VITE_SUPABASE_URL"
- Pastikan file `.env.local` ada dan berisi URL yang benar
- Restart development server setelah mengubah environment variables

### Error: "Invalid API key"
- Pastikan anon key yang digunakan benar
- Cek di Supabase dashboard → Settings → API

### Email tidak terkirim
- Cek spam folder
- Pastikan email confirmation diaktifkan di Supabase
- Untuk development, bisa nonaktifkan email confirmation

### User tidak bisa login setelah signup
- Jika email confirmation diaktifkan, user harus verify email dulu
- Cek di Supabase dashboard → Authentication → Users untuk melihat status user

## 📁 Struktur File Authentication

```
src/
├── lib/
│   └── supabase.ts          # Konfigurasi Supabase client
├── context/
│   └── AuthContext.tsx      # Context untuk state management auth
├── components/
│   ├── LoginForm.tsx        # Form login
│   ├── SignUp.tsx           # Form signup
│   └── SupabaseSetupGuide.tsx # Panduan setup
└── pages/
    ├── Login.tsx            # Halaman login
    └── Signup.tsx           # Halaman signup
```

## 🎯 Fitur Authentication

- ✅ Email/Password signup
- ✅ Email/Password login
- ✅ Logout
- ✅ Protected routes
- ✅ Session persistence
- ✅ Auto redirect setelah login
- ✅ User info di dashboard
- ✅ Error handling
- ✅ Loading states

## 🔄 Next Steps

Setelah authentication berjalan, Anda bisa:
1. Menambahkan forgot password functionality
2. Implementasi social login (Google, GitHub, dll)
3. Menambahkan user profile management
4. Setup role-based access control
5. Implementasi email templates custom

## 📞 Support

Jika ada masalah, silakan:
1. Cek dokumentasi Supabase: [docs.supabase.com](https://docs.supabase.com)
2. Cek console browser untuk error messages
3. Pastikan semua environment variables sudah benar
