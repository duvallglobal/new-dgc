"use client"

import Link from "next/link"
import { ArrowRight, Zap, BarChart, Search, MessageSquare, Globe, Target } from "lucide-react"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"
import ParticleBackground from "../components/ParticleBackground"
import SparkleEffect from "../components/SparkleEffect"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Growth",
      description:
        "Boost your brand's presence and engagement across all major social platforms with our data-driven growth strategies.",
      icon: <Zap className="h-10 w-10" />,
      href: "/services/social-media",
      color: "from-blue-500/20 to-indigo-600/20",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "AI Automation",
      description:
        "Streamline your operations and enhance productivity with custom AI solutions tailored to your business needs.",
      icon: <Zap className="h-10 w-10" />,
      href: "/services/ai-automation",
      color: "from-purple-500/20 to-pink-600/20",
      image: "https://images.unsplash.com/photo-1677442135968-6d89469c5f97?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Digital Auditing",
      description:
        "Get a comprehensive analysis of your digital presence with actionable insights to improve performance.",
      icon: <BarChart className="h-10 w-10" />,
      href: "/services/digital-auditing",
      color: "from-green-500/20 to-teal-600/20",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "SEO & Content Strategy",
      description: "Improve your search rankings and content engagement with our expert SEO and content strategies.",
      icon: <Search className="h-10 w-10" />,
      href: "/services/seo-content",
      color: "from-orange-500/20 to-red-600/20",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Chatbot Setup",
      description:
        "Enhance customer service and automate interactions with custom AI chatbots designed for your business.",
      icon: <MessageSquare className="h-10 w-10" />,
      href: "/services/chatbot-setup",
      color: "from-cyan-500/20 to-blue-600/20",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Website Creation",
      description: "Get a beautiful, functional website optimized for conversion and user experience.",
      icon: <Globe className="h-10 w-10" />,
      href: "/services/website-creation",
      color: "from-indigo-500/20 to-purple-600/20",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Online Advertising",
      description: "Maximize your ROI with targeted advertising campaigns across multiple platforms.",
      icon: <Target className="h-10 w-10" />,
      href: "/services/online-advertising",
      color: "from-pink-500/20 to-rose-600/20",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <ParticleBackground particleCount={30} />

      {/* Hero Section with semi-transparent, shimmering effect */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <ParticleBackground particleCount={30} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glass-card p-8 rounded-2xl mb-8 bg-black/30 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            >
              Comprehensive digital solutions to help your business thrive in the digital landscape
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} className="glass-card overflow-hidden" delay={0.1 * index}>
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <GradientButton className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </GradientButton>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Process</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We follow a structured approach to deliver exceptional results for your business
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCard className="glass-card text-center p-6" delay={0.1}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Discovery</h3>
              <p className="text-gray-300">We analyze your business needs and goals to create a tailored strategy.</p>
            </AnimatedCard>

            <AnimatedCard className="glass-card text-center p-6" delay={0.2}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Strategy</h3>
              <p className="text-gray-300">We develop a comprehensive plan aligned with your business objectives.</p>
            </AnimatedCard>

            <AnimatedCard className="glass-card text-center p-6" delay={0.3}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Implementation</h3>
              <p className="text-gray-300">We execute the strategy with precision and attention to detail.</p>
            </AnimatedCard>

            <AnimatedCard className="glass-card text-center p-6" delay={0.4}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Optimization</h3>
              <p className="text-gray-300">We continuously monitor and refine our approach to maximize results.</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 backdrop-blur-sm"></div>
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white max-w-3xl mx-auto"
            >
              Contact us today to discuss how our services can help your business grow and succeed in the digital world.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <GradientButton variant="secondary" size="lg">
                  Schedule a Consultation
                </GradientButton>
              </Link>
              <GradientButton
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                View Pricing
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

