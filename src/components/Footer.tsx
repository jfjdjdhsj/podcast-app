import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">播客博客</h3>
            <p className="text-gray-300 mb-4">
              一个现代化的播客内容平台，分享你的声音，聆听精彩故事。
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">导航</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">首页</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">博客</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white">分类</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">用户</h4>
            <ul className="space-y-2">
              <li><Link href="/auth/login" className="text-gray-300 hover:text-white">登录</Link></li>
              <li><Link href="/auth/register" className="text-gray-300 hover:text-white">注册</Link></li>
              <li><Link href="/profile" className="text-gray-300 hover:text-white">个人中心</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 播客博客. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}
