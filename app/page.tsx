import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { 
  PlayCircleIcon, 
  MicrophoneIcon, 
  HeartIcon,
  BookOpenIcon,
  StarIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              欢迎来到播客世界
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              分享你的声音，聆听精彩故事。一个现代化的播客内容平台，让每个人的声音都被听见。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  浏览博客
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  立即加入
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们的平台
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们提供最完整的播客体验，从内容创作到社区互动
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MicrophoneIcon className="h-12 w-12 text-primary-600" />
                </div>
                <CardTitle>内容创作</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  轻松发布和管理你的播客内容，支持多媒体格式，让你的声音传遍世界。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <UsersIcon className="h-12 w-12 text-primary-600" />
                </div>
                <CardTitle>社区互动</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  与其他创作者和听众互动，建立有意义的连接，扩大你的影响力。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow bg grid--- text">
div             div              <div className="text-gray-600">活跃创作者</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">精彩内容</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">忠实听众</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100K+</div>
              <div className="text-gray-600">互动评论</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备好开始你的播客之旅了吗？
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            加入我们的创作者社区，分享你的故事，连接世界的听众。
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              立即开始创作
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
