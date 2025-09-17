'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Filter, ExternalLink, Calendar, Users, ArrowRight } from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  client: string
  duration: string
  url: string
  featured: boolean
  image: string
}

export function PortfolioFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'E-commerce Platform Redesign',
      description: 'Complete redesign and optimization of a large-scale e-commerce platform resulting in 40% increase in conversions.',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'RetailCorp Inc.',
      duration: '4 months',
      url: '#',
      featured: true,
      image: '/portfolio/ecommerce.jpg'
    },
    {
      id: '2',
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare management system with HIPAA compliance and telemedicine integration.',
      category: 'Healthcare',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      client: 'MediCare Solutions',
      duration: '6 months',
      url: '#',
      featured: true,
      image: '/portfolio/healthcare.jpg'
    },
    {
      id: '3',
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics dashboard with advanced reporting and data visualization.',
      category: 'Finance',
      technologies: ['Angular', '.NET', 'SQL Server', 'Power BI'],
      client: 'FinTech Corp',
      duration: '3 months',
      url: '#',
      featured: false,
      image: '/portfolio/finance.jpg'
    },
    {
      id: '4',
      title: 'Educational Platform',
      description: 'Online learning platform with video streaming, interactive quizzes, and progress tracking.',
      category: 'Education',
      technologies: ['React', 'Node.js', 'MySQL', 'WebRTC'],
      client: 'EduTech Academy',
      duration: '5 months',
      url: '#',
      featured: false,
      image: '/portfolio/education.jpg'
    },
    {
      id: '5',
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain management system with real-time tracking and analytics.',
      category: 'Logistics',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Kafka'],
      client: 'LogiPro Solutions',
      duration: '8 months',
      url: '#',
      featured: true,
      image: '/portfolio/logistics.jpg'
    },
    {
      id: '6',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time notifications.',
      category: 'Finance',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      client: 'SecureBank',
      duration: '4 months',
      url: '#',
      featured: false,
      image: '/portfolio/mobile-banking.jpg'
    }
  ]

  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))]

  const filteredItems = portfolioItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return b.id.localeCompare(a.id)
      case 'oldest':
        return a.id.localeCompare(b.id)
      case 'name':
        return a.title.localeCompare(b.title)
      case 'category':
        return a.category.localeCompare(b.category)
      default:
        return 0
    }
  })

  const featuredItems = portfolioItems.filter(item => item.featured)

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
          <h2 className="text-4xl font-bold mb-4">Success Stories & Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform and achieve their goals through innovative technology solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Projects */}
        {selectedCategory === 'all' && featuredItems.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Projects</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredItems.slice(0, 3).map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{item.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                {item.featured && (
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                    Featured
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{item.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    View Details <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Showing {sortedItems.length} of {portfolioItems.length} projects
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>
    </section>
  )
}