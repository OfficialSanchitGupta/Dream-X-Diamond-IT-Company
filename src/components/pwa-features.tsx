'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Smartphone, 
  Download, 
  Wifi, 
  WifiOff, 
  Bell, 
  Settings, 
  Star,
  CheckCircle,
  AlertCircle,
  Zap,
  Shield,
  Globe,
  Monitor,
  Tablet,
  Laptop,
  Tv,
  Watch,
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
  Android,
  Windows,
  Chrome,
  Firefox,
  Safari,
  Edge
} from 'lucide-react'

interface PWAFeature {
  icon: any
  title: string
  description: string
  available: boolean
  category: 'core' | 'user-experience' | 'performance' | 'integration'
}

interface PlatformSupport {
  name: string
  icon: any
  supported: boolean
  features: string[]
  marketShare: string
}

interface OfflineCapability {
  feature: string
  description: string
  status: 'available' | 'partial' | 'planned'
}

const pwaFeatures: PWAFeature[] = [
  { icon: Download, title: 'Installable', description: 'Install on home screen like native apps', available: true, category: 'core' },
  { icon: WifiOff, title: 'Offline Support', description: 'Work without internet connection', available: true, category: 'core' },
  { icon: Bell, title: 'Push Notifications', description: 'Real-time updates and alerts', available: true, category: 'user-experience' },
  { icon: Settings, title: 'Background Sync', description: 'Sync data when connection resumes', available: true, category: 'integration' },
  { icon: Camera, title: 'Device Hardware Access', description: 'Access camera, GPS, and other sensors', available: true, category: 'integration' },
  { icon: Fingerprint, title: 'Biometric Authentication', description: 'Secure login with fingerprint or face ID', available: true, category: 'user-experience' },
  { icon: BarChart3, title: 'Performance Analytics', description: 'Track app performance and usage', available: true, category: 'performance' },
  { icon: Shield, title: 'Secure by Default', description: 'HTTPS and content security built-in', available: true, category: 'core' }
]

const platformSupport: PlatformSupport[] = [
  { name: 'Chrome', icon: Chrome, supported: true, features: ['Full PWA Support', 'Offline Mode', 'Push Notifications'], marketShare: '65%' },
  { name: 'Safari', icon: Safari, supported: true, features: ['Installable', 'Offline Mode', 'Limited Push Notifications'], marketShare: '18%' },
  { name: 'Firefox', icon: Firefox, supported: true, features: ['Full PWA Support', 'Offline Mode', 'Push Notifications'], marketShare: '3%' },
  { name: 'Edge', icon: Edge, supported: true, features: ['Full PWA Support', 'Offline Mode', 'Push Notifications'], marketShare: '5%' },
  { name: 'Android', icon: Android, supported: true, features: ['Full Support', 'Play Store Integration', 'Background Sync'], marketShare: '71%' },
  { name: 'iOS', icon: Apple, supported: true, features: ['Installable', 'Offline Mode', 'Limited Background Sync'], marketShare: '28%' },
  { name: 'Windows', icon: Windows, supported: true, features: ['Microsoft Store Integration', 'Offline Mode'], marketShare: '75%' },
  { name: 'macOS', icon: Monitor, supported: true, features: ['Installable', 'Offline Mode'], marketShare: '15%' }
]

const offlineCapabilities: OfflineCapability[] = [
  { feature: 'Offline Forms', description: 'Submit forms without internet, sync when online', status: 'available' },
  { feature: 'Cached Content', description: 'Access previously viewed content offline', status: 'available' },
  { feature: 'Offline Analytics', description: 'Track usage data locally, sync when online', status: 'available' },
  { feature: 'Background Data Sync', description: 'Sync data in the background when connection available', status: 'available' },
  { feature: 'Offline Maps', description: 'Access maps and navigation without internet', status: 'partial' },
  { feature: 'Offline Media', description: 'Play downloaded media without internet', status: 'available' },
  { feature: 'Offline Search', description: 'Search through cached content offline', status: 'available' },
  { feature: 'Offline Payments', description: 'Process payments when connection resumes', status: 'planned' }
]

export function PWAFeatures() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [onlineStatus, setOnlineStatus] = useState(true)
  const [activeTab, setActiveTab] = useState<'features' | 'platforms' | 'offline'>('features')

  useEffect(() => {
    // Simulate checking installability
    setIsInstallable(true)
    
    // Check online status
    setOnlineStatus(navigator.onLine)
    
    const handleOnlineStatus = () => setOnlineStatus(true)
    const handleOfflineStatus = () => setOnlineStatus(false)
    
    window.addEventListener('online', handleOnlineStatus)
    window.addEventListener('offline', handleOfflineStatus)
    
    return () => {
      window.removeEventListener('online', handleOnlineStatus)
      window.removeEventListener('offline', handleOfflineStatus)
    }
  }, [])

  const handleInstall = () => {
    // In a real PWA, this would trigger the install prompt
    console.log('Installing PWA...')
    setIsInstalled(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100'
      case 'partial': return 'text-yellow-600 bg-yellow-100'
      case 'planned': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const featuresByCategory = {
    core: pwaFeatures.filter(f => f.category === 'core'),
    'user-experience': pwaFeatures.filter(f => f.category === 'user-experience'),
    performance: pwaFeatures.filter(f => f.category === 'performance'),
    integration: pwaFeatures.filter(f => f.category === 'integration')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Smartphone className="w-4 h-4 mr-2" />
            Progressive Web App
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Native App Experience, Web Simplicity</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform delivers a native app experience with the simplicity and reach of the web. 
            Install it once and enjoy seamless access across all your devices.
          </p>
        </div>

        {/* Install Status */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {onlineStatus ? (
                    <Wifi className="w-6 h-6" />
                  ) : (
                    <WifiOff className="w-6 h-6" />
                  )}
                  <span className="text-lg font-semibold">
                    {onlineStatus ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  {isInstalled ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Download className="w-6 h-6" />
                  )}
                  <span className="text-lg font-semibold">
                    {isInstalled ? 'Installed' : 'Not Installed'}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Install Our App</h3>
              <p className="text-lg mb-6 opacity-90">
                Get the full experience by installing our app on your device
              </p>
              
              {isInstallable && !isInstalled && (
                <Button 
                  onClick={handleInstall}
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Install App
                </Button>
              )}
              
              {isInstalled && (
                <div className="flex items-center justify-center gap-2 text-green-300">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-lg">App successfully installed!</span>
                </div>
              )}
              
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-75">
                <div className="flex items-center justify-center gap-2">
                  <Monitor className="w-4 h-4" />
                  <span>Desktop</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Tablet className="w-4 h-4" />
                  <span>Tablet</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Laptop className="w-4 h-4" />
                  <span>Laptop</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-background p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'features' ? 'bg-primary text-primary-foreground shadow-sm' : ''
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('platforms')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'platforms' ? 'bg-primary text-primary-foreground shadow-sm' : ''
              }`}
            >
              Platform Support
            </button>
            <button
              onClick={() => setActiveTab('offline')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'offline' ? 'bg-primary text-primary-foreground shadow-sm' : ''
              }`}
            >
              Offline Capabilities
            </button>
          </div>
        </div>

        {/* Features Content */}
        {activeTab === 'features' && (
          <div className="space-y-12">
            {/* Core Features */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Core PWA Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuresByCategory.core.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      {feature.available ? (
                        <div className="flex items-center justify-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1 text-orange-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Coming Soon</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* User Experience Features */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">User Experience</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuresByCategory['user-experience'].map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      {feature.available ? (
                        <div className="flex items-center justify-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1 text-orange-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Coming Soon</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Performance Features */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Performance</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuresByCategory.performance.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      {feature.available ? (
                        <div className="flex items-center justify-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1 text-orange-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Coming Soon</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Integration Features */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Integration</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuresByCategory.integration.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      {feature.available ? (
                        <div className="flex items-center justify-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Available</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1 text-orange-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm">Coming Soon</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Platform Support Content */}
        {activeTab === 'platforms' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformSupport.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    platform.supported ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <platform.icon className={`w-8 h-8 ${platform.supported ? 'text-green-600' : 'text-gray-400'}`} />
                  </div>
                  <h4 className="font-semibold mb-2">{platform.name}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Market Share:</span>
                      <span className="font-medium">{platform.marketShare}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {platform.supported ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-600" />
                      )}
                      <span className={`text-sm ${platform.supported ? 'text-green-600' : 'text-red-600'}`}>
                        {platform.supported ? 'Supported' : 'Not Supported'}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Offline Capabilities Content */}
        {activeTab === 'offline' && (
          <div className="grid md:grid-cols-2 gap-6">
            {offlineCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      capability.status === 'available' ? 'bg-green-100' : 
                      capability.status === 'partial' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                      {capability.status === 'available' ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : capability.status === 'partial' ? (
                        <AlertCircle className="w-6 h-6 text-yellow-600" />
                      ) : (
                        <Wifi className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{capability.feature}</h4>
                        <Badge className={getStatusColor(capability.status)}>
                          {capability.status === 'available' ? 'Available' : 
                           capability.status === 'partial' ? 'Partial' : 'Planned'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our PWA?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Lightning Fast</h4>
                <p className="text-sm text-muted-foreground">
                  Instant loading and smooth performance even on slow connections
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Secure & Reliable</h4>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with automatic updates and backups
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Cross-Platform</h4>
                <p className="text-sm text-muted-foreground">
                  Works seamlessly on all devices with a single codebase
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Experience the Future of Web Apps</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Install our PWA today and enjoy the best of both worlds - native app experience with web convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleInstall} disabled={!isInstallable || isInstalled}>
              <Download className="w-5 h-5 mr-2" />
              Install Now
            </Button>
            <Button size="lg" variant="outline">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}