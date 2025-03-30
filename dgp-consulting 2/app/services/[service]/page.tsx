"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import GradientButton from "../../components/GradientButton"
import AnimatedCard from "../../components/AnimatedCard"
import ParticleBackground from "../../components/ParticleBackground"
import SparkleEffect from "../../components/SparkleEffect"
import { motion } from "framer-motion"

interface ServicePageProps {
  params: {
    service: string
  }
}

interface ServiceData {
  title: string
  description: string
  features: string[]
  image: string
  benefits: { title: string; description: string }[]
  cta: string
}

const serviceData: Record<string, ServiceData> = {
  "social-media": {
    title: "Social Media Growth",
    description:
      "Boost your brand's presence and engagement across all major social platforms with our data-driven growth strategies.",
    features: [
      "Platform-specific growth strategies",
      "Content calendar and creation",
      "Community management and engagement",
      "Performance analytics and reporting",
      "Competitor analysis",
      "Paid social media campaigns",
    ],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Increased Brand Awareness",
        description: "Expand your reach and get your brand in front of more potential customers.",
      },
      {
        title: "Higher Engagement",
        description: "Build meaningful connections with your audience through strategic content.",
      },
      {
        title: "More Conversions",
        description: "Turn followers into customers with targeted campaigns and calls-to-action.",
      },
    ],
    cta: "Ready to grow your social media presence?",
  },
  "ai-automation": {
    title: "AI Automation",
    description:
      "Streamline your operations and enhance productivity with custom AI solutions tailored to your business needs.",
    features: [
      "Workflow automation",
      "Custom AI model development",
      "Process optimization",
      "Data analysis and insights",
      "Integration with existing systems",
      "Ongoing support and maintenance",
    ],
    image: "https://images.unsplash.com/photo-1677442135968-6d89469c5f97?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Automate repetitive tasks and free up your team for more strategic work.",
      },
      {
        title: "Cost Reduction",
        description: "Reduce operational costs through optimized processes and automation.",
      },
      {
        title: "Better Decision Making",
        description: "Leverage AI-driven insights to make more informed business decisions.",
      },
    ],
    cta: "Ready to transform your business with AI?",
  },
  "digital-auditing": {
    title: "Digital Auditing",
    description:
      "Get a comprehensive analysis of your digital presence with actionable insights to improve performance.",
    features: [
      "Website performance analysis",
      "SEO audit",
      "Social media audit",
      "Content strategy evaluation",
      "Competitor benchmarking",
      "Actionable recommendations",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Identify Opportunities",
        description: "Discover untapped potential in your digital strategy.",
      },
      {
        title: "Fix Critical Issues",
        description: "Address problems that may be hindering your online performance.",
      },
      {
        title: "Strategic Roadmap",
        description: "Get a clear plan for improving your digital presence.",
      },
    ],
    cta: "Ready for a comprehensive digital audit?",
  },
  "seo-content": {
    title: "SEO & Content Strategy",
    description: "Improve your search rankings and content engagement with our expert SEO and content strategies.",
    features: [
      "Keyword research and analysis",
      "On-page and off-page SEO",
      "Content calendar development",
      "High-quality content creation",
      "Link building strategies",
      "Performance tracking and optimization",
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Higher Search Rankings",
        description: "Improve your visibility in search engine results pages.",
      },
      {
        title: "More Organic Traffic",
        description: "Attract more qualified visitors to your website.",
      },
      {
        title: "Better Content Engagement",
        description: "Create content that resonates with your audience and drives action.",
      },
    ],
    cta: "Ready to boost your search rankings?",
  },
  "chatbot-setup": {
    title: "Chatbot Setup",
    description:
      "Enhance customer service and automate interactions with custom AI chatbots designed for your business.",
    features: [
      "Custom chatbot development",
      "Natural language processing",
      "Integration with existing platforms",
      "Training and optimization",
      "24/7 customer support automation",
      "Analytics and performance tracking",
    ],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Improved Customer Service",
        description: "Provide instant responses to customer inquiries around the clock.",
      },
      {
        title: "Reduced Support Costs",
        description: "Automate routine inquiries and free up your support team.",
      },
      {
        title: "Valuable Customer Insights",
        description: "Gain insights from customer interactions to improve your products and services.",
      },
    ],
    cta: "Ready to implement an AI chatbot?",
  },
  "website-creation": {
    title: "Website Creation",
    description: "Get a beautiful, functional website optimized for conversion and user experience.",
    features: [
      "Custom design and development",
      "Mobile-responsive layouts",
      "SEO optimization",
      "Fast loading speeds",
      "Content management system",
      "Analytics integration",
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Professional Online Presence",
        description: "Make a great first impression with a modern, professional website.",
      },
      {
        title: "Better User Experience",
        description: "Keep visitors engaged with intuitive navigation and fast loading times.",
      },
      {
        title: "Higher Conversion Rates",
        description: "Turn visitors into customers with strategic design and calls-to-action.",
      },
    ],
    cta: "Ready for a website that converts?",
  },
  "online-advertising": {
    title: "Online Advertising",
    description: "Maximize your ROI with targeted advertising campaigns across multiple platforms.",
    features: [
      "Multi-platform campaign management",
      "Audience targeting and segmentation",
      "Ad creative development",
      "A/B testing and optimization",
      "Budget management",
      "Performance reporting",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    benefits: [
      {
        title: "Targeted Reach",
        description: "Get your message in front of the right people at the right time.",
      },
      {
        title: "Measurable Results",
        description: "Track the performance of your campaigns in real-time.",
      },
      {
        title: "Optimized ROI",
        description: "Continuously improve your campaigns to maximize return on investment.",
      },
    ],
    cta: "Ready to launch effective ad campaigns?",
  },
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.service]

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <ParticleBackground particleCount={30} />

      {/* Hero Section - Updated to match the preferred style */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <ParticleBackground particleCount={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="glass-card p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
                >
                  {service.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl mb-8 text-gray-300"
                >
                  {service.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <GradientButton variant="default" size="lg">
                    Get Started
                  </GradientButton>
                </motion.div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <AnimatedCard className="glass-card p-1 rounded-xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">What We Offer</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8"
              >
                Our {service.title} service is designed to help your business achieve its goals through strategic and
                data-driven approaches.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <AnimatedCard className="glass-card p-1 rounded-xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Benefits</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Here's how our {service.title} service can help your business grow and succeed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <AnimatedCard key={index} className="glass-card p-8 text-center" delay={0.1 * index}>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-primary">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Process</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              We follow a structured approach to deliver exceptional results for your business.
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
            <h2 className="text-3xl font-bold mb-6 text-white">{service.cta}</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white max-w-3xl mx-auto"
            >
              Contact us today to discuss how our {service.title} service can help your business grow and succeed.
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

      {/* Related Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Related Services</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Explore other services that complement {service.title}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(serviceData)
              .filter(([key]) => key !== params.service)
              .slice(0, 3)
              .map(([key, relatedService], index) => (
                <Link key={key} href={`/services/${key}`}>
                  <AnimatedCard
                    className="glass-card overflow-hidden transition-transform hover:scale-105"
                    delay={0.1 * index}
                  >
                    <div className="h-40 bg-gradient-to-r from-primary/20 to-purple-600/20 flex items-center justify-center text-white p-6">
                      <h3 className="text-2xl font-bold text-white">{relatedService.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 mb-4">{relatedService.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </AnimatedCard>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

