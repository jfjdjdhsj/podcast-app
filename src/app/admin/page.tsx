'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  UsersIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ArrowPathIcon,
  UserPlusIcon,
  EyeIcon,
  DocumentPlusIcon
} from '@heroicons/react/24/outline';

interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  isBanned: boolean;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    totalComments: 0,
    totalLikes: 0
  });

  useEffect(() => {
    // 模拟数据
    const mockUsers: User[] = [
      { id: '1', username: 'admin', email: 'admin@example.com', name: '管理员', role: 'ADMIN', createdAt: '2024-01-01', isBanned: false },
      { id: '2', username: 'user1', email: 'user1@example.com', name: '用户1', role: 'USER', createdAt: '2024-01-15', isBanned: false },
      { id: '3', username: 'user2', email: 'user2@example.com', name: '用户2', role: 'USER', createdAt: '2024-02-01', isBanned: true },
      { id: '4', username: 'user3', email: 'user3@example.com', name: '用户3', role: 'USER', createdAt: '2024-02- mockUsers />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">总评论数</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalComments}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <HeartIcon className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">总点赞数</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLikes}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>快速操作</CardTitle>
          <CardDescription>常用的管理功能</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <UserPlusIcon className="h-5 w-5" />
              <span>创建用户</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <DocumentPlusIcon className="h-5 w-5" />
              <span>发布文章</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <EyeIcon className="h-5 w-5" />
              <span>查看统计</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <ArrowPathIcon className="h-5 w-5" />
              <span>刷新数据</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <CardTitle>用户管理</CardTitle>
          <CardDescription>查看和管理所有注册用户</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    用户信息
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    邮箱
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    角色
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">@{user.username}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'ADMIN' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role === 'ADMIN' ? '管理员' : '普通用户'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.isBanned 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {user.isBanned ? '已封禁' : '正常'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {user.role !== 'ADMIN' && (
                        <button
                          onClick={() => handleBanUser(user.id)}
                          className={`${
                            user.isBanned 
                              ? 'text-green-600 hover:text-green-900' 
                              : 'text-red-600 hover:text-red-900'
                          }`}
                        >
                          {user.isBanned ? '解封' : '封禁'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
