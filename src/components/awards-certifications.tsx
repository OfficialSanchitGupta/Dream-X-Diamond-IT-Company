'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Award, 
  Shield, 
  Star, 
  Trophy, 
  Certificate, 
  CheckCircle, 
  ExternalLink,
  Calendar,
  Building,
  TrendingUp,
  Users,
  Globe,
  Zap
} from 'lucide-react'

interface Award {
  id: string
  title: string
  organization: string
  year: number
  category: string
  description: string
  icon: any
  featured: boolean
  imageUrl?: string
}

interface Certification {
  id: string
  name: string
  issuer: string
  issuedDate: string
  expiryDate?: string
  credentialId?: string
  verificationUrl?: string
  category: string
  description: string
  featured: boolean
}

const awards: Award[] = [
  {
    id: '1',
    title: 'Best IT Solutions Provider 2024',
    organization: 'Technology Excellence Awards',
    year: 2024,
    category: 'Technology',
    description: 'Recognized for outstanding innovation and excellence in IT solutions delivery.',
    icon: Trophy,
    featured: true
  },
  {
    id: '2',
    title: 'Customer Choice Award',
    organization: 'Global Business Awards',
    year: 2023,
    category: 'Customer Service',
    description: 'Awarded for exceptional customer satisfaction and service quality.',
    icon: Star,
    featured: true
  },
  {
    id: '3',
    title: 'Innovation in Cloud Computing',
    organization: 'Cloud Innovation Summit',
    year: 2023,
    category: 'Cloud Technology',
    description: 'Recognized for pioneering cloud migration and optimization solutions.',
    icon: Zap,
    featured: false
  },
  {
    id: '4',
    title: 'Best Workplace in Technology',
    organization: 'Great Place to Work',
    year: 2023,
    category: 'Company Culture',
    description: 'Certified as an exceptional workplace with outstanding employee satisfaction.',
    icon: Users,
    featured: true
  },
  {
    id: '5',
    title: 'Excellence in Cybersecurity',
    organization: 'Security Leadership Awards',
    year: 2022,
    category: 'Security',
    description: 'Recognized for leadership and innovation in cybersecurity solutions.',
    icon: Shield,
    featured: false
  },
  {
    id: '6',
    title: 'Digital Transformation Leader',
    organization: 'Digital Innovation Awards',
    year: 2022,
    category: 'Digital Innovation',
    description: 'Awarded for leadership in digital transformation initiatives.',
    icon: TrendingUp,
    featured: false
  }
]

const certifications: Certification[] = [
  {
    id: '1',
    name: 'ISO 27001:2022 Information Security Management',
    issuer: 'International Organization for Standardization',
    issuedDate: '2023-06-15',
    expiryDate: '2026-06-15',
    credentialId: 'ISO-27001-2023-001',
    verificationUrl: 'https://verify.iso.org/001',
    category: 'Security',
    description: 'Comprehensive information security management system certification.',
    featured: true
  },
  {
    id: '2',
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    issuedDate: '2023-03-20',
    expiryDate: '2026-03-20',
    credentialId: 'AWS-SA-PRO-2023-001',
    verificationUrl: 'https://aws.amazon.com/verify/001',
    category: 'Cloud Computing',
    description: 'Advanced certification for designing distributed systems on AWS.',
    featured: true
  },
  {
    id: '3',
    name: 'Microsoft Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    issuedDate: '2023-01-10',
    expiryDate: '2025-01-10',
    credentialId: 'AZ-305-2023-001',
    verificationUrl: 'https://learn.microsoft.com/verify/001',
    category: 'Cloud Computing',
    description: 'Expert-level certification for Azure solutions architecture.',
    featured: true
  },
  {
    id: '4',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issuedDate: '2022-11-15',
    expiryDate: '2025-11-15',
    credentialId: 'SEC-2022-001',
    verificationUrl: 'https://www.comptia.org/verify/001',
    category: 'Security',
    description: 'Baseline cybersecurity skills certification for IT security professionals.',
    featured: false
  },
  {
    id: '5',
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: '(ISC)²',
    issuedDate: '2022-09-01',
    expiryDate: '2025-09-01',
    credentialId: 'CISSP-2022-001',
    verificationUrl: 'https://www.isc2.org/verify/001',
    category: 'Security',
    description: 'Advanced information security certification for security professionals.',
    featured: true
  },
  {
    id: '6',
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    issuedDate: '2022-07-20',
    expiryDate: '2025-07-20',
    credentialId: 'GCP-ARCH-2022-001',
    verificationUrl: 'https://cloud.google.com/verify/001',
    category: 'Cloud Computing',
    description: 'Professional certification for Google Cloud architecture solutions.',
    featured: false
  },
  {
    id: '7',
    name: 'ITIL Foundation Certificate',
    issuer: 'AXELOS',
    issuedDate: '2022-05-10',
    credentialId: 'ITIL-2022-001',
    category: 'IT Service Management',
    description: 'Foundation certification in IT service management best practices.',
    featured: false
  },
  {
    id: '8',
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    issuedDate: '2022-03-15',
    expiryDate: '2025-03-15',
    credentialId: 'PMP-2022-001',
    verificationUrl: 'https://www.pmi.org/verify/001',
    category: 'Project Management',
    description: 'Leading certification for project management professionals.',
    featured: true
  }
]

const categories = [
  { name: 'All', count: awards.length + certifications.length },
  { name: 'Awards', count: awards.length },
  { name: 'Certifications', count: certifications.length },
  { name: 'Security', count: certifications.filter(c => c.category === 'Security').length + awards.filter(a => a.category === 'Security').length },
  { name: 'Cloud Computing', count: certifications.filter(c => c.category === 'Cloud Computing').length + awards.filter(a => a.category === 'Cloud Technology').length },
  { name: 'Company Culture', count: awards.filter(a => a.category === 'Company Culture').length }
]

export function AwardsCertifications() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTab, setActiveTab] = useState<'all' | 'awards' | 'certifications'>('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredAwards = selectedCategory === 'All' || selectedCategory === 'Awards' 
    ? awards 
    : awards.filter(award => award.category === selectedCategory)

  const filteredCertifications = selectedCategory === 'All' || selectedCategory === 'Certifications'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory)

  const featuredAwards = awards.filter(award => award.featured)
  const featuredCertifications = certifications.filter(cert => cert.featured)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Recognition & Excellence
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Awards & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is recognized through industry awards and professional certifications that validate our expertise.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Professional Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category.name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'all' ? 'bg-background shadow-sm' : ''
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'awards' ? 'bg-background shadow-sm' : ''
              }`}
            >
              Awards
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'certifications' ? 'bg-background shadow-sm' : ''
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Featured Items */}
        {(activeTab === 'all' || activeTab === 'awards') && featuredAwards.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Awards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredAwards.map((award, index) => (
                <Card key={award.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <award.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{award.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{award.organization}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{award.category}</Badge>
                        <Badge variant="secondary">{award.year}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Received in {award.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'certifications') && featuredCertifications.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCertifications.map((cert, index) => (
                <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Certificate className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{cert.category}</Badge>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Issued: {new Date(cert.issuedDate).toLocaleDateString()}</span>
                        </div>
                        {cert.expiryDate && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      {cert.verificationUrl && (
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'all' || activeTab === 'awards') && filteredAwards.map((award, index) => (
            <Card key={award.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <award.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{award.title}</h4>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{award.category}</Badge>
                    <Badge variant="secondary" className="text-xs">{award.year}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {(activeTab === 'all' || activeTab === 'certifications') && filteredCertifications.map((cert, index) => (
            <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Certificate className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{cert.category}</Badge>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <div className="text-xs text-muted-foreground">
                    Issued: {new Date(cert.issuedDate).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Partner with Excellence</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our awards and certifications demonstrate our commitment to delivering the highest quality solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Trophy className="w-5 h-5 mr-2" />
                View Our Success Stories
              </Button>
              <Button variant="outline" size="lg">
                <Shield className="w-5 h-5 mr-2" />
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}