"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10"></div>

      {/* Main Footer */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                DGP Consulting
              </h3>
              <p className="text-gray-300 mb-4">
                Empowering businesses with innovative digital solutions for sustainable growth.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/social-media"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Social Media Growth
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-automation"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-auditing"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Digital Auditing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo-content"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    SEO & Content Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/chatbot-setup"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Chatbot Setup
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resources"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Free Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Online Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    info@dgpconsulting.com
                  </span>
                </div>
                <div className="flex items-start group">
                  <Phone className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    123 Business Ave, Suite 100, New York, NY 10001
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} DGP Consulting. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

