'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

interface MobileNavProps {
  scrollToSection: (sectionId: string) => void
}

export function MobileNav({ scrollToSection }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Blog', section: 'blog' },
    { label: 'Careers', section: 'careers' },
    { label: 'Pricing', section: 'pricing' },
    { label: 'Support', section: 'support' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Contact', section: 'contact' },
  ]

  const handleNavClick = (section: string) => {
    scrollToSection(section)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="font-bold text-xl">Dream X Diamond</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex-1">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.section}
                  variant="ghost"
                  className="w-full justify-start text-left h-12"
                  onClick={() => handleNavClick(item.section)}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+91 8824395449</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>info@dreamxdiamond.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>5A/32 Pareek Path, Dehar ke Balaji, Sikar Road, Jaipur, Rajasthan, IN (302039)</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full" size="lg" onClick={() => handleNavClick('contact')}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}