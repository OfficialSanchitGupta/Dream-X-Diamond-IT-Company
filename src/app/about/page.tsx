'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Award, 
  Users, 
  Target, 
  Lightbulb, 
  Shield, 
  Globe, 
  Building, 
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')

  const companyStats = [
    { label: 'Years Experience', value: '16+', icon: Calendar },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1200+', icon: Target },
    { label: 'Team Members', value: '75+', icon: Users },
  ]

  const coreValues = [
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We deliver premium quality solutions that exceed expectations and set industry standards.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive business growth and success.'
    }
  ]

  const leadershipTeam = [
    {
      name: 'Neelam Mahaldar',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 20+ years in technology and digital transformation.',
      experience: 'Former CTO at Fortune 500 companies',
      education: 'MBA in Technology Management from Stanford',
      linkedin: '#',
      photo: '/team/alexandra.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'CTO',
      bio: 'Technology expert specializing in cloud architecture and enterprise solutions.',
      experience: 'AWS Certified Solutions Architect Professional',
      education: 'MS in Computer Science from MIT',
      linkedin: '#',
      photo: '/team/marcus.jpg'
    },
    {
      name: 'Sophia Williams',
      position: 'Chief Strategy Officer',
      bio: 'Strategic thinker with expertise in digital transformation and business growth.',
      experience: 'Former McKinsey Senior Partner',
      education: 'Harvard Business School MBA',
      linkedin: '#',
      photo: '/team/sophia.jpg'
    },
    {
      name: 'David Kim',
      position: 'Head of Engineering',
      bio: 'Full-stack development expert with passion for scalable architecture.',
      experience: 'Google and Microsoft alum',
      education: 'BS in Software Engineering from Berkeley',
      linkedin: '#',
      photo: '/team/david.jpg'
    }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Dream X Diamond was founded with a vision to provide premium IT services.'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Secured first Fortune 500 client and expanded service offerings.'
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia, establishing global presence.'
    },
    {
      year: '2020',
      title: 'AI/ML Division',
      description: 'Launched dedicated Artificial Intelligence and Machine Learning division.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as premium IT services provider with 500+ happy clients.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">About Dream X Diamond</Badge>
            <h1 className="text-5xl font-bold mb-6">Premium IT Solutions Provider</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming businesses with cutting-edge technology solutions since 2008. 
              We deliver excellence, innovation, and measurable results for elite organizations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Purpose</Badge>
            <h2 className="text-4xl font-bold mb-6">Mission, Vision & Values</h2>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Core Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    To empower businesses with premium technology solutions that drive innovation, 
                    efficiency, and sustainable growth. We are committed to delivering exceptional 
                    value through cutting-edge technology and unparalleled expertise.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We strive to be the trusted partner for organizations seeking digital transformation, 
                    providing tailored solutions that address unique challenges and unlock new opportunities.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="vision" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    To be the global leader in premium IT services, recognized for innovation, 
                    excellence, and transformative impact on businesses worldwide.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We envision a future where technology seamlessly integrates with business 
                    strategy, creating unprecedented value and competitive advantage for our clients.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="values" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <value.icon className="w-6 h-6 text-primary" />
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of industry experts brings decades of experience and innovation 
              to drive your business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-primary" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3 text-primary" />
                      <span>{member.education}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold mb-6">Company Timeline</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Dream X Diamond can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}