"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Star, Users, Clock } from "lucide-react"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"
import SparkleEffect from "../components/SparkleEffect"
import ParticleBackground from "../components/ParticleBackground"
import { motion } from "framer-motion"

export default function CoursesPage() {
  const featuredCourses = [
    {
      title: "Social Media Marketing Masterclass",
      description: "Learn how to create and implement effective social media strategies across all major platforms.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 15,
      students: 2450,
      duration: "8 hours",
      rating: 4.8,
      href: "/courses/social-media-masterclass",
      featured: true,
    },
    {
      title: "Advanced SEO Techniques",
      description: "Master advanced SEO strategies to boost your website's visibility and organic traffic.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 12,
      students: 1850,
      duration: "6 hours",
      rating: 4.9,
      href: "/courses/advanced-seo",
      featured: true,
    },
  ]

  const allCourses = [
    {
      title: "Content Marketing Fundamentals",
      description: "Learn how to create engaging content that drives traffic and conversions.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 10,
      students: 1200,
      duration: "5 hours",
      rating: 4.7,
      href: "/courses/content-marketing",
      category: "Marketing",
    },
    {
      title: "Email Marketing Automation",
      description: "Build effective email campaigns and automation sequences that convert.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 8,
      students: 950,
      duration: "4 hours",
      rating: 4.6,
      href: "/courses/email-marketing",
      category: "Marketing",
    },
    {
      title: "Digital Advertising Mastery",
      description: "Learn how to create and optimize ads across Google, Facebook, and Instagram.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 14,
      students: 1650,
      duration: "7 hours",
      rating: 4.8,
      href: "/courses/digital-advertising",
      category: "Advertising",
    },
    {
      title: "Analytics & Data Interpretation",
      description: "Learn how to analyze marketing data and make data-driven decisions.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 9,
      students: 780,
      duration: "4.5 hours",
      rating: 4.7,
      href: "/courses/analytics",
      category: "Analytics",
    },
    {
      title: "Conversion Rate Optimization",
      description: "Improve your website's conversion rate with proven techniques and strategies.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 11,
      students: 920,
      duration: "5.5 hours",
      rating: 4.8,
      href: "/courses/cro",
      category: "Optimization",
    },
    {
      title: "AI for Digital Marketing",
      description: "Leverage AI tools and techniques to enhance your marketing efforts.",
      image: "/placeholder.svg?height=400&width=600",
      lessons: 12,
      students: 1100,
      duration: "6 hours",
      rating: 4.9,
      href: "/courses/ai-marketing",
      category: "Technology",
    },
  ]

  return (
    <div className="pt-24 pb-16">
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
              Online Courses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            >
              Enhance your digital marketing skills with our comprehensive courses
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Featured Courses</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our most popular and comprehensive courses to boost your digital marketing skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <AnimatedCard
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden"
                glowColor="rgba(139, 92, 246, 0.3)"
              >
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-amber-500">
                      <Star className="h-4 w-4 mr-2 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <Link href={course.href}>
                    <GradientButton className="w-full">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </GradientButton>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">All Courses</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Browse our complete catalog of digital marketing courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <AnimatedCard
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gray-800/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center text-amber-500">
                      <Star className="h-4 w-4 mr-2 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <Link href={course.href}>
                    <GradientButton variant="outline" className="w-full">
                      View Course <ArrowRight className="ml-2 h-4 w-4" />
                    </GradientButton>
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Courses</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts and gain practical skills you can apply immediately
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-8 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Expert Instructors</h3>
              <p className="text-gray-300">
                Learn from industry professionals with years of real-world experience and proven results.
              </p>
            </AnimatedCard>

            <AnimatedCard className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-8 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-primary">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Practical Curriculum</h3>
              <p className="text-gray-300">
                Our courses focus on practical skills and strategies you can implement immediately.
              </p>
            </AnimatedCard>

            <AnimatedCard className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-8 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-primary">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Lifetime Access</h3>
              <p className="text-gray-300">
                Enroll once and get lifetime access to course content, including all future updates.
              </p>
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
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Enhance Your Skills?</h2>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their careers with our courses.
            </p>
            <Link href="/courses">
              <GradientButton size="lg" className="px-8">
                Browse All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

