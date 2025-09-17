'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, FileText, Users, Briefcase, Star, ArrowRight } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'service' | 'blog' | 'team' | 'portfolio'
  url: string
}

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Custom web applications using modern frameworks like React, Next.js, and Vue.js',
      type: 'service',
      url: '#services'
    },
    {
      id: '2',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      type: 'service',
      url: '#services'
    },
    {
      id: '3',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services on AWS, Azure, Google Cloud',
      type: 'service',
      url: '#services'
    },
    {
      id: '4',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions and audits to protect your business',
      type: 'service',
      url: '#services'
    },
    {
      id: '5',
      title: 'AI/ML Solutions',
      description: 'Artificial intelligence and machine learning solutions for business automation',
      type: 'service',
      url: '#services'
    },
    {
      id: '6',
      title: 'Digital Marketing',
      description: 'SEO, SEM, and digital marketing strategies to grow your online presence',
      type: 'service',
      url: '#services'
    },
    {
      id: '7',
      title: 'Database Management',
      description: 'Database design, optimization, and management services',
      type: 'service',
      url: '#services'
    },
    {
      id: '8',
      title: 'IT Consulting',
      description: 'Strategic IT consulting and advisory services for businesses',
      type: 'service',
      url: '#services'
    },
    {
      id: '9',
      title: 'Our Team',
      description: 'Meet our expert team of developers, designers, and consultants',
      type: 'team',
      url: '#about'
    },
    {
      id: '10',
      title: 'Success Stories',
      description: 'Read about our successful projects and client testimonials',
      type: 'portfolio',
      url: '#portfolio'
    },
    {
      id: '11',
      title: 'Latest Blog Posts',
      description: 'Stay updated with our latest articles and industry insights',
      type: 'blog',
      url: '#blog'
    },
    {
      id: '12',
      title: 'Career Opportunities',
      description: 'Join our team and grow your career with us',
      type: 'team',
      url: '#careers'
    }
  ]

  useEffect(() => {
    if (search.trim() === '') {
      setResults([])
      return
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    )
    setResults(filtered)
  }, [search])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Briefcase className="w-4 h-4" />
      case 'blog':
        return <FileText className="w-4 h-4" />
      case 'team':
        return <Users className="w-4 h-4" />
      case 'portfolio':
        return <Star className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-blue-600 bg-blue-100'
      case 'blog':
        return 'text-green-600 bg-green-100'
      case 'team':
        return 'text-purple-600 bg-purple-100'
      case 'portfolio':
        return 'text-orange-600 bg-orange-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search our website</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search services, blog posts, team members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          {search && (
            <div className="space-y-2">
              {results.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No results found for "{search}"
                </div>
              ) : (
                <div className="space-y-2">
                  {results.map((result) => (
                    <a
                      key={result.id}
                      href={result.url}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                        {getTypeIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm mb-1">{result.title}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {result.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground mt-1" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {!search && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Mobile Apps', 'Cloud Services', 'AI Solutions', 'Cybersecurity'].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearch(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}