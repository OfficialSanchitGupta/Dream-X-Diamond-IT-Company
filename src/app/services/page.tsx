'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Brain, 
  Globe, 
  Database, 
  Briefcase,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Users,
  Award,
  Zap,
  Target,
  Lightbulb,
  Server,
  Network,
  HardDrive,
  Cpu,
  Wrench,
  Monitor,
  Tablet,
  Wifi,
  Fingerprint,
  Eye,
  Lock,
  Rocket
} from 'lucide-react'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const services = [
    {
      id: 1,
      category: 'development',
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications using modern frameworks and cutting-edge technologies.',
      features: [
        'Responsive Design & Development',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'TypeScript'],
      price: 'Starting at $3,999',
      duration: '4-12 weeks',
      popular: true
    },
    {
      id: 2,
      category: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android devices.',
      features: [
        'iOS Native Development',
        'Android Native Development',
        'React Native Development',
        'Flutter Development',
        'App Store Optimization',
        'Mobile App Maintenance'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'Ionic'],
      price: 'Starting at $5,999',
      duration: '6-16 weeks',
      popular: false
    },
    {
      id: 3,
      category: 'cloud',
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration, and managed cloud services.',
      features: [
        'Cloud Architecture Design',
        'Cloud Migration Services',
        'Multi-Cloud Strategy',
        'Cloud Security & Compliance',
        'DevOps & CI/CD Pipeline',
        'Cloud Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      price: 'Starting at $2,999/month',
      duration: '2-8 weeks',
      popular: true
    },
    {
      id: 4,
      category: 'security',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and security audits for your digital assets.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Security Architecture Design',
        'Compliance Management',
        '24/7 Security Monitoring',
        'Incident Response Services'
      ],
      technologies: ['SIEM', 'IDS/IPS', 'Firewall Management', 'Encryption', 'VAPT Tools'],
      price: 'Starting at $4,999',
      duration: '2-6 weeks',
      popular: false
    },
    {
      id: 5,
      category: 'ai',
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Artificial intelligence and machine learning implementations for business intelligence.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Machine Learning Model Development',
        'AI Strategy Consulting',
        'MLOps & Model Deployment'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'R', 'Apache Spark'],
      price: 'Starting at $7,999',
      duration: '8-20 weeks',
      popular: true
    },
    {
      id: 6,
      category: 'marketing',
      icon: Globe,
      title: 'Digital Marketing',
      description: 'SEO, SEM, and comprehensive digital marketing strategies for business growth.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Google Ads'],
      price: 'Starting at $1,499/month',
      duration: 'Ongoing',
      popular: false
    },
    {
      id: 7,
      category: 'database',
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and management solutions for data-driven businesses.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Database Security',
        'Data Warehousing'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
      price: 'Starting at $1,999',
      duration: '2-6 weeks',
      popular: false
    },
    {
      id: 8,
      category: 'consulting',
      icon: Briefcase,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and advisory services for digital transformation.',
      features: [
        'Digital Transformation Strategy',
        'IT Roadmap Planning',
        'Technology Assessment',
        'Process Optimization',
        'Vendor Selection & Management',
        'Change Management'
      ],
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Project Management'],
      price: 'Starting at $200/hour',
      duration: '1-4 weeks',
      popular: false
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'Understanding your business needs and technical requirements',
      icon: Target,
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Creating detailed project roadmap and technical architecture',
      icon: Lightbulb,
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Design & Development',
      description: 'Building your solution with cutting-edge technologies',
      icon: Code,
      duration: '4-12 weeks'
    },
    {
      step: 4,
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure quality and performance',
      icon: Shield,
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Launch',
      description: 'Deploying your solution and going live',
      icon: Rocket,
      duration: '1 week'
    },
    {
      step: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support and continuous improvement',
      icon: Users,
      duration: 'Ongoing'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'development', label: 'Development', count: 1 },
    { id: 'mobile', label: 'Mobile', count: 1 },
    { id: 'cloud', label: 'Cloud', count: 1 },
    { id: 'security', label: 'Security', count: 1 },
    { id: 'ai', label: 'AI/ML', count: 1 },
    { id: 'marketing', label: 'Marketing', count: 1 },
    { id: 'database', label: 'Database', count: 1 },
    { id: 'consulting', label: 'Consulting', count: 1 }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="text-5xl font-bold mb-6">Premium IT Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with our comprehensive range of cutting-edge technology services. 
              From web development to AI solutions, we deliver excellence at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/50 sticky top-0 z-40 backdrop-blur-sm bg-muted/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className={`relative ${service.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-semibold">{service.price}</span>
                      <div className="text-muted-foreground">{service.duration}</div>
                    </div>
                    <Button size="sm">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Packages</Badge>
            <h2 className="text-4xl font-bold mb-6">Service Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package that fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="text-4xl font-bold text-primary">$999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic Web Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5 Pages Website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Email Support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="text-center ring-2 ring-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="text-4xl font-bold text-primary">$2,499<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Everything in Starter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced Web Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Mobile App Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cloud Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-4xl font-bold text-primary">$4,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI/ML Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cybersecurity Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 Dedicated Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom Solutions</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our premium IT services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}