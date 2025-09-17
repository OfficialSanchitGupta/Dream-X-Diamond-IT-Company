'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Smartphone, 
  Download, 
  QrCode, 
  ExternalLink, 
  Star, 
  CheckCircle,
  Shield,
  Zap,
  Globe,
  Bell,
  MessageCircle,
  Camera,
  MapPin,
  CreditCard,
  Fingerprint,
  BarChart3,
  Users,
  TrendingUp,
  Award,
  Play,
  Apple,
  Android
} from 'lucide-react'

interface AppFeature {
  icon: any
  title: string
  description: string
  available: boolean
}

interface AppStats {
  downloads: string
  rating: number
  reviews: string
  countries: string
}

const appFeatures: AppFeature[] = [
  { icon: MessageCircle, title: 'Real-time Chat', description: 'Instant messaging with support team', available: true },
  { icon: Bell, title: 'Push Notifications', description: 'Stay updated with important alerts', available: true },
  { icon: Camera, title: 'Document Scanner', description: 'Scan and upload documents easily', available: true },
  { icon: MapPin, title: 'Location Services', description: 'Find nearby services and offices', available: true },
  { icon: CreditCard, title: 'Secure Payments', description: 'Safe and fast payment processing', available: true },
  { icon: Fingerprint, title: 'Biometric Login', description: 'Quick and secure authentication', available: true },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Track your project progress', available: true },
  { icon: Users, title: 'Team Collaboration', description: 'Work seamlessly with your team', available: true }
]

const appStats: AppStats = {
  downloads: '500K+',
  rating: 4.8,
  reviews: '25K+',
  countries: '50+'
}

const appScreenshots = [
  '/app/screenshots/dashboard.jpg',
  '/app/screenshots/projects.jpg',
  '/app/screenshots/chat.jpg',
  '/app/screenshots/profile.jpg',
  '/app/screenshots/analytics.jpg'
]

export function MobileAppSection() {
  const [activeTab, setActiveTab] = useState<'features' | 'screenshots' | 'reviews'>('features')
  const [email, setEmail] = useState('')

  const handleDownload = (platform: 'ios' | 'android') => {
    console.log(`Downloading for ${platform}`)
    // In real app, this would redirect to app store
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Sending download link to: ${email}`)
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Smartphone className="w-4 h-4 mr-2" />
            Mobile App
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Manage Your Projects On The Go</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download our mobile app to access your projects, communicate with your team, and stay connected wherever you are.
          </p>
        </div>

        {/* App Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{appStats.downloads}</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
              {appStats.rating}
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm text-muted-foreground">App Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{appStats.reviews}</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{appStats.countries}</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - App Info */}
          <div className="space-y-8">
            {/* App Preview Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-5"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dream X Diamond</h3>
                    <p className="text-sm text-muted-foreground">Your Business, Mobile</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Experience the power of our platform in your pocket. Our mobile app brings all the essential features you need to manage your projects, collaborate with your team, and stay productive on the go.
                </p>

                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {appFeatures.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <feature.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* App Ratings */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {appStats.rating} ({appStats.reviews} reviews)
                  </span>
                </div>

                {/* Download Buttons */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Download Now:</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => handleDownload('ios')}
                      className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
                    >
                      <Apple className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </Button>
                    <Button 
                      onClick={() => handleDownload('android')}
                      className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
                    >
                      <Android className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Download */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get Download Link</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enter your email address and we'll send you a download link directly to your phone.
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                      required
                    />
                    <Button type="submit">
                      <QrCode className="w-4 h-4 mr-2" />
                      Send Link
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative">
            {/* Floating Phone Mockup */}
            <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[3rem] p-4 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex items-center justify-between px-4 text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 bg-green-500 rounded-sm"></div>
                    <div className="w-4 h-3 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="pt-8 p-4 h-full bg-gradient-to-b from-blue-50 to-purple-50">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold">TechSolutions</span>
                    </div>
                    <Bell className="w-5 h-5 text-gray-600" />
                  </div>
                  
                  {/* Dashboard Preview */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Active Projects</span>
                        <span className="text-xs text-green-600">+2</span>
                      </div>
                      <div className="text-2xl font-bold">12</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Team Messages</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="text-lg font-semibold">8 new</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Revenue</span>
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-lg font-semibold">$45.2K</div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full shadow-lg p-2">
                    <div className="flex items-center justify-around">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Users className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Settings className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Features Tabs */}
        <div className="mt-20">
          <div className="flex justify-center mb-8">
            <div className="bg-muted p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  activeTab === 'features' ? 'bg-background shadow-sm' : ''
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('screenshots')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  activeTab === 'screenshots' ? 'bg-background shadow-sm' : ''
                }`}
              >
                Screenshots
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  activeTab === 'reviews' ? 'bg-background shadow-sm' : ''
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Features Content */}
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    {feature.available ? (
                      <div className="flex items-center justify-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Available</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-1 text-orange-600">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm">Coming Soon</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Screenshots Content */}
          {activeTab === 'screenshots' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appScreenshots.map((screenshot, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium">Screenshot {index + 1}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Screen {index + 1}</h4>
                    <p className="text-sm text-muted-foreground">Key features and functionality demonstration</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Reviews Content */}
          {activeTab === 'reviews' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'John Smith',
                  company: 'TechCorp Inc.',
                  rating: 5,
                  comment: 'This app has revolutionized how we manage our projects. The mobile experience is seamless!',
                  date: '2024-01-15'
                },
                {
                  name: 'Sarah Johnson',
                  company: 'StartupHub',
                  rating: 5,
                  comment: 'Excellent design and functionality. The team collaboration features are outstanding.',
                  date: '2024-01-10'
                },
                {
                  name: 'Michael Chen',
                  company: 'Global Solutions',
                  rating: 4,
                  comment: 'Great app for managing projects on the go. The real-time notifications are very helpful.',
                  date: '2024-01-05'
                }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Download the app now and take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => handleDownload('ios')}>
              <Apple className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" onClick={() => handleDownload('android')}>
              <Android className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}