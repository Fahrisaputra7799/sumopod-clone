import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import type { Session } from '@supabase/supabase-js'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface User {
  id: string
  email: string
  name?: string
  created_at?: string
}

interface AuthError {
  message: string
}

interface AuthResult {
  error: AuthError | null
}

interface AuthContextType {
  user: User | null
  session: Session | null
  signUp: (email: string, password: string) => Promise<AuthResult>
  signIn: (email: string, password: string) => Promise<AuthResult>
  signOut: () => Promise<AuthResult>
  isLoading: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

interface RequireAuthProps {
  children: ReactNode
  fallback?: ReactNode
}

// ============================================================================
// CONTEXT CREATION
// ============================================================================

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const useAuthStatus = () => {
  const { user, session, isLoading } = useAuth()

  return {
    isAuthenticated: !!user && !!session,
    isLoading,
    user,
    session
  }
}

// ============================================================================
// MAIN PROVIDER COMPONENT
// ============================================================================

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize auth state and listen for changes
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || '',
          created_at: session.user.created_at
        })
      }
      setIsLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || '',
          created_at: session.user.created_at
        })
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Sign up function
  const signUp = async (email: string, password: string): Promise<AuthResult> => {
    if (!isSupabaseConfigured) {
      return { error: { message: 'Supabase belum dikonfigurasi. Silakan setup environment variables terlebih dahulu.' } }
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })
      return { error: error ? { message: error.message } : null }
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'Unknown error occurred' } }
    }
  }

  // Sign in function
  const signIn = async (email: string, password: string): Promise<AuthResult> => {
    if (!isSupabaseConfigured) {
      return { error: { message: 'Supabase belum dikonfigurasi. Silakan setup environment variables terlebih dahulu.' } }
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      return { error: error ? { message: error.message } : null }
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'Unknown error occurred' } }
    }
  }

  // Sign out function
  const signOut = async (): Promise<AuthResult> => {
    if (!isSupabaseConfigured) {
      return { error: { message: 'Supabase belum dikonfigurasi.' } }
    }

    try {
      const { error } = await supabase.auth.signOut()
      return { error: error ? { message: error.message } : null }
    } catch (error) {
      return { error: { message: error instanceof Error ? error.message : 'Unknown error occurred' } }
    }
  }

  // Context value
  const value: AuthContextType = {
    user,
    session,
    signUp,
    signIn,
    signOut,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// ============================================================================
// PROTECTED ROUTE COMPONENT
// ============================================================================

export function RequireAuth({ children, fallback }: RequireAuthProps) {
  const { isAuthenticated, isLoading } = useAuthStatus()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {fallback || (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Authentication Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please log in to access this page.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Go to Login
            </button>
          </div>
        )}
      </div>
    )
  }

  return <>{children}</>
}
