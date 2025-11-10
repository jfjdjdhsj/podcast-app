import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Heart, Bookmark } from 'lucide-react';
import Image from 'next/image';

async function getLatestPosts() {
  return prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          username: true,
          name: true,
          avatar: true,
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 6,
  });
}

export default async function HomePage() {
  const posts = await getLatestPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          欢迎来到播客世界
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          分享你的声音，聆听精彩故事。一个现代化的播客内容平台。
        </p>
        <div className="space-x-4">
          <Link href="/blog">
            <Button size="lg">浏览文章</Button>
          </Link>
          <Link href="/auth/register">
            <Button size="lg" variant="outline">立即加入</Button>
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {post.coverImage && (
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author.name || post.author.username}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.createdAt.toLocaleDateString()}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post._count.likes}
                    </span>
                    <span>{post._count.comments} 评论</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm">阅读更多</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
