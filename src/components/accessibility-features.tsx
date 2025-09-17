'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  UniversalAccess, 
  Eye, 
  Keyboard, 
  Volume2, 
  Contrast, 
  TextHeight, 
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Settings,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Type,
  Palette,
  Navigation,
  MessageSquare,
  Brain,
  Shield,
  Users,
  Globe,
  Award,
  Star,
  Accessibility,
  HandMetal,
  Fingerprint,
  Mic,
  Captions,
  SignLanguage,
  Wheelchair
} from 'lucide-react'

interface AccessibilityFeature {
  id: string
  title: string
  description: string
  category: 'visual' | 'motor' | 'cognitive' | 'auditory' | 'neurodiversity'
  icon: any
  implemented: boolean
  wcagLevel: 'A' | 'AA' | 'AAA'
  impact: 'high' | 'medium' | 'low'
}

interface AccessibilitySetting {
  id: string
  name: string
  icon: any
  description: string
  options: string[]
  currentSetting: string
}

interface ComplianceScore {
  category: string
  score: number
  maxScore: number
  status: 'compliant' | 'partial' | 'non-compliant'
  issues: number
}

const accessibilityFeatures: AccessibilityFeature[] = [
  {
    id: '1',
    title: 'Screen Reader Support',
    description: 'Full compatibility with popular screen readers like JAWS, NVDA, and VoiceOver',
    category: 'visual',
    icon: Eye,
    implemented: true,
    wcagLevel: 'AA',
    impact: 'high'
  },
  {
    id: '2',
    title: 'Keyboard Navigation',
    description: 'Complete keyboard accessibility with visible focus indicators',
    category: 'motor',
    icon: Keyboard,
    implemented: true,
    wcagLevel: 'AA',
    impact: 'high'
  },
  {
    id: '3',
    title: 'Text Alternatives',
    description: 'Comprehensive alt text for images and ARIA labels for interactive elements',
    category: 'visual',
    icon: Type,
    implemented: true,
    wcagLevel: 'A',
    impact: 'high'
  },
  {
    id: '4',
    title: 'Color Contrast',
    description: 'High contrast ratios meeting WCAG 2.1 AA standards',
    category: 'visual',
    icon: Contrast,
    implemented: true,
    wcagLevel: 'AA',
    impact: 'high'
  },
  {
    id: '5',
    title: 'Resizable Text',
    description: 'Text scales up to 200% without loss of content or functionality',
    category: 'visual',
    icon: TextHeight,
    implemented: true,
    wcagLevel: 'AA',
    impact: 'medium'
  },
  {
    id: '6',
    title: 'Audio Descriptions',
    description: 'Audio descriptions for video content and multimedia',
    category: 'auditory',
    icon: Volume2,
    implemented: false,
    wcagLevel: 'AA',
    impact: 'medium'
  },
  {
    id: '7',
    title: 'Cognitive Accessibility',
    description: 'Simple language, clear instructions, and consistent navigation',
    category: 'cognitive',
    icon: Brain,
    implemented: true,
    wcagLevel: 'AA',
    impact: 'medium'
  },
  {
    id: '8',
    title: 'Seizure Prevention',
    description: 'No flashing content that could trigger seizures',
    category: 'neurodiversity',
    icon: Shield,
    implemented: true,
    wcagLevel: 'A',
    impact: 'high'
  },
  {
    id: '9',
    title: 'Focus Management',
    description: 'Logical focus order and visible focus indicators',
    category: 'motor',
    icon: Navigation,
    implemented: true,
    wcagLevel: 'A',
    impact: 'high'
  },
  {
    id: '10',
    title: 'Caption Support',
    description: 'Closed captions for all video and audio content',
    category: 'auditory',
    icon: Captions,
    implemented: false,
    wcagLevel: 'AA',
    impact: 'medium'
  },
  {
    id: '11',
    title: 'Touch Accessibility',
    description: 'Large touch targets and gesture support',
    category: 'motor',
    icon: HandMetal,
    implemented: true,
    wcagLevel: 'AA',
    impact: 'medium'
  },
  {
    id: '12',
    title: 'Voice Control',
    description: 'Support for voice commands and dictation',
    category: 'motor',
    icon: Mic,
    implemented: false,
    wcagLevel: 'AAA',
    impact: 'low'
  }
]

const accessibilitySettings: AccessibilitySetting[] = [
  {
    id: 'text-size',
    name: 'Text Size',
    icon: TextHeight,
    description: 'Adjust the size of text throughout the application',
    options: ['Small', 'Medium', 'Large', 'Extra Large'],
    currentSetting: 'Medium'
  },
  {
    id: 'color-scheme',
    name: 'Color Scheme',
    icon: Palette,
    description: 'Choose between different color contrast modes',
    options: ['Default', 'High Contrast', 'Dark Mode', 'Colorblind Friendly'],
    currentSetting: 'Default'
  },
  {
    id: 'spacing',
    name: 'Content Spacing',
    icon: ZoomIn,
    description: 'Increase spacing between elements for better readability',
    options: ['Normal', 'Increased', 'Maximum'],
    currentSetting: 'Normal'
  },
  {
    id: 'focus-indicators',
    name: 'Focus Indicators',
    icon: Navigation,
    description: 'Customize the appearance of keyboard focus indicators',
    options: ['Standard', 'High Visibility', 'Animated'],
    currentSetting: 'Standard'
  },
  {
    id: 'reduced-motion',
    name: 'Motion Preferences',
    icon: Smartphone,
    description: 'Reduce or eliminate animations and transitions',
    options: ['Full Motion', 'Reduced Motion', 'No Motion'],
    currentSetting: 'Full Motion'
  }
]

const complianceScores: ComplianceScore[] = [
  { category: 'Perceivable', score: 28, maxScore: 30, status: 'compliant', issues: 2 },
  { category: 'Operable', score: 25, maxScore: 25, status: 'compliant', issues: 0 },
  { category: 'Understandable', score: 22, maxScore: 25, status: 'partial', issues: 3 },
  { category: 'Robust', score: 18, maxScore: 20, status: 'partial', issues: 2 }
]

export function AccessibilityFeatures() {
  const [activeTab, setActiveTab] = useState<'features' | 'settings' | 'compliance'>('features')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'visual', 'motor', 'cognitive', 'auditory', 'neurodiversity']

  const filteredFeatures = selectedCategory === 'all' 
    ? accessibilityFeatures 
    : accessibilityFeatures.filter(feature => feature.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100'
      case 'partial': return 'text-yellow-600 bg-yellow-100'
      case 'non-compliant': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getWcagColor = (level: string) => {
    switch (level) {
      case 'A': return 'bg-green-100 text-green-800'
      case 'AA': return 'bg-blue-100 text-blue-800'
      case 'AAA': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const overallCompliance = Math.round(
    complianceScores.reduce((acc, score) => acc + (score.score / score.maxScore) * 100, 0) / complianceScores.length
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <UniversalAccess className="w-4 h-4 mr-2" />
            Accessibility First
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Accessibility for Everyone</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to creating an inclusive digital experience that works for all users, 
            regardless of ability or circumstance.
          </p>
        </div>

        {/* Compliance Score */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">WCAG 2.1 Compliance</h3>
              <div className="text-6xl font-bold mb-2">{overallCompliance}%</div>
              <p className="text-lg opacity-90 mb-6">
                Overall compliance score across all WCAG principles
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {complianceScores.map((score, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{score.category}</h4>
                    <div className="text-2xl font-bold mb-1">
                      {Math.round((score.score / score.maxScore) * 100)}%
                    </div>
                    <div className="text-sm opacity-75">
                      {score.score}/{score.maxScore} points
                    </div>
                    <Badge className={`mt-2 ${getStatusColor(score.status)}`}>
                      {score.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">12+</div>
            <div className="text-sm text-muted-foreground">Accessibility Features</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">WCAG 2.1</div>
            <div className="text-sm text-muted-foreground">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Keyboard Accessible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Screen Reader Ready</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Tabs */}
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
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'settings' ? 'bg-background shadow-sm' : ''
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'compliance' ? 'bg-background shadow-sm' : ''
              }`}
            >
              Compliance
            </button>
          </div>
        </div>

        {/* Features Content */}
        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature) => (
              <Card key={feature.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      feature.implemented ? 'bg-green-100' : 'bg-yellow-100'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        feature.implemented ? 'text-green-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{feature.title}</h4>
                        {feature.implemented ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getWcagColor(feature.wcagLevel)}>
                          WCAG {feature.wcagLevel}
                        </Badge>
                        <Badge className={getImpactColor(feature.impact)}>
                          {feature.impact} impact
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {feature.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Settings Content */}
        {activeTab === 'settings' && (
          <div className="grid md:grid-cols-2 gap-6">
            {accessibilitySettings.map((setting) => (
              <Card key={setting.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <setting.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{setting.name}</h4>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {setting.options.map((option, index) => (
                      <label key={index} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name={setting.id}
                          value={option}
                          checked={setting.currentSetting === option}
                          onChange={() => {}}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm">{option}</span>
                        {setting.currentSetting === option && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Compliance Content */}
        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {complianceScores.map((score, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{score.category}</span>
                      <Badge className={getStatusColor(score.status)}>
                        {score.status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Score</span>
                        <span className="font-semibold">{score.score}/{score.maxScore}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(score.score / score.maxScore) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {score.issues} {score.issues === 1 ? 'issue' : 'issues'} found
                        </span>
                        <span className="font-medium">
                          {Math.round((score.score / score.maxScore) * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WCAG Principles */}
            <Card>
              <CardHeader>
                <CardTitle>WCAG 2.1 Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'Perceivable',
                      description: 'Information must be presentable in ways users can perceive',
                      icon: Eye,
                      color: 'blue'
                    },
                    {
                      title: 'Operable',
                      description: 'Interface components must be operable by all users',
                      icon: Keyboard,
                      color: 'green'
                    },
                    {
                      title: 'Understandable',
                      description: 'Information and UI operation must be understandable',
                      icon: Brain,
                      color: 'yellow'
                    },
                    {
                      title: 'Robust',
                      description: 'Content must be robust enough for various assistive technologies',
                      icon: Shield,
                      color: 'purple'
                    }
                  ].map((principle, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 bg-${principle.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <principle.icon className={`w-8 h-8 text-${principle.color}-600`} />
                      </div>
                      <h4 className="font-semibold mb-2">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Accessibility Tools */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Accessibility Tools & Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Accessibility Checker',
                description: 'Built-in tool to check accessibility compliance',
                icon: CheckCircle,
                action: 'Run Audit'
              },
              {
                title: 'Screen Reader Tester',
                description: 'Test your content with popular screen readers',
                icon: MessageSquare,
                action: 'Test Now'
              },
              {
                title: 'Keyboard Navigator',
                description: 'Navigate and test keyboard accessibility',
                icon: Navigation,
                action: 'Start Test'
              }
            ].map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{tool.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Button variant="outline" className="w-full">
                    {tool.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Accessibility Commitment</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We believe that technology should be accessible to everyone. We're continuously improving 
              our platform to ensure it meets the highest standards of accessibility and inclusivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Settings className="w-5 h-5 mr-2" />
                Accessibility Settings
              </Button>
              <Button size="lg" variant="outline">
                <MessageSquare className="w-5 h-5 mr-2" />
                Report an Issue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}