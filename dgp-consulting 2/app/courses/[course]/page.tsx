"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, BookOpen, Clock, Users, Star, Play } from "lucide-react"
import GradientButton from "../../components/GradientButton"
import AnimatedCard from "../../components/AnimatedCard"
import ParticleBackground from "../../components/ParticleBackground"
import { motion } from "framer-motion"
import SparkleEffect from "../../components/SparkleEffect"

interface CoursePageProps {
  params: {
    course: string
  }
}

interface CourseData {
  title: string
  description: string
  image: string
  lessons: number
  students: number
  duration: string
  rating: number
  instructor: {
    name: string
    title: string
    image: string
    bio: string
  }
  modules: {
    title: string
    lessons: {
      title: string
      duration: string
    }[]
  }[]
  features: string[]
}

const courseData: Record<string, CourseData> = {
  "social-media-masterclass": {
    title: "Social Media Marketing Masterclass",
    description:
      "Learn how to create and implement effective social media strategies across all major platforms to grow your brand's presence and engagement.",
    image: "/placeholder.svg?height=600&width=1200",
    lessons: 15,
    students: 2450,
    duration: "8 hours",
    rating: 4.8,
    instructor: {
      name: "Sarah Johnson",
      title: "Social Media Strategist",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Sarah has over 10 years of experience in social media marketing, having worked with brands like Nike, Coca-Cola, and Samsung.",
    },
    modules: [
      {
        title: "Introduction to Social Media Marketing",
        lessons: [
          { title: "The Evolution of Social Media", duration: "15 min" },
          { title: "Setting Goals and KPIs", duration: "20 min" },
          { title: "Understanding Your Target Audience", duration: "25 min" },
        ],
      },
      {
        title: "Platform-Specific Strategies",
        lessons: [
          { title: "Instagram Marketing", duration: "45 min" },
          { title: "Facebook Marketing", duration: "40 min" },
          { title: "Twitter Marketing", duration: "30 min" },
          { title: "LinkedIn Marketing", duration: "35 min" },
          { title: "TikTok Marketing", duration: "40 min" },
        ],
      },
      {
        title: "Content Creation and Planning",
        lessons: [
          { title: "Content Calendar Development", duration: "30 min" },
          { title: "Visual Content Creation", duration: "45 min" },
          { title: "Copywriting for Social Media", duration: "35 min" },
        ],
      },
      {
        title: "Analytics and Optimization",
        lessons: [
          { title: "Measuring Campaign Performance", duration: "30 min" },
          { title: "A/B Testing Strategies", duration: "25 min" },
          { title: "Optimizing for Engagement", duration: "30 min" },
          { title: "Final Project", duration: "60 min" },
        ],
      },
    ],
    features: [
      "15 in-depth video lessons",
      "Downloadable resources and templates",
      "Real-world case studies",
      "Hands-on exercises and assignments",
      "Certificate of completion",
      "Lifetime access to course materials",
      "Community forum access",
      "Community forum access",
    ],
  },
  "advanced-seo": {
    title: "Advanced SEO Techniques",
    description:
      "Master advanced SEO strategies to boost your website's visibility and organic traffic with proven techniques used by industry experts.",
    image: "/placeholder.svg?height=600&width=1200",
    lessons: 12,
    students: 1850,
    duration: "6 hours",
    rating: 4.9,
    instructor: {
      name: "Michael Chen",
      title: "SEO Specialist",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Michael is an SEO expert with 12 years of experience who has helped over 200 businesses improve their search rankings.",
    },
    modules: [
      {
        title: "Technical SEO Mastery",
        lessons: [
          { title: "Site Architecture Optimization", duration: "30 min" },
          { title: "Advanced Schema Markup", duration: "35 min" },
          { title: "Mobile Optimization Strategies", duration: "25 min" },
        ],
      },
      {
        title: "Content Strategy for SEO",
        lessons: [
          { title: "Keyword Research Advanced Techniques", duration: "40 min" },
          { title: "Content Gap Analysis", duration: "30 min" },
          { title: "Creating SEO-Optimized Content", duration: "45 min" },
        ],
      },
      {
        title: "Link Building Strategies",
        lessons: [
          { title: "Advanced Link Building Techniques", duration: "40 min" },
          { title: "Backlink Analysis and Audit", duration: "35 min" },
          { title: "Outreach Strategies", duration: "30 min" },
        ],
      },
      {
        title: "Analytics and Reporting",
        lessons: [
          { title: "Advanced Google Analytics", duration: "45 min" },
          { title: "SEO Reporting Dashboards", duration: "30 min" },
          { title: "Final Project: SEO Audit", duration: "45 min" },
        ],
      },
    ],
    features: [
      "12 comprehensive video lessons",
      "SEO audit templates and checklists",
      "Keyword research tools access",
      "Real website optimization examples",
      "Certificate of completion",
      "Lifetime access to course materials",
      "Priority support from instructors",
    ],
  },
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courseData[params.course]

  if (!course) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <ParticleBackground particleCount={30} />

      {/* Hero Section with semi-transparent, shimmering effect */}
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
                  {course.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl mb-8 text-gray-300"
                >
                  {course.description}
                </motion.p>
                <div className="flex flex-wrap gap-6 mb-8 text-gray-300">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 fill-current text-amber-400" />
                    <span>{course.rating} rating</span>
                  </div>
                </div>
                <GradientButton size="lg">
                  Enroll Now - $99 <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
              </div>
            </div>
            <div className="lg:w-1/2">
              <AnimatedCard className="overflow-hidden rounded-xl">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4 cursor-pointer hover:bg-white/30 transition-colors">
                      <Play className="h-10 w-10 fill-white text-white" />
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-white">Course Content</h2>
              <div className="space-y-6">
                {course.modules.map((module, moduleIndex) => (
                  <AnimatedCard
                    key={moduleIndex}
                    className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
                  >
                    <div className="p-6 border-b border-white/10">
                      <h3 className="text-xl font-bold text-white">
                        Module {moduleIndex + 1}: {module.title}
                      </h3>
                    </div>
                    <div className="divide-y divide-white/10">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="p-4 flex justify-between items-center hover:bg-white/5">
                          <div className="flex items-center">
                            <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 text-primary">
                              <Play className="h-4 w-4" />
                            </div>
                            <span className="text-gray-300">{lesson.title}</span>
                          </div>
                          <span className="text-gray-400">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-8 text-white">Your Instructor</h2>
              <AnimatedCard className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={course.instructor.image || "/placeholder.svg"}
                    alt={course.instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{course.instructor.name}</h3>
                    <p className="text-primary">{course.instructor.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{course.instructor.bio}</p>
                <Link href="#">
                  <GradientButton variant="outline" className="w-full">
                    View Profile
                  </GradientButton>
                </Link>
              </AnimatedCard>

              <h2 className="text-3xl font-bold mt-12 mb-8 text-white">What You'll Get</h2>
              <AnimatedCard className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <ul className="space-y-4">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 backdrop-blur-sm"></div>
        <SparkleEffect className="absolute inset-0" count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
              Join thousands of students who have already taken this course and transformed their skills.
            </p>
            <GradientButton variant="secondary" size="lg" className="px-8">
              Enroll Now - $99
            </GradientButton>
            <p className="mt-4 text-white/80">30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(courseData)
              .filter(([key]) => key !== params.course)
              .map(([key, relatedCourse]) => (
                <Link key={key} href={`/courses/${key}`}>
                  <AnimatedCard className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image
                        src={relatedCourse.image || "/placeholder.svg"}
                        alt={relatedCourse.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{relatedCourse.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-2">{relatedCourse.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-amber-500">
                          <Star className="h-4 w-4 mr-1 fill-current" />
                          <span>{relatedCourse.rating}</span>
                        </div>
                        <span className="text-gray-400">{relatedCourse.duration}</span>
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

