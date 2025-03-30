"use client"

import Link from "next/link"
import { ArrowRight, Download, BookOpen, PenToolIcon as Tool } from "lucide-react"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"
import SparkleEffect from "../components/SparkleEffect"
import ParticleBackground from "../components/ParticleBackground"
import { motion } from "framer-motion"

export default function ResourcesPage() {
  const tools = [
    {
      title: "SEO Analyzer",
      description: "Analyze your website's SEO performance and get actionable recommendations.",
      icon: <Tool className="h-6 w-6" />,
      href: "/resources/seo-analyzer",
      color: "bg-blue-500/20",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Social Media Calendar",
      description: "Plan and organize your social media content with our free template.",
      icon: <Tool className="h-6 w-6" />,
      href: "/resources/social-media-calendar",
      color: "bg-green-500/20",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Keyword Research Tool",
      description: "Find the best keywords for your content and SEO strategy.",
      icon: <Tool className="h-6 w-6" />,
      href: "/resources/keyword-research",
      color: "bg-purple-500/20",
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "AI Chatbot Template",
      description: "Get started with your own AI chatbot using our free template.",
      icon: <Tool className="h-6 w-6" />,
      href: "/resources/chatbot-template",
      color: "bg-orange-500/20",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  return (
    <div>
      <ParticleBackground particleCount={30} />

      {/* Hero Section with semi-transparent, shimmering effect */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <ParticleBackground particleCount={30} />
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glass-card p-8 rounded-2xl mb-8 bg-black/30 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            >
              Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            >
              Valuable tools, courses, and guides to help you grow your digital presence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Free Tools</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Powerful tools to help you analyze and improve your digital marketing efforts
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Link key={index} href={tool.href}>
                <AnimatedCard className="glass-card h-full" delay={0.1 * index}>
                  <div
                    className={`${tool.color} rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white m-6`}
                  >
                    {tool.icon}
                  </div>
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{tool.title}</h3>
                    <p className="text-gray-300 mb-4">{tool.description}</p>
                    <div className="flex items-center text-primary font-medium group">
                      <span>Try it free</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guides & Templates */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Free Guides & Templates</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Download our comprehensive guides and templates to help you succeed
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard className="glass-card p-6" delay={0.1}>
              <h3 className="text-xl font-bold mb-3 text-white">Social Media Strategy Guide</h3>
              <p className="text-gray-300 mb-4">
                A comprehensive guide to creating an effective social media strategy for your business.
              </p>
              <GradientButton className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </GradientButton>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-6" delay={0.2}>
              <h3 className="text-xl font-bold mb-3 text-white">Content Calendar Template</h3>
              <p className="text-gray-300 mb-4">
                Plan and organize your content with our easy-to-use content calendar template.
              </p>
              <GradientButton className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download Template
              </GradientButton>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-6" delay={0.3}>
              <h3 className="text-xl font-bold mb-3 text-white">SEO Checklist</h3>
              <p className="text-gray-300 mb-4">
                Ensure your website is fully optimized with our comprehensive SEO checklist.
              </p>
              <GradientButton className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download Checklist
              </GradientButton>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-6" delay={0.4}>
              <h3 className="text-xl font-bold mb-3 text-white">Email Marketing Guide</h3>
              <p className="text-gray-300 mb-4">Learn how to create effective email campaigns that drive results.</p>
              <GradientButton className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </GradientButton>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-6" delay={0.5}>
              <h3 className="text-xl font-bold mb-3 text-white">Digital Advertising Playbook</h3>
              <p className="text-gray-300 mb-4">
                Master the art of digital advertising with our comprehensive playbook.
              </p>
              <GradientButton className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </GradientButton>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-6" delay={0.6}>
              <h3 className="text-xl font-bold mb-3 text-white">Website Audit Template</h3>
              <p className="text-gray-300 mb-4">
                Evaluate your website's performance with our detailed audit template.
              </p>
              <GradientButton className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download Template
              </GradientButton>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Online Courses</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Learn at your own pace with our comprehensive digital marketing courses
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard className="glass-card overflow-hidden" delay={0.1}>
              <div className="relative h-48 bg-gradient-to-r from-primary/20 to-purple-600/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Social Media Marketing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Learn the fundamentals of effective social media marketing.</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-400">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>12 lessons</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span>6 hours</span>
                  </div>
                </div>
                <Link href="/courses/social-media-masterclass">
                  <GradientButton className="w-full">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </GradientButton>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="glass-card overflow-hidden" delay={0.2}>
              <div className="relative h-48 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">SEO Fundamentals</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Master the basics of search engine optimization.</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-400">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>10 lessons</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span>5 hours</span>
                  </div>
                </div>
                <Link href="/courses/advanced-seo">
                  <GradientButton className="w-full">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </GradientButton>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="glass-card overflow-hidden" delay={0.3}>
              <div className="relative h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Content Creation</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Learn how to create engaging content that converts.</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-400">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>8 lessons</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span>4 hours</span>
                  </div>
                </div>
                <Link href="/courses/content-marketing">
                  <GradientButton className="w-full">
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </GradientButton>
                </Link>
              </div>
            </AnimatedCard>
          </div>

          <div className="mt-12 text-center">
            <Link href="/courses">
              <GradientButton variant="outline" size="lg">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 backdrop-blur-sm"></div>
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-white mb-8"
            >
              Subscribe to our newsletter to receive the latest resources, tips, and industry insights.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              />
              <GradientButton size="lg" variant="secondary">
                Subscribe
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

