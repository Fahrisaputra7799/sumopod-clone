import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Types
export interface User {
  email: string;
  name: string;
  id?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Props
interface AuthProviderProps {
  children: ReactNode;
}

// Local Storage Keys
const USER_STORAGE_KEY = 'sumopod_user';

// Auth Provider Component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
      // Clear invalid data
      localStorage.removeItem(USER_STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Login function
  const login = (userData: User) => {
    try {
      // Add timestamp and id if not provided
      const userWithMetadata = {
        ...userData,
        id: userData.id || Date.now().toString(),
        loginTime: new Date().toISOString()
      };

      setUser(userWithMetadata);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userWithMetadata));
      
      // Optional: Track login event
      console.log('User logged in:', userWithMetadata.email);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Logout function
  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem(USER_STORAGE_KEY);
      
      // Optional: Track logout event
      console.log('User logged out');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Context value
  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Auth status hook for conditional rendering
export const useAuthStatus = () => {
  const { user, isLoading } = useAuth();
  
  return {
    isAuthenticated: !!user,
    isLoading,
    user
  };
};

// Optional: Protected route wrapper component
interface RequireAuthProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const RequireAuth = ({ children, fallback }: RequireAuthProps) => {
  const { isAuthenticated, isLoading } = useAuthStatus();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
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
    );
  }

  return <>{children}</>;
};
