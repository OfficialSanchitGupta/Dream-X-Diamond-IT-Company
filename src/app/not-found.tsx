import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, Search, FileQuestion, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileQuestion className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">404 - Page Not Found</CardTitle>
          <CardDescription>
            Oops! The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Here are some helpful links:</p>
            <div className="space-y-2">
              <Link href="/" className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                <span className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link href="/services" className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Browse Services
                </span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Contact Us
                </span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <Button asChild className="w-full">
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}