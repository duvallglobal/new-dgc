"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Social Media Growth", href: "/services/social-media" },
      { name: "AI Automation", href: "/services/ai-automation" },
      { name: "Digital Auditing", href: "/services/digital-auditing" },
      { name: "SEO & Content", href: "/services/seo-content" },
      { name: "Chatbot Setup", href: "/services/chatbot-setup" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "Free Tools", href: "/resources" },
      { name: "Templates", href: "/resources#templates" },
      { name: "Guides", href: "/resources#guides" },
    ],
  },
  {
    name: "Courses",
    href: "/courses",
    submenu: [
      { name: "All Courses", href: "/courses" },
      { name: "Social Media", href: "/courses/social-media" },
      { name: "SEO Fundamentals", href: "/courses/seo" },
      { name: "Content Creation", href: "/courses/content" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmenuEnter = (name: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    setActiveSubmenu(name)
  }

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 300)
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled ? "py-3 glass border-b border-white/10" : "py-6 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            >
              DGP Consulting
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && handleSubmenuEnter(link.name)}
                onMouseLeave={handleSubmenuLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group",
                    pathname === link.href ? "text-primary" : "text-gray-300 hover:text-white",
                  )}
                >
                  <span className="relative z-10 flex items-center">
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-300",
                          activeSubmenu === link.name ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </span>

                  {/* Hover effect */}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-md -z-10 opacity-0 transition-opacity duration-300",
                      pathname === link.href ? "bg-primary/10 opacity-100" : "bg-white/5 group-hover:opacity-100",
                    )}
                  ></span>
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 glass rounded-lg overflow-hidden"
                        onMouseEnter={() => handleSubmenuEnter(link.name)}
                        onMouseLeave={handleSubmenuLeave}
                      >
                        <div className="py-2">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors duration-300",
                                pathname === subItem.href
                                  ? "text-primary bg-white/5"
                                  : "text-gray-300 hover:text-white hover:bg-white/5",
                              )}
                              onClick={() => setActiveSubmenu(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full hover:bg-white/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Link href="/contact">
              <Button className="btn relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full hover:bg-white/10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-full hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-primary bg-white/5"
                          : "text-gray-300 hover:text-white hover:bg-white/5",
                      )}
                      onClick={() => {
                        if (!link.submenu) setIsOpen(false)
                        if (link.submenu) {
                          setActiveSubmenu(activeSubmenu === link.name ? null : link.name)
                        }
                      }}
                    >
                      <span>{link.name}</span>
                      {link.submenu && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            activeSubmenu === link.name ? "rotate-180" : "",
                          )}
                        />
                      )}
                    </Link>

                    {/* Mobile Submenu */}
                    {link.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-1 border-l border-white/10 pl-4 space-y-1"
                          >
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "block px-4 py-2 rounded-md text-sm transition-colors",
                                  pathname === subItem.href
                                    ? "text-primary bg-white/5"
                                    : "text-gray-300 hover:text-white hover:bg-white/5",
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 btn">
                    <span className="relative z-10">Get Started</span>
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

