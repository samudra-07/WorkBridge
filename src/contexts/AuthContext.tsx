
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';
import { USERS } from '../data/mockData';
import { toast } from '../hooks/use-toast';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  role: UserRole | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, role: UserRole, password: string) => Promise<boolean>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('workbridge_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('workbridge_user');
      }
    }
    setLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user by email (mock authentication)
      const foundUser = USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('workbridge_user', JSON.stringify(foundUser));
        toast({
          title: "Login successful",
          description: `Welcome back, ${foundUser.name}!`,
        });
        return true;
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Mock register function
  const register = async (name: string, email: string, role: UserRole, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const userExists = USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (userExists) {
        toast({
          title: "Registration failed",
          description: "Email already in use",
          variant: "destructive",
        });
        return false;
      }
      
      // Create new user (this would typically be handled by a backend)
      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        role,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`,
        rating: 0,
        totalReviews: 0,
        createdAt: new Date().toISOString(),
        verified: false,
      };
      
      // In a real app, we'd save this to the backend
      // For demo purposes, we'll just set the user state
      setUser(newUser);
      localStorage.setItem('workbridge_user', JSON.stringify(newUser));
      
      toast({
        title: "Registration successful",
        description: `Welcome to WorkBridge, ${name}!`,
      });
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('workbridge_user');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        role: user?.role || null,
        login, 
        logout, 
        register,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
