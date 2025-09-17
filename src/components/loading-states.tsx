'use client'

import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// Page Loading Component
export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

// Skeleton Loading Components
export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
          <div className="h-3 bg-muted rounded w-1/2 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded w-full animate-pulse"></div>
          <div className="h-3 bg-muted rounded w-5/6 animate-pulse"></div>
        </div>
        <div className="h-10 bg-muted rounded w-1/3 animate-pulse"></div>
      </div>
    </div>
  )
}

export function TeamMemberSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <div className="w-12 h-12 bg-muted rounded-full animate-pulse"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-muted rounded w-1/3 animate-pulse"></div>
        <div className="h-3 bg-muted rounded w-1/2 animate-pulse"></div>
        <div className="h-3 bg-muted rounded w-2/3 animate-pulse"></div>
      </div>
    </div>
  )
}

export function ServiceSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
      <div className="w-12 h-12 bg-muted rounded-lg animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-5 bg-muted rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
      </div>
      <div className="h-8 bg-muted rounded w-1/4 animate-pulse"></div>
    </div>
  )
}

export function PortfolioSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="aspect-video bg-muted animate-pulse"></div>
      <div className="p-6 space-y-3">
        <div className="h-5 bg-muted rounded w-2/3 animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-4/5 animate-pulse"></div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-muted rounded w-20 animate-pulse"></div>
          <div className="h-8 bg-muted rounded w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-muted rounded animate-pulse"></div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
      </div>
      <div className="space-y-1">
        <div className="h-4 bg-muted rounded w-1/3 animate-pulse"></div>
        <div className="h-3 bg-muted rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  )
}

// Loading Button Component
export function LoadingButton({ children, loading, ...props }: any) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}

// Content Loader with Skeleton Grid
export function ContentLoader({ type = 'cards', count = 6 }: { type?: 'cards' | 'team' | 'services' | 'portfolio' | 'testimonials', count?: number }) {
  const getSkeletonComponent = () => {
    switch (type) {
      case 'team':
        return <TeamMemberSkeleton />
      case 'services':
        return <ServiceSkeleton />
      case 'portfolio':
        return <PortfolioSkeleton />
      case 'testimonials':
        return <TestimonialSkeleton />
      default:
        return <CardSkeleton />
    }
  }

  return (
    <div className="grid gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{getSkeletonComponent()}</div>
      ))}
    </div>
  )
}

// Form Loading State
export function FormLoader() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-20 animate-pulse"></div>
        <div className="h-10 bg-muted rounded animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-20 animate-pulse"></div>
        <div className="h-10 bg-muted rounded animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-20 animate-pulse"></div>
        <div className="h-32 bg-muted rounded animate-pulse"></div>
      </div>
      <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
    </div>
  )
}