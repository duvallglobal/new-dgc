"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, BarChart, Search, MessageSquare, Globe, Target } from "lucide-react"
import ServiceCard from "./components/ServiceCard"
import ParticleBackground from "./components/ParticleBackground"
import GradientButton from "./components/GradientButton"
import AnimatedCard from "./components/AnimatedCard"
import SparkleEffect from "./components/SparkleEffect"
import { motion } from "framer-motion"

export default function Home() {
  const services = [
    {
      title: "Social Media Growth",
      description: "Strategic growth and engagement tactics for all major platforms",
      icon: <Zap className="h-8 w-8" />,
      href: "/services/social-media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "AI Automation",
      description: "Streamline operations with cutting-edge AI solutions",
      icon: <Zap className="h-8 w-8" />,
      href: "/services/ai-automation",
      image: "https://images.unsplash.com/photo-1677442135968-6d89469c5f97?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Digital Auditing",
      description: "Comprehensive analysis of your digital presence and performance",
      icon: <BarChart className="h-8 w-8" />,
      href: "/services/digital-auditing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "SEO & Content Strategy",
      description: "Data-driven approaches to improve visibility and engagement",
      icon: <Search className="h-8 w-8" />,
      href: "/services/seo-content",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Chatbot Setup",
      description: "Custom AI chatbots to enhance customer service",
      icon: <MessageSquare className="h-8 w-8" />,
      href: "/services/chatbot-setup",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Website Creation",
      description: "Beautiful, functional websites optimized for conversion",
      icon: <Globe className="h-8 w-8" />,
      href: "/services/website-creation",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Online Advertising",
      description: "Maximize your ROI with targeted advertising campaigns",
      icon: <Target className="h-8 w-8" />,
      href: "/services/online-advertising",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />

      {/* Hero Section with semi-transparent, shimmering effect */}
      <section className="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
        <ParticleBackground particleCount={40} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl mb-8 bg-black/30 backdrop-blur-sm border border-white/10"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Digital Growth Solutions for Modern Businesses
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                Elevate your online presence with our expert consulting services in social media, AI, SEO, and digital
                marketing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/services">
                  <GradientButton size="lg" className="text-lg px-8 btn">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </GradientButton>
                </Link>
                <Link href="/contact">
                  <GradientButton size="lg" variant="outline" className="text-lg px-8 btn-outline">
                    Free Consultation
                  </GradientButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive digital solutions tailored to your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                delay={0.1 * index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <GradientButton variant="outline" size="lg" className="btn-outline">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose DGP Consulting?</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8"
              >
                We combine industry expertise with innovative strategies to deliver measurable results for your
                business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white">Data-Driven Approach</h3>
                    <p className="text-gray-300">All strategies backed by analytics and performance metrics</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white">Customized Solutions</h3>
                    <p className="text-gray-300">Tailored strategies designed for your specific business goals</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">Leveraging the latest tools and AI advancements</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-white">Proven Results</h3>
                    <p className="text-gray-300">Track record of success across diverse industries</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <AnimatedCard className="glass-card p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg p-4 h-32 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">500+</span>
                    </div>
                    <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg p-4 h-48 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">98%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg p-4 h-48 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">15+</span>
                    </div>
                    <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg p-4 h-32 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">24/7</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-300">Clients, satisfaction rate, years of experience, and support</p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Free Resources</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Valuable tools and guides to help you grow your digital presence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard className="glass-card overflow-hidden transition-transform" delay={0.1}>
              <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center text-white relative">
                <SparkleEffect className="absolute inset-0" count={15} />
                <h3 className="text-2xl font-bold text-white">SEO Analyzer</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Free tool to analyze your website's SEO performance and get actionable recommendations.
                </p>
                <Link href="/resources/seo-analyzer">
                  <GradientButton variant="outline" className="w-full btn-outline">
                    Try It Free
                  </GradientButton>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="glass-card overflow-hidden transition-transform" delay={0.2}>
              <div className="h-48 bg-gradient-to-r from-green-500/20 to-teal-600/20 flex items-center justify-center text-white relative">
                <SparkleEffect className="absolute inset-0" color="#10b981" count={15} />
                <h3 className="text-2xl font-bold text-white">Social Media Template</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Plan and organize your social media content with our free template.
                </p>
                <Link href="/resources/social-media-template">
                  <GradientButton variant="outline" className="w-full btn-outline">
                    Download Free
                  </GradientButton>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="glass-card overflow-hidden transition-transform" delay={0.3}>
              <div className="h-48 bg-gradient-to-r from-orange-500/20 to-red-600/20 flex items-center justify-center text-white relative">
                <SparkleEffect className="absolute inset-0" color="#f97316" count={15} />
                <h3 className="text-2xl font-bold text-white">AI Chatbot Template</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Download our free template to get started with your own AI-powered chatbot.
                </p>
                <Link href="/resources/chatbot-template">
                  <GradientButton variant="outline" className="w-full btn-outline">
                    Download Free
                  </GradientButton>
                </Link>
              </div>
            </AnimatedCard>
          </div>

          <div className="mt-12 text-center">
            <Link href="/resources">
              <GradientButton variant="outline" size="lg" className="btn-outline">
                View All Resources <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Online Courses</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
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
                <p className="text-gray-300 mb-4">
                  Learn the fundamentals of effective social media marketing with our comprehensive course.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-400">12 lessons</div>
                  <div className="text-gray-400">6 hours</div>
                </div>
                <Link href="/courses/social-media-masterclass">
                  <GradientButton className="w-full btn">Enroll Now</GradientButton>
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
                <p className="text-gray-300 mb-4">
                  Master the basics of search engine optimization to improve your website's visibility.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-400">10 lessons</div>
                  <div className="text-gray-400">5 hours</div>
                </div>
                <Link href="/courses/advanced-seo">
                  <GradientButton className="w-full btn">Enroll Now</GradientButton>
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
                <p className="text-gray-300 mb-4">
                  Learn how to create engaging content that converts visitors into customers.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-400">8 lessons</div>
                  <div className="text-gray-400">4 hours</div>
                </div>
                <Link href="/courses/content-marketing">
                  <GradientButton className="w-full btn">Enroll Now</GradientButton>
                </Link>
              </div>
            </AnimatedCard>
          </div>

          <div className="mt-12 text-center">
            <Link href="/courses">
              <GradientButton variant="outline" size="lg" className="btn-outline">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 backdrop-blur-sm"></div>
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white"
            >
              Schedule a free consultation with our experts and discover how we can help you achieve your business
              goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <GradientButton size="lg" variant="secondary" className="text-lg px-8 btn">
                  Get Started Today
                </GradientButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

