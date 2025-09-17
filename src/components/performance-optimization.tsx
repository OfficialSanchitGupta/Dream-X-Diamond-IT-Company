'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Cpu, 
  HardDrive, 
  Network,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  Speed,
  Wifi,
  Cloud,
  Server,
  Cache,
  Image as ImageIcon,
  Code,
  Smartphone,
  Monitor,
  Loader2
} from 'lucide-react'

interface PerformanceMetric {
  name: string
  value: string
  target: string
  status: 'excellent' | 'good' | 'fair' | 'poor'
  trend: 'up' | 'down' | 'stable'
  icon: any
  description: string
}

interface OptimizationTip {
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  category: string
  impact: string
  implemented: boolean
}

interface CacheInfo {
  type: string
  size: string
  hitRate: string
  status: string
}

const performanceMetrics: PerformanceMetric[] = [
  {
    name: 'Page Load Time',
    value: '1.2s',
    target: '< 2s',
    status: 'excellent',
    trend: 'down',
    icon: Speed,
    description: 'Time to fully load the page'
  },
  {
    name: 'First Contentful Paint',
    value: '0.8s',
    target: '< 1s',
    status: 'excellent',
    trend: 'down',
    icon: Monitor,
    description: 'Time to first content render'
  },
  {
    name: 'Largest Contentful Paint',
    value: '2.1s',
    target: '< 2.5s',
    status: 'good',
    trend: 'stable',
    icon: ImageIcon,
    description: 'Time to load largest content'
  },
  {
    name: 'Time to Interactive',
    value: '1.8s',
    target: '< 3s',
    status: 'excellent',
    trend: 'down',
    icon: Activity,
    description: 'Time to full interactivity'
  },
  {
    name: 'Cumulative Layout Shift',
    value: '0.05',
    target: '< 0.1',
    status: 'excellent',
    trend: 'stable',
    icon: BarChart3,
    description: 'Visual stability score'
  },
  {
    name: 'Server Response Time',
    value: '180ms',
    target: '< 200ms',
    status: 'excellent',
    trend: 'down',
    icon: Server,
    description: 'Backend response time'
  }
]

const optimizationTips: OptimizationTip[] = [
  {
    title: 'Enable Browser Caching',
    description: 'Implement proper caching headers to reduce server load and improve repeat visit performance.',
    priority: 'high',
    category: 'Caching',
    impact: '40% faster repeat visits',
    implemented: true
  },
  {
    title: 'Optimize Images',
    description: 'Compress and serve images in next-gen formats (WebP/AVIF) with proper sizing.',
    priority: 'high',
    category: 'Images',
    impact: '60% smaller image sizes',
    implemented: true
  },
  {
    title: 'Minify CSS and JavaScript',
    description: 'Remove unnecessary characters from code to reduce file sizes and improve load times.',
    priority: 'medium',
    category: 'Code Optimization',
    impact: '30% smaller bundle sizes',
    implemented: true
  },
  {
    title: 'Implement Lazy Loading',
    description: 'Load images and components only when they enter the viewport to improve initial load time.',
    priority: 'medium',
    category: 'Loading Strategy',
    impact: '25% faster initial load',
    implemented: true
  },
  {
    title: 'Enable Gzip Compression',
    description: 'Compress text-based resources to reduce transfer sizes and improve load times.',
    priority: 'high',
    category: 'Compression',
    impact: '70% smaller text files',
    implemented: true
  },
  {
    title: 'Use CDN for Static Assets',
    description: 'Distribute static assets across global CDN for faster delivery worldwide.',
    priority: 'medium',
    category: 'Network',
    impact: '50% faster global access',
    implemented: true
  },
  {
    title: 'Implement Code Splitting',
    description: 'Split code into smaller chunks to load only what\'s needed for each page.',
    priority: 'medium',
    category: 'Code Optimization',
    impact: '35% faster page loads',
    implemented: false
  },
  {
    title: 'Optimize Database Queries',
    description: 'Add proper indexing and optimize slow database queries for better performance.',
    priority: 'high',
    category: 'Database',
    impact: '80% faster query responses',
    implemented: false
  }
]

const cacheInfo: CacheInfo[] = [
  {
    type: 'Browser Cache',
    size: '50 MB',
    hitRate: '85%',
    status: 'Active'
  },
  {
    type: 'CDN Cache',
    size: '2 GB',
    hitRate: '92%',
    status: 'Active'
  },
  {
    type: 'Database Cache',
    size: '1 GB',
    hitRate: '78%',
    status: 'Active'
  },
  {
    type: 'Application Cache',
    size: '100 MB',
    hitRate: '88%',
    status: 'Active'
  }
]

export function PerformanceOptimization() {
  const [isLoading, setIsLoading] = useState(false)
  const [lastOptimized, setLastOptimized] = useState('2024-01-20 14:30:00')
  const [optimizationScore, setOptimizationScore] = useState(92)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-blue-600 bg-blue-100'
      case 'fair': return 'text-yellow-600 bg-yellow-100'
      case 'poor': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const runOptimization = async () => {
    setIsLoading(true)
    // Simulate optimization process
    setTimeout(() => {
      setIsLoading(false)
      setLastOptimized(new Date().toISOString().replace('T', ' ').replace(/\.\d+Z$/, ''))
      setOptimizationScore(Math.min(100, optimizationScore + Math.floor(Math.random() * 5)))
    }, 3000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-blue-600'
    if (score >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Performance Optimization
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Lightning Fast Performance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We continuously monitor and optimize our platform to ensure the best possible performance and user experience.
          </p>
        </div>

        {/* Performance Score */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Performance Score</h3>
              <div className="text-6xl font-bold mb-2">
                <span className={getScoreColor(optimizationScore)}>{optimizationScore}</span>
                <span className="text-4xl">/100</span>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Overall performance health score
              </p>
              <div className="flex items-center justify-center gap-4 text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Last optimized: {lastOptimized}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Real-time monitoring</span>
                </div>
              </div>
              <Button 
                onClick={runOptimization} 
                disabled={isLoading}
                className="mt-6 bg-white text-blue-600 hover:bg-gray-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Run Optimization
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Web Vitals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{metric.name}</h4>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current:</span>
                      <span className="font-semibold">{metric.value}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Target:</span>
                      <span className="text-sm">{metric.target}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <Badge className={getStatusColor(metric.status)}>
                        {metric.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {metric.trend === 'down' ? (
                        <TrendingDown className="w-4 h-4 text-green-600" />
                      ) : metric.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-red-600" />
                      ) : (
                        <Activity className="w-4 h-4 text-blue-600" />
                      )}
                      <span className="text-sm text-muted-foreground capitalize">
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Optimization Tips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Optimization Recommendations</h3>
          <div className="space-y-4">
            {optimizationTips.map((tip, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${tip.implemented ? 'border-green-200 bg-green-50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{tip.title}</h4>
                        <Badge className={getPriorityColor(tip.priority)}>
                          {tip.priority} priority
                        </Badge>
                        <Badge variant="outline">{tip.category}</Badge>
                        {tip.implemented && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Implemented
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{tip.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium text-green-600">{tip.impact}</span>
                      </div>
                    </div>
                    {!tip.implemented && (
                      <Button variant="outline" size="sm">
                        Implement
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cache Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Cache Performance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cacheInfo.map((cache, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cache className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{cache.type}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium">{cache.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hit Rate:</span>
                      <span className="font-medium text-green-600">{cache.hitRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-green-100 text-green-800">{cache.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Performance Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Global CDN', description: 'Lightning-fast content delivery worldwide' },
              { icon: Cache, title: 'Multi-layer Caching', description: 'Browser, CDN, and application caching' },
              { icon: Code, title: 'Code Optimization', description: 'Minified and optimized code delivery' },
              { icon: Image, title: 'Image Optimization', description: 'Next-gen formats and lazy loading' },
              { icon: Database, title: 'Database Optimization', description: 'Indexed queries and connection pooling' },
              { icon: Network, title: 'HTTP/2 & HTTP/3', description: 'Latest protocols for faster transfers' },
              { icon: Smartphone, title: 'Mobile Optimization', description: 'Responsive and mobile-first design' },
              { icon: Shield, title: 'Security Optimized', description: 'Fast and secure by design' }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real-time Monitoring */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">24/7 Performance Monitoring</h3>
            <p className="text-lg text-muted-foreground">
              We continuously monitor performance metrics and automatically optimize for the best user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor performance metrics in real-time with detailed analytics and insights.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Alert System</h4>
                <p className="text-sm text-muted-foreground">
                  Get instant notifications when performance metrics fall below thresholds.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Auto-optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Automatic optimization based on traffic patterns and user behavior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}