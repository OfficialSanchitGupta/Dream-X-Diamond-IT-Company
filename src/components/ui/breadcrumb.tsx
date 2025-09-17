import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    items?: {
      label: string
      href?: string
      icon?: React.ComponentType<{ className?: string }>
    }[]
    separator?: React.ComponentType<{ className?: string }>
  }
>(({ className, items = [], separator, ...props }, ref) => {
  const SeparatorIcon = separator || ChevronRight

  return (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && (
            <SeparatorIcon className="mx-2 h-4 w-4" />
          )}
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-foreground transition-colors flex items-center"
            >
              {item.icon && (
                <item.icon className="mr-2 h-4 w-4" />
              )}
              {item.label}
            </a>
          ) : (
            <span className="flex items-center">
              {item.icon && (
                <item.icon className="mr-2 h-4 w-4" />
              )}
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
})
Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }