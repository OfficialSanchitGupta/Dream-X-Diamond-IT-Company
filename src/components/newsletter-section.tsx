'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Newsletter subscription:', email)
      
      setSubmitStatus('success')
      setEmail('')
    } catch (error) {
      setSubmitStatus('error')
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Mail className="w-4 h-4 mr-2" />
            Stay Connected
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Get the Latest Tech Insights</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly updates on the latest technology trends, 
            industry insights, and exclusive content from our experts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Weekly Updates</h3>
              <p className="text-sm opacity-90">
                Get curated content delivered to your inbox every week
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Exclusive Content</h3>
              <p className="text-sm opacity-90">
                Access articles and insights not available on our blog
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">No Spam</h3>
              <p className="text-sm opacity-90">
                We respect your privacy and never share your email
              </p>
            </div>
          </div>

          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Subscribe Now</CardTitle>
              <CardDescription className="text-white/80">
                Join 10,000+ professionals getting our weekly insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-300 bg-green-900/20 p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Successfully subscribed! Check your email.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-300 bg-red-900/20 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm opacity-80 mb-4">
              Also available on these platforms:
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/20">
                RSS Feed
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/20">
                Apple Podcasts
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/20">
                Spotify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}