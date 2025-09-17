'use client'

import { useState, useEffect } from 'react'
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
  Github,
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
  LogIn,
  ExternalLink,
  Clock,
  DollarSign,
  Users2,
  BarChart3,
  Zap,
  ShieldCheck,
  Globe2,
  BookOpen,
  HelpCircle,
  Headphones,
  Wifi,
  Server,
  Monitor,
  Tablet,
  Wrench,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Fingerprint,
  Eye,
  Target,
  Rocket,
  Sparkles,
  Home,
  MessageCircle as MessageCircleWhatsApp,
  Gift,
  Calculator,
  Trophy,
  ExternalLink
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
    // Clear error when user starts typing
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
      // Simulate form submission
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
      price: 'Starting at $2,999'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile App Development', 
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      price: 'Starting at $4,999'
    },
    { 
      icon: Cloud, 
      title: 'Cloud Services', 
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS Solutions', 'Azure Migration', 'Google Cloud', 'Hybrid Cloud'],
      price: 'Starting at $1,999/month'
    },
    { 
      icon: Shield, 
      title: 'Cybersecurity', 
      description: 'Comprehensive security solutions and security audits',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      price: 'Starting at $3,999'
    },
    { 
      icon: Brain, 
      title: 'AI/ML Solutions', 
      description: 'Artificial intelligence and machine learning implementations',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automation'],
      price: 'Starting at $5,999'
    },
    { 
      icon: Globe, 
      title: 'Digital Marketing', 
      description: 'SEO, SEM, and comprehensive digital marketing strategies',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy'],
      price: 'Starting at $999/month'
    },
    { 
      icon: Database, 
      title: 'Database Management', 
      description: 'Database design, optimization, and management solutions',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions'],
      price: 'Starting at $1,499'
    },
    { 
      icon: Briefcase, 
      title: 'IT Consulting', 
      description: 'Strategic IT consulting and advisory services',
      features: ['Digital Transformation', 'IT Strategy', 'Process Optimization', 'Technology Advisory'],
      price: 'Starting at $150/hour'
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
      photo: '/team/alex.jpg'
    },
    {
      name: 'Maria Garcia',
      position: 'CTO',
      bio: 'Expert in cloud architecture and DevOps with 12+ years of experience',
      experience: 'AWS Certified Solutions Architect',
      education: 'MS in Computer Science',
      skills: ['Cloud Architecture', 'DevOps', 'System Design'],
      linkedin: '#',
      photo: '/team/maria.jpg'
    },
    {
      name: 'David Kim',
      position: 'Lead Developer',
      bio: 'Full-stack developer with 10+ years experience in web and mobile development',
      experience: 'Certified Scrum Master',
      education: 'BS in Software Engineering',
      skills: ['React', 'Node.js', 'Mobile Development'],
      linkedin: '#',
      photo: '/team/david.jpg'
    },
    {
      name: 'Emily Brown',
      position: 'Design Director',
      bio: 'Creative designer focused on user experience and interface design',
      experience: 'Google Design Certified',
      education: 'BFA in Graphic Design',
      skills: ['UI/UX Design', 'Design Systems', 'User Research'],
      linkedin: '#',
      photo: '/team/emily.jpg'
    }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      category: 'web',
      description: 'Complete redesign of an e-commerce platform resulting in 60% increase in conversions',
      image: '/portfolio/ecommerce.jpg',
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
      image: '/portfolio/banking.jpg',
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
      image: '/portfolio/cloud.jpg',
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
      image: '/portfolio/analytics.jpg',
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
      image: '/portfolio/healthcare.jpg',
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
      image: '/portfolio/iot.jpg',
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
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes',
      icon: Monitor,
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your solution with cutting-edge technologies',
      icon: Code,
      duration: '4-12 weeks'
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Comprehensive testing to ensure quality and performance',
      icon: ShieldCheck,
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Launching your solution and going live',
      icon: Rocket,
      duration: '1 week'
    },
    {
      step: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support and continuous improvement',
      icon: Headphones,
      duration: 'Ongoing'
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
      answer: 'Absolutely! We have extensive experience integrating with legacy systems and third-party APIs. We can work with your existing infrastructure while modernizing where needed.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages website',
        'Basic SEO optimization',
        'Mobile responsive design',
        'Contact form integration',
        'Basic analytics setup',
        'Email support',
        '1 revision round'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages website',
        'Advanced SEO optimization',
        'CMS integration',
        'Blog setup',
        'Advanced analytics',
        'Priority support',
        '3 revision rounds',
        'Social media integration',
        'Basic maintenance'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited pages',
        'Enterprise SEO',
        'Custom CMS',
        'E-commerce functionality',
        'Advanced analytics',
        '24/7 dedicated support',
        'Unlimited revisions',
        'API integrations',
        'Advanced security',
        'Priority maintenance'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps...',
      author: 'Neelam Mahaldar',
      date: 'December 15, 2023',
      readTime: '5 min read',
      category: 'Web Development',
      image: '/blog/web-future.jpg'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential best practices for successful cloud migration and how to avoid common pitfalls...',
      author: 'Maria Garcia',
      date: 'December 10, 2023',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg'
    },
    {
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and learn how to protect your business from evolving risks...',
      author: 'David Kim',
      date: 'December 5, 2023',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity.jpg'
    }
  ]

  const jobOpenings = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced frontend developer to join our team and help build amazing web applications.',
      requirements: [
        'Expert knowledge of React, Vue.js, or Angular',
        'Strong understanding of modern JavaScript',
        'Experience with responsive design',
        'Knowledge of version control systems',
        'Excellent problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work flexibility',
        'Professional development budget',
        'Stock options'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Seeking a cloud architect to design and implement scalable cloud solutions for our clients.',
      requirements: [
        'AWS or Azure certification',
        'Experience with infrastructure as code',
        'Knowledge of microservices architecture',
        'Strong communication skills',
        'Project management experience'
      ],
      benefits: [
        'Competitive salary',
        'Health, dental, and vision insurance',
        '401(k) matching',
        'Flexible work hours',
        'Professional development'
      ]
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our design team to create beautiful and intuitive user experiences.',
      requirements: [
        'Proficiency in Figma or Sketch',
        'Strong portfolio demonstrating UX/UI skills',
        'Understanding of design systems',
        'Experience with user research',
        'Knowledge of accessibility standards'
      ],
      benefits: [
        'Competitive salary',
        'Creative freedom',
        'Collaborative environment',
        'Design tools budget',
        'Conference opportunities'
      ]
    }
  ]

  // Client Logos Data
  const clientLogos = [
    { name: 'Microsoft', category: 'Technology' },
    { name: 'Google', category: 'Technology' },
    { name: 'Amazon', category: 'E-commerce' },
    { name: 'Apple', category: 'Technology' },
    { name: 'Tesla', category: 'Automotive' },
    { name: 'Netflix', category: 'Entertainment' },
    { name: 'Spotify', category: 'Music' },
    { name: 'Airbnb', category: 'Travel' },
    { name: 'Uber', category: 'Transportation' },
    { name: 'LinkedIn', category: 'Social Media' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Zoom', category: 'Communication' }
  ]

  // Awards & Certifications Data
  const awardsCertifications = [
    {
      title: 'ISO 27001 Certification',
      description: 'Information Security Management System certification',
      year: '2023',
      icon: Shield,
      type: 'Certification'
    },
    {
      title: 'Best IT Services Company 2023',
      description: 'Awarded by Technology Association of America',
      year: '2023',
      icon: Award,
      type: 'Award'
    },
    {
      title: 'AWS Premier Partner',
      description: 'Highest level of AWS partnership',
      year: '2023',
      icon: Cloud,
      type: 'Certification'
    },
    {
      title: 'Microsoft Gold Partner',
      description: 'Expertise in Microsoft technologies',
      year: '2023',
      icon: Monitor,
      type: 'Certification'
    },
    {
      title: 'Innovation Excellence Award',
      description: 'For outstanding AI/ML solutions',
      year: '2022',
      icon: Lightbulb,
      type: 'Award'
    },
    {
      title: 'Great Place to Work',
      description: 'Certified for workplace excellence',
      year: '2023',
      icon: Users,
      type: 'Certification'
    }
  ]

  // Resources Data
  const resources = [
    {
      title: 'Complete Guide to Cloud Migration',
      description: 'Step-by-step guide for successful cloud migration',
      type: 'E-book',
      category: 'Cloud Computing',
      downloadCount: '2.5K',
      fileSize: '2.4 MB',
      format: 'PDF'
    },
    {
      title: 'Cybersecurity Best Practices Checklist',
      description: 'Essential checklist for protecting your business',
      type: 'Checklist',
      category: 'Cybersecurity',
      downloadCount: '3.2K',
      fileSize: '1.2 MB',
      format: 'PDF'
    },
    {
      title: 'Web Development Trends 2024',
      description: 'Latest trends and technologies in web development',
      type: 'Whitepaper',
      category: 'Web Development',
      downloadCount: '1.8K',
      fileSize: '3.1 MB',
      format: 'PDF'
    },
    {
      title: 'Mobile App Development Guide',
      description: 'Complete guide to building successful mobile apps',
      type: 'E-book',
      category: 'Mobile Development',
      downloadCount: '2.1K',
      fileSize: '4.2 MB',
      format: 'PDF'
    },
    {
      title: 'AI Implementation Framework',
      description: 'Strategic framework for AI adoption',
      type: 'Framework',
      category: 'Artificial Intelligence',
      downloadCount: '1.5K',
      fileSize: '2.8 MB',
      format: 'PDF'
    },
    {
      title: 'Digital Marketing Playbook',
      description: 'Comprehensive digital marketing strategies',
      type: 'Playbook',
      category: 'Digital Marketing',
      downloadCount: '2.8K',
      fileSize: '3.5 MB',
      format: 'PDF'
    }
  ]

  // Webinars & Events Data
  const webinarsEvents = [
    {
      title: 'Future of AI in Business',
      description: 'Explore how AI is transforming business operations',
      date: '2024-01-15',
      time: '2:00 PM EST',
      type: 'Webinar',
      duration: '1 hour',
      speaker: 'Dr. Sarah Johnson',
      attendees: 245,
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'Cloud Security Summit',
      description: 'Latest trends in cloud security and best practices',
      date: '2024-01-20',
      time: '10:00 AM EST',
      type: 'Summit',
      duration: '3 hours',
      speaker: 'Multiple Speakers',
      attendees: 500,
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'Web Development Workshop',
      description: 'Hands-on workshop with React and Next.js',
      date: '2024-01-25',
      time: '1:00 PM EST',
      type: 'Workshop',
      duration: '2 hours',
      speaker: 'Neelam Mahaldar',
      attendees: 50,
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      title: 'Digital Marketing Strategies',
      description: 'Effective digital marketing strategies for 2024',
      date: '2023-12-10',
      time: '2:00 PM EST',
      type: 'Webinar',
      duration: '1 hour',
      speaker: 'Maria Garcia',
      attendees: 189,
      status: 'completed',
      recordingLink: '#'
    }
  ]

  // Partner Program Data
  const partnerProgram = {
    tiers: [
      {
        name: 'Silver Partner',
        description: 'Entry-level partnership with basic benefits',
        requirements: ['Basic certification', '5+ projects', 'Annual fee: $500'],
        benefits: ['Lead sharing', 'Marketing materials', 'Basic support', 'Partner portal access'],
        commission: '10%',
        icon: Users
      },
      {
        name: 'Gold Partner',
        description: 'Enhanced partnership with greater benefits',
        requirements: ['Advanced certification', '15+ projects', 'Annual fee: $1,000'],
        benefits: ['Priority leads', 'Co-marketing', 'Dedicated support', 'Training programs'],
        commission: '15%',
        icon: Award
      },
      {
        name: 'Platinum Partner',
        description: 'Elite partnership with maximum benefits',
        requirements: ['Expert certification', '30+ projects', 'Annual fee: $2,500'],
        benefits: ['Exclusive leads', 'Joint marketing', '24/7 support', 'Executive access'],
        commission: '20%',
        icon: Star
      }
    ],
    benefits: [
      'Revenue sharing opportunities',
      'Technical training and certification',
      'Marketing and sales support',
      'Access to partner portal',
      'Co-branded marketing materials',
      'Priority technical support',
      'Invitation to exclusive events'
    ]
  }

  // Affiliate Program Data
  const affiliateProgram = {
    commissionStructure: [
      {
        tier: 'Starter',
        salesRange: '$0 - $10,000',
        commissionRate: '10%',
        bonus: 'None'
      },
      {
        tier: 'Professional',
        salesRange: '$10,001 - $50,000',
        commissionRate: '15%',
        bonus: '$500 bonus'
      },
      {
        tier: 'Elite',
        salesRange: '$50,001+',
        commissionRate: '20%',
        bonus: '$2,000 bonus'
      }
    ],
    benefits: [
      'Competitive commission rates',
      'Real-time tracking dashboard',
      'Marketing materials and creatives',
      'Monthly commission payouts',
      'Dedicated affiliate manager',
      'Performance bonuses',
      'Tier-based rewards'
    ],
    tools: [
      'Affiliate dashboard',
      'Link generator',
      'Marketing materials',
      'Performance analytics',
      'Real-time reporting',
      'Payout history'
    ]
  }

  // Referral Program Data
  const referralProgram = {
    rewards: [
      {
        type: 'Cash Reward',
        description: 'Earn $500 for each successful referral',
        conditions: 'Referral must sign up for any service plan'
      },
      {
        type: 'Service Credit',
        description: 'Get $1000 credit towards your services',
        conditions: 'Referral must sign up for annual plan'
      },
      {
        type: 'Premium Features',
        description: 'Free access to premium features for 6 months',
        conditions: 'Referral must sign up for enterprise plan'
      }
    ],
    process: [
      'Share your unique referral link',
      'Your friend clicks the link and signs up',
      'Your friend completes their first purchase',
      'You receive your reward within 7 days'
    ],
    stats: {
      totalReferrals: '1,250+',
      totalRewards: '$625,000+',
      happyReferrers: '98%'
    }
  }

  // Mobile App Data
  const mobileApp = {
    features: [
      'Project management dashboard',
      'Real-time notifications',
      'Time tracking',
      'Team collaboration',
      'Document sharing',
      'Video conferencing',
      'Expense tracking',
      'Performance analytics'
    ],
    platforms: [
      {
        name: 'iOS',
        icon: '🍎',
        downloadLink: '#',
        version: '2.1.0',
        size: '45.2 MB',
        rating: 4.8,
        downloads: '50K+'
      },
      {
        name: 'Android',
        icon: '🤖',
        downloadLink: '#',
        version: '2.1.0',
        size: '42.8 MB',
        rating: 4.7,
        downloads: '75K+'
      }
    ],
    screenshots: [
      '/app/dashboard.jpg',
      '/app/projects.jpg',
      '/app/team.jpg',
      '/app/analytics.jpg'
    ]
  }

  // Video Content Data
  const videoContent = [
    {
      title: 'Company Overview',
      description: 'Learn about Dream X Diamond and our mission',
      duration: '3:45',
      thumbnail: '/videos/company-overview.jpg',
      category: 'Company',
      views: '12.5K',
      likes: '892'
    },
    {
      title: 'Web Development Process',
      description: 'Our complete web development process explained',
      duration: '8:20',
      thumbnail: '/videos/web-development.jpg',
      category: 'Process',
      views: '8.3K',
      likes: '567'
    },
    {
      title: 'Client Success Stories',
      description: 'Hear from our satisfied clients',
      duration: '5:15',
      thumbnail: '/videos/success-stories.jpg',
      category: 'Testimonials',
      views: '15.2K',
      likes: '1.2K'
    },
    {
      title: 'Technology Stack Tour',
      description: 'Explore the technologies we use',
      duration: '6:30',
      thumbnail: '/videos/tech-stack.jpg',
      category: 'Technology',
      views: '9.8K',
      likes: '743'
    }
  ]

  // AI Chatbot Data
  const aiChatbot = {
    capabilities: [
      'Natural Language Processing',
      'Multi-language Support',
      'Project Estimation',
      'Technical Consultation',
      'Appointment Scheduling',
      'Document Analysis',
      'Code Review Assistance',
      'Real-time Translation'
    ],
    quickActions: [
      { label: 'Get Project Quote', action: 'quote' },
      { label: 'Schedule Consultation', action: 'schedule' },
      { label: 'Technical Support', action: 'support' },
      { label: 'View Services', action: 'services' },
      { label: 'Pricing Info', action: 'pricing' },
      { label: 'Company Info', action: 'company' }
    ],
    personality: {
      name: 'TechBot Pro',
      role: 'AI Assistant',
      avatar: '/ai/bot-avatar.png',
      expertise: 'IT Solutions & Technology Consulting',
      languages: ['English', 'Spanish', 'French', 'German', 'Hindi', 'Chinese']
    }
  }

  // Virtual Office Tour Data
  const virtualOfficeTour = {
    locations: [
      {
        name: 'Headquarters - Silicon Valley',
        description: 'Our main innovation hub with state-of-the-art facilities',
        image: '/office/hq.jpg',
        features: ['Innovation Lab', 'Conference Center', 'R&D Department', 'Employee Lounge'],
        capacity: '500+ employees',
        established: '2008'
      },
      {
        name: 'Development Center - Bangalore',
        description: 'Cutting-edge software development facility',
        image: '/office/bangalore.jpg',
        features: ['Development Floors', 'Testing Labs', 'Training Center', 'Recreation Area'],
        capacity: '300+ developers',
        established: '2015'
      },
      {
        name: 'European Office - London',
        description: 'Strategic European operations center',
        image: '/office/london.jpg',
        features: ['Client Meeting Rooms', 'Showcase Center', 'Support Team', 'Executive Suites'],
        capacity: '150+ staff',
        established: '2018'
      },
      {
        name: 'Asia Pacific - Singapore',
        description: 'Regional hub for APAC operations',
        image: '/office/singapore.jpg',
        features: ['Regional Headquarters', 'Data Center', 'Training Facility', 'Innovation Hub'],
        capacity: '200+ professionals',
        established: '2020'
      }
    ],
    interactiveElements: [
      '360° Virtual Tour',
      'Live Office Cam',
      'Team Member Introduction',
      'Facility Showcase',
      'Interactive Floor Plan'
    ]
  }

  // Interactive Elements Data
  const interactiveElements = {
    quiz: {
      title: 'Technology Readiness Assessment',
      description: 'Find out how ready your business is for digital transformation',
      questions: [
        {
          question: 'How would you rate your current IT infrastructure?',
          options: ['Outdated', 'Basic', 'Modern', 'Advanced'],
          category: 'Infrastructure'
        },
        {
          question: 'Do you have a digital transformation strategy?',
          options: ['No strategy', 'In planning', 'Partial implementation', 'Fully implemented'],
          category: 'Strategy'
        },
        {
          question: 'How important is data security to your business?',
          options: ['Not important', 'Somewhat important', 'Very important', 'Critical'],
          category: 'Security'
        }
      ]
    },
    calculator: {
      title: 'Project Cost Calculator',
      description: 'Estimate the cost of your project',
      factors: [
        {
          name: 'Project Type',
          options: [
            { name: 'Simple Website', multiplier: 1 },
            { name: 'Complex Web App', multiplier: 2.5 },
            { name: 'Mobile App', multiplier: 3 },
            { name: 'Enterprise Solution', multiplier: 5 }
          ]
        },
        {
          name: 'Features',
          options: [
            { name: 'Basic', multiplier: 1 },
            { name: 'Advanced', multiplier: 1.5 },
            { name: 'Premium', multiplier: 2 }
          ]
        },
        {
          name: 'Timeline',
          options: [
            { name: 'Flexible', multiplier: 1 },
            { name: 'Standard', multiplier: 1.2 },
            { name: 'Urgent', multiplier: 1.5 }
          ]
        }
      ],
      basePrice: 5000
    }
  }

  // Virtual Office Tour Data
  const virtualOfficeTour = {
    areas: [
      {
        name: 'Reception',
        description: 'Modern welcome area with digital displays',
        hotspots: [
          { x: 20, y: 30, title: 'Digital Receptionist', info: 'AI-powered greeting system' },
          { x: 70, y: 40, title: 'Company Timeline', info: 'Interactive company history wall' }
        ]
      },
      {
        name: 'Open Workspace',
        description: 'Collaborative environment for our development teams',
        hotspots: [
          { x: 30, y: 50, title: 'Developer Pods', info: 'Ergonomic workstations with dual monitors' },
          { x: 60, y: 60, title: 'Collaboration Zone', info: 'Brainstorming area with whiteboards' }
        ]
      },
      {
        name: 'Innovation Lab',
        description: 'Where we test cutting-edge technologies',
        hotspots: [
          { x: 40, y: 40, title: 'VR Testing Area', info: 'Virtual reality development station' },
          { x: 70, y: 30, title: 'AI Demo Station', info: 'Live AI/ML demonstrations' }
        ]
      },
      {
        name: 'Executive Suite',
        description: 'Leadership team workspace',
        hotspots: [
          { x: 50, y: 40, title: 'Boardroom', info: 'State-of-the-art meeting facilities' },
          { x: 30, y: 60, title: 'Strategy Center', info: 'Real-time business analytics dashboard' }
        ]
      }
    ]
  }

  // AI Chatbot Data
  const aiChatbot = {
    name: 'TechBot',
    avatar: '/bot-avatar.png',
    capabilities: [
      'Answer technical questions',
      'Schedule consultations',
      'Provide project estimates',
      'Share company information',
      'Technical support assistance'
    ],
    quickActions: [
      { label: 'Get Quote', action: 'quote' },
      { label: 'Schedule Call', action: 'schedule' },
      { label: 'Tech Support', action: 'support' },
      { label: 'View Services', action: 'services' }
    ]
  }

  // Real-time Project Showcase Data
  const liveProjects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      client: 'Fashion Retail Co.',
      progress: 78,
      status: 'In Progress',
      team: 8,
      deadline: '2024-02-15',
      budget: '$125,000',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUpdates: [
        { time: '2 hours ago', update: 'Completed payment integration' },
        { time: '5 hours ago', update: 'UI/UX design approved' }
      ]
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      client: 'SecureBank',
      progress: 45,
      status: 'In Progress',
      team: 12,
      deadline: '2024-03-01',
      budget: '$250,000',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      liveUpdates: [
        { time: '1 hour ago', update: 'Security audit completed' },
        { time: '3 hours ago', update: 'Backend API development' }
      ]
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      client: 'DataTech Inc.',
      progress: 92,
      status: 'Testing',
      team: 6,
      deadline: '2024-01-25',
      budget: '$180,000',
      technologies: ['Python', 'TensorFlow', 'React'],
      liveUpdates: [
        { time: '30 minutes ago', update: 'Final testing phase initiated' },
        { time: '2 hours ago', update: 'Performance optimization completed' }
      ]
    }
  ]

  // Interactive Timeline Data
  const companyTimeline = [
    {
      year: 2008,
      title: 'Company Founded',
      description: 'Dream X Diamond established with a vision to transform businesses through technology',
      milestone: true,
      icon: '🚀'
    },
    {
      year: 2012,
      title: 'First Major Client',
      description: 'Signed contract with Fortune 500 company for enterprise solution',
      milestone: true,
      icon: '🎯'
    },
    {
      year: 2015,
      title: 'International Expansion',
      description: 'Opened offices in 3 new countries across Europe and Asia',
      milestone: true,
      icon: '🌍'
    },
    {
      year: 2018,
      title: 'AI Division Launched',
      description: 'Dedicated AI/ML research and development division established',
      milestone: true,
      icon: '🤖'
    },
    {
      year: 2020,
      title: '1000+ Projects Completed',
      description: 'Reached milestone of 1000 successful project deliveries',
      milestone: true,
      icon: '📊'
    },
    {
      year: 2023,
      title: 'Innovation Award',
      description: 'Received "Most Innovative IT Company" award from Technology Association',
      milestone: true,
      icon: '🏆'
    },
    {
      year: 2024,
      title: 'Future Vision',
      description: 'Launching next-generation AI-powered solutions',
      milestone: false,
      icon: '🔮'
    }
  ]

  // Gamification Data
  const gamification = {
    achievements: [
      {
        title: 'Tech Explorer',
        description: 'Visit all service sections',
        icon: '🗺️',
        unlocked: false,
        progress: 60
      },
      {
        title: 'Knowledge Seeker',
        description: 'Download 3 resources',
        icon: '📚',
        unlocked: false,
        progress: 33
      },
      {
        title: 'Social Butterfly',
        description: 'Share us on social media',
        icon: '🦋',
        unlocked: false,
        progress: 0
      },
      {
        title: 'Innovation Leader',
        description: 'Complete technology assessment',
        icon: '💡',
        unlocked: false,
        progress: 0
      }
    ],
    points: 1250,
    level: 'Tech Enthusiast',
    nextLevel: 'Tech Expert',
    pointsToNextLevel: 250
  }

  // Innovation Lab Data
  const innovationLab = {
    projects: [
      {
        title: 'Quantum Computing Research',
        status: 'Research Phase',
        progress: 25,
        team: 5,
        description: 'Exploring quantum algorithms for optimization problems',
        impact: 'High',
        timeline: '2 years'
      },
      {
        title: 'Neural Interface Development',
        status: 'Prototype',
        progress: 60,
        team: 8,
        description: 'Brain-computer interface for accessibility applications',
        impact: 'Revolutionary',
        timeline: '18 months'
      },
      {
        title: 'Blockchain Supply Chain',
        status: 'Testing',
        progress: 85,
        team: 6,
        description: 'Transparent supply chain tracking using blockchain',
        impact: 'Medium',
        timeline: '6 months'
      },
      {
        title: 'Autonomous Drone Fleet',
        status: 'Development',
        progress: 40,
        team: 10,
        description: 'AI-powered drone delivery and monitoring system',
        impact: 'High',
        timeline: '12 months'
      }
    ],
    technologies: [
      'Quantum Computing', 'Neural Networks', 'Blockchain', 'IoT', 
      'Computer Vision', 'Natural Language Processing', 'Robotics'
    ]
  }

  // Customer Success Map Data
  const customerSuccessMap = {
    locations: [
      {
        city: 'New York',
        country: 'USA',
        clients: 45,
        successStories: 12,
        coordinates: { x: 25, y: 35 },
        featuredStory: {
          title: 'Financial Services Transformation',
          client: 'Manhattan Financial Group',
          result: '40% efficiency improvement'
        }
      },
      {
        city: 'London',
        country: 'UK',
        clients: 38,
        successStories: 9,
        coordinates: { x: 48, y: 25 },
        featuredStory: {
          title: 'E-commerce Platform Launch',
          client: 'British Retail Co.',
          result: '200% sales increase'
        }
      },
      {
        city: 'Tokyo',
        country: 'Japan',
        clients: 32,
        successStories: 7,
        coordinates: { x: 85, y: 30 },
        featuredStory: {
          title: 'Manufacturing Automation',
          client: 'Tokyo Industries',
          result: '60% cost reduction'
        }
      },
      {
        city: 'Sydney',
        country: 'Australia',
        clients: 28,
        successStories: 6,
        coordinates: { x: 88, y: 70 },
        featuredStory: {
          title: 'Healthcare System Upgrade',
          client: 'Australian Health Network',
          result: '100% system uptime'
        }
      },
      {
        city: 'Toronto',
        country: 'Canada',
        clients: 22,
        successStories: 5,
        coordinates: { x: 22, y: 30 },
        featuredStory: {
          title: 'Educational Platform Development',
          client: 'Canadian Learning Institute',
          result: '50K+ student enrollment'
        }
      }
    ],
    stats: {
      totalCountries: 15,
      totalClients: 500,
      totalSuccessStories: 89,
      satisfactionRate: '98%'
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-background'}`}>
      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Search services, pages, or content..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Services">
            {services.map((service, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  setIsSearchOpen(false)
                  scrollToSection('services')
                }}
              >
                <service.icon className="mr-2 h-4 w-4" />
                <span>{service.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('home') }}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('about') }}>
              <Users className="mr-2 h-4 w-4" />
              <span>About Us</span>
            </CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('services') }}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Services</span>
            </CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('portfolio') }}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Portfolio</span>
            </CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('contact') }}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Links">
            <CommandItem onSelect={() => { setIsSearchOpen(false); window.location.href = '/blog' }}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Blog</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('pricing') }}>
              <DollarSign className="mr-2 h-4 w-4" />
              <span>Pricing</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); scrollToSection('careers') }}>
              <Users2 className="mr-2 h-4 w-4" />
              <span>Careers</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">Sending message...</p>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 8824395449
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                info@dreamxdiamond.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:underline">Support</button>
              <button className="hover:underline">Client Portal</button>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-1 hover:bg-primary-foreground/10 rounded"
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <select className="bg-transparent border-none text-sm">
                  <option>EN</option>
                  <option>ES</option>
                  <option>FR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Dream X Diamond</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('process')} className="text-foreground hover:text-primary transition-colors">Process</button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('blog')} className="text-foreground hover:text-primary transition-colors">Blog</button>
              <button onClick={() => scrollToSection('careers')} className="text-foreground hover:text-primary transition-colors">Careers</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center space-x-1 text-muted-foreground hover:text-foreground"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
              <Button className="hidden md:inline-flex" onClick={() => scrollToSection('contact')}>
                Get Started
              </Button>
              
              {/* Mobile Menu Button */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 py-6">
                    <button onClick={() => scrollToSection('home')} className="text-left text-lg hover:text-primary transition-colors">Home</button>
                    <button onClick={() => scrollToSection('about')} className="text-left text-lg hover:text-primary transition-colors">About</button>
                    <button onClick={() => scrollToSection('services')} className="text-left text-lg hover:text-primary transition-colors">Services</button>
                    <button onClick={() => scrollToSection('portfolio')} className="text-left text-lg hover:text-primary transition-colors">Portfolio</button>
                    <button onClick={() => scrollToSection('process')} className="text-left text-lg hover:text-primary transition-colors">Process</button>
                    <button onClick={() => scrollToSection('pricing')} className="text-left text-lg hover:text-primary transition-colors">Pricing</button>
                    <button onClick={() => scrollToSection('blog')} className="text-left text-lg hover:text-primary transition-colors">Blog</button>
                    <button onClick={() => scrollToSection('careers')} className="text-left text-lg hover:text-primary transition-colors">Careers</button>
                    <button onClick={() => scrollToSection('contact')} className="text-left text-lg hover:text-primary transition-colors">Contact</button>
                    <Button className="w-full mt-4" onClick={() => scrollToSection('contact')}>
                      Get Started
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Award className="w-4 h-4" />
                Award-Winning IT Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Transform Your Business with Cutting-Edge Technology
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We deliver innovative IT solutions that drive growth, efficiency, and competitive advantage for businesses worldwide. Your success is our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg group" onClick={() => scrollToSection('contact')}>
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <Code className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                      <div className="absolute -top-2 -right-2">
                        <Sparkles className="w-6 h-6 text-yellow-500 animate-spin" />
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Innovation at Work</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Building the Future Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 6-step process ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">Step {step.step}</Badge>
                    <span className="text-sm text-muted-foreground">{step.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
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
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">{service.price}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="mt-4 p-0 h-auto text-primary w-full">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <service.icon className="w-6 h-6 text-primary" />
                          {service.title}
                        </DialogTitle>
                        <DialogDescription>
                          Detailed information about our {service.title.toLowerCase()} services
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{service.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-lg font-semibold">{service.price}</span>
                          <Button onClick={() => scrollToSection('contact')}>
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-muted/50">
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
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.position}</p>
                          <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
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
      <section className="py-20">
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
      <section className="py-20 bg-muted/50">
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
              <Badge key={index} variant="secondary" className="text-lg px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Portfolio</Badge>
            <h2 className="text-4xl font-bold mb-4">Success Stories & Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses transform and achieve their goals.
            </p>
          </div>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === 'web' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('web')}
            >
              Web Development
            </Button>
            <Button
              variant={activeFilter === 'mobile' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('mobile')}
            >
              Mobile Apps
            </Button>
            <Button
              variant={activeFilter === 'cloud' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('cloud')}
            >
              Cloud Solutions
            </Button>
            <Button
              variant={activeFilter === 'ai' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('ai')}
            >
              AI/ML
            </Button>
            <Button
              variant={activeFilter === 'iot' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('iot')}
            >
              IoT
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-12 h-12 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Client: {item.client}</span>
                      <span>{item.duration}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm font-medium text-green-600">{item.results}</p>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="mt-4 p-0 h-auto text-primary w-full">
                        View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>Complete case study details</DialogDescription>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Project Overview</h4>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1">
                            {item.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Project Details</h4>
                          <div className="space-y-2 text-sm">
                            <div><strong>Client:</strong> {item.client}</div>
                            <div><strong>Duration:</strong> {item.duration}</div>
                            <div><strong>Category:</strong> {item.category}</div>
                            <div><strong>Results:</strong> {item.results}</div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary' : ''}`} 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('contact')}
                  >
                    {plan.cta}
                  </Button>
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
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>Project: {testimonial.project}</div>
                      <div>Duration: {testimonial.duration}</div>
                      <div className="text-green-600 font-medium">{testimonial.results}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Trusted By</Badge>
            <h2 className="text-4xl font-bold mb-4">Companies That Trust Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud to work with leading companies across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Latest Blog</Badge>
            <h2 className="text-4xl font-bold mb-4">Insights & Updates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and technology news.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-t-lg flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <div>{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Recognition</Badge>
            <h2 className="text-4xl font-bold mb-4">Awards & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsCertifications.map((award, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-lg flex items-center justify-center">
                      <award.icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <Badge variant={award.type === 'Award' ? 'default' : 'secondary'}>
                      {award.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{award.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{award.description}</CardDescription>
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="ghost" className="w-full">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
              Download Certificate <Award className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Careers</Badge>
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{job.description}</CardDescription>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <strong>Experience:</strong> {job.experience}
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="mt-4 p-0 h-auto text-primary w-full">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{job.title}</DialogTitle>
                        <DialogDescription>Complete job description and requirements</DialogDescription>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Job Description</h4>
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          <h4 className="font-semibold mb-2">Requirements</h4>
                          <ul className="space-y-1 text-sm">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Job Details</h4>
                          <div className="space-y-2 text-sm mb-4">
                            <div><strong>Department:</strong> {job.department}</div>
                            <div><strong>Location:</strong> {job.location}</div>
                            <div><strong>Type:</strong> {job.type}</div>
                            <div><strong>Experience:</strong> {job.experience}</div>
                          </div>
                          <h4 className="font-semibold mb-2">Benefits</h4>
                          <ul className="space-y-1 text-sm">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-6">
                        <Button className="flex-1">Apply Now</Button>
                        <Button variant="outline">Share Job</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
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
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Resource Center Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Resources</Badge>
            <h2 className="text-4xl font-bold mb-4">Resource Center</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download free resources, guides, and whitepapers to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {resource.format}
                      </span>
                      <span className="flex items-center gap-1">
                        <Database className="w-4 h-4" />
                        {resource.fileSize}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {resource.downloadCount} downloads
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button className="w-full group">
                      <span>Download Free</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Browse All Resources <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Webinar/Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Events</Badge>
            <h2 className="text-4xl font-bold mb-4">Webinars & Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our upcoming webinars and events to learn from industry experts and network with peers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {webinarsEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </Badge>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{event.attendees} attendees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-muted-foreground" />
                        <span>{event.duration}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Speaker:</span> {event.speaker}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    {event.status === 'upcoming' ? (
                      <Button className="w-full group">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full group">
                        <span>Watch Recording</span>
                        <Play className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Events <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Program Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Partnership</Badge>
            <h2 className="text-4xl font-bold mb-4">Partner Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our partner program and grow your business with our comprehensive support and resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {partnerProgram.tiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.name === 'Gold Partner' ? 'border-primary shadow-lg scale-105' : ''}`}>
                {tier.name === 'Gold Partner' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{tier.commission} Commission</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm">
                      {tier.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      {tier.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full ${tier.name === 'Gold Partner' ? 'bg-primary' : ''}`} variant={tier.name === 'Gold Partner' ? 'default' : 'outline'}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Program Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerProgram.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Affiliate</Badge>
            <h2 className="text-4xl font-bold mb-4">Affiliate Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Earn generous commissions by promoting our services. Join thousands of successful affiliates today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Commission Structure</h3>
              <div className="space-y-4">
                {affiliateProgram.commissionStructure.map((tier, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{tier.tier}</h4>
                        <Badge variant="outline">{tier.commissionRate}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{tier.salesRange}</p>
                      {tier.bonus !== 'None' && (
                        <p className="text-sm font-medium text-green-600">{tier.bonus}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Join Us?</h3>
              <div className="space-y-3">
                {affiliateProgram.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-6">Affiliate Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {affiliateProgram.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-primary/10 rounded">
                    <Settings className="w-4 h-4 text-primary" />
                    <span className="text-xs">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              Start Earning Today <DollarSign className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Referral</Badge>
            <h2 className="text-4xl font-bold mb-4">Referral Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Refer friends and earn rewards. It's simple - share, refer, and earn!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {referralProgram.rewards.map((reward, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">{reward.type}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{reward.conditions}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                {referralProgram.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Program Stats</h3>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(referralProgram.stats).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-sm font-bold text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">
              Get Your Referral Link <Users2 className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Mobile App</Badge>
            <h2 className="text-4xl font-bold mb-4">Manage Projects On The Go</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download our mobile app and stay connected with your projects anytime, anywhere.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">App Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {mobileApp.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mt-8">Download Now</h3>
              <div className="flex gap-4">
                {mobileApp.platforms.map((platform, index) => (
                  <Card key={index} className="flex-1 cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-2">{platform.icon}</div>
                      <h4 className="font-semibold">{platform.name}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Version {platform.version}</div>
                        <div>{platform.size}</div>
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{platform.rating}</span>
                        </div>
                        <div>{platform.downloads} downloads</div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-3xl shadow-2xl p-4">
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                    <p className="text-lg font-semibold">Mobile App Preview</p>
                    <p className="text-sm text-muted-foreground">Available on iOS and Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Content Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Videos</Badge>
            <h2 className="text-4xl font-bold mb-4">Video Library</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our latest videos, tutorials, and company updates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoContent.map((video, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Play className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {video.category}
                  </Badge>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {video.likes}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Videos <Play className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">AI Assistant</Badge>
            <h2 className="text-4xl font-bold mb-4">Meet TechBot Pro</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI assistant is here to help you 24/7 with technical consultations, project estimates, and more.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{aiChatbot.personality.name}</h3>
                    <p className="text-muted-foreground">{aiChatbot.personality.role}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">AI Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {aiChatbot.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Quick Actions:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {aiChatbot.quickActions.map((action, index) => (
                      <Button key={index} variant="outline" size="sm" className="text-left justify-start">
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Languages Supported:</h4>
                  <div className="flex flex-wrap gap-2">
                    {aiChatbot.personality.languages.map((language, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 max-w-xs">
                      <p className="text-sm">👋 Hello! I'm TechBot Pro. How can I assist you with your technology needs today?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-xs">
                      <p className="text-sm">I need a quote for a web development project</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 max-w-xs">
                      <p className="text-sm">I'd be happy to help! Could you tell me more about your project requirements and timeline?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex gap-2">
                    <Input placeholder="Type your message..." className="flex-1" />
                    <Button size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      💬 Start Chat
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      🎤 Voice Chat
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      📞 Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Office Tour Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Virtual Tour</Badge>
            <h2 className="text-4xl font-bold mb-4">Explore Our Global Offices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art facilities and meet our team around the world.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {virtualOfficeTour.interactiveElements.map((element, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2">
                  {element}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {virtualOfficeTour.locations.map((location, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-t-lg flex items-center justify-center">
                  <Building className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  <CardDescription>{location.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{location.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Est. {location.established}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Features:</h4>
                      <div className="space-y-1">
                        {location.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 group">
                    <span>Take Tour</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Project Dashboard Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Live Projects</Badge>
            <h2 className="text-4xl font-bold mb-4">Real-time Project Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor our live projects in real-time. See progress, metrics, and team activities as they happen.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Projects</p>
                    <p className="text-2xl font-bold">{projectDashboard.stats.totalProjects}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                    <p className="text-2xl font-bold">{projectDashboard.stats.activeProjects}</p>
                  </div>
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold">{projectDashboard.stats.completedProjects}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">{projectDashboard.stats.totalRevenue}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {projectDashboard.liveProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.client} • {project.id}</p>
                    </div>
                    <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Team:</span>
                          <span className="font-medium ml-1">{project.team} members</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Budget:</span>
                          <span className="font-medium ml-1">{project.budget}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Deadline:</span>
                          <span className="font-medium ml-1">{project.deadline}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Satisfaction:</span>
                          <span className="font-medium ml-1 text-green-600">{projectDashboard.stats.clientSatisfaction}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Live Metrics</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{project.liveMetrics.commits}</div>
                          <div className="text-xs text-muted-foreground">Commits</div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{project.liveMetrics.issues}</div>
                          <div className="text-xs text-muted-foreground">Issues</div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{project.liveMetrics.pullRequests}</div>
                          <div className="text-xs text-muted-foreground">Pull Requests</div>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{project.liveMetrics.deployments}</div>
                          <div className="text-xs text-muted-foreground">Deployments</div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Elements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Interactive</Badge>
            <h2 className="text-4xl font-bold mb-4">Interactive Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Try our interactive tools and assessments to get insights about your business.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technology Readiness Quiz */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  {interactiveElements.quiz.title}
                </CardTitle>
                <CardDescription>{interactiveElements.quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interactiveElements.quiz.questions.map((question, qIndex) => (
                    <div key={qIndex} className="space-y-2">
                      <h4 className="font-medium text-sm">{question.question}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {question.options.map((option, oIndex) => (
                          <Button
                            key={oIndex}
                            variant="outline"
                            size="sm"
                            className="text-xs h-auto p-2 text-left justify-start"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button className="w-full mt-4">
                    Get Assessment <BarChart3 className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Project Cost Calculator */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  {interactiveElements.calculator.title}
                </CardTitle>
                <CardDescription>{interactiveElements.calculator.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interactiveElements.calculator.factors.map((factor, fIndex) => (
                    <div key={fIndex} className="space-y-2">
                      <h4 className="font-medium text-sm">{factor.name}</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {factor.options.map((option, oIndex) => (
                          <Button
                            key={oIndex}
                            variant="outline"
                            size="sm"
                            className="text-xs h-auto p-2 text-left justify-between"
                          >
                            <span>{option.name}</span>
                            <span className="text-muted-foreground">×{option.multiplier}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Estimated Cost:</span>
                      <span className="text-2xl font-bold text-primary">
                        ${interactiveElements.calculator.basePrice.toLocaleString()}
                      </span>
                    </div>
                    <Button className="w-full">
                      Get Detailed Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Office Tour Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Virtual Tour</Badge>
            <h2 className="text-4xl font-bold mb-4">Explore Our Office Virtually</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a 360° virtual tour of our modern office space and see where innovation happens.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Office Areas</h3>
              <div className="space-y-4">
                {virtualOfficeTour.areas.map((area, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{area.name}</CardTitle>
                        <Badge variant="outline">Area {index + 1}</Badge>
                      </div>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {area.hotspots.map((hotspot, hIndex) => (
                          <div key={hIndex} className="flex items-center gap-2 p-2 bg-muted/50 rounded text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{hotspot.title}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full mt-4 group">
                        Explore Area <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center relative">
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">360° Virtual Tour</h3>
                    <p className="text-white/80 mb-4">Click and drag to explore</p>
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      Start Tour <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  {/* Interactive hotspots */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer"></div>
                  <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer"></div>
                  
                  {/* Navigation controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                      ←
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                      →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Assistant Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">AI Assistant</Badge>
            <h2 className="text-4xl font-bold mb-4">Meet {aiChatbot.name}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered assistant is here to help you 24/7 with technical questions, project estimates, and more.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{aiChatbot.name}</h3>
                  <p className="text-muted-foreground">Always here to help!</p>
                  
                  {/* Status indicators */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Capabilities</h3>
                <div className="grid grid-cols-1 gap-3">
                  {aiChatbot.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {aiChatbot.quickActions.map((action, index) => (
                    <Button key={index} variant="outline" className="h-auto p-3 text-left justify-start">
                      <span className="text-sm">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white">
                <h4 className="font-bold mb-2">Try {aiChatbot.name} Now!</h4>
                <p className="text-sm mb-4 opacity-90">
                  Experience the future of customer service with our AI assistant.
                </p>
                <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  Start Chatting <MessageSquare className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Project Showcase Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Live Projects</Badge>
            <h2 className="text-4xl font-bold mb-4">Real-time Project Showcase</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our projects progress in real-time. See what we're working on right now!
            </p>
          </div>
          
          <div className="space-y-6">
            {liveProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-muted-foreground">Client: {project.client}</p>
                        </div>
                        <Badge variant={project.status === 'Testing' ? 'secondary' : 'default'}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{project.team} team members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Due: {project.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span>{project.budget}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{project.progress}% complete</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, tIndex) => (
                            <Badge key={tIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Live Updates:</h4>
                        <div className="space-y-2">
                          {project.liveUpdates.map((update, uIndex) => (
                            <div key={uIndex} className="flex items-center gap-3 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-muted-foreground">{update.time}</span>
                              <span>{update.update}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Progress</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Completion</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full">
                          View Details <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                        <Button className="w-full">
                          Contact Project Manager <MessageSquare className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold mb-4">Company Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow our journey from startup to industry leader. Click on milestones to learn more.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {companyTimeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8">
                    <Card className={`ml-auto ${index % 2 === 0 ? 'mr-8' : ''} ${item.milestone ? 'border-primary shadow-lg' : ''}`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <div className="text-sm text-muted-foreground">{item.year}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                        {item.milestone && (
                          <Badge className="mt-3 bg-primary">Major Milestone</Badge>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white dark:border-gray-900 z-10">
                    {index + 1}
                  </div>
                  
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Engagement</Badge>
            <h2 className="text-4xl font-bold mb-4">Unlock Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our website, learn about our services, and unlock exclusive achievements!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Progress */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>{gamification.level}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{gamification.points} points</span>
                      <span>{gamification.pointsToNextLevel} to next level</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                        style={{ width: `${(gamification.points / (gamification.points + gamification.pointsToNextLevel)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Next level: {gamification.nextLevel}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Achievements */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Achievements to Unlock</CardTitle>
                <CardDescription>Complete activities to earn achievements and points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {gamification.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{achievement.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1">
                            <div 
                              className="bg-primary h-1 rounded-full"
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {achievement.unlocked ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <Lock className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Innovation</Badge>
            <h2 className="text-4xl font-bold mb-4">Innovation Lab</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the cutting-edge technologies we're researching and developing for the future.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Current Research Projects</h3>
              <div className="space-y-4">
                {innovationLab.projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge variant={project.impact === 'Revolutionary' ? 'default' : 'secondary'}>
                          {project.impact} Impact
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Status: {project.status}</span>
                        <span>Team: {project.team} members</span>
                        <span>Timeline: {project.timeline}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Technologies We're Exploring</h3>
              <div className="grid grid-cols-2 gap-3">
                {innovationLab.technologies.map((tech, index) => (
                  <div key={index} className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white">
                <h4 className="font-bold mb-2">Join Our Innovation Team</h4>
                <p className="text-sm mb-4 opacity-90">
                  Be part of the future. Work on cutting-edge technologies that will shape tomorrow.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  Explore Opportunities <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Global Impact</Badge>
            <h2 className="text-4xl font-bold mb-4">Customer Success Map</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See our global footprint and success stories from around the world.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* World Map Visualization */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Global Presence</CardTitle>
                <CardDescription>Click on locations to view success stories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-lg overflow-hidden">
                  {/* Simplified world map with interactive points */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Globe className="w-16 h-16 mx-auto mb-2" />
                      <p>Interactive World Map</p>
                      <p className="text-sm">Click on highlighted locations</p>
                    </div>
                  </div>
                  
                  {/* Location markers */}
                  {customerSuccessMap.locations.map((location, index) => (
                    <div 
                      key={index}
                      className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer hover:scale-125 transition-transform"
                      style={{ 
                        left: `${location.coordinates.x}%`, 
                        top: `${location.coordinates.y}%` 
                      }}
                      title={`${location.city}, ${location.country}`}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                        {location.city}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Global Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{customerSuccessMap.stats.totalCountries}</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{customerSuccessMap.stats.totalClients}+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{customerSuccessMap.stats.totalSuccessStories}</div>
                    <div className="text-sm text-muted-foreground">Success Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{customerSuccessMap.stats.satisfactionRate}</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Featured Stories */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Featured Success Stories</h3>
              {customerSuccessMap.locations.slice(0, 3).map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{location.featuredStory.title}</CardTitle>
                    <CardDescription>
                      {location.client} • {location.city}, {location.country}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-green-600">
                        {location.featuredStory.result}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-muted-foreground">Available 24/7</p>
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
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500"
                  onClick={() => window.open('https://wa.me/15551234567', '_blank')}
                >
                  <MessageCircleWhatsApp className="w-4 h-4" />
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Company Name" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
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
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
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
            <Button 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => {
                if (email) {
                  alert('Thank you for subscribing!');
                  setEmail('');
                }
              }}
            >
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
          size="icon"
          className="fixed bottom-8 right-8 z-50 shadow-lg"
        >
          <ChevronUp className="w-4 h-4" />
        </Button>
      )}

      {/* Live Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <Sheet open={isChatOpen} onOpenChange={setIsChatOpen}>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px] sm:w-[500px]">
            <SheetHeader>
              <SheetTitle>Live Chat Support</SheetTitle>
              <SheetDescription>
                Our support team is here to help you 24/7
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full">
              <div className="flex-1 space-y-4 py-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">👋 Hello! How can I help you today?</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." />
                  <Button>Send</Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}