'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Download,
  Video,
  FileText,
  Users,
  Settings,
  Shield,
  Headphones,
  ArrowRight,
  Star
} from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  popular: boolean
}

interface Article {
  id: string
  title: string
  description: string
  category: string
  readTime: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  views: number
  helpful: number
}

interface Ticket {
  id: string
  subject: string
  description: string
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed'
  priority: 'Low' | 'Medium' | 'High' | 'Critical'
  created: string
  updated: string
}

export default function SupportCenter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeTab, setActiveTab] = useState('faq')

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our website, email, or phone. We\'ll schedule a free consultation to understand your needs and provide a customized proposal.',
      category: 'Getting Started',
      popular: true
    },
    {
      id: '2',
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during the planning phase.',
      category: 'Project Management',
      popular: true
    },
    {
      id: '3',
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including 24/7 monitoring, regular maintenance, and priority support. We also provide training and documentation to help your team manage the system.',
      category: 'Support & Maintenance',
      popular: true
    },
    {
      id: '4',
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including React, Node.js, Python, Java, AWS, Azure, Docker, Kubernetes, and many more. We choose the best technology stack based on your specific requirements.',
      category: 'Technical',
      popular: false
    },
    {
      id: '5',
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices including code reviews, automated testing, continuous integration, and quality assurance processes. Our team of experienced developers ensures high-quality deliverables.',
      category: 'Quality Assurance',
      popular: false
    },
    {
      id: '6',
      question: 'Can you work with existing systems and integrations?',
      answer: 'Absolutely! We have extensive experience integrating with existing systems, third-party APIs, and legacy applications. We\'ll ensure seamless integration with your current infrastructure.',
      category: 'Integration',
      popular: false
    },
    {
      id: '7',
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated teams. Pricing depends on project complexity, timeline, and specific requirements. We provide transparent quotes with no hidden costs.',
      category: 'Billing & Pricing',
      popular: true
    },
    {
      id: '8',
      question: 'How do you handle communication during projects?',
      answer: 'We maintain regular communication through weekly status meetings, progress reports, and real-time collaboration tools. You\'ll have a dedicated project manager as your single point of contact.',
      category: 'Communication',
      popular: false
    }
  ]

  const articles: Article[] = [
    {
      id: '1',
      title: 'Getting Started with Web Development',
      description: 'A comprehensive guide to starting your web development project with us.',
      category: 'Getting Started',
      readTime: '5 min',
      difficulty: 'Beginner',
      views: 1520,
      helpful: 89
    },
    {
      id: '2',
      title: 'Understanding Our Development Process',
      description: 'Learn about our agile development methodology and project lifecycle.',
      category: 'Process',
      readTime: '8 min',
      difficulty: 'Beginner',
      views: 980,
      helpful: 76
    },
    {
      id: '3',
      title: 'Best Practices for Project Management',
      description: 'Essential tips for successful project management and collaboration.',
      category: 'Project Management',
      readTime: '12 min',
      difficulty: 'Intermediate',
      views: 756,
      helpful: 82
    },
    {
      id: '4',
      title: 'Security Guidelines for Web Applications',
      description: 'Important security measures to protect your web applications.',
      category: 'Security',
      readTime: '15 min',
      difficulty: 'Advanced',
      views: 623,
      helpful: 91
    },
    {
      id: '5',
      title: 'API Integration Best Practices',
      description: 'Learn how to effectively integrate third-party APIs into your applications.',
      category: 'Integration',
      readTime: '10 min',
      difficulty: 'Intermediate',
      views: 545,
      helpful: 78
    },
    {
      id: '6',
      title: 'Performance Optimization Techniques',
      description: 'Advanced techniques to optimize your application performance.',
      category: 'Performance',
      readTime: '18 min',
      difficulty: 'Advanced',
      views: 432,
      helpful: 85
    }
  ]

  const tickets: Ticket[] = [
    {
      id: 'TK-001',
      subject: 'Website loading speed issues',
      description: 'Our website is loading slowly, especially on mobile devices.',
      status: 'In Progress',
      priority: 'High',
      created: '2024-01-15',
      updated: '2024-01-16'
    },
    {
      id: 'TK-002',
      subject: 'Database connection timeout',
      description: 'Experiencing frequent database connection timeouts during peak hours.',
      status: 'Open',
      priority: 'Critical',
      created: '2024-01-14',
      updated: '2024-01-14'
    },
    {
      id: 'TK-003',
      subject: 'User registration form validation',
      description: 'Need to add additional validation to the user registration form.',
      status: 'Resolved',
      priority: 'Medium',
      created: '2024-01-10',
      updated: '2024-01-12'
    }
  ]

  const categories = ['all', ...new Set(faqs.map(faq => faq.category))]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularFAQs = faqs.filter(faq => faq.popular)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Resolved': return 'bg-green-100 text-green-800'
      case 'Closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800'
      case 'High': return 'bg-orange-100 text-orange-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <Headphones className="w-4 h-4 mr-2" />
              Support Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Find answers, get support, and connect with our expert team. We're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <MessageCircle className="w-5 h-5 mr-2" />
                Live Chat
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{"<1hr"}</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Help Articles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Live Chat
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Support
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Video className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">+91 8824395449</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">support@dreamxdiamond</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">24/7 Support</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <Video className="w-4 h-4 mr-2" />
                      Video Tutorials
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      User Guides
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      API Reference
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="faq">FAQs</TabsTrigger>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="tickets">My Tickets</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                {/* FAQs Tab */}
                <TabsContent value="faq" className="space-y-6">
                  {/* Search */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          placeholder="Search FAQs..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <div className="mt-4">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Filter by category" />
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
                    </CardContent>
                  </Card>

                  {/* Popular FAQs */}
                  {popularFAQs.length > 0 && searchTerm === '' && selectedCategory === 'all' && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          Popular Questions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {popularFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                              <AccordionTrigger className="text-left">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* All FAQs */}
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'All FAQs'}
                      </CardTitle>
                      <CardDescription>
                        {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} found
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {filteredFAQs.length === 0 ? (
                        <div className="text-center py-8">
                          <HelpCircle className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                          <h3 className="text-lg font-semibold mb-2">No FAQs found</h3>
                          <p className="text-muted-foreground mb-4">
                            Try adjusting your search or browse all categories.
                          </p>
                          <Button onClick={() => {
                            setSearchTerm('')
                            setSelectedCategory('all')
                          }}>
                            Clear Search
                          </Button>
                        </div>
                      ) : (
                        <Accordion type="single" collapsible className="w-full">
                          {filteredFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                              <AccordionTrigger className="text-left">
                                {faq.question}
                                {faq.popular && (
                                  <Badge variant="secondary" className="ml-2">
                                    <Star className="w-3 h-3 mr-1" />
                                    Popular
                                  </Badge>
                                )}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Articles Tab */}
                <TabsContent value="articles" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Knowledge Base</CardTitle>
                      <CardDescription>
                        Comprehensive guides and tutorials to help you succeed.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {articles.map((article) => (
                          <Card key={article.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="font-semibold mb-2">{article.title}</h3>
                                  <p className="text-muted-foreground text-sm mb-3">
                                    {article.description}
                                  </p>
                                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <BookOpen className="w-3 h-3" />
                                      {article.readTime}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Users className="w-3 h-3" />
                                      {article.views} views
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <CheckCircle className="w-3 h-3" />
                                      {article.helpful}% helpful
                                    </span>
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <Badge variant="outline">{article.difficulty}</Badge>
                                  <Badge variant="secondary" className="ml-2">
                                    {article.category}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tickets Tab */}
                <TabsContent value="tickets" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Support Tickets</CardTitle>
                      <CardDescription>
                        Track the status of your support requests.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {tickets.map((ticket) => (
                          <Card key={ticket.id}>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="font-semibold mb-1">{ticket.subject}</h3>
                                  <p className="text-muted-foreground text-sm mb-3">
                                    {ticket.description}
                                  </p>
                                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span>ID: {ticket.id}</span>
                                    <span>Created: {new Date(ticket.created).toLocaleDateString()}</span>
                                    <span>Updated: {new Date(ticket.updated).toLocaleDateString()}</span>
                                  </div>
                                </div>
                                <div className="ml-4 space-y-2">
                                  <Badge className={getStatusColor(ticket.status)}>
                                    {ticket.status}
                                  </Badge>
                                  <Badge className={getPriorityColor(ticket.priority)}>
                                    {ticket.priority}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Create New Ticket
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Contact Tab */}
                <TabsContent value="contact" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Live Chat
                        </CardTitle>
                        <CardDescription>
                          Chat with our support team in real-time.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Available 24/7</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Average wait time: 2 minutes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">Multi-language support</span>
                          </div>
                          <Button className="w-full">
                            Start Chat Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          Phone Support
                        </CardTitle>
                        <CardDescription>
                          Speak directly with our support specialists.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="font-semibold">Support Line</div>
                            <div className="text-lg">+91 8824395449</div>
                          </div>
                          <div>
                            <div className="font-semibold">Hours</div>
                            <div className="text-sm text-muted-foreground">24/7 Emergency Support</div>
                          </div>
                          <div>
                            <div className="font-semibold">Languages</div>
                            <div className="text-sm text-muted-foreground">English, Spanish, French</div>
                          </div>
                          <Button className="w-full" variant="outline">
                            Call Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Email Support
                      </CardTitle>
                      <CardDescription>
                        Send us a detailed message and we'll respond within 1 business hour.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="font-semibold mb-2">General Inquiries</div>
                          <div className="text-sm text-muted-foreground mb-1">
                            info@dreamxdiamond.com
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Response time: 1-2 hours
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Technical Support</div>
                          <div className="text-sm text-muted-foreground mb-1">
                            support@dreamxdiamond.com
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Response time: 30 minutes - 1 hour
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Emergency Support</div>
                          <div className="text-sm text-muted-foreground mb-1">
                            emergency@dreamxdiamond.com
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Response time: 15 minutes
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Sales Inquiries</div>
                          <div className="text-sm text-muted-foreground mb-1">
                            sales@dreamxdiamond.com
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Response time: 2-4 hours
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Banner */}
      <section className="py-8 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-900">Emergency Support</h3>
                <p className="text-sm text-red-700">
                  For critical issues requiring immediate attention
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-semibold text-red-900">+1 (555) 999-9999</div>
                <div className="text-sm text-red-700">24/7 Emergency Line</div>
              </div>
              <Button variant="destructive" size="lg">
                Call Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}