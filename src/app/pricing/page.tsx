'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Star, 
  CheckCircle, 
  X, 
  ArrowRight, 
  Zap, 
  Users, 
  Shield, 
  Crown,
  Rocket,
  Building,
  Smartphone,
  Cloud,
  Brain,
  Database,
  Briefcase,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Clock,
  Headphones,
  Globe,
  Cpu,
  Server,
  Network,
  HardDrive,
  Wrench,
  Monitor,
  Tablet,
  Wifi,
  Fingerprint,
  Eye,
  Lock,
  Code
} from 'lucide-react'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('services')
  const [billingCycle, setBillingCycle] = useState('monthly')

  const servicePackages = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: {
        monthly: 999,
        yearly: 9990
      },
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      popular: false,
      features: [
        { name: 'Basic Web Development', included: true },
        { name: '5-Page Website', included: true },
        { name: 'Basic SEO Setup', included: true },
        { name: 'Mobile Responsive Design', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Email Support', included: true },
        { name: 'Google Analytics Setup', included: true },
        { name: 'Social Media Integration', included: false },
        { name: 'Advanced SEO', included: false },
        { name: 'Content Management System', included: false },
        { name: 'E-commerce Functionality', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Custom Development', included: false },
        { name: 'API Integration', included: false },
        { name: 'Advanced Analytics', included: false }
      ],
      support: 'Email support within 24 hours',
      delivery: '2-3 weeks delivery',
      revisions: '2 rounds of revisions'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: {
        monthly: 2499,
        yearly: 24990
      },
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      popular: true,
      features: [
        { name: 'Advanced Web Development', included: true },
        { name: 'Custom Website Design', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Content Management System', included: true },
        { name: 'E-commerce Basic', included: true },
        { name: 'Mobile App Development (Basic)', included: true },
        { name: 'Priority Email Support', included: true },
        { name: 'Google Analytics Pro', included: true },
        { name: 'Social Media Marketing', included: true },
        { name: 'Basic Cloud Setup', included: true },
        { name: 'Security Audit', included: true },
        { name: 'API Integration', included: true },
        { name: 'Custom Development (Limited)', included: false },
        { name: 'Advanced Analytics', included: false },
        { name: '24/7 Support', included: false }
      ],
      support: 'Priority support within 12 hours',
      delivery: '3-4 weeks delivery',
      revisions: '4 rounds of revisions'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: {
        monthly: 4999,
        yearly: 49990
      },
      icon: Crown,
      color: 'from-orange-500 to-orange-600',
      popular: false,
      features: [
        { name: 'Enterprise Web Development', included: true },
        { name: 'Custom Application Development', included: true },
        { name: 'Advanced E-commerce Solution', included: true },
        { name: 'Mobile App Development (Advanced)', included: true },
        { name: 'Cloud Infrastructure Setup', included: true },
        { name: 'Advanced Security Suite', included: true },
        { name: 'AI/ML Integration', included: true },
        { name: '24/7 Dedicated Support', included: true },
        { name: 'Custom API Development', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: 'Digital Marketing Suite', included: true },
        { name: 'Database Management', included: true },
        { name: 'Custom Development', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'White-label Solutions', included: true }
      ],
      support: '24/7 dedicated support with SLA',
      delivery: '4-6 weeks delivery',
      revisions: 'Unlimited revisions'
    }
  ]

  const individualServices = [
    {
      category: 'Web Development',
      icon: Code,
      services: [
        { name: 'Custom Website Development', price: '$2,999 - $8,999', duration: '4-8 weeks' },
        { name: 'E-commerce Development', price: '$4,999 - $15,999', duration: '6-12 weeks' },
        { name: 'Web Application Development', price: '$5,999 - $25,999', duration: '8-16 weeks' },
        { name: 'Website Redesign', price: '$1,999 - $6,999', duration: '2-6 weeks' },
        { name: 'Landing Page Development', price: '$999 - $2,999', duration: '1-2 weeks' }
      ]
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      services: [
        { name: 'iOS App Development', price: '$8,999 - $30,999', duration: '8-16 weeks' },
        { name: 'Android App Development', price: '$7,999 - $28,999', duration: '8-16 weeks' },
        { name: 'Cross-Platform App', price: '$6,999 - $22,999', duration: '6-14 weeks' },
        { name: 'App Maintenance', price: '$999 - $2,999/month', duration: 'Ongoing' },
        { name: 'App Store Optimization', price: '$1,499 - $3,999', duration: '2-4 weeks' }
      ]
    },
    {
      category: 'Cloud Services',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', price: '$5,999 - $25,999', duration: '4-12 weeks' },
        { name: 'Cloud Architecture Design', price: '$3,999 - $12,999', duration: '2-6 weeks' },
        { name: 'Managed Cloud Services', price: '$1,999 - $8,999/month', duration: 'Ongoing' },
        { name: 'DevOps Implementation', price: '$4,999 - $15,999', duration: '3-8 weeks' },
        { name: 'Cloud Security Setup', price: '$2,999 - $9,999', duration: '2-4 weeks' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Strategy Consulting', price: '$2,999 - $8,999', duration: '1-3 weeks' },
        { name: 'Machine Learning Model Development', price: '$8,999 - $35,999', duration: '8-20 weeks' },
        { name: 'Predictive Analytics', price: '$5,999 - $18,999', duration: '4-12 weeks' },
        { name: 'Natural Language Processing', price: '$7,999 - $28,999', duration: '6-16 weeks' },
        { name: 'Computer Vision Solutions', price: '$9,999 - $40,999', duration: '10-24 weeks' }
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'Security Audit', price: '$2,999 - $8,999', duration: '1-2 weeks' },
        { name: 'Penetration Testing', price: '$3,999 - $12,999', duration: '1-3 weeks' },
        { name: 'Security Implementation', price: '$4,999 - $18,999', duration: '2-6 weeks' },
        { name: '24/7 Security Monitoring', price: '$1,999 - $7,999/month', duration: 'Ongoing' },
        { name: 'Compliance Management', price: '$3,999 - $12,999', duration: '2-4 weeks' }
      ]
    },
    {
      category: 'Digital Marketing',
      icon: Globe,
      services: [
        { name: 'SEO Optimization', price: '$999 - $3,999/month', duration: '3-6 months' },
        { name: 'PPC Campaign Management', price: '$1,499 - $4,999/month', duration: 'Ongoing' },
        { name: 'Social Media Marketing', price: '$799 - $2,999/month', duration: 'Ongoing' },
        { name: 'Content Marketing', price: '$1,199 - $3,999/month', duration: 'Ongoing' },
        { name: 'Email Marketing', price: '$599 - $1,999/month', duration: 'Ongoing' }
      ]
    }
  ]

  const additionalServices = [
    { name: 'Emergency Support', price: '$150/hour', description: 'Priority support for urgent issues' },
    { name: 'Training & Onboarding', price: '$100/hour', description: 'Team training on new systems' },
    { name: 'Documentation', price: '$75/hour', description: 'Technical documentation creation' },
    { name: 'Performance Optimization', price: '$120/hour', description: 'System performance tuning' },
    { name: 'Data Migration', price: '$100/hour', description: 'Data transfer and setup' },
    { name: 'Custom Integration', price: '$130/hour', description: 'Third-party system integration' }
  ]

  const getPrice = (price, cycle) => {
    return cycle === 'yearly' ? price.yearly : price.monthly
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. We offer flexible pricing 
              options with no hidden fees and clear deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Cycle Toggle */}
      <section className="py-8 bg-muted/50 sticky top-0 z-40 backdrop-blur-sm bg-muted/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="rounded-full w-12 h-6 p-0 relative"
            >
              <div className={`absolute top-1 w-4 h-4 bg-primary rounded-full transition-all duration-300 ${
                billingCycle === 'monthly' ? 'left-1' : 'left-7'
              }`} />
            </Button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-primary' : 'text-muted-foreground'}`}>
              Yearly <Badge className="ml-1 text-xs">Save 20%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="services">Service Packages</TabsTrigger>
            <TabsTrigger value="individual">Individual Services</TabsTrigger>
            <TabsTrigger value="additional">Additional Services</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Service Packages Tab */}
        {activeTab === 'services' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive packages designed to meet the needs of businesses at every stage of growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {servicePackages.map((pkg) => (
                <Card key={pkg.id} className={`relative overflow-hidden ${pkg.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/60 text-white px-4 py-2">
                      <Badge className="bg-white text-primary mx-auto">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className={`text-center pb-8 ${pkg.popular ? 'pt-12' : ''}`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">
                        {formatPrice(getPrice(pkg.price, billingCycle))}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          {feature.included ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? '' : 'text-muted-foreground'}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Support:</span> {pkg.support}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Delivery:</span> {pkg.delivery}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Revisions:</span> {pkg.revisions}
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-primary' : 'variant-default'}`}
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Package Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Package Comparison</CardTitle>
                <CardDescription>
                  Detailed comparison of features across all packages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Feature</th>
                        <th className="text-center p-3">Starter</th>
                        <th className="text-center p-3">Professional</th>
                        <th className="text-center p-3">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        'Web Development',
                        'Mobile App Development',
                        'Cloud Services',
                        'Security Features',
                        'AI/ML Integration',
                        'Priority Support',
                        'Custom Development',
                        'API Integration',
                        'Advanced Analytics',
                        'Dedicated Account Manager',
                        '24/7 Support',
                        'White-label Solutions'
                      ].map((feature, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3 font-medium">{feature}</td>
                          <td className="p-3 text-center">
                            {index < 3 ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="p-3 text-center">
                            {index < 7 ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="p-3 text-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Individual Services Tab */}
        {activeTab === 'individual' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Individual Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Need specific services? Choose from our comprehensive list of individual offerings 
                tailored to your exact requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualServices.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{service.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {service.duration}
                          </Badge>
                        </div>
                        <div className="text-lg font-bold text-primary mb-1">
                          {service.price}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Process */}
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>
                  Our simple process for getting started with individual services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: 'Consultation', description: 'Free consultation to understand your needs' },
                    { step: 2, title: 'Proposal', description: 'Detailed proposal with timeline and pricing' },
                    { step: 3, title: 'Development', description: 'Expert team works on your project' },
                    { step: 4, title: 'Delivery', description: 'Project delivery with ongoing support' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                        {item.step}
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Additional Services Tab */}
        {activeTab === 'additional' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enhance your project with our additional services and support options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Add to Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Packages */}
            <Card>
              <CardHeader>
                <CardTitle>Support Packages</CardTitle>
                <CardDescription>
                  Ongoing support and maintenance packages for your peace of mind
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Basic Support',
                      price: '$299/month',
                      features: ['Email support', '8-hour response time', 'Monthly updates', 'Basic monitoring'],
                      popular: false
                    },
                    {
                      name: 'Professional Support',
                      price: '$599/month',
                      features: ['Priority email & phone', '4-hour response time', 'Weekly updates', 'Advanced monitoring', 'Performance optimization'],
                      popular: true
                    },
                    {
                      name: 'Enterprise Support',
                      price: '$1,199/month',
                      features: ['24/7 dedicated support', '1-hour response time', 'Daily updates', 'Full monitoring', 'Security patches', 'Dedicated team'],
                      popular: false
                    }
                  ].map((pkg, index) => (
                    <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle>{pkg.name}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                          Choose Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Pricing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Every project is unique. Contact us for a customized quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}