'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Menu, X, Settings, LogOut, User, BookOpen } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Podcast Blog</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            文章
          </Link>
          <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
            分类
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            关于
          </Link>
        </nav>

        {/* Search and User Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden lg:flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索..."
              className="bg-transparent outline-none text-sm w-40 lg:w-60"
            />
          </div>

          {/* User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name?.[0] || user.username[0]}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    个人中心
                  </Link>
                </DropdownMenuItem>
                {user.role === 'ADMIN' && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      管理后台
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  退出登录
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost">登录</Button>
              </Link>
              <Link href="/auth/register">
                <Button>注册</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/blog" className="block text-muted-foreground hover:text-primary">
              文章
            </Link>
            <Link href="/categories" className="block text-muted-foreground hover:text-primary">
              分类
            </Link>
            <Link href="/about" className="block text-muted-foreground hover:text-primary">
              关于
            </Link>
            {!user && (
              <div className="flex space-x-2 pt-4 border-t">
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">登录</Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm">注册</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
