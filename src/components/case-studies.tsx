'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Search,
  Filter,
  ArrowRight,
  Star,
  Award,
  BarChart3,
  Target,
  Zap,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Cpu,
  Building,
  ShoppingCart,
  Heart,
  GraduationCap
} from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  industry: string
  client: string
  projectDuration: string
  teamSize: number
  budget: string
  technologies: string[]
  challenges: string[]
  solutions: string[]
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  keyFeatures: string[]
  testimonial: {
    quote: string
    author: string
    position: string
    company: string
    avatar?: string
  }
  images: {
    hero: string
    gallery: string[]
  }
  documents: {
    title: string
    type: string
    url: string
  }[]
  tags: string[]
  featured: boolean
  publishedDate: string
  lastUpdated: string
  status: 'published' | 'draft' | 'archived'
  difficulty: 'simple' | 'medium' | 'complex'
  innovationLevel: 'standard' | 'advanced' | 'cutting-edge'
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Platform Transformation',
    subtitle: 'Complete digital overhaul for leading retail giant',
    description: 'A comprehensive transformation of an outdated e-commerce platform into a modern, scalable, and high-performance solution that resulted in significant business growth and improved customer experience.',
    category: 'Web Development',
    industry: 'E-commerce',
    client: 'Global Retail Corp',
    projectDuration: '6 months',
    teamSize: 12,
    budget: '$450,000',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    challenges: [
      'Outdated legacy system with poor performance',
      'Limited scalability during peak seasons',
      'High bounce rates due to slow loading times',
      'Inefficient inventory management',
      'Poor mobile user experience'
    ],
    solutions: [
      'Migrated to modern React-based frontend',
      'Implemented microservices architecture',
      'Added advanced caching and CDN',
      'Built real-time inventory management',
      'Optimized for mobile-first experience'
    ],
    results: [
      { metric: 'Conversion Rate', value: '60%', improvement: 'increase' },
      { metric: 'Page Load Time', value: '70%', improvement: 'decrease' },
      { metric: 'Revenue', value: '45%', improvement: 'increase' },
      { metric: 'User Satisfaction', value: '85%', improvement: 'increase' }
    ],
    keyFeatures: [
      'Real-time inventory tracking',
      'Advanced product recommendation engine',
      'Multi-currency support',
      'Advanced analytics dashboard',
      'Mobile app integration'
    ],
    testimonial: {
      quote: 'The transformation exceeded our expectations. Our online sales have doubled, and customer satisfaction has never been higher.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'Global Retail Corp'
    },
    images: {
      hero: '/case-studies/ecommerce-hero.jpg',
      gallery: ['/case-studies/ecommerce-1.jpg', '/case-studies/ecommerce-2.jpg', '/case-studies/ecommerce-3.jpg']
    },
    documents: [
      { title: 'Full Case Study PDF', type: 'pdf', url: '/case-studies/ecommerce-full.pdf' },
      { title: 'Technical Architecture', type: 'pdf', url: '/case-studies/ecommerce-architecture.pdf' },
      { title: 'Results Presentation', type: 'pptx', url: '/case-studies/ecommerce-results.pptx' }
    ],
    tags: ['E-commerce', 'React', 'Performance', 'Scalability', 'Mobile'],
    featured: true,
    publishedDate: '2024-01-15',
    lastUpdated: '2024-01-20',
    status: 'published',
    difficulty: 'complex',
    innovationLevel: 'advanced'
  },
  {
    id: '2',
    title: 'Banking Mobile App Security Overhaul',
    subtitle: 'Enterprise-grade security implementation for mobile banking',
    description: 'Complete security overhaul and modernization of a mobile banking application, implementing cutting-edge security measures while maintaining excellent user experience and performance.',
    category: 'Mobile Development',
    industry: 'Banking',
    client: 'SecureBank International',
    projectDuration: '8 months',
    teamSize: 15,
    budget: '$680,000',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Biometric SDK', 'Blockchain'],
    challenges: [
      'Growing security threats and vulnerabilities',
      'Compliance with strict banking regulations',
      'Balancing security with user experience',
      'Legacy codebase with technical debt',
      'Need for real-time fraud detection'
    ],
    solutions: [
      'Implemented end-to-end encryption',
      'Added biometric authentication',
      'Built real-time fraud detection system',
      'Integrated blockchain for transaction security',
      'Comprehensive security audit and testing'
    ],
    results: [
      { metric: 'Security Incidents', value: '95%', improvement: 'decrease' },
      { metric: 'User Trust Score', value: '40%', improvement: 'increase' },
      { metric: 'Transaction Speed', value: '25%', improvement: 'increase' },
      { metric: 'Compliance Score', value: '100%', improvement: 'achieved' }
    ],
    keyFeatures: [
      'Biometric authentication',
      'Real-time fraud detection',
      'End-to-end encryption',
      'Blockchain-secured transactions',
      'Advanced analytics dashboard'
    ],
    testimonial: {
      quote: 'The security transformation has been remarkable. We\'ve achieved 100% compliance while significantly improving user trust.',
      author: 'Michael Chen',
      position: 'Head of Security',
      company: 'SecureBank International'
    },
    images: {
      hero: '/case-studies/banking-hero.jpg',
      gallery: ['/case-studies/banking-1.jpg', '/case-studies/banking-2.jpg', '/case-studies/banking-3.jpg']
    },
    documents: [
      { title: 'Security Implementation Guide', type: 'pdf', url: '/case-studies/banking-security.pdf' },
      { title: 'Compliance Report', type: 'pdf', url: '/case-studies/banking-compliance.pdf' },
      { title: 'Technical Whitepaper', type: 'pdf', url: '/case-studies/banking-whitepaper.pdf' }
    ],
    tags: ['Banking', 'Security', 'Mobile', 'Compliance', 'Blockchain'],
    featured: true,
    publishedDate: '2024-01-10',
    lastUpdated: '2024-01-18',
    status: 'published',
    difficulty: 'complex',
    innovationLevel: 'cutting-edge'
  },
  {
    id: '3',
    title: 'Healthcare Data Analytics Platform',
    subtitle: 'AI-powered healthcare analytics for improved patient outcomes',
    description: 'Development of a comprehensive healthcare analytics platform using AI and machine learning to analyze patient data, predict outcomes, and improve treatment effectiveness.',
    category: 'Data Science',
    industry: 'Healthcare',
    client: 'HealthPlus Medical Center',
    projectDuration: '10 months',
    teamSize: 18,
    budget: '$850,000',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'BigQuery', 'Tableau'],
    challenges: [
      'Massive amounts of unstructured patient data',
      'Need for real-time analytics and insights',
      'Strict HIPAA compliance requirements',
      'Integration with legacy hospital systems',
      'Predictive modeling accuracy requirements'
    ],
    solutions: [
      'Built AI-powered data processing pipeline',
      'Implemented predictive analytics models',
      'Created real-time dashboard for medical staff',
      'Ensured full HIPAA compliance',
      'Integrated with existing hospital systems'
    ],
    results: [
      { metric: 'Diagnosis Accuracy', value: '35%', improvement: 'increase' },
      { metric: 'Treatment Efficiency', value: '50%', improvement: 'increase' },
      { metric: 'Data Processing Time', value: '80%', improvement: 'decrease' },
      { metric: 'Patient Outcomes', value: '28%', improvement: 'improvement' }
    ],
    keyFeatures: [
      'AI-powered diagnosis assistance',
      'Predictive patient outcome modeling',
      'Real-time health monitoring',
      'Advanced data visualization',
      'HIPAA-compliant data handling'
    ],
    testimonial: {
      quote: 'This platform has revolutionized how we analyze patient data and make treatment decisions. Patient outcomes have improved significantly.',
      author: 'Dr. Emily Rodriguez',
      position: 'Chief Medical Officer',
      company: 'HealthPlus Medical Center'
    },
    images: {
      hero: '/case-studies/healthcare-hero.jpg',
      gallery: ['/case-studies/healthcare-1.jpg', '/case-studies/healthcare-2.jpg', '/case-studies/healthcare-3.jpg']
    },
    documents: [
      { title: 'Healthcare Analytics Study', type: 'pdf', url: '/case-studies/healthcare-analytics.pdf' },
      { title: 'AI Implementation Guide', type: 'pdf', url: '/case-studies/healthcare-ai.pdf' },
      { title: 'Patient Outcomes Report', type: 'pdf', url: '/case-studies/healthcare-outcomes.pdf' }
    ],
    tags: ['Healthcare', 'AI', 'Data Science', 'Analytics', 'Machine Learning'],
    featured: true,
    publishedDate: '2024-01-05',
    lastUpdated: '2024-01-15',
    status: 'published',
    difficulty: 'complex',
    innovationLevel: 'cutting-edge'
  },
  {
    id: '4',
    title: 'Manufacturing IoT Monitoring System',
    subtitle: 'Real-time monitoring and predictive maintenance for smart factory',
    description: 'Implementation of a comprehensive IoT monitoring system for a manufacturing facility, enabling real-time equipment monitoring, predictive maintenance, and operational optimization.',
    category: 'IoT',
    industry: 'Manufacturing',
    client: 'TechManufacturing Inc.',
    projectDuration: '7 months',
    teamSize: 14,
    budget: '$720,000',
    technologies: ['Python', 'IoT Sensors', 'MQTT', 'AWS IoT', 'Time Series DB', 'React'],
    challenges: [
      'Legacy equipment with no monitoring capabilities',
      'High maintenance costs and downtime',
      'Need for real-time production insights',
      'Integration with multiple factory systems',
      'Scalability requirements for future expansion'
    ],
    solutions: [
      'Deployed IoT sensor network',
      'Built real-time monitoring dashboard',
      'Implemented predictive maintenance algorithms',
      'Created integration layer for legacy systems',
      'Scalable cloud infrastructure'
    ],
    results: [
      { metric: 'Downtime', value: '65%', improvement: 'decrease' },
      { metric: 'Maintenance Costs', value: '40%', improvement: 'decrease' },
      { metric: 'Production Efficiency', value: '55%', improvement: 'increase' },
      { metric: 'Equipment Lifespan', value: '30%', improvement: 'increase' }
    ],
    keyFeatures: [
      'Real-time equipment monitoring',
      'Predictive maintenance alerts',
      'Production analytics dashboard',
      'Mobile monitoring app',
      'Integration with ERP systems'
    ],
    testimonial: {
      quote: 'The IoT system has transformed our manufacturing operations. We\'ve seen dramatic improvements in efficiency and cost reduction.',
      author: 'David Park',
      position: 'Operations Director',
      company: 'TechManufacturing Inc.'
    },
    images: {
      hero: '/case-studies/manufacturing-hero.jpg',
      gallery: ['/case-studies/manufacturing-1.jpg', '/case-studies/manufacturing-2.jpg', '/case-studies/manufacturing-3.jpg']
    },
    documents: [
      { title: 'IoT Implementation Study', type: 'pdf', url: '/case-studies/manufacturing-iot.pdf' },
      { title: 'ROI Analysis Report', type: 'pdf', url: '/case-studies/manufacturing-roi.pdf' },
      { title: 'Technical Architecture', type: 'pdf', url: '/case-studies/manufacturing-architecture.pdf' }
    ],
    tags: ['IoT', 'Manufacturing', 'Predictive Maintenance', 'Real-time', 'Analytics'],
    featured: false,
    publishedDate: '2023-12-20',
    lastUpdated: '2024-01-10',
    status: 'published',
    difficulty: 'medium',
    innovationLevel: 'advanced'
  },
  {
    id: '5',
    title: 'Educational Platform Migration',
    subtitle: 'Cloud migration and scaling for online learning platform',
    description: 'Complete migration of an educational platform from on-premise infrastructure to cloud, enabling massive scalability and improved performance for millions of users.',
    category: 'Cloud Computing',
    industry: 'Education',
    client: 'EduTech Global',
    projectDuration: '5 months',
    teamSize: 10,
    budget: '$380,000',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Node.js', 'MongoDB', 'Redis'],
    challenges: [
      'On-premise infrastructure reaching limits',
      'Difficulty scaling during peak usage',
      'High maintenance and operational costs',
      'Need for global content delivery',
      'Performance issues with growing user base'
    ],
    solutions: [
      'Designed cloud-native architecture',
      'Implemented auto-scaling infrastructure',
      'Migrated databases to cloud',
      'Added global CDN for content delivery',
      'Optimized for high availability'
    ],
    results: [
      { metric: 'System Availability', value: '99.9%', improvement: 'achieved' },
      { metric: 'Operational Costs', value: '45%', improvement: 'decrease' },
      { metric: 'Page Load Time', value: '60%', improvement: 'decrease' },
      { metric: 'User Capacity', value: '500%', improvement: 'increase' }
    ],
    keyFeatures: [
      'Auto-scaling infrastructure',
      'Global content delivery',
      'High availability architecture',
      'Real-time performance monitoring',
      'Cost optimization tools'
    ],
    testimonial: {
      quote: 'The cloud migration has been transformative. We can now handle millions of users with excellent performance while reducing costs.',
      author: 'Lisa Wang',
      position: 'CTO',
      company: 'EduTech Global'
    },
    images: {
      hero: '/case-studies/education-hero.jpg',
      gallery: ['/case-studies/education-1.jpg', '/case-studies/education-2.jpg', '/case-studies/education-3.jpg']
    },
    documents: [
      { title: 'Cloud Migration Guide', type: 'pdf', url: '/case-studies/education-migration.pdf' },
      { title: 'Architecture Overview', type: 'pdf', url: '/case-studies/education-architecture.pdf' },
      { title: 'Performance Results', type: 'pdf', url: '/case-studies/education-performance.pdf' }
    ],
    tags: ['Cloud', 'Education', 'Migration', 'Scalability', 'Performance'],
    featured: false,
    publishedDate: '2023-12-15',
    lastUpdated: '2024-01-05',
    status: 'published',
    difficulty: 'medium',
    innovationLevel: 'advanced'
  },
  {
    id: '6',
    title: 'Government Services Portal',
    subtitle: 'Digital transformation of citizen services platform',
    description: 'Complete redesign and development of a government services portal, improving citizen access to services and streamlining government operations.',
    category: 'Web Development',
    industry: 'Government',
    client: 'City of Techville',
    projectDuration: '9 months',
    teamSize: 16,
    budget: '$920,000',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Civic Tech Platform'],
    challenges: [
      'Outdated legacy systems with poor UX',
      'Complex government regulations and requirements',
      'Need for accessibility compliance',
      'Integration with multiple government agencies',
      'Security and privacy concerns'
    ],
    solutions: [
      'Modern, accessible user interface',
      'Streamlined service workflows',
      'Integration with government databases',
      'Advanced security and privacy measures',
      'Mobile-first responsive design'
    ],
    results: [
      { metric: 'Service Completion Time', value: '70%', improvement: 'decrease' },
      { metric: 'Citizen Satisfaction', value: '85%', improvement: 'increase' },
      { metric: 'Digital Adoption', value: '90%', improvement: 'increase' },
      { metric: 'Operational Efficiency', value: '65%', improvement: 'increase' }
    ],
    keyFeatures: [
      'Unified service portal',
      'Digital form processing',
      'Real-time status tracking',
      'Accessibility compliance (WCAG 2.1)',
      'Mobile applications'
    ],
    testimonial: {
      quote: 'The new portal has revolutionized how citizens interact with government services. Efficiency and satisfaction have improved dramatically.',
      author: 'James Thompson',
      position: 'City Manager',
      company: 'City of Techville'
    },
    images: {
      hero: '/case-studies/government-hero.jpg',
      gallery: ['/case-studies/government-1.jpg', '/case-studies/government-2.jpg', '/case-studies/government-3.jpg']
    },
    documents: [
      { title: 'Digital Transformation Study', type: 'pdf', url: '/case-studies/government-transformation.pdf' },
      { title: 'Citizen Impact Report', type: 'pdf', url: '/case-studies/government-impact.pdf' },
      { title: 'Technical Implementation', type: 'pdf', url: '/case-studies/government-technical.pdf' }
    ],
    tags: ['Government', 'Digital Transformation', 'Accessibility', 'Civic Tech'],
    featured: false,
    publishedDate: '2023-12-10',
    lastUpdated: '2024-01-01',
    status: 'published',
    difficulty: 'complex',
    innovationLevel: 'advanced'
  }
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'IoT', 'Cloud Computing']
const industries = ['All', 'E-commerce', 'Banking', 'Healthcare', 'Manufacturing', 'Education', 'Government']
const difficulties = ['All', 'simple', 'medium', 'complex']
const innovationLevels = ['All', 'standard', 'advanced', 'cutting-edge']

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Web Development': return Globe
    case 'Mobile Development': return Smartphone
    case 'Data Science': return BarChart3
    case 'IoT': return Cpu
    case 'Cloud Computing': return Cloud
    default: return Target
  }
}

const getIndustryIcon = (industry: string) => {
  switch (industry) {
    case 'E-commerce': return ShoppingCart
    case 'Banking': return Building
    case 'Healthcare': return Heart
    case 'Manufacturing': return Database
    case 'Education': return GraduationCap
    case 'Government': return Users
    default: return Building
  }
}

export function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedInnovation, setSelectedInnovation] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry
    const matchesDifficulty = selectedDifficulty === 'All' || study.difficulty === selectedDifficulty
    const matchesInnovation = selectedInnovation === 'All' || study.innovationLevel === selectedInnovation
    
    return matchesSearch && matchesCategory && matchesIndustry && matchesDifficulty && matchesInnovation
  })

  const sortedStudies = [...filteredStudies].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      case 'recent':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      case 'budget':
        return parseInt(b.budget.replace(/[^0-9]/g, '')) - parseInt(a.budget.replace(/[^0-9]/g, ''))
      case 'duration':
        return parseInt(b.projectDuration) - parseInt(a.projectDuration)
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const featuredStudies = caseStudies.filter(study => study.featured)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations, achieve their goals, and drive innovation through technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Technology Partners</div>
          </div>
        </div>

        {/* Featured Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study) => {
              const CategoryIcon = getCategoryIcon(study.category)
              const IndustryIcon = getIndustryIcon(study.industry)
              return (
                <Card key={study.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => setSelectedStudy(study)}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3" />
                        {study.category}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <IndustryIcon className="w-3 h-3" />
                        {study.industry}
                      </Badge>
                      {study.featured && <Badge variant="default">Featured</Badge>}
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="ml-1 font-medium">{study.projectDuration}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Team:</span>
                          <span className="ml-1 font-medium">{study.teamSize} people</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="ml-1 font-medium">{study.budget}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Difficulty:</span>
                          <span className="ml-1 font-medium capitalize">{study.difficulty}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Results:</h4>
                        <div className="space-y-1">
                          {study.results.slice(0, 2).map((result, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <TrendingUp className="w-3 h-3 text-green-600" />
                              <span>{result.metric}: {result.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4">
                      View Full Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-background rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedInnovation} onValueChange={setSelectedInnovation}>
              <SelectTrigger>
                <SelectValue placeholder="Innovation" />
              </SelectTrigger>
              <SelectContent>
                {innovationLevels.map(level => (
                  <SelectItem key={level} value={level}>{level.charAt(0).toUpperCase() + level.slice(1).replace('-', ' ')}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="budget">Highest Budget</SelectItem>
                <SelectItem value="duration">Longest Duration</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {sortedStudies.length} case studies found
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedIndustry('All')
                setSelectedDifficulty('All')
                setSelectedInnovation('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* All Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedStudies.map((study) => {
            const CategoryIcon = getCategoryIcon(study.category)
            const IndustryIcon = getIndustryIcon(study.industry)
            return (
              <Card key={study.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => setSelectedStudy(study)}>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      <CategoryIcon className="w-3 h-3" />
                      {study.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <IndustryIcon className="w-3 h-3" />
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {study.subtitle}
                  </p>
                  
                  <div className="space-y-2 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{study.projectDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      <span>{study.teamSize} team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3" />
                      <span>{study.budget}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-3">
                    {study.results.slice(0, 1).map((result, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        <span>{result.metric}: {result.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full" size="sm">
                    View Details
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Target className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <BarChart3 className="w-5 h-5 mr-2" />
                View More Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}