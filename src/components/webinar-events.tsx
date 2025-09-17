'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Play, 
  ExternalLink, 
  Star,
  Search,
  Filter,
  CheckCircle,
  Video,
  Mic,
  Monitor,
  Globe,
  Building,
  TrendingUp,
  Award,
  BookOpen,
  MessageSquare,
  Download,
  Bell,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  type: 'webinar' | 'workshop' | 'conference' | 'meetup' | 'training'
  category: string
  date: string
  time: string
  duration: string
  timezone: string
  mode: 'online' | 'offline' | 'hybrid'
  location?: string
  platform?: string
  speakers: Speaker[]
  maxAttendees?: number
  registeredAttendees: number
  price: number
  currency: string
  featured: boolean
  tags: string[]
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  prerequisites?: string[]
  learningObjectives: string[]
  materials?: string[]
  recordingAvailable: boolean
  registrationDeadline: string
  status: 'upcoming' | 'live' | 'completed' | 'cancelled'
  imageUrl?: string
  organizer: string
  contactEmail: string
}

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  avatar?: string
  expertise: string[]
  social?: {
    linkedin?: string
    twitter?: string
    website?: string
  }
}

const events: Event[] = [
  {
    id: '1',
    title: 'AI Revolution: Transforming Business in 2024',
    description: 'Join industry experts as they discuss how artificial intelligence is reshaping business operations and strategies for the coming year.',
    type: 'webinar',
    category: 'Artificial Intelligence',
    date: '2024-02-15',
    time: '14:00',
    duration: '2 hours',
    timezone: 'EST',
    mode: 'online',
    platform: 'Zoom',
    speakers: [
      {
        id: 's1',
        name: 'Dr. Sarah Johnson',
        title: 'AI Research Director',
        company: 'TechCorp Inc.',
        bio: 'Leading AI researcher with 15+ years of experience in machine learning and business intelligence.',
        expertise: ['AI/ML', 'Business Intelligence', 'Data Science'],
        social: { linkedin: '#', twitter: '#' }
      },
      {
        id: 's2',
        name: 'Michael Chen',
        title: 'CTO',
        company: 'Innovation Labs',
        bio: 'Technology leader specializing in AI implementation and digital transformation.',
        expertise: ['AI Implementation', 'Digital Transformation', 'Technology Strategy'],
        social: { linkedin: '#', website: '#' }
      }
    ],
    maxAttendees: 500,
    registeredAttendees: 342,
    price: 0,
    currency: 'USD',
    featured: true,
    tags: ['AI', 'Machine Learning', 'Business Strategy', 'Innovation'],
    difficulty: 'Intermediate',
    prerequisites: ['Basic understanding of AI concepts'],
    learningObjectives: [
      'Understand current AI trends in business',
      'Learn practical AI implementation strategies',
      'Discover AI tools for business optimization',
      'Network with AI professionals'
    ],
    materials: ['Presentation slides', 'Resource guide', 'AI tools list'],
    recordingAvailable: true,
    registrationDeadline: '2024-02-14',
    status: 'upcoming',
    organizer: 'Dream X Diamond',
    contactEmail: 'events@dreamxdiamond.com'
  },
  {
    id: '2',
    title: 'Cloud Security Masterclass',
    description: 'Comprehensive workshop on cloud security best practices, threat detection, and compliance requirements for modern cloud infrastructure.',
    type: 'workshop',
    category: 'Cybersecurity',
    date: '2024-02-20',
    time: '10:00',
    duration: '4 hours',
    timezone: 'EST',
    mode: 'online',
    platform: 'Microsoft Teams',
    speakers: [
      {
        id: 's3',
        name: 'Emily Rodriguez',
        title: 'Security Architect',
        company: 'SecureCloud Solutions',
        bio: 'Cloud security expert with extensive experience in securing enterprise cloud environments.',
        expertise: ['Cloud Security', 'Compliance', 'Risk Management'],
        social: { linkedin: '#', twitter: '#' }
      }
    ],
    maxAttendees: 100,
    registeredAttendees: 87,
    price: 99,
    currency: 'USD',
    featured: true,
    tags: ['Cloud Security', 'Compliance', 'Best Practices', 'Workshop'],
    difficulty: 'Advanced',
    prerequisites: ['Experience with cloud platforms', 'Basic security knowledge'],
    learningObjectives: [
      'Master cloud security fundamentals',
      'Implement advanced security measures',
      'Understand compliance requirements',
      'Hands-on security configuration'
    ],
    materials: ['Workshop manual', 'Security checklist', 'Configuration templates'],
    recordingAvailable: false,
    registrationDeadline: '2024-02-18',
    status: 'upcoming',
    organizer: 'Dream X Diamond',
    contactEmail: 'events@dreamxdiamond.com'
  },
  {
    id: '3',
    title: 'DevOps Culture Summit 2024',
    description: 'Annual summit bringing together DevOps professionals to share experiences, best practices, and emerging trends in DevOps culture.',
    type: 'conference',
    category: 'DevOps',
    date: '2024-03-10',
    time: '09:00',
    duration: '8 hours',
    timezone: 'EST',
    mode: 'hybrid',
    location: 'Tech Convention Center, San Francisco',
    platform: 'Event Platform',
    speakers: [
      {
        id: 's4',
        name: 'David Park',
        title: 'DevOps Lead',
        company: 'Global Tech Corp',
        bio: 'DevOps advocate with experience in building high-performing engineering teams.',
        expertise: ['DevOps', 'Team Culture', 'Automation'],
        social: { linkedin: '#', twitter: '#', website: '#' }
      },
      {
        id: 's5',
        name: 'Lisa Wang',
        title: 'Engineering Manager',
        company: 'StartupHub',
        bio: 'Engineering leader focused on scaling DevOps practices in fast-growing startups.',
        expertise: ['Scaling DevOps', 'Startups', 'Team Building'],
        social: { linkedin: '#', twitter: '#' }
      }
    ],
    maxAttendees: 1000,
    registeredAttendees: 756,
    price: 299,
    currency: 'USD',
    featured: true,
    tags: ['DevOps', 'Conference', 'Culture', 'Networking'],
    difficulty: 'Intermediate',
    learningObjectives: [
      'Learn from industry leaders',
      'Network with DevOps professionals',
      'Discover latest DevOps trends',
      'Share experiences and best practices'
    ],
    materials: ['Conference agenda', 'Speaker presentations', 'Networking guide'],
    recordingAvailable: true,
    registrationDeadline: '2024-03-08',
    status: 'upcoming',
    organizer: 'Dream X Diamond',
    contactEmail: 'events@dreamxdiamond.com'
  },
  {
    id: '4',
    title: 'React Performance Optimization',
    description: 'Deep dive into React performance optimization techniques, tools, and best practices for building fast, efficient applications.',
    type: 'webinar',
    category: 'Web Development',
    date: '2024-01-25',
    time: '15:00',
    duration: '1.5 hours',
    timezone: 'EST',
    mode: 'online',
    platform: 'YouTube Live',
    speakers: [
      {
        id: 's6',
        name: 'Alex Thompson',
        title: 'Senior Frontend Developer',
        company: 'Dream X Diamond',
        bio: 'React specialist with passion for performance optimization and user experience.',
        expertise: ['React', 'Performance', 'Frontend Architecture'],
        social: { linkedin: '#', github: '#' }
      }
    ],
    maxAttendees: 1000,
    registeredAttendees: 523,
    price: 0,
    currency: 'USD',
    featured: false,
    tags: ['React', 'Performance', 'Web Development', 'Frontend'],
    difficulty: 'Intermediate',
    prerequisites: ['React development experience'],
    learningObjectives: [
      'Identify performance bottlenecks',
      'Implement optimization techniques',
      'Use performance monitoring tools',
      'Build faster React applications'
    ],
    materials: ['Code examples', 'Performance checklist', 'Tool recommendations'],
    recordingAvailable: true,
    registrationDeadline: '2024-01-24',
    status: 'completed',
    organizer: 'Dream X Diamond',
    contactEmail: 'events@dreamxdiamond.com'
  },
  {
    id: '5',
    title: 'Data Science for Business Leaders',
    description: 'Executive workshop designed to help business leaders understand data science concepts and make data-driven decisions.',
    type: 'training',
    category: 'Data Science',
    date: '2024-02-05',
    time: '13:00',
    duration: '3 hours',
    timezone: 'EST',
    mode: 'online',
    platform: 'Zoom',
    speakers: [
      {
        id: 's7',
        name: 'Dr. James Wilson',
        title: 'Data Science Consultant',
        company: 'Data Insights Inc.',
        bio: 'Data science expert with experience helping businesses leverage data for strategic decisions.',
        expertise: ['Data Science', 'Business Intelligence', 'Strategy'],
        social: { linkedin: '#', website: '#' }
      }
    ],
    maxAttendees: 50,
    registeredAttendees: 42,
    price: 199,
    currency: 'USD',
    featured: false,
    tags: ['Data Science', 'Business', 'Leadership', 'Training'],
    difficulty: 'Beginner',
    prerequisites: ['Business leadership experience'],
    learningObjectives: [
      'Understand data science fundamentals',
      'Learn to interpret data insights',
      'Make data-driven decisions',
      'Lead data science initiatives'
    ],
    materials: ['Training manual', 'Case studies', 'Decision frameworks'],
    recordingAvailable: false,
    registrationDeadline: '2024-02-03',
    status: 'completed',
    organizer: 'Dream X Diamond',
    contactEmail: 'events@dreamxdiamond.com'
  },
  {
    id: '6',
    title: 'Startup Tech Meetup',
    description: 'Monthly meetup for startup founders, developers, and tech enthusiasts to network, share ideas, and learn from each other.',
    type: 'meetup',
    category: 'Networking',
    date: '2024-02-08',
    time: '18:00',
    duration: '3 hours',
    timezone: 'EST',
    mode: 'offline',
    location: 'Innovation Hub, Downtown',
    speakers: [
      {
        id: 's8',
        name: 'Maria Garcia',
        title: 'Startup Founder',
        company: 'TechStartup Inc.',
        bio: 'Serial entrepreneur and startup mentor passionate about helping founders succeed.',
        expertise: ['Startups', 'Entrepreneurship', 'Mentoring'],
        social: { linkedin: '#', twitter: '#' }
      }
    ],
    maxAttendees: 100,
    registeredAttendees: 78,
    price: 0,
    currency: 'USD',
    featured: false,
    tags: ['Startup', 'Networking', 'Meetup', 'Community'],
    difficulty: 'Beginner',
    learningObjectives: [
      'Network with tech professionals',
      'Share startup experiences',
      'Learn from industry experts',
      'Build professional relationships'
    ],
    recordingAvailable: false,
    registrationDeadline: '2024-02-07',
    status: 'completed',
    organizer: 'Dream X Diamond',
    contactEmail: 'events@dreamxdiamond.com'
  }
]

const categories = ['All', 'Artificial Intelligence', 'Cybersecurity', 'DevOps', 'Web Development', 'Data Science', 'Networking']
const types = ['All', 'webinar', 'workshop', 'conference', 'meetup', 'training']
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
const modes = ['All', 'online', 'offline', 'hybrid']

const getEventTypeIcon = (type: string) => {
  switch (type) {
    case 'webinar': return Video
    case 'workshop': return BookOpen
    case 'conference': return Users
    case 'meetup': return MessageSquare
    case 'training': return Monitor
    default: return Calendar
  }
}

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'webinar': return 'from-blue-500 to-blue-600'
    case 'workshop': return 'from-green-500 to-green-600'
    case 'conference': return 'from-purple-500 to-purple-600'
    case 'meetup': return 'from-orange-500 to-orange-600'
    case 'training': return 'from-red-500 to-red-600'
    default: return 'from-gray-500 to-gray-600'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-800'
    case 'live': return 'bg-red-100 text-red-800'
    case 'completed': return 'bg-green-100 text-green-800'
    case 'cancelled': return 'bg-gray-100 text-gray-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export function WebinarEvents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedMode, setSelectedMode] = useState('All')
  const [sortBy, setSortBy] = useState('date')
  const [activeTab, setActiveTab] = useState('upcoming')

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    const matchesType = selectedType === 'All' || event.type === selectedType
    const matchesDifficulty = selectedDifficulty === 'All' || event.difficulty === selectedDifficulty
    const matchesMode = selectedMode === 'All' || event.mode === selectedMode
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty && matchesMode
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'popularity':
        return b.registeredAttendees - a.registeredAttendees
      case 'price':
        return a.price - b.price
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const upcomingEvents = sortedEvents.filter(event => event.status === 'upcoming')
  const liveEvents = sortedEvents.filter(event => event.status === 'live')
  const completedEvents = sortedEvents.filter(event => event.status === 'completed')
  const featuredEvents = events.filter(event => event.featured)

  const handleRegister = (eventId: string) => {
    console.log(`Registering for event: ${eventId}`)
    // In real app, this would handle registration
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Events & Webinars
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Upcoming Events & Webinars</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our expert-led events to learn about the latest technology trends, best practices, and network with industry professionals.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Events Yearly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Expert Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => {
              const IconComponent = getEventTypeIcon(event.type)
              return (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getEventTypeColor(event.type)} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{event.organizer}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{event.category}</Badge>
                        <Badge variant="secondary">{event.type}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time} ({event.duration})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.mode === 'online' ? 'Online' : event.mode === 'offline' ? event.location : 'Hybrid'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.registeredAttendees}/{event.maxAttendees} registered</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">
                          {event.price === 0 ? 'Free' : `${event.currency} ${event.price}`}
                        </div>
                        <Button 
                          onClick={() => handleRegister(event.id)}
                          disabled={event.status === 'completed' || event.registeredAttendees >= (event.maxAttendees || 0)}
                        >
                          {event.status === 'completed' ? 'View Recording' : 'Register Now'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search events..."
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

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {types.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedMode} onValueChange={setSelectedMode}>
              <SelectTrigger>
                <SelectValue placeholder="Mode" />
              </SelectTrigger>
              <SelectContent>
                {modes.map(mode => (
                  <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {sortedEvents.length} events found
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedType('All')
                setSelectedDifficulty('All')
                setSelectedMode('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Event Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming ({upcomingEvents.length})</TabsTrigger>
            <TabsTrigger value="live">Live ({liveEvents.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedEvents.length})</TabsTrigger>
            <TabsTrigger value="all">All ({sortedEvents.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => {
                const IconComponent = getEventTypeIcon(event.type)
                return (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getEventTypeColor(event.type)} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.organizer}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">{event.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                        <Badge className={`${getStatusColor(event.status)} text-xs`}>{event.status}</Badge>
                      </div>
                      
                      <div className="space-y-1 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{event.time} ({event.duration})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{event.registeredAttendees}/{event.maxAttendees} registered</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="font-bold">
                          {event.price === 0 ? 'Free' : `${event.currency} ${event.price}`}
                        </div>
                        <Button 
                          onClick={() => handleRegister(event.id)}
                          size="sm"
                          disabled={event.registeredAttendees >= (event.maxAttendees || 0)}
                        >
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="live" className="mt-6">
            {liveEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveEvents.map((event) => {
                  const IconComponent = getEventTypeIcon(event.type)
                  return (
                    <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 border-red-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${getEventTypeColor(event.type)} rounded-lg flex items-center justify-center animate-pulse`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold line-clamp-2">{event.title}</h4>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-muted-foreground">{event.organizer}</p>
                              <Badge className="bg-red-100 text-red-800 text-xs animate-pulse">LIVE</Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          <Badge variant="outline" className="text-xs">{event.category}</Badge>
                          <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                        </div>
                        
                        <div className="space-y-1 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{event.time} ({event.duration})</span>
                          </div>
                        </div>
                        
                        <Button className="w-full" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Join Now
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No live events at the moment.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedEvents.map((event) => {
                const IconComponent = getEventTypeIcon(event.type)
                return (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getEventTypeColor(event.type)} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.organizer}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">{event.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                        <Badge className={`${getStatusColor(event.status)} text-xs`}>{event.status}</Badge>
                      </div>
                      
                      <div className="space-y-1 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{event.registeredAttendees} attended</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        size="sm"
                        disabled={!event.recordingAvailable}
                      >
                        {event.recordingAvailable ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Watch Recording
                          </>
                        ) : 'Recording Unavailable'}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedEvents.map((event) => {
                const IconComponent = getEventTypeIcon(event.type)
                return (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getEventTypeColor(event.type)} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.organizer}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">{event.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{event.type}</Badge>
                        <Badge className={`${getStatusColor(event.status)} text-xs`}>{event.status}</Badge>
                      </div>
                      
                      <div className="space-y-1 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{event.time} ({event.duration})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{event.registeredAttendees}{event.maxAttendees ? `/${event.maxAttendees}` : ''} registered</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="font-bold">
                          {event.price === 0 ? 'Free' : `${event.currency} ${event.price}`}
                        </div>
                        {event.status === 'completed' ? (
                          <Button 
                            variant="outline" 
                            size="sm"
                            disabled={!event.recordingAvailable}
                          >
                            {event.recordingAvailable ? 'Watch Recording' : 'Recording Unavailable'}
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => handleRegister(event.id)}
                            size="sm"
                            disabled={event.registeredAttendees >= (event.maxAttendees || 0)}
                          >
                            Register
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to get notified about upcoming events and webinars
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}