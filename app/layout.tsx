import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '播客博客',
  description: '一个现代化的播客内容平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* 导航栏 */}
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="text-xl font-bold text-gray-900">播客博客</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">首页</a>
                  <a href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">博客</a>
                </nav>
                <div className="flex items-center space-x-4">
                  <a href="/auth/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">登录</a>
                  <a href="/auth/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">注册</a>
                </div>
              </div>
            </div>
          </header>
          
          {/* 主要内容 */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* 页脚 */}
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>&copy; 2024 播客博客. 保留所有权利.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
