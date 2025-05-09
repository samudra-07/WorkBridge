import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, X, Bell, User, LogOut, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getInitials } from '@/utils/avatar';

export const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getInitials = (name: string) => {
    return name.split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-workbridge-600">Work</span>
                <span className="text-xl font-bold text-gray-800">Bridge</span>
              </Link>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink 
                to="/tasks" 
                className={({isActive}) => cn(
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                  isActive 
                    ? 'border-workbridge-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )}
              >
                Find Tasks
              </NavLink>
              
              {isAuthenticated && (
                <>
                  {user?.role === 'client' && (
                    <NavLink 
                      to="/post-task" 
                      className={({isActive}) => cn(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        isActive 
                          ? 'border-workbridge-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      )}
                    >
                      Post a Task
                    </NavLink>
                  )}
                  <NavLink 
                    to="/dashboard" 
                    className={({isActive}) => cn(
                      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                      isActive 
                        ? 'border-workbridge-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    )}
                  >
                    Dashboard
                  </NavLink>
                </>
              )}
              
              <NavLink 
                to="/how-it-works" 
                className={({isActive}) => cn(
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                  isActive 
                    ? 'border-workbridge-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                )}
              >
                How It Works
              </NavLink>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/notifications')}>
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>{user?.name ? getInitials(user.name) : 'U'}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => navigate('/login')}
                >
                  Log in
                </Button>
                <Button
                  variant="default"
                  onClick={() => navigate('/register')}
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-workbridge-500"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={isMenuOpen ? "sm:hidden" : "hidden"}>
        <div className="pt-2 pb-3 space-y-1">
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              cn(
                'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                isActive
                  ? 'bg-workbridge-50 border-workbridge-500 text-workbridge-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Find Tasks
          </NavLink>
          
          {isAuthenticated && (
            <>
              {user?.role === 'client' && (
                <NavLink
                  to="/post-task"
                  className={({ isActive }) =>
                    cn(
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                      isActive
                        ? 'bg-workbridge-50 border-workbridge-500 text-workbridge-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Post a Task
                </NavLink>
              )}
              
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  cn(
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                    isActive
                      ? 'bg-workbridge-50 border-workbridge-500 text-workbridge-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            </>
          )}
          
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              cn(
                'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                isActive
                  ? 'bg-workbridge-50 border-workbridge-500 text-workbridge-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              )
            }
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </NavLink>
        </div>
        
        <div className="pt-4 pb-3 border-t border-gray-200">
          {isAuthenticated ? (
            <>
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name ? getInitials(user.name) : 'U'}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user?.name}</div>
                  <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/profile');
                  }}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
                >
                  Your Profile
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/settings');
                  }}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
                >
                  Settings
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full text-left"
                >
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <div className="px-4 flex flex-col space-y-2">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/login');
                }}
                variant="ghost"
                className="justify-center"
              >
                Log in
              </Button>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/register');
                }}
                variant="default"
                className="justify-center"
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
