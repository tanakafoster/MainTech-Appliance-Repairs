import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { absoluteUrl } from "@/lib/site"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  variant?: "default" | "onDark"
  currentPath?: string
}

export function Breadcrumbs({ items, variant = "default", currentPath }: BreadcrumbsProps) {
  const onDark = variant === "onDark"

  const linkClass = cn(
    "flex items-center rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
    onDark ? "text-on-navy hover:text-white hover:underline" : "text-slate hover:text-blue hover:underline",
  )
  const chevronClass = cn("h-4 w-4", onDark ? "text-on-navy" : "text-slate")
  const currentClass = cn("font-medium", onDark ? "text-white" : "text-ink")

  const crumbList = [
    { name: "Home", path: "/" },
    ...items.map((item, index) => ({
      name: item.label,
      path: item.href || (index === items.length - 1 ? currentPath : undefined),
    })),
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbList.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link href="/" className={linkClass}>
            <Home className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <ChevronRight className={chevronClass} aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span className={currentClass} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
