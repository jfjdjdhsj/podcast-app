'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { 
  HomeIcon, 
  UserIcon, 
  BookOpenIcon, 
  Bars3Icon, 
  XMarkIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpenIcon className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">播客博客</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              首页
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              博客
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
              分类
            </Link>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
                >
                  <UserIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">{user.name || user.username}</span>
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      个人中心
                    </Link>
                    {user.role === 'ADMIN' && (
                      <Link href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center space-x-2">
                          <Cog6ToothIcon className="h-4 w-4" />
                          <span>管理后台</span>
                        </div>
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <ArrowRightOnRectangleIcon className="h-4 w-4" />
                        <span>退出登录</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost">登录</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>注册</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                首页
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                博客
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                分类
              </Link>
              {user ? (
                <>
                  <Link href="/profile" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                    个人中心
                  </Link>
                  {user.role === 'ADMIN' && (
                    <Link href="/admin" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                      管理后台
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium text-left"
                  >
                    退出登录
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost" className="w-full">登录</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full">注册</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
