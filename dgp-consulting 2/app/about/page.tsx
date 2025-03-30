"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Quote, Award, Users, Building } from "lucide-react"
import TextGlimmer from "../components/TextGlimmer"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"
import SparkleEffect from "../components/SparkleEffect"
import ParticleBackground from "../components/ParticleBackground"
import { motion } from "framer-motion"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Sarah founded DGP Consulting to help businesses achieve sustainable growth through innovative digital strategies.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings 12 years of experience in AI and automation, leading our technical initiatives and ensuring we stay at the cutting edge of digital innovation.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Priya Patel",
      role: "Head of Digital Strategy",
      bio: "Priya specializes in comprehensive digital strategy development, with particular expertise in SEO, content marketing, and social media growth.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Rodriguez",
      role: "Lead Marketing Consultant",
      bio: "David has helped over 200 businesses transform their digital presence through data-driven marketing strategies and innovative campaigns.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const testimonials = [
    {
      quote:
        "DGP Consulting transformed our digital presence completely. Our social media engagement increased by 300% and our conversion rate doubled within just three months.",
      author: "Amanda Lewis",
      company: "Horizon Retail",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The team at DGP doesn't just deliver results, they provide insights and knowledge that have helped us build internal capabilities. They're true partners in our success.",
      author: "James Wilson",
      company: "Nexus Technologies",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with DGP Consulting has been a game-changer for our business. Their AI automation solutions have saved us countless hours and significantly improved our customer service.",
      author: "Elena Martinez",
      company: "Global Solutions Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "DGP Consulting was established with a mission to help businesses navigate the digital landscape.",
    },
    {
      year: "2017",
      title: "Expanded Services",
      description:
        "Added AI automation and chatbot services to our portfolio, becoming early adopters in the industry.",
    },
    {
      year: "2019",
      title: "100th Client",
      description: "Reached the milestone of helping 100 businesses transform their digital presence.",
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve our growing international client base.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for innovation and excellence in digital consulting.",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <ParticleBackground particleCount={40} glow={true} />

      {/* Hero Section with semi-transparent, shimmering effect */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <ParticleBackground particleCount={40} />
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  About DGP Consulting
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                We're a team of digital growth experts passionate about helping businesses thrive in the digital
                landscape
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <TextGlimmer text="Our Mission" className="text-3xl md:text-4xl font-serif font-medium mb-6" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300">
                  At DGP Consulting, our mission is to empower businesses with innovative digital solutions that drive
                  sustainable growth and meaningful engagement in an increasingly competitive landscape.
                </p>
                <p className="text-lg text-gray-300">
                  We believe that every business, regardless of size or industry, deserves access to cutting-edge
                  digital strategies and technologies that can transform their online presence and help them connect
                  with their audience in meaningful ways.
                </p>
                <p className="text-lg text-gray-300">
                  Our approach combines data-driven insights, creative thinking, and technical expertise to deliver
                  customized solutions that address the unique challenges and opportunities of each client we serve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link href="/contact">
                  <GradientButton size="lg">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </GradientButton>
                </Link>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <AnimatedCard className="glass-card p-1 rounded-xl">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="DGP Consulting Team"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedCard>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Award-Winning Agency</p>
                    <p className="text-sm text-gray-400">Excellence in Digital Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard className="glass-card p-8 text-center" delay={0.1}>
              <div className="text-5xl font-bold text-gradient mb-2">500+</div>
              <p className="text-xl text-gray-300">Clients Served</p>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-8 text-center" delay={0.2}>
              <div className="text-5xl font-bold text-gradient mb-2">15+</div>
              <p className="text-xl text-gray-300">Years Experience</p>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-8 text-center" delay={0.3}>
              <div className="text-5xl font-bold text-gradient mb-2">98%</div>
              <p className="text-xl text-gray-300">Client Satisfaction</p>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-8 text-center" delay={0.4}>
              <div className="text-5xl font-bold text-gradient mb-2">20+</div>
              <p className="text-xl text-gray-300">Industry Awards</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextGlimmer text="Meet Our Team" className="text-3xl md:text-4xl font-serif font-medium mb-4" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Our team of experts brings together diverse skills and experiences to deliver exceptional results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedCard
                key={index}
                className="glass-card overflow-hidden"
                glowColor="rgba(139, 92, 246, 0.3)"
                delay={0.1 * index}
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-1 text-gradient">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextGlimmer text="Our Journey" className="text-3xl md:text-4xl font-serif font-medium mb-4" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Key milestones in our company's history
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 to-purple-600/50"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2"></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center z-10"
                  >
                    <span className="text-white font-bold">{milestone.year}</span>
                  </motion.div>
                  <AnimatedCard
                    className={`w-1/2 glass-card p-6 ${index % 2 === 0 ? "ml-12" : "mr-12"}`}
                    delay={0.2 * index}
                  >
                    <h3 className="text-xl font-serif font-medium mb-2 text-gradient">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextGlimmer text="Our Core Values" className="text-3xl md:text-4xl font-serif font-medium mb-4" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The principles that guide our work and relationships
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard className="glass-card p-8" delay={0.1}>
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-gradient">Excellence</h3>
              <p className="text-gray-300">
                We are committed to delivering the highest quality work in everything we do, exceeding expectations and
                setting new standards in our industry.
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-8" delay={0.2}>
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-gradient">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership, working closely with our clients and each other to achieve
                shared goals and create lasting value.
              </p>
            </AnimatedCard>

            <AnimatedCard className="glass-card p-8" delay={0.3}>
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-primary">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-gradient">Innovation</h3>
              <p className="text-gray-300">
                We embrace change and continuously seek new and better ways to solve problems and create opportunities
                for our clients in the digital landscape.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextGlimmer text="Client Testimonials" className="text-3xl md:text-4xl font-serif font-medium mb-4" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              What our clients say about working with us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} className="glass-card p-8 relative" delay={0.1 * index}>
                <div className="absolute top-6 left-6 text-primary opacity-20">
                  <Quote className="h-16 w-16" />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 backdrop-blur-sm"></div>
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 text-white"
            >
              Let's discuss how we can help your business achieve its digital growth goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <GradientButton size="lg" variant="secondary" className="text-lg px-8">
                  Contact Us
                </GradientButton>
              </Link>
              <Link href="/services">
                <GradientButton
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10"
                >
                  Our Services
                </GradientButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

