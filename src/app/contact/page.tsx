'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Building, 
  Briefcase, 
  Star,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Wifi,
  Car,
  Coffee,
  Monitor,
  Smartphone,
  Headphones,
  HelpCircle
} from 'lucide-react'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('contact')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: [
        '5A/32,DreamX Diamond ',
        'Pareek Path Dehar Ke Balaji Jaipur,Rajasthan 302039',
        'India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 8824395449',
        '+91 9509592002',
        'Mon-Fri 9:00 AM - 6:00 PM IST'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'dreamxdiamond.c@gmail.com',
        'info@dreamxdiamond.com',
        'support@dreamxdiamond.com',
        'sales@dreamxdiamond.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: Closed',
        'Sunday: Closed'
      ]
    }
  ]

  const officeLocations = [
    {
      city: 'San Francisco, CA',
      address: '123 Tech Street, Suite 100',
      phone: '+91 8824395449',
      email: 'sf@dreamxdiamond.com',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM',
      services: ['Web Development', 'Mobile Apps', 'Cloud Services']
    },
    {
      city: 'New York, NY',
      address: '456 Broadway, Suite 200',
      phone: '+91 8824395449',
      email: 'ny@dreamxdiamond.com',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM',
      services: ['Digital Marketing', 'IT Consulting', 'AI Solutions']
    },
    {
      city: 'Austin, TX',
      address: '789 Innovation Drive',
      phone: '+91 8824395449',
      email: 'austin@dreamxdiamond.com',
      hours: 'Mon-Fri 9:00 AM - 6:00 PM',
      services: ['Cybersecurity', 'Database Management', 'Cloud Services']
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I expect a response to my inquiry?',
      answer: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call our support line directly.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer a complimentary 30-minute consultation to discuss your project requirements and how we can help.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across various industries including healthcare, finance, e-commerce, education, government, and manufacturing.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We have experience working with clients worldwide and can accommodate different time zones and communication preferences.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity. A simple website may take 4-6 weeks, while complex enterprise solutions can take 3-6 months.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including 24/7 monitoring, maintenance, and dedicated support teams.'
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!(formData as any).firstName?.trim()) (errors as any).firstName = 'First name is required';
    if (!(formData as any).lastName?.trim()) (errors as any).lastName = 'Last name is required';
    if (!(formData as any).email?.trim()) {
      (errors as any).email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      (errors as any).email = 'Email is invalid';
    }
    if (!formData.service) (errors as any).service = 'Please select a service';
    if (!formData.message.trim()) (errors as any).message = 'Message is required';

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        alert('Thank you for your message! We will get back to you within 24 hours.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        })
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? 
              Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
            <TabsTrigger value="offices">Our Offices</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Contact Form Tab */}
        {activeTab === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={(formErrors as any).firstName ? 'border-red-500' : ''}

                        />
                        {(formErrors as any).firstName && (
                          <p className="text-red-500 text-sm mt-1">{(formErrors as any).firstName}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={(formErrors as any).lastName ? 'border-red-500' : ''}
                        />
                        {(formErrors as any).lastName && (
                          <p className="text-red-500 text-sm mt-1">{(formErrors as any).lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={(formErrors as any).email ? 'border-red-500' : ''}
                      />
                      {(formErrors as any).email && (
                        <p className="text-red-500 text-sm mt-1">{(formErrors as any).email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className={(formErrors as any).service ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                            <SelectItem value="cloud-services">Cloud Services</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="database-management">Database Management</SelectItem>
                            <SelectItem value="it-consulting">IT Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                        {(formErrors as any).service && (
                          <p className="text-red-500 text-sm mt-1">{(formErrors as any).service}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={(formErrors as any).message ? 'border-red-500' : ''}
                        placeholder="Tell us about your project and how we can help..."
                      />
                      {(formErrors as any).message && (
                        <p className="text-red-500 text-sm mt-1">{(formErrors as any).message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Stay connected with us on social media
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/sanchitguptaofficial/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://x.com/SanchitguptaCom" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://facebook.com/OfficialSanchitGupta" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Facebook className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://instagram.com/dream_x_diamond/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Our Offices Tab */}
        {activeTab === 'offices' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit us at any of our convenient locations. Our teams are ready to help you 
                with your technology needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{office.hours}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Services Available:</h4>
                      <div className="flex flex-wrap gap-1">
                        {office.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Office Amenities</CardTitle>
                <CardDescription>
                  What you can expect when visiting our offices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Wifi, title: 'High-Speed WiFi', description: 'Free high-speed internet access' },
                    { icon: Coffee, title: 'Coffee & Snacks', description: 'Complimentary beverages and refreshments' },
                    { icon: Monitor, title: 'Presentation Rooms', description: 'Fully equipped meeting spaces' },
                    { icon: Car, title: 'Parking Available', description: 'Free parking for all visitors' }
                  ].map((amenity, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <amenity.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{amenity.title}</h3>
                      <p className="text-sm text-muted-foreground">{amenity.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Support Center</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're here to help you succeed. Get the support you need, when you need it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Headphones,
                  title: '24/7 Support',
                  description: 'Round-the-clock technical support for critical issues',
                  features: ['Phone support', 'Email support', 'Live chat', 'Remote assistance'],
                  response: 'Within 1 hour'
                },
                {
                  icon: Users,
                  title: 'Dedicated Team',
                  description: 'Your own dedicated support team for personalized service',
                  features: ['Account manager', 'Technical lead', 'Support specialists', 'Regular check-ins'],
                  response: 'Dedicated support'
                },
                {
                  icon: Monitor,
                  title: 'Remote Monitoring',
                  description: 'Proactive monitoring and issue resolution',
                  features: ['24/7 system monitoring', 'Performance optimization', 'Security monitoring', 'Regular reporting'],
                  response: 'Proactive monitoring'
                }
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="text-sm">
                          <span className="font-medium">Response Time:</span> {service.response}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Channels */}
            <Card>
              <CardHeader>
                <CardTitle>Support Channels</CardTitle>
                <CardDescription>
                  Choose the support channel that works best for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Phone Support',
                      description: 'Direct phone support for immediate assistance',
                      contact: '+91 8824395449',
                      hours: '24/7 for enterprise clients',
                      bestFor: 'Urgent issues and immediate assistance'
                    },
                    {
                      title: 'Email Support',
                      description: 'Detailed support via email with tracking',
                      contact: 'support@dreamxdiamond.com',
                      hours: '24-hour response time',
                      bestFor: 'Non-urgent issues and detailed inquiries'
                    },
                    {
                      title: 'Live Chat',
                      description: 'Real-time chat support during business hours',
                      contact: 'Available on our website',
                      hours: 'Mon-Fri 9 AM - 6 PM PST',
                      bestFor: 'Quick questions and real-time assistance'
                    },
                    {
                      title: 'Support Portal',
                      description: 'Self-service portal with knowledge base',
                      contact: 'support.dreamxdiamond.com',
                      hours: 'Available 24/7',
                      bestFor: 'Self-service and documentation'
                    }
                  ].map((channel, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {channel.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Contact:</span> {channel.contact}</div>
                        <div><span className="font-medium">Hours:</span> {channel.hours}</div>
                        <div><span className="font-medium">Best for:</span> {channel.bestFor}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services and support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-lg">
                      <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Help */}
            <Card>
              <CardHeader>
                <CardTitle>Still Have Questions?</CardTitle>
                <CardDescription>
                  Can't find the answer you're looking for? We're here to help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Chat with our support team in real-time
                    </p>
                    <Button variant="outline" size="sm">Start Chat</Button>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Speak directly with our support team
                    </p>
                    <Button variant="outline" size="sm">Call Now</Button>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Send us a detailed message
                    </p>
                    <Button variant="outline" size="sm">Send Email</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Dream X Diamond can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}