'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  ExternalLink, 
  Calendar, 
  Eye, 
  Star,
  Search,
  Filter,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
  Headphones,
  Image,
  Code,
  Database,
  Shield,
  Cloud,
  Smartphone,
  Globe,
  Cpu,
  BarChart3,
  MessageSquare,
  Settings,
  Zap,
  Target
} from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  type: 'ebook' | 'whitepaper' | 'guide' | 'template' | 'video' | 'webinar' | 'podcast' | 'infographic' | 'checklist' | 'report'
  category: string
  fileSize: string
  format: string
  downloadCount: number
  rating: number
  featured: boolean
  tags: string[]
  publishedDate: string
  lastUpdated: string
  author: string
  downloadUrl: string
  previewUrl?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  duration?: string
  language: string
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Complete Guide to Digital Transformation 2024',
    description: 'Comprehensive guide covering all aspects of digital transformation for modern businesses.',
    type: 'ebook',
    category: 'Digital Transformation',
    fileSize: '4.2 MB',
    format: 'PDF',
    downloadCount: 2540,
    rating: 4.8,
    featured: true,
    tags: ['Digital Transformation', 'Strategy', 'Innovation'],
    publishedDate: '2024-01-15',
    lastUpdated: '2024-01-15',
    author: 'Dr. Sarah Johnson',
    downloadUrl: '/resources/digital-transformation-guide.pdf',
    previewUrl: '/resources/digital-transformation-preview.pdf',
    difficulty: 'Intermediate',
    language: 'English'
  },
  {
    id: '2',
    title: 'Cybersecurity Best Practices Whitepaper',
    description: 'Essential cybersecurity measures and best practices for protecting your business in 2024.',
    type: 'whitepaper',
    category: 'Cybersecurity',
    fileSize: '2.8 MB',
    format: 'PDF',
    downloadCount: 1890,
    rating: 4.9,
    featured: true,
    tags: ['Cybersecurity', 'Security', 'Best Practices'],
    publishedDate: '2024-01-10',
    lastUpdated: '2024-01-12',
    author: 'Michael Chen',
    downloadUrl: '/resources/cybersecurity-whitepaper.pdf',
    difficulty: 'Advanced',
    language: 'English'
  },
  {
    id: '3',
    title: 'Cloud Migration Strategy Template',
    description: 'Ready-to-use template for planning and executing your cloud migration strategy.',
    type: 'template',
    category: 'Cloud Computing',
    fileSize: '1.5 MB',
    format: 'DOCX',
    downloadCount: 3420,
    rating: 4.7,
    featured: false,
    tags: ['Cloud', 'Migration', 'Template', 'Strategy'],
    publishedDate: '2024-01-08',
    lastUpdated: '2024-01-20',
    author: 'Emily Rodriguez',
    downloadUrl: '/resources/cloud-migration-template.docx',
    difficulty: 'Beginner',
    language: 'English'
  },
  {
    id: '4',
    title: 'Web Development Masterclass Video Series',
    description: 'Complete video series covering modern web development techniques and best practices.',
    type: 'video',
    category: 'Web Development',
    fileSize: '850 MB',
    format: 'MP4',
    downloadCount: 5670,
    rating: 4.9,
    featured: true,
    tags: ['Web Development', 'JavaScript', 'React', 'Tutorial'],
    publishedDate: '2024-01-05',
    lastUpdated: '2024-01-18',
    author: 'Alex Thompson',
    downloadUrl: '/resources/web-development-masterclass.mp4',
    previewUrl: '/resources/web-development-preview.mp4',
    duration: '3 hours 45 minutes',
    language: 'English'
  },
  {
    id: '5',
    title: 'AI Implementation Checklist',
    description: 'Comprehensive checklist for successfully implementing AI solutions in your organization.',
    type: 'checklist',
    category: 'Artificial Intelligence',
    fileSize: '450 KB',
    format: 'PDF',
    downloadCount: 1280,
    rating: 4.6,
    featured: false,
    tags: ['AI', 'Implementation', 'Checklist', 'Strategy'],
    publishedDate: '2024-01-03',
    lastUpdated: '2024-01-15',
    author: 'Dr. Lisa Wang',
    downloadUrl: '/resources/ai-implementation-checklist.pdf',
    difficulty: 'Intermediate',
    language: 'English'
  },
  {
    id: '6',
    title: 'State of Technology 2024 Report',
    description: 'Annual report on technology trends, insights, and predictions for the coming year.',
    type: 'report',
    category: 'Technology Trends',
    fileSize: '8.5 MB',
    format: 'PDF',
    downloadCount: 4320,
    rating: 4.8,
    featured: true,
    tags: ['Technology', 'Trends', 'Report', '2024'],
    publishedDate: '2024-01-01',
    lastUpdated: '2024-01-20',
    author: 'Research Team',
    downloadUrl: '/resources/tech-trends-2024-report.pdf',
    previewUrl: '/resources/tech-trends-2024-preview.pdf',
    difficulty: 'Beginner',
    language: 'English'
  },
  {
    id: '7',
    title: 'DevOps Culture Webinar',
    description: 'Recorded webinar on building and fostering a successful DevOps culture in your organization.',
    type: 'webinar',
    category: 'DevOps',
    fileSize: '620 MB',
    format: 'MP4',
    downloadCount: 2150,
    rating: 4.7,
    featured: false,
    tags: ['DevOps', 'Culture', 'Webinar', 'Best Practices'],
    publishedDate: '2023-12-28',
    lastUpdated: '2023-12-28',
    author: 'David Park',
    downloadUrl: '/resources/devops-culture-webinar.mp4',
    duration: '1 hour 30 minutes',
    language: 'English'
  },
  {
    id: '8',
    title: 'Mobile App Development Infographic',
    description: 'Visual guide to mobile app development process, best practices, and key considerations.',
    type: 'infographic',
    category: 'Mobile Development',
    fileSize: '2.1 MB',
    format: 'PNG',
    downloadCount: 3450,
    rating: 4.5,
    featured: false,
    tags: ['Mobile', 'Development', 'Infographic', 'App'],
    publishedDate: '2023-12-25',
    lastUpdated: '2024-01-10',
    author: 'Design Team',
    downloadUrl: '/resources/mobile-app-infographic.png',
    difficulty: 'Beginner',
    language: 'English'
  }
]

const categories = ['All', 'Digital Transformation', 'Cybersecurity', 'Cloud Computing', 'Web Development', 'Artificial Intelligence', 'Technology Trends', 'DevOps', 'Mobile Development']
const types = ['All', 'ebook', 'whitepaper', 'guide', 'template', 'video', 'webinar', 'podcast', 'infographic', 'checklist', 'report']
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
const languages = ['All', 'English', 'Spanish', 'French', 'German']

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'ebook': return BookOpen
    case 'whitepaper': return FileText
    case 'video': return Video
    case 'webinar': return Play
    case 'podcast': return Headphones
    case 'infographic': return Image
    case 'template': return FileText
    case 'checklist': return CheckCircle
    case 'report': return BarChart3
    default: return FileText
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'ebook': return 'from-blue-500 to-blue-600'
    case 'whitepaper': return 'from-purple-500 to-purple-600'
    case 'video': return 'from-red-500 to-red-600'
    case 'webinar': return 'from-green-500 to-green-600'
    case 'podcast': return 'from-orange-500 to-orange-600'
    case 'infographic': return 'from-pink-500 to-pink-600'
    case 'template': return 'from-indigo-500 to-indigo-600'
    case 'checklist': return 'from-teal-500 to-teal-600'
    case 'report': return 'from-cyan-500 to-cyan-600'
    default: return 'from-gray-500 to-gray-600'
  }
}

export function ResourceCenter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [activeTab, setActiveTab] = useState('all')

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    const matchesType = selectedType === 'All' || resource.type === selectedType
    const matchesDifficulty = selectedDifficulty === 'All' || resource.difficulty === selectedDifficulty
    const matchesLanguage = selectedLanguage === 'All' || resource.language === selectedLanguage
    
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty && matchesLanguage
  })

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloadCount - a.downloadCount
      case 'rating':
        return b.rating - a.rating
      case 'recent':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const featuredResources = resources.filter(resource => resource.featured)
  const popularResources = resources.sort((a, b) => b.downloadCount - a.downloadCount).slice(0, 6)

  const handleDownload = (resource: Resource) => {
    // Simulate download
    console.log(`Downloading ${resource.title}`)
    // In real app, this would trigger actual download
    window.open(resource.downloadUrl, '_blank')
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Resource Center
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Free Resources & Downloads</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive library of guides, templates, whitepapers, and tools to accelerate your business growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Resources Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type)
              return (
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{resource.author}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-3">{resource.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{resource.category}</Badge>
                        <Badge variant="secondary">{resource.type}</Badge>
                        {resource.difficulty && (
                          <Badge variant="outline">{resource.difficulty}</Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{resource.downloadCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(resource.publishedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleDownload(resource)}
                          className="flex-1"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        {resource.previewUrl && (
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-background rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search resources..."
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

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {sortedResources.length} resources found
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedType('All')
                setSelectedDifficulty('All')
                setSelectedLanguage('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Resource Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedResources.map((resource) => {
                const IconComponent = getTypeIcon(resource.type)
                return (
                  <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.author}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                        {resource.difficulty && (
                          <Badge variant="outline" className="text-xs">{resource.difficulty}</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span>{resource.downloadCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                        <span>{resource.fileSize}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleDownload(resource)}
                          className="flex-1"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        {resource.previewUrl && (
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularResources.map((resource) => {
                const IconComponent = getTypeIcon(resource.type)
                return (
                  <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.author}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span>{resource.downloadCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                        <span>{resource.fileSize}</span>
                      </div>
                      
                      <Button 
                        onClick={() => handleDownload(resource)}
                        className="w-full"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
                .slice(0, 6)
                .map((resource) => {
                  const IconComponent = getTypeIcon(resource.type)
                  return (
                    <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold line-clamp-2">{resource.title}</h4>
                            <p className="text-sm text-muted-foreground">{resource.author}</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                          <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(resource.publishedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span>{resource.fileSize}</span>
                        </div>
                        
                        <Button 
                          onClick={() => handleDownload(resource)}
                          className="w-full"
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => {
                const IconComponent = getTypeIcon(resource.type)
                return (
                  <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getTypeColor(resource.type)} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.author}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                        <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                        <Badge variant="default" className="text-xs">Featured</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span>{resource.downloadCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        </div>
                        <span>{resource.fileSize}</span>
                      </div>
                      
                      <Button 
                        onClick={() => handleDownload(resource)}
                        className="w-full"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
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
              Subscribe to get notified when new resources are available
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}