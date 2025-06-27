import { createClient } from '@supabase/supabase-js'

// ============================================================================
// ENVIRONMENT VARIABLES
// ============================================================================

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// ============================================================================
// VALIDATION & FALLBACK
// ============================================================================

// Check if environment variables are properly set
const isConfigured = supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'your_supabase_project_url' &&
  supabaseAnonKey !== 'your_supabase_anon_key'

if (!isConfigured) {
  console.warn('⚠️  Supabase belum dikonfigurasi!')
  console.warn('📝 Silakan:')
  console.warn('   1. Copy file .env.example ke .env.local')
  console.warn('   2. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY dengan nilai dari project Supabase Anda')
  console.warn('   3. Restart development server')
}

// Use fallback values for development if not configured
const finalUrl = isConfigured ? supabaseUrl : 'https://placeholder.supabase.co'
const finalKey = isConfigured ? supabaseAnonKey : 'placeholder-key'

// ============================================================================
// SUPABASE CLIENT
// ============================================================================

export const supabase = createClient(finalUrl, finalKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// ============================================================================
// CONFIGURATION STATUS
// ============================================================================

export const isSupabaseConfigured = isConfigured

// ============================================================================
// TYPES
// ============================================================================

export type { User, Session } from '@supabase/supabase-js'
