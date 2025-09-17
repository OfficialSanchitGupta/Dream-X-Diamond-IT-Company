'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Star,
  Filter,
  BookOpen,
  Lightbulb,
  Zap,
  Shield,
  Cloud,
  Code,
  Smartphone,
  Brain,
  Globe
} from 'lucide-react'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeTab, setActiveTab] = useState('latest')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore how artificial intelligence is transforming business operations and what trends will shape the future of enterprise AI adoption.',
      content: 'Artificial Intelligence is no longer a futuristic concept but a present-day reality that\'s reshaping how businesses operate. From predictive analytics to natural language processing, AI is revolutionizing decision-making processes and operational efficiency across industries.',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Lead',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      tags: ['AI', 'Machine Learning', 'Business Intelligence', 'Future Tech'],
      image: '/blog/ai-future.jpg',
      featured: true,
      views: 2450,
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies: A Complete Guide for 2024',
      excerpt: 'Learn the best practices for cloud migration, including planning, execution, and optimization strategies for successful cloud adoption.',
      content: 'Cloud migration has become a critical initiative for businesses seeking scalability, flexibility, and cost efficiency. This comprehensive guide covers everything from initial assessment to post-migration optimization.',
      author: 'Marcus Rodriguez',
      authorRole: 'Cloud Architect',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'cloud',
      tags: ['Cloud Computing', 'Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/blog/cloud-migration.jpg',
      featured: true,
      views: 1890,
      likes: 134,
      comments: 18
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your organization in the era of remote and hybrid work models.',
      content: 'The shift to remote work has expanded the attack surface for cyber threats. This article outlines comprehensive security strategies to protect your organization\'s assets and data in distributed work environments.',
      author: 'Alex Thompson',
      authorRole: 'Security Expert',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'security',
      tags: ['Cybersecurity', 'Remote Work', 'Data Protection', 'Best Practices'],
      image: '/blog/cybersecurity.jpg',
      featured: false,
      views: 1560,
      likes: 98,
      comments: 15
    },
    {
      id: 4,
      title: 'React 18: New Features and Performance Improvements',
      excerpt: 'Discover the latest features in React 18 and how they can improve your application\'s performance and user experience.',
      content: 'React 18 brings significant improvements including concurrent rendering, automatic batching, and new hooks. This deep dive explores how these features enhance development experience and application performance.',
      author: 'Emma Wilson',
      authorRole: 'Senior Frontend Developer',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'development',
      tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
      image: '/blog/react-18.jpg',
      featured: false,
      views: 2100,
      likes: 178,
      comments: 31
    },
    {
      id: 5,
      title: 'Mobile App Development Trends: What\'s Hot in 2024',
      excerpt: 'Stay ahead of the curve with the latest mobile app development trends and technologies shaping the industry.',
      content: 'The mobile app development landscape is constantly evolving. From cross-platform frameworks to AI integration, discover the trends that will define mobile app development in 2024 and beyond.',
      author: 'David Kim',
      authorRole: 'Mobile Development Lead',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'mobile',
      tags: ['Mobile Development', 'iOS', 'Android', 'Cross-Platform'],
      image: '/blog/mobile-trends.jpg',
      featured: false,
      views: 1780,
      likes: 145,
      comments: 22
    },
    {
      id: 6,
      title: 'Digital Marketing Strategies for Tech Companies',
      excerpt: 'Effective marketing approaches specifically tailored for technology companies and SaaS products.',
      content: 'Marketing technology products requires a unique approach that combines technical expertise with marketing savvy. Learn proven strategies for reaching and converting your target audience in the tech sector.',
      author: 'Lisa Anderson',
      authorRole: 'Marketing Director',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'marketing',
      tags: ['Digital Marketing', 'SaaS', 'Content Marketing', 'Lead Generation'],
      image: '/blog/digital-marketing.jpg',
      featured: false,
      views: 1320,
      likes: 89,
      comments: 12
    },
    {
      id: 7,
      title: 'Database Optimization: Techniques for Better Performance',
      excerpt: 'Proven techniques and best practices for optimizing database performance and scalability.',
      content: 'Database performance is crucial for application speed and user experience. This article covers indexing strategies, query optimization, and architectural patterns for building high-performance databases.',
      author: 'Michael Zhang',
      authorRole: 'Database Architect',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'database',
      tags: ['Database', 'Performance', 'SQL', 'Optimization'],
      image: '/blog/database-optimization.jpg',
      featured: false,
      views: 1450,
      likes: 112,
      comments: 19
    },
    {
      id: 8,
      title: 'The Rise of Low-Code/No-Code Development Platforms',
      excerpt: 'How low-code and no-code platforms are democratizing software development and empowering business users.',
      content: 'Low-code and no-code platforms are revolutionizing software development by enabling business users to create applications without extensive coding knowledge. Explore the benefits, limitations, and future of this growing trend.',
      author: 'Rachel Green',
      authorRole: 'Product Manager',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'development',
      tags: ['Low-Code', 'No-Code', 'Citizen Development', 'Digital Transformation'],
      image: '/blog/low-code.jpg',
      featured: false,
      views: 1680,
      likes: 127,
      comments: 25
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length, icon: BookOpen },
    { id: 'ai', label: 'AI & ML', count: 1, icon: Brain },
    { id: 'cloud', label: 'Cloud', count: 1, icon: Cloud },
    { id: 'security', label: 'Security', count: 1, icon: Shield },
    { id: 'development', label: 'Development', count: 2, icon: Code },
    { id: 'mobile', label: 'Mobile', count: 1, icon: Smartphone },
    { id: 'marketing', label: 'Marketing', count: 1, icon: Globe },
    { id: 'database', label: 'Database', count: 1, icon: Zap }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3)
  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const getDisplayPosts = () => {
    switch (activeTab) {
      case 'featured':
        return featuredPosts
      case 'popular':
        return popularPosts
      case 'latest':
      default:
        return recentPosts
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 className="text-5xl font-bold mb-6">Insights & Innovations</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in technology 
              and digital transformation from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/50 sticky top-0 z-40 backdrop-blur-sm bg-muted/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {post.featured && (
                      <div className="bg-gradient-to-r from-primary to-primary/60 text-white px-4 py-2">
                        <Badge className="bg-white text-primary">Featured Article</Badge>
                      </div>
                    )}
                    
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary" />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          {post.featured && (
                            <Badge className="bg-primary text-primary-foreground">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Subscription */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Subscribe to Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
                <p className="text-xs text-muted-foreground">
                  Join 10,000+ subscribers getting weekly tech insights
                </p>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Cloud Computing', 'Cybersecurity', 'React', 'Mobile Development', 'DevOps', 'Database', 'Digital Marketing'].map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Authors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Popular Authors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Dr. Sarah Chen', 'Marcus Rodriguez', 'Emma Wilson'].map((author, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{author}</div>
                      <div className="text-xs text-muted-foreground">
                        {index === 0 ? '15 articles' : index === 1 ? '12 articles' : '8 articles'}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Recent Comments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-3">
                    <div className="font-medium text-sm">John Doe</div>
                    <p className="text-sm text-muted-foreground">
                      Great article on AI trends! Very insightful...
                    </p>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="border-l-2 border-primary pl-3">
                    <div className="font-medium text-sm">Jane Smith</div>
                    <p className="text-sm text-muted-foreground">
                      The cloud migration strategies are very practical...
                    </p>
                    <div className="text-xs text-muted-foreground">5 hours ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Contribute?</h2>
          <p className="text-xl mb-8 opacity-90">
            Share your expertise and insights with our community of tech professionals.
          </p>
          <Button variant="secondary" size="lg">
            Become a Contributor
          </Button>
        </div>
      </section>
    </div>
  )
}