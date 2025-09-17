"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface SearchProps {
  placeholder?: string
  className?: string
}

export function SearchComponent({ placeholder = "Search...", className }: SearchProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Implement search logic here
      console.log("Searching for:", query)
      setOpen(false)
      setQuery("")
    }
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center gap-2">
          <DialogTrigger asChild>
            <Button variant="outline" className={`relative h-9 w-9 p-0 md:h-10 md:w-auto md:px-3 ${className}`}>
              <Search className="h-4 w-4" />
              <span className="hidden md:inline-block md:ml-2">Search</span>
              <span className="sr-only">Search</span>
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-8"
                autoFocus
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Quick Links</h4>
            <div className="space-y-1">
              <button
                onClick={() => {
                  router.push("/services")
                  setOpen(false)
                }}
                className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1"
              >
                Services
              </button>
              <button
                onClick={() => {
                  router.push("/blog")
                  setOpen(false)
                }}
                className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  router.push("/careers")
                  setOpen(false)
                }}
                className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1"
              >
                Careers
              </button>
              <button
                onClick={() => {
                  router.push("/contact")
                  setOpen(false)
                }}
                className="w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1"
              >
                Contact
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}