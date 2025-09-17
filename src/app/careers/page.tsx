'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  Building, 
  Briefcase, 
  Star,
  Heart,
  Share2,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  Zap,
  Shield,
  Globe,
  Code,
  Smartphone,
  Brain,
  Database,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react'

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [activeTab, setActiveTab] = useState('openings')

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'full-time',
      experience: '5+ years',
      salary: '$120,000 - $160,000',
      posted: '2 days ago',
      description: 'We are looking for an experienced Senior Frontend Developer to join our dynamic team and help build cutting-edge web applications.',
      requirements: [
        '5+ years of experience with React, Vue.js, or Angular',
        'Strong proficiency in JavaScript, TypeScript, and HTML5/CSS3',
        'Experience with state management libraries (Redux, Vuex, etc.)',
        'Knowledge of responsive design and cross-browser compatibility',
        'Familiarity with build tools and version control (Git, Webpack)',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      responsibilities: [
        'Develop and maintain high-quality web applications',
        'Collaborate with UX/UI designers to implement responsive designs',
        'Optimize applications for maximum speed and scalability',
        'Mentor junior developers and conduct code reviews',
        'Stay up-to-date with emerging trends and technologies'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        '401(k) with company match',
        'Flexible work arrangements and remote options',
        'Professional development budget',
        'Generous paid time off and holidays'
      ],
      featured: true,
      applicants: 45
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'cloud',
      location: 'New York, NY',
      type: 'full-time',
      experience: '7+ years',
      salary: '$140,000 - $180,000',
      posted: '1 week ago',
      description: 'Seeking a talented Cloud Solutions Architect to design and implement scalable cloud infrastructure solutions for our enterprise clients.',
      requirements: [
        '7+ years of experience in cloud architecture and implementation',
        'Expertise in AWS, Azure, or Google Cloud Platform',
        'Strong knowledge of infrastructure as code (Terraform, CloudFormation)',
        'Experience with containerization and orchestration (Docker, Kubernetes)',
        'Understanding of security best practices and compliance requirements',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement cloud solutions for enterprise clients',
        'Lead cloud migration and modernization projects',
        'Ensure security, compliance, and best practices',
        'Mentor team members and provide technical guidance',
        'Collaborate with stakeholders to define requirements'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Health, dental, and vision insurance for you and your family',
        'Retirement savings plan with company match',
        'Flexible spending accounts',
        'Professional certification reimbursement',
        'Work-life balance and flexible scheduling'
      ],
      featured: true,
      applicants: 32
    },
    {
      id: 3,
      title: 'Cybersecurity Analyst',
      department: 'security',
      location: 'Remote',
      type: 'full-time',
      experience: '3+ years',
      salary: '$80,000 - $110,000',
      posted: '3 days ago',
      description: 'Join our security team as a Cybersecurity Analyst to help protect our systems and data from emerging threats.',
      requirements: [
        '3+ years of experience in cybersecurity or information security',
        'Knowledge of security frameworks (NIST, ISO 27001, etc.)',
        'Experience with security tools and technologies',
        'Understanding of network security and encryption',
        'Strong analytical and problem-solving skills',
        'Relevant certifications (CISSP, CEH, Security+) preferred'
      ],
      responsibilities: [
        'Monitor and analyze security alerts and incidents',
        'Conduct vulnerability assessments and penetration testing',
        'Implement security controls and best practices',
        'Investigate security incidents and recommend remediation',
        'Create and maintain security documentation'
      ],
      benefits: [
        'Competitive salary and benefits package',
        'Remote-first work environment',
        'Professional development opportunities',
        'Security conference attendance',
        'Cutting-edge security tools and technologies',
        'Collaborative and supportive team culture'
      ],
      featured: false,
      applicants: 28
    },
    {
      id: 4,
      title: 'AI/ML Engineer',
      department: 'ai',
      location: 'Seattle, WA',
      type: 'full-time',
      experience: '4+ years',
      salary: '$130,000 - $170,000',
      posted: '1 week ago',
      description: 'We are seeking an AI/ML Engineer to develop and deploy machine learning models that drive business insights and automation.',
      requirements: [
        '4+ years of experience in machine learning and AI',
        'Strong programming skills in Python and/or R',
        'Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)',
        'Knowledge of data preprocessing and feature engineering',
        'Understanding of MLOps and model deployment',
        'Advanced degree in Computer Science, Mathematics, or related field'
      ],
      responsibilities: [
        'Develop and train machine learning models',
        'Deploy models to production environments',
        'Monitor model performance and accuracy',
        'Collaborate with data scientists and engineers',
        'Research and implement new ML techniques'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive benefits package',
        'Research and development budget',
        'Conference attendance and speaking opportunities',
        'Flexible work arrangements',
        'Innovation-focused work environment'
      ],
      featured: false,
      applicants: 51
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      location: 'Los Angeles, CA',
      type: 'full-time',
      experience: '2+ years',
      salary: '$60,000 - $80,000',
      posted: '4 days ago',
      description: 'Looking for a creative Digital Marketing Specialist to help drive our online presence and lead generation efforts.',
      requirements: [
        '2+ years of digital marketing experience',
        'Experience with SEO, SEM, and social media marketing',
        'Knowledge of analytics tools (Google Analytics, etc.)',
        'Strong copywriting and content creation skills',
        'Understanding of marketing automation tools',
        'Bachelor\'s degree in Marketing or related field'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media channels and content',
        'Optimize website for search engines',
        'Analyze campaign performance and ROI',
        'Collaborate with sales and product teams'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Health and wellness benefits',
        'Professional development opportunities',
        'Creative and collaborative work environment',
        'Marketing tools and resources',
        'Work-life balance'
      ],
      featured: false,
      applicants: 67
    },
    {
      id: 6,
      title: 'Database Administrator',
      department: 'database',
      location: 'Austin, TX',
      type: 'full-time',
      experience: '4+ years',
      salary: '$90,000 - $120,000',
      posted: '1 week ago',
      description: 'Seeking a skilled Database Administrator to manage and optimize our database systems for performance and reliability.',
      requirements: [
        '4+ years of database administration experience',
        'Expertise in SQL and NoSQL databases',
        'Experience with database performance tuning',
        'Knowledge of backup and recovery procedures',
        'Understanding of security and compliance',
        'Relevant certifications preferred'
      ],
      responsibilities: [
        'Manage and maintain database systems',
        'Monitor performance and optimize queries',
        'Implement backup and disaster recovery',
        'Ensure data security and compliance',
        'Collaborate with development teams'
      ],
      benefits: [
        'Competitive compensation package',
        'Comprehensive health benefits',
        'Retirement savings plan',
        'Professional certification support',
        'Flexible work options',
        'Technical training opportunities'
      ],
      featured: false,
      applicants: 23
    }
  ]

  const departments = [
    { id: 'all', label: 'All Departments', count: jobOpenings.length },
    { id: 'engineering', label: 'Engineering', count: 1 },
    { id: 'cloud', label: 'Cloud', count: 1 },
    { id: 'security', label: 'Security', count: 1 },
    { id: 'ai', label: 'AI/ML', count: 1 },
    { id: 'marketing', label: 'Marketing', count: 1 },
    { id: 'database', label: 'Database', count: 1 }
  ]

  const locations = [
    { id: 'all', label: 'All Locations' },
    { id: 'San Francisco, CA', label: 'San Francisco, CA' },
    { id: 'New York, NY', label: 'New York, NY' },
    { id: 'Remote', label: 'Remote' },
    { id: 'Seattle, WA', label: 'Seattle, WA' },
    { id: 'Los Angeles, CA', label: 'Los Angeles, CA' },
    { id: 'Austin, TX', label: 'Austin, TX' }
  ]

  const jobTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'full-time', label: 'Full Time' },
    { id: 'part-time', label: 'Part Time' },
    { id: 'contract', label: 'Contract' },
    { id: 'internship', label: 'Internship' }
  ]

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, performance bonuses, and equity opportunities.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, remote options, and generous paid time off.'
    },
    {
      icon: Users,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, training budgets, and career advancement.'
    },
    {
      icon: Building,
      title: 'Modern Workspace',
      description: 'State-of-the-art offices with collaborative spaces and amenities.'
    },
    {
      icon: Target,
      title: 'Innovation Culture',
      description: 'Work on cutting-edge projects with the latest technologies and tools.'
    }
  ]

  const cultureValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and push the boundaries of what\'s possible.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation
    const matchesType = selectedType === 'all' || job.type === selectedType
    return matchesSearch && matchesDepartment && matchesLocation && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Careers</Badge>
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build your career with Dream X Diamond and work on cutting-edge projects 
              that shape the future of technology. We\'re looking for passionate talent 
              to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/50 sticky top-0 z-40 backdrop-blur-sm bg-muted/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.label} ({dept.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="openings">Job Openings</TabsTrigger>
            <TabsTrigger value="culture">Our Culture</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="process">Hiring Process</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Job Openings Tab */}
        {activeTab === 'openings' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card key={job.id} className={`overflow-hidden ${job.featured ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                    {job.featured && (
                      <div className="bg-gradient-to-r from-primary to-primary/60 text-white px-4 py-2">
                        <Badge className="bg-white text-primary">Featured Position</Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">
                              <MapPin className="w-3 h-3 mr-1" />
                              {job.location}
                            </Badge>
                            <Badge variant="outline">
                              <Briefcase className="w-3 h-3 mr-1" />
                              {job.type.replace('-', ' ')}
                            </Badge>
                            <Badge variant="outline">
                              <Clock className="w-3 h-3 mr-1" />
                              {job.experience}
                            </Badge>
                            <Badge variant="outline">
                              <DollarSign className="w-3 h-3 mr-1" />
                              {job.salary}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {job.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-2">
                            Posted {job.posted}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {job.applicants} applicants
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.slice(0, 3).map((req, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {req}
                              </li>
                            ))}
                            {job.requirements.length > 3 && (
                              <li className="text-sm text-muted-foreground">
                                +{job.requirements.length - 3} more requirements
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            <Button size="sm">
                              Apply Now
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or check back later for new opportunities.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Culture Tab */}
        {activeTab === 'culture' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Dream X Diamond, we foster an environment where innovation, collaboration, 
                and excellence thrive. Our culture is built on trust, respect, and a shared 
                passion for technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cultureValues.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Life at Dream X Diamond</CardTitle>
                <CardDescription>
                  Discover what makes our workplace unique and why our team loves working here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Diverse Team</h3>
                    <p className="text-sm text-muted-foreground">
                      We celebrate diversity and foster an inclusive environment where everyone belongs.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Innovation Hub</h3>
                    <p className="text-sm text-muted-foreground">
                      Work on cutting-edge projects that challenge and inspire you every day.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Growth Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      Invest in your professional development with continuous learning opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Benefits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive benefits package designed to support your health, 
                financial well-being, and work-life balance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyBenefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Additional Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Work Environment</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Modern, well-equipped offices
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Flexible work arrangements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Remote work options
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Collaborative workspaces
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Professional Development</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Annual training budget
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Conference attendance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Certification support
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Mentorship programs
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Hiring Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Hiring Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our hiring process is designed to be thorough, fair, and transparent. 
                We want to ensure the best fit for both you and our team.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Application',
                  description: 'Submit your application and resume through our careers portal.',
                  icon: Mail,
                  duration: '5-10 minutes'
                },
                {
                  step: 2,
                  title: 'Resume Review',
                  description: 'Our recruiting team reviews your application and qualifications.',
                  icon: Users,
                  duration: '2-3 business days'
                },
                {
                  step: 3,
                  title: 'Initial Screening',
                  description: 'Phone or video call with our recruiter to discuss your background.',
                  icon: Phone,
                  duration: '30 minutes'
                },
                {
                  step: 4,
                  title: 'Technical Interview',
                  description: 'Technical assessment and interview with the hiring team.',
                  icon: Code,
                  duration: '1-2 hours'
                },
                {
                  step: 5,
                  title: 'Final Interview',
                  description: 'Meet with team members and leadership to discuss fit and culture.',
                  icon: Building,
                  duration: '2-3 hours'
                },
                {
                  step: 6,
                  title: 'Offer & Onboarding',
                  description: 'Receive offer and begin your journey with Dream X Diamond.',
                  icon: Star,
                  duration: '1-2 weeks'
                }
              ].map((step, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                              <step.icon className="w-5 h-5 text-primary" />
                              {step.title}
                            </h3>
                            <Badge variant="outline" className="mt-1">
                              {step.duration}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Before Applying</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Research our company and values
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Tailor your resume to the position
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Prepare a compelling cover letter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Highlight relevant skills and experience
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">During Interviews</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Be prepared with specific examples
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Ask thoughtful questions about the role
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Demonstrate your problem-solving skills
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Show enthusiasm for the opportunity
                      </li>
                    </ul>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't see the perfect position? Connect with us for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg">
              Browse All Positions
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Join Talent Network
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}