"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import ParticleBackground from "@/app/components/ParticleBackground"
import SparkleEffect from "@/app/components/SparkleEffect"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            >
              Have questions or ready to get started? Reach out to our team today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and one of our experts will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Growth</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="digital-auditing">Digital Auditing</option>
                    <option value="seo-content">SEO & Content Strategy</option>
                    <option value="chatbot-setup">Chatbot Setup</option>
                    <option value="website-creation">Website Creation</option>
                    <option value="online-advertising">Online Advertising</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project or inquiry" rows={5} required />
                </div>

                <Button type="submit" className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  You can also reach us using the information below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@dgpconsulting.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Business Ave, Suite 100
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256349542!2d-73.98784492426862!3d40.75097623440235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8d930c1aa0e52!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">What services do you offer?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer a comprehensive range of digital services including social media growth, AI automation,
                  digital auditing, SEO & content strategy, chatbot setup, website creation, and online advertising
                  campaigns.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">How long does it take to see results?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The timeline for results varies depending on the service and your specific goals. Some services like
                  website creation can show immediate results, while others like SEO may take 3-6 months to see
                  significant improvements. We'll provide you with a realistic timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer customized packages?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we understand that every business is unique. We offer customized packages tailored to your
                  specific needs and goals. Contact us to discuss your requirements and we'll create a solution that
                  works for you.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-3">How do you measure success?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We establish clear KPIs at the beginning of our engagement and provide regular reports on progress.
                  Depending on the service, metrics may include website traffic, conversion rates, social media
                  engagement, search rankings, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

