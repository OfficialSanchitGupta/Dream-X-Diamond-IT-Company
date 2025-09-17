'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { 
  User, 
  Settings, 
  FileText, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Download, 
  Upload, 
  Bell,
  Search,
  Filter,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  DollarSign,
  TrendingUp,
  ExternalLink,
  Mail,
  Phone,
  HelpCircle,
  LogOut,
  LayoutDashboard,
  FolderOpen,
  CreditCard,
  Shield,
  Database,
  Activity,
  Target,
  Zap
} from 'lucide-react'

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform Redesign',
      status: 'in-progress',
      progress: 75,
      deadline: '2024-02-15',
      budget: '$45,000',
      spent: '$33,750',
      manager: 'Neelam Mahaldar',
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      status: 'completed',
      progress: 100,
      deadline: '2024-01-20',
      budget: '$80,000',
      spent: '$78,500',
      manager: 'Maria Garcia',
      lastUpdate: '1 day ago'
    },
    {
      id: 3,
      name: 'Cloud Migration Project',
      status: 'planning',
      progress: 25,
      deadline: '2024-03-30',
      budget: '$120,000',
      spent: '$15,000',
      manager: 'David Kim',
      lastUpdate: '4 hours ago'
    }
  ]

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-15',
      amount: '$12,500',
      status: 'paid',
      dueDate: '2024-02-15',
      project: 'E-commerce Platform'
    },
    {
      id: 'INV-2024-002',
      date: '2024-01-20',
      amount: '$25,000',
      status: 'pending',
      dueDate: '2024-02-20',
      project: 'Mobile Banking App'
    },
    {
      id: 'INV-2024-003',
      date: '2024-01-25',
      amount: '$8,750',
      status: 'overdue',
      dueDate: '2024-02-10',
      project: 'Cloud Migration'
    }
  ]

  const tickets = [
    {
      id: 'TK-001',
      subject: 'Login issue with mobile app',
      status: 'open',
      priority: 'high',
      assignedTo: 'Support Team',
      created: '2024-01-28',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'TK-002',
      subject: 'Feature request for dashboard',
      status: 'in-progress',
      priority: 'medium',
      assignedTo: 'David Kim',
      created: '2024-01-25',
      lastUpdate: '1 day ago'
    },
    {
      id: 'TK-003',
      subject: 'Performance optimization needed',
      status: 'resolved',
      priority: 'low',
      assignedTo: 'Maria Garcia',
      created: '2024-01-20',
      lastUpdate: '3 days ago'
    }
  ]

  const documents = [
    {
      id: 1,
      name: 'Project Proposal - E-commerce',
      type: 'pdf',
      size: '2.4 MB',
      uploaded: '2024-01-10',
      category: 'Proposals'
    },
    {
      id: 2,
      name: 'Technical Specifications',
      type: 'docx',
      size: '1.8 MB',
      uploaded: '2024-01-12',
      category: 'Documentation'
    },
    {
      id: 3,
      name: 'Design Mockups v2',
      type: 'zip',
      size: '15.2 MB',
      uploaded: '2024-01-15',
      category: 'Design'
    }
  ]

  const notifications = [
    {
      id: 1,
      type: 'project',
      title: 'Project milestone reached',
      message: 'E-commerce Platform has reached 75% completion',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'invoice',
      title: 'New invoice available',
      message: 'Invoice INV-2024-002 is ready for payment',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'ticket',
      title: 'Support ticket resolved',
      message: 'Your ticket TK-003 has been resolved',
      time: '3 days ago',
      read: true
    }
  ]

  const stats = {
    totalProjects: 3,
    activeProjects: 2,
    completedProjects: 1,
    totalSpent: '$127,250',
    pendingInvoices: 2,
    openTickets: 2
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'planning': return 'bg-yellow-500'
      case 'paid': return 'bg-green-500'
      case 'pending': return 'bg-yellow-500'
      case 'overdue': return 'bg-red-500'
      case 'open': return 'bg-red-500'
      case 'resolved': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Client Portal</CardTitle>
                <CardDescription>
                  Sign in to access your projects, invoices, and support tickets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    className="mt-1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <Button variant="link" className="text-sm p-0 h-auto">
                    Forgot password?
                  </Button>
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign In
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{' '}
                    <Button variant="link" className="text-sm p-0 h-auto">
                      Contact support
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Client Portal</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsLoggedIn(false)}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <CardTitle className="text-lg">John Doe</CardTitle>
                    <CardDescription>john.doe@company.com</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('dashboard')}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button 
                  variant={activeTab === 'projects' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('projects')}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Projects
                </Button>
                <Button 
                  variant={activeTab === 'invoices' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('invoices')}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Invoices
                </Button>
                <Button 
                  variant={activeTab === 'tickets' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('tickets')}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Support Tickets
                </Button>
                <Button 
                  variant={activeTab === 'documents' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('documents')}
                >
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Documents
                </Button>
                <Button 
                  variant={activeTab === 'reports' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('reports')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Reports
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Projects</span>
                  <span className="font-semibold">{stats.activeProjects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Spent</span>
                  <span className="font-semibold">{stats.totalSpent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Pending Invoices</span>
                  <span className="font-semibold">{stats.pendingInvoices}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Open Tickets</span>
                  <span className="font-semibold">{stats.openTickets}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                      <Target className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalProjects}</div>
                      <p className="text-xs text-muted-foreground">
                        {stats.completedProjects} completed
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Budget Spent</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalSpent}</div>
                      <p className="text-xs text-muted-foreground">
                        Across all projects
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.pendingInvoices}</div>
                      <p className="text-xs text-muted-foreground">
                        Awaiting payment
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.openTickets}</div>
                      <p className="text-xs text-muted-foreground">
                        Open tickets
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Projects */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Projects</CardTitle>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold">{project.name}</h4>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {project.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {project.manager}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {project.lastUpdate}
                              </span>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-sm">
                                <span>Progress: {project.progress}%</span>
                                <span>{project.spent} / {project.budget}</span>
                              </div>
                              <Progress value={project.progress} className="mt-1" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.slice(0, 5).map((notification) => (
                        <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                          <div className="flex-shrink-0">
                            {notification.type === 'project' && <Target className="w-5 h-5 text-blue-500" />}
                            {notification.type === 'invoice' && <CreditCard className="w-5 h-5 text-green-500" />}
                            {notification.type === 'ticket' && <HelpCircle className="w-5 h-5 text-purple-500" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Projects */}
            {activeTab === 'projects' && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Projects</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search projects..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        New Project
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{project.name}</h3>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="outline" className={`${getStatusColor(project.status)} text-white`}>
                                {project.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                Manager: {project.manager}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Deadline: {project.deadline}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Progress</div>
                            <div className="text-2xl font-bold">{project.progress}%</div>
                            <Progress value={project.progress} className="mt-1" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Budget</div>
                            <div className="text-lg font-semibold">{project.budget}</div>
                            <div className="text-sm text-muted-foreground">
                              Spent: {project.spent}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Last Update</div>
                            <div className="text-sm font-medium">{project.lastUpdate}</div>
                            <Button variant="ghost" size="sm" className="mt-1">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Contact Manager
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Invoices */}
            {activeTab === 'invoices' && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Invoices</CardTitle>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {invoices.map((invoice) => (
                      <div key={invoice.id} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{invoice.id}</h3>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="outline" className={`${getStatusColor(invoice.status)} text-white`}>
                                {invoice.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                Project: {invoice.project}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Due: {invoice.dueDate}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{invoice.amount}</div>
                            <div className="text-sm text-muted-foreground">
                              {invoice.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            {invoice.status === 'paid' && 'Payment received successfully'}
                            {invoice.status === 'pending' && 'Awaiting payment'}
                            {invoice.status === 'overdue' && 'Payment overdue - please pay immediately'}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            {invoice.status !== 'paid' && (
                              <Button size="sm">
                                <CreditCard className="w-4 h-4 mr-2" />
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Support Tickets */}
            {activeTab === 'tickets' && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Support Tickets</CardTitle>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Ticket
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tickets.map((ticket) => (
                      <div key={ticket.id} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{ticket.subject}</h3>
                            <div className="flex items-center space-x-4 mt-2">
                              <Badge variant="outline" className={`${getStatusColor(ticket.status)} text-white`}>
                                {ticket.status}
                              </Badge>
                              <span className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                                {ticket.priority} priority
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Assigned to: {ticket.assignedTo}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Created: {ticket.created}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            Last updated: {ticket.lastUpdate}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Reply
                            </Button>
                            {ticket.status !== 'resolved' && (
                              <Button variant="outline" size="sm">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Mark Resolved
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Documents */}
            {activeTab === 'documents' && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Documents</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search documents..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documents.map((doc) => (
                      <Card key={doc.id} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <Badge variant="outline">{doc.category}</Badge>
                          </div>
                          <h4 className="font-semibold text-sm mb-1">{doc.name}</h4>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div>{doc.type.toUpperCase()} • {doc.size}</div>
                            <div>Uploaded: {doc.uploaded}</div>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reports */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Total Projects</span>
                          <span className="font-semibold">{stats.totalProjects}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Completed</span>
                          <span className="font-semibold text-green-600">{stats.completedProjects}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>In Progress</span>
                          <span className="font-semibold text-blue-600">{stats.activeProjects}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Budget</span>
                          <span className="font-semibold">$245,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Amount Spent</span>
                          <span className="font-semibold">{stats.totalSpent}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Total Invoiced</span>
                          <span className="font-semibold">$46,250</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Paid Invoices</span>
                          <span className="font-semibold text-green-600">$12,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pending</span>
                          <span className="font-semibold text-yellow-600">$25,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Overdue</span>
                          <span className="font-semibold text-red-600">$8,750</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Outstanding</span>
                            <span className="text-red-600">$33,750</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Activity Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {notification.type === 'project' && <Target className="w-5 h-5 text-blue-500" />}
                            {notification.type === 'invoice' && <CreditCard className="w-5 h-5 text-green-500" />}
                            {notification.type === 'ticket' && <HelpCircle className="w-5 h-5 text-purple-500" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}