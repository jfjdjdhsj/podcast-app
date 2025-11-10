'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 模拟登录
      if (email === 'admin@example.com' && password === '700370') {
        const userData = {
          id: '1',
          email: 'admin@example.com',
          username: 'admin',
          name: '管理员',
          role: 'ADMIN'
        }
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(userData))
        }
        
        alert('登录成功！')
        router.push('/admin')
      } else if (email && password) {
        const userData = {
          id: '2',
          email: email,
          username: email.split('@')[0],
          name: '普通用户',
          role: 'USER'
        }
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(userData))
        }
        
        alert('登录成功！')
        router.push('/')
      } else {
        alert('请输入邮箱和密码')
      }
    } catch (error) {
      alert('登录失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            登录到你的账户
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            还没有账户？{' '}
            <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
              立即注册
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                邮箱地址
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="输入你的邮箱"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                密码
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="输入你的密码"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
          >
            {loading ? '登录中...' : '登录'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500 bg-blue-50 p-4 rounded-md">
          <p className="font-semibold">管理员账号</p>
          <p>邮箱: admin@example.com</p>
          <p>密码: 700370</p>
        </div>
      </div>
    </div>
  )
}
