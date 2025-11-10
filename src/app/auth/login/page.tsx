'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 模拟登录 - 实际项目中需要调用API
      if (email === 'admin@example.com' && password === '700370') {
        const userData = {
          id: '1',
          email: 'admin@example.com',
          username: 'admin',
          name: '管理员',
          role: 'ADMIN'
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        toast.success('登录成功！');
        router.push('/');
      } else if (email && password) {
        const userData = {
          id: '2',
          email: email,
          username: email.split('@')[0],
          name: '普通用户',
          role: 'USER'
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        toast.success('登录成功！');
        router.push('/');
      } else {
        toast.error('请输入邮箱和密码');
      }
    } catch (error) {
      toast.error('登录失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            登录到你的账户
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            还没有账户？{' '}
            <Link href="/auth/register" className="font-medium text-primary-600 hover:text-primary-500">
              立即注册
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            label="邮箱地址"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="输入你的邮箱"
          />
          <Input
            label="密码"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="输入你的密码"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? '登录中...' : '登录'}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>管理员账号: admin@example.com / 700370</p>
        </div>
      </div>
    </div>
  );
}
