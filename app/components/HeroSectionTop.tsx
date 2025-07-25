import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroSectionProps {
  title: string
  breadcrumbs?: BreadcrumbItem[]
  backgroundImage?: string
  backgroundColor?: string
  className?: string
}

export default function HeroSection({
  title,
  breadcrumbs = [],
  backgroundImage = "/images/about-us/banner-all.png",
  backgroundColor = "bg-slate-800",
  className = "",
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-[300px] flex items-center justify-center ${backgroundColor} ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage || "/images/hero-bg.png"}
            alt="Hero background"
            fill
            className="object-cover opacity-100"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">{title}</h1>

        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center space-x-2 text-white/80">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <FaChevronRight className="w-4 h-4 mx-2" />}
              </div>
            ))}
          </nav>
        )}
      </div>
    </section>
  )
}
