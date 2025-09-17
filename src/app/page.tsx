'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Users, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronDown,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  FileText,
  Database,
  Brain,
  Globe,
  ShoppingCart,
  GraduationCap,
  Building,
  Briefcase,
  Heart,
  TrendingUp,
  Lightbulb,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  ChevronUp,
  MessageSquare,
  User,
  Settings,
  ExternalLink,
  Clock,
  DollarSign,
  Users2,
  BarChart3,
  Zap,
  ShieldCheck,
  Headphones,
  Monitor,
  Fingerprint,
  Eye,
  Target,
  Rocket,
  Home,
  MessageCircle as MessageCircleWhatsApp,
  Calculator,
  Trophy,
  Video,
  Download,
  QrCode,
  Apple,
  Building2,
  FileDown,
  PlayCircle,
  Check
} from 'lucide-react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

// New imports for enhanced features
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SearchComponent } from "@/components/ui/search"
import { LiveChat } from "@/components/ui/live-chat"
import { VideoPlayer } from "@/components/ui/video-player"

export default function Home() {
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.firstName.trim()) errors.firstName = 'First name is required'
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) errors.message = 'Message is required'
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        alert('Thank you for your message! We will get back to you within 24 hours.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      }, 2000)
    }
  }

  const services = [
    { 
      icon: Code, 
      title: 'Web Development', 
      description: 'Custom web applications using modern frameworks like React, Vue.js, and Angular',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
      price: 'Starting at $2,999',
      image: '/graphics/web-dev.jpg'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile App Development', 
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      price: 'Starting at $4,999',
      image: '/graphics/mobile-dev.jpg'
    },
    { 
      icon: Cloud, 
      title: 'Cloud Services', 
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS Solutions', 'Azure Migration', 'Google Cloud', 'Hybrid Cloud'],
      price: 'Starting at $1,999/month',
      image: '/graphics/cloud-services.jpg'
    },
    { 
      icon: Shield, 
      title: 'Cybersecurity', 
      description: 'Comprehensive security solutions and security audits',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      price: 'Starting at $3,999',
      image: '/graphics/cybersecurity.jpg'
    },
    { 
      icon: Brain, 
      title: 'AI/ML Solutions', 
      description: 'Artificial intelligence and machine learning implementations',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automation'],
      price: 'Starting at $5,999',
      image: '/graphics/ai-ml.jpg'
    },
    { 
      icon: Globe, 
      title: 'Digital Marketing', 
      description: 'SEO, SEM, and comprehensive digital marketing strategies',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy'],
      price: 'Starting at $999/month',
      image: '/graphics/digital-marketing.jpg'
    },
    { 
      icon: Database, 
      title: 'Database Management', 
      description: 'Database design, optimization, and management solutions',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions'],
      price: 'Starting at $1,499',
      image: '/graphics/database-mgmt.jpg'
    },
    { 
      icon: Briefcase, 
      title: 'IT Consulting', 
      description: 'Strategic IT consulting and advisory services',
      features: ['Digital Transformation', 'IT Strategy', 'Process Optimization', 'Technology Advisory'],
      price: 'Starting at $150/hour',
      image: '/graphics/it-consulting.jpg'
    }
  ]

  const industries = [
    { icon: Heart, title: 'Healthcare', description: 'HIPAA-compliant healthcare IT solutions and electronic health records' },
    { icon: Building, title: 'Finance/Banking', description: 'Secure financial software, banking solutions, and fintech applications' },
    { icon: ShoppingCart, title: 'E-commerce', description: 'Online stores, payment gateways, and inventory management systems' },
    { icon: GraduationCap, title: 'Education', description: 'E-learning platforms, student management systems, and educational software' },
    { icon: Users, title: 'Government', description: 'Government IT solutions, public service platforms, and citizen portals' },
    { icon: TrendingUp, title: 'Manufacturing', description: 'Industry 4.0 solutions, IoT integration, and automation systems' }
  ]

  const technologies = [
    'React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'TensorFlow', 'PyTorch', 'Angular', 'Vue.js',
    'TypeScript', 'GraphQL', 'REST API', 'Microservices', 'DevOps', 'CI/CD', 'Git', 'Agile'
  ]

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      content: 'Outstanding service and technical expertise. Their team delivered beyond our expectations. The web application they built has increased our efficiency by 40%.',
      rating: 5,
      project: 'E-commerce Platform',
      duration: '3 months',
      results: '40% efficiency increase'
    },
    {
      name: 'Sarah Johnson',
      company: 'StartupHub',
      content: 'Professional, reliable, and innovative. They helped us scale our business effectively with their cloud solutions and 24/7 support.',
      rating: 5,
      project: 'Cloud Migration',
      duration: '2 months',
      results: '99.9% uptime achieved'
    },
    {
      name: 'Michael Chen',
      company: 'Global Solutions',
      content: 'Excellent communication and project management. Their AI solution transformed our data analysis process completely.',
      rating: 5,
      project: 'AI Implementation',
      duration: '4 months',
      results: '60% faster analysis'
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthPlus',
      content: 'Their healthcare IT solutions are top-notch. They ensured full HIPAA compliance while delivering a user-friendly system.',
      rating: 5,
      project: 'Healthcare Portal',
      duration: '6 months',
      results: 'Fully compliant system'
    }
  ]

  const teamMembers = [
    {
      name: 'Neelam Mahaldar',
      position: 'CEO & Founder',
      bio: '15+ years in IT industry, passionate about innovation and digital transformation',
      experience: 'Former CTO at Fortune 500 company',
      education: 'MBA in Technology Management',
      skills: ['Strategic Planning', 'Team Leadership', 'Digital Transformation'],
      linkedin: '#',
      photo: '/graphics/team-collaboration.jpg'
    },
    {
      name: 'Maria Garcia',
      position: 'CTO',
      bio: 'Expert in cloud architecture and DevOps with 12+ years of experience',
      experience: 'AWS Certified Solutions Architect',
      education: 'MS in Computer Science',
      skills: ['Cloud Architecture', 'DevOps', 'System Design'],
      linkedin: '#',
      photo: '/graphics/innovation-lab.jpg'
    },
    {
      name: 'David Kim',
      position: 'Lead Developer',
      bio: 'Full-stack developer with 10+ years experience in web and mobile development',
      experience: 'Certified Scrum Master',
      education: 'BS in Software Engineering',
      skills: ['React', 'Node.js', 'Mobile Development'],
      linkedin: '#',
      photo: '/graphics/development.jpg'
    },
    {
      name: 'Emily Brown',
      position: 'Design Director',
      bio: 'Creative designer focused on user experience and interface design',
      experience: 'Google Design Certified',
      education: 'BFA in Graphic Design',
      skills: ['UI/UX Design', 'Design Systems', 'User Research'],
      linkedin: '#',
      photo: '/graphics/design-prototyping.jpg'
    }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      category: 'web',
      description: 'Complete redesign of an e-commerce platform resulting in 60% increase in conversions',
      image: '/graphics/ecommerce-platform.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      client: 'Fashion Retail Co.',
      duration: '4 months',
      results: '60% conversion increase'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication',
      image: '/graphics/mobile-banking.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      client: 'SecureBank',
      duration: '6 months',
      results: '100K+ downloads'
    },
    {
      id: 3,
      title: 'Cloud Migration Project',
      category: 'cloud',
      description: 'Migration of legacy systems to cloud infrastructure with zero downtime',
      image: '/graphics/cloud-migration.jpg',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      client: 'Manufacturing Corp',
      duration: '3 months',
      results: '99.9% uptime'
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      description: 'Machine learning dashboard for predictive analytics and business intelligence',
      image: '/graphics/ai-analytics.jpg',
      technologies: ['Python', 'TensorFlow', 'React'],
      client: 'DataTech Inc.',
      duration: '5 months',
      results: '40% insight improvement'
    },
    {
      id: 5,
      title: 'Healthcare Management System',
      category: 'web',
      description: 'HIPAA-compliant healthcare management system for patient records',
      image: '/graphics/healthcare-system.jpg',
      technologies: ['Vue.js', 'Node.js', 'MySQL'],
      client: 'HealthPlus Medical',
      duration: '8 months',
      results: 'Fully compliant'
    },
    {
      id: 6,
      title: 'IoT Monitoring System',
      category: 'iot',
      description: 'Real-time IoT monitoring system for industrial equipment',
      image: '/graphics/iot-monitoring.jpg',
      technologies: ['Python', 'MQTT', 'InfluxDB'],
      client: 'Industrial Tech',
      duration: '4 months',
      results: '24/7 monitoring'
    }
  ]

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your business needs and project requirements',
      icon: Target,
      duration: '1-2 weeks',
      image: '/graphics/discovery-planning.jpg'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes',
      icon: Monitor,
      duration: '2-3 weeks',
      image: '/graphics/design-prototyping.jpg'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your solution with cutting-edge technologies',
      icon: Code,
      duration: '4-12 weeks',
      image: '/graphics/development.jpg'
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Comprehensive testing to ensure quality and performance',
      icon: ShieldCheck,
      duration: '1-2 weeks',
      image: '/graphics/testing-qa.jpg'
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Launching your solution and going live',
      icon: Rocket,
      duration: '1 week',
      image: '/graphics/deployment.jpg'
    },
    {
      step: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support and continuous improvement',
      icon: Headphones,
      duration: 'Ongoing',
      image: '/graphics/support-maintenance.jpg'
    }
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. A simple website may take 4-6 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including React, Node.js, Python, Java, AWS, Azure, Docker, Kubernetes, and many more. We choose the best technology stack based on your specific requirements.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support and maintenance packages. Our support includes 24/7 monitoring, regular updates, security patches, and technical assistance.'
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow industry best practices including code reviews, automated testing, continuous integration, and comprehensive QA processes. All projects go through rigorous testing before delivery.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely! We have extensive experience integrating with legacy systems and third-party APIs. We can work with your existing infrastructure while modernizing and improving it.'
    }
  ]

  // New data structures for enhanced features
  const clientLogos = [
    { name: 'TechCorp', logo: '/graphics/client-logo-1.jpg' },
    { name: 'GlobalFinance', logo: '/graphics/client-logo-2.jpg' },
    { name: 'HealthPlus', logo: '/graphics/client-logo-3.jpg' },
    { name: 'EduTech', logo: '/graphics/client-logo-1.jpg' },
    { name: 'ManufacturingPro', logo: '/graphics/client-logo-2.jpg' },
    { name: 'RetailGiant', logo: '/graphics/client-logo-3.jpg' }
  ]

  const awards = [
    {
      name: 'Best IT Services Company 2023',
      organization: 'Technology Excellence Awards',
      year: '2023',
      icon: Trophy
    },
    {
      name: 'Top 100 Fastest Growing Companies',
      organization: 'Business Weekly',
      year: '2023',
      icon: TrendingUp
    },
    {
      name: 'Excellence in Innovation',
      organization: 'Digital Transformation Summit',
      year: '2022',
      icon: Lightbulb
    },
    {
      name: 'Customer Choice Award',
      organization: 'Service Excellence Awards',
      year: '2022',
      icon: Users
    }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'Digital Transformation for Healthcare Provider',
      client: 'HealthPlus Medical Center',
      industry: 'Healthcare',
      challenge: 'Outdated legacy systems and inefficient patient record management',
      solution: 'Complete digital transformation with HIPAA-compliant EHR system',
      results: [
        '60% reduction in administrative workload',
        '99.9% system uptime',
        'Improved patient satisfaction by 45%',
        'Fully HIPAA compliant'
      ],
      duration: '8 months',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
      investment: '$450,000',
      roi: '300% in first year',
      image: '/graphics/healthcare-system.jpg'
    },
    {
      id: 2,
      title: 'E-commerce Platform Modernization',
      client: 'Fashion Retail Co.',
      industry: 'E-commerce',
      challenge: 'Slow loading times and poor mobile experience affecting conversions',
      solution: 'Complete platform rebuild with modern architecture and PWA features',
      results: [
        '60% increase in conversion rate',
        '40% faster page load times',
        'Mobile traffic increased by 80%',
        'Reduced bounce rate by 35%'
      ],
      duration: '6 months',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      investment: '$280,000',
      roi: '250% in first year',
      image: '/graphics/ecommerce-platform.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration and Optimization',
      client: 'Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'High infrastructure costs and limited scalability with on-premise systems',
      solution: 'Complete cloud migration to AWS with containerization and auto-scaling',
      results: [
        '70% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Scalable to handle 10x traffic',
        'Improved deployment speed by 90%'
      ],
      duration: '4 months',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      investment: '$320,000',
      roi: '200% in first year',
      image: '/graphics/cloud-migration.jpg'
    }
  ]

  const resources = [
    {
      id: 1,
      title: 'Complete Guide to Digital Transformation',
      type: 'Ebook',
      category: 'Strategy',
      description: 'Comprehensive guide for businesses planning digital transformation',
      downloadUrl: '/resources/digital-transformation-guide.pdf',
      fileSize: '2.5 MB',
      format: 'PDF',
      featured: true,
      image: '/resources/digital-transformation-guide.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices Checklist',
      type: 'Checklist',
      category: 'Security',
      description: 'Essential cybersecurity checklist for protecting your business',
      downloadUrl: '/resources/cybersecurity-checklist.pdf',
      fileSize: '1.2 MB',
      format: 'PDF',
      featured: false,
      image: '/resources/cybersecurity-checklist.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration Strategy Template',
      type: 'Template',
      category: 'Cloud',
      description: 'Ready-to-use template for planning your cloud migration',
      downloadUrl: '/resources/cloud-migration-template.xlsx',
      fileSize: '856 KB',
      format: 'Excel',
      featured: false,
      image: '/resources/cloud-migration-template.jpg'
    },
    {
      id: 4,
      title: 'Web Development Cost Calculator',
      type: 'Tool',
      category: 'Planning',
      description: 'Interactive calculator for estimating web development costs',
      downloadUrl: '/resources/cost-calculator.xlsx',
      fileSize: '1.8 MB',
      format: 'Excel',
      featured: true,
      image: '/resources/cost-calculator.jpg'
    }
  ]

  const webinars = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      speaker: 'Dr. Sarah Johnson',
      description: 'Explore how AI is transforming business operations and what to expect in 2024',
      registered: 1245,
      capacity: 2000,
      status: 'upcoming',
      thumbnail: '/webinars/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices',
      date: '2024-02-22',
      time: '2:00 PM EST',
      duration: '45 minutes',
      speaker: 'Michael Chen',
      description: 'Learn essential cloud security practices to protect your infrastructure',
      registered: 856,
      capacity: 1500,
      status: 'upcoming',
      thumbnail: '/webinars/cloud-security.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation Success Stories',
      date: '2024-01-20',
      time: '2:00 PM EST',
      duration: '60 minutes',
      speaker: 'Neelam Mahaldar',
      description: 'Real-world examples of successful digital transformations',
      registered: 2100,
      capacity: 2000,
      status: 'completed',
      recordingUrl: '/webinars/digital-transformation-recording.mp4',
      thumbnail: '/webinars/digital-transformation.jpg'
    }
  ]

  const mobileApps = {
    ios: {
      url: 'https://apps.apple.com/app/dream-x-diamond/id123456789',
      qrCode: '/qr/ios-app.png',
      features: ['Project Management', 'Real-time Chat', 'Document Sharing', 'Analytics Dashboard']
    },
    android: {
      url: 'https://play.google.com/store/apps/details?id=com.dreamxdiamond.pro',
      qrCode: '/qr/android-app.png',
      features: ['Project Management', 'Real-time Chat', 'Document Sharing', 'Analytics Dashboard']
    }
  }

  const partnerProgram = {
    tiers: [
      {
        name: 'Silver Partner',
        investment: '$5,000 - $25,000',
        commission: '15%',
        benefits: [
          'Partner certification',
          'Marketing materials',
          'Basic technical support',
          'Lead sharing'
        ]
      },
      {
        name: 'Gold Partner',
        investment: '$25,000 - $100,000',
        commission: '20%',
        benefits: [
          'Advanced certification',
          'Co-marketing opportunities',
          'Priority technical support',
          'Dedicated account manager',
          'Exclusive leads'
        ]
      },
      {
        name: 'Platinum Partner',
        investment: '$100,000+',
        commission: '25%',
        benefits: [
          'Premium certification',
          'Joint marketing campaigns',
          '24/7 dedicated support',
          'Executive sponsorship',
          'Highest priority leads',
          'Revenue sharing opportunities'
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Dream X Diamond</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/careers" className="text-foreground hover:text-primary transition-colors">Careers</Link>
              <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <SearchComponent />
              <ThemeToggle />
              <Link href="/contact">
                <Button className="hidden md:inline-flex">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/graphics/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2 bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4" />
                Award-Winning IT Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Business with Cutting-Edge Technology
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We deliver innovative IT solutions that drive growth, efficiency, and competitive advantage for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg bg-white text-blue-900 hover:bg-blue-50">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-blue-900">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-200">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-blue-200">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <img 
                  src="/graphics/hero-bg.jpg" 
                  alt="Dream X Diamond - Professional IT Services" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              We partner with Fortune 500 companies and innovative startups
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4">Comprehensive IT Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a complete range of technology services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Check className="h-3 w-3 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-primary">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 6-step process ensures successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{step.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Innovation Hub</Badge>
            <h2 className="text-4xl font-bold mb-4">Cutting-Edge Technology Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We stay ahead of the curve with the latest technologies and innovative approaches to solve complex business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/graphics/innovation-lab.jpg" 
                  alt="Innovation Laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Predictive Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Computer Vision</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/graphics/digital-transformation.jpg" 
                  alt="Digital Transformation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Digital Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transform your business with comprehensive digital solutions that streamline operations and enhance customer experiences.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Process Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Cloud Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Data Analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/graphics/tech-consulting.jpg" 
                  alt="Technology Consulting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Strategic Consulting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get expert guidance on technology strategy, digital transformation, and IT infrastructure optimization.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>IT Strategy Planning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Technology Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-3 w-3 text-green-600" />
                    <span>Change Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-4xl font-bold mb-4">Detailed Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses achieve their goals through innovative technology solutions
            </p>
          </div>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <Badge variant="secondary" className="mb-4">{study.industry}</Badge>
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2">Challenge</h4>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Solution</h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Results</h4>
                          <ul className="space-y-1">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center gap-2 text-muted-foreground">
                                <Check className="h-4 w-4 text-green-600" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold">Duration:</span> {study.duration}
                        </div>
                        <div>
                          <span className="font-semibold">Investment:</span> {study.investment}
                        </div>
                        <div>
                          <span className="font-semibold">ROI:</span> {study.roi}
                        </div>
                        <div>
                          <span className="font-semibold">Technologies:</span> {study.technologies.join(', ')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center rounded-lg overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Recognition</Badge>
            <h2 className="text-4xl font-bold mb-4">Awards & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <award.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">{award.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{award.organization}</p>
                  <Badge variant="outline">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg px-6 py-4 shadow-lg">
              <Award className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold">ISO 27001 Certified</div>
                <div className="text-sm text-muted-foreground">Information Security Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">About Us</Badge>
              <h2 className="text-4xl font-bold">Leading IT Solutions Provider</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2008, Dream X Diamond has been at the forefront of digital transformation, helping businesses leverage technology to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to deliver innovative, reliable, and scalable technology solutions that drive business success and create lasting value for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Certified Experts</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Leadership Team</h3>
              <div className="grid gap-4">
                {teamMembers.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.position}</p>
                          <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Industries We Serve</Badge>
            <h2 className="text-4xl font-bold mb-4">Expertise Across Multiple Sectors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have deep industry knowledge and experience serving diverse business sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Technologies</Badge>
            <h2 className="text-4xl font-bold mb-4">Cutting-Edge Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with the latest technologies to deliver modern, scalable solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-lg px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold mb-4">Proven Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our outstanding performance metrics and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/graphics/success-metrics.jpg" 
                  alt="Business Success Metrics"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm">Client Retention</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Growth</h3>
              <p className="text-muted-foreground">
                Our clients experience an average of 45% growth in their first year with us.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/graphics/customer-satisfaction.jpg" 
                  alt="Customer Satisfaction"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-sm">Customer Rating</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                95% of our clients report being highly satisfied with our services and support.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/graphics/awards-recognition.jpg" 
                  alt="Awards and Recognition"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Industry Awards</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
              <p className="text-muted-foreground">
                Recognized as a leader in technology innovation and customer service excellence.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
            <h2 className="text-4xl font-bold mb-4">Success Stories & Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses transform and achieve their goals.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 bg-background p-1 rounded-lg">
              {['all', 'web', 'mobile', 'cloud', 'ai', 'iot'].map(filter => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.category}</Badge>
                    <Button variant="ghost" size="sm">
                      View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {testimonial.project} • {testimonial.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Resource Center Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Resource Center</Badge>
            <h2 className="text-4xl font-bold mb-4">Free Resources & Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our free resources to help your business succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={resource.id} className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${resource.featured ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <Badge variant="outline">{resource.category}</Badge>
                    {resource.featured && <Badge variant="default">Featured</Badge>}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{resource.fileSize}</span>
                    <span>{resource.format}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar & Events Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Events</Badge>
            <h2 className="text-4xl font-bold mb-4">Upcoming Webinars & Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our free webinars to learn from industry experts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <Card key={webinar.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src={webinar.thumbnail} 
                    alt={webinar.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </Badge>
                    <Badge variant="outline">{webinar.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {webinar.description}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{webinar.registered}/{webinar.capacity} registered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>
                  
                  {webinar.status === 'upcoming' ? (
                    <Button className="w-full">
                      Register Now
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Mobile Apps</Badge>
            <h2 className="text-4xl font-bold mb-4">Manage Projects On The Go</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our mobile apps to stay connected and manage your projects from anywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-8 h-8 text-white" />
                </div>
                <CardTitle>iOS App</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {mobileApps.ios.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-600" />
                  </div>
                  <Button className="w-full">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Download on App Store
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Android App</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {mobileApps.android.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-600" />
                  </div>
                  <Button className="w-full">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Get it on Google Play
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Program Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Partner Program</Badge>
            <h2 className="text-4xl font-bold mb-4">Join Our Partner Network</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your business by partnering with Dream X Diamond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerProgram.tiers.map((tier, index) => (
              <Card key={index} className={`relative ${index === 2 ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl mb-2">{tier.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary mb-1">{tier.commission} Commission</div>
                  <div className="text-sm text-muted-foreground">{tier.investment}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" variant={index === 2 ? 'default' : 'outline'}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 8824395449</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@dreamxdiamond.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">5A/32 Pareek Path, Dehar ke Balaji ,Sikar Road Jaipur,Rajasthan,IN (302039)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Company Name" />
                </div>
                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.title.toLowerCase().replace(' ', '-')}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest tech insights and company updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Dream X Diamond</span>
              </div>
              <p className="text-gray-400">
                Leading IT solutions provider with 15+ years of experience in digital transformation.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Services</h3>
              <ul className="space-y-2 text-gray-400">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="hover:text-white transition-colors text-left">
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left">About Us</button></li>
                <li><button className="hover:text-white transition-colors text-left">Our Team</button></li>
                <li><button className="hover:text-white transition-colors text-left">Careers</button></li>
                <li><button className="hover:text-white transition-colors text-left">Blog</button></li>
                <li><button className="hover:text-white transition-colors text-left">Contact</button></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left">Help Center</button></li>
                <li><button className="hover:text-white transition-colors text-left">Documentation</button></li>
                <li><button className="hover:text-white transition-colors text-left">API Status</button></li>
                <li><button className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
                <li><button className="hover:text-white transition-colors text-left">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Dream X Diamond. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 p-0"
          size="icon"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}

      {/* Live Chat Widget */}
      <LiveChat />
    </div>
  )
}