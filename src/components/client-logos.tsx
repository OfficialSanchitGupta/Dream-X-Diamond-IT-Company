'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, TrendingUp, Award, Building2, ShoppingCart, GraduationCap, Heart, Users } from 'lucide-react'

interface ClientLogo {
  id: string
  name: string
  industry: string
  logo: string
  description: string
  projectType: string
  duration: string
  featured: boolean
  testimonial?: string
}

const clientLogos: ClientLogo[] = [
  {
    id: '1',
    name: 'TechCorp Inc.',
    industry: 'Technology',
    logo: '/clients/techcorp.png',
    description: 'Leading software development company',
    projectType: 'Enterprise Software',
    duration: '2 years',
    featured: true,
    testimonial: 'Outstanding service and technical expertise.'
  },
  {
    id: '2',
    name: 'Global Finance Bank',
    industry: 'Banking',
    logo: '/clients/globalbank.png',
    description: 'International banking institution',
    projectType: 'Mobile Banking App',
    duration: '18 months',
    featured: true,
    testimonial: 'Secure and innovative banking solutions.'
  },
  {
    id: '3',
    name: 'HealthPlus Medical',
    industry: 'Healthcare',
    logo: '/clients/healthplus.png',
    description: 'Healthcare services provider',
    projectType: 'Healthcare Portal',
    duration: '12 months',
    featured: false
  },
  {
    id: '4',
    name: 'EduTech Solutions',
    industry: 'Education',
    logo: '/clients/edutech.png',
    description: 'Educational technology company',
    projectType: 'E-learning Platform',
    duration: '8 months',
    featured: false
  },
  {
    id: '5',
    name: 'ShopSmart Retail',
    industry: 'E-commerce',
    logo: '/clients/shopsmart.png',
    description: 'Online retail platform',
    projectType: 'E-commerce Solution',
    duration: '6 months',
    featured: true,
    testimonial: 'Increased our sales by 200%.'
  },
  {
    id: '6',
    name: 'Manufacturing Pro',
    industry: 'Manufacturing',
    logo: '/clients/manufacturing.png',
    description: 'Industrial manufacturing company',
    projectType: 'IoT Monitoring System',
    duration: '10 months',
    featured: false
  },
  {
    id: '7',
    name: 'Government Services',
    industry: 'Government',
    logo: '/clients/govt.png',
    description: 'Public sector organization',
    projectType: 'Citizen Portal',
    duration: '14 months',
    featured: false
  },
  {
    id: '8',
    name: 'MediaHub Entertainment',
    industry: 'Media',
    logo: '/clients/mediahub.png',
    description: 'Media and entertainment company',
    projectType: 'Streaming Platform',
    duration: '16 months',
    featured: true,
    testimonial: 'Revolutionary streaming experience.'
  }
]

const industries = [
  { name: 'All', icon: Building2, count: clientLogos.length },
  { name: 'Technology', icon: TrendingUp, count: 1 },
  { name: 'Banking', icon: Building2, count: 1 },
  { name: 'Healthcare', icon: Heart, count: 1 },
  { name: 'Education', icon: GraduationCap, count: 1 },
  { name: 'E-commerce', icon: ShoppingCart, count: 1 },
  { name: 'Manufacturing', icon: Building2, count: 1 },
  { name: 'Government', icon: Users, count: 1 },
  { name: 'Media', icon: Star, count: 1 }
]

export function ClientLogos() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [hoveredClient, setHoveredClient] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredClients = selectedIndustry === 'All' 
    ? clientLogos 
    : clientLogos.filter(client => client.industry === selectedIndustry)

  const featuredClients = clientLogos.filter(client => client.featured)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Our Valued Clients</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with forward-thinking companies across various industries to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years Partnership</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.name}
              onClick={() => setSelectedIndustry(industry.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedIndustry === industry.name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background hover:bg-muted border'
              }`}
            >
              <industry.icon className="w-4 h-4" />
              <span>{industry.name}</span>
              <Badge variant="secondary" className="text-xs">
                {industry.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Featured Clients */}
        {selectedIndustry === 'All' && featuredClients.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Featured Partnerships</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredClients.map((client) => (
                <Card key={client.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Building2 className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                        <p className="font-semibold">{client.name}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">{client.name}</h4>
                        <p className="text-sm text-muted-foreground">{client.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{client.industry}</Badge>
                        <Badge variant="secondary">{client.projectType}</Badge>
                      </div>
                      {client.testimonial && (
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="text-sm italic">"{client.testimonial}"</p>
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        Duration: {client.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Client Logos Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">All Client Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {filteredClients.map((client, index) => (
              <div
                key={client.id}
                className={`group relative transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <Card className="h-32 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium truncate">{client.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{client.industry}</p>
                  </CardContent>
                </Card>
                
                {/* Hover Tooltip */}
                {hoveredClient === client.id && (
                  <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-background border rounded-lg shadow-lg">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{client.name}</p>
                          <p className="text-xs text-muted-foreground">{client.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{client.industry}</Badge>
                        <Badge variant="secondary" className="text-xs">{client.projectType}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Duration: {client.duration}</p>
                      {client.testimonial && (
                        <p className="text-xs italic text-muted-foreground">"{client.testimonial}"</p>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-background rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Success Stories</h3>
            <p className="text-lg opacity-90">
              Discover how we've helped businesses transform and achieve their goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200%</div>
              <p className="opacity-90">Average Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="opacity-90">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Support Availability</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}