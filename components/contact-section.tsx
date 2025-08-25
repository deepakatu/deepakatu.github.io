
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  MessageSquare,
  Loader2,
  Calendar,
  Briefcase,
  CheckCircle,
  Linkedin
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website')
    const body = encodeURIComponent(`Hi Deepak,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`)
    
    const mailtoUrl = `mailto:deepakmanonz@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoUrl
    
    // Show success message
    toast({
      title: "Opening Email Client",
      description: "Your default email application should open with the message pre-filled.",
    })
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "deepakmanonz@gmail.com",
      description: "Best way to reach me for opportunities",
      action: "mailto:deepakmanonz@gmail.com"
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   value: "(021) 0830 ",
    //   description: "Available for calls and interviews",
    //   action: "tel:+64210830"
    // },
    {
      icon: MapPin,
      title: "Location",
      value: "Auckland, New Zealand",
      description: "Available for opportunities in New Zealand and Australia",
      action: null
    },
    {
      icon: Linkedin,              // Import from lucide-react (see below)
      title: "LinkedIn",
      value: "Deepak Mnoharan",
      description: "Connect with me on LinkedIn",
      action: "https://www.linkedin.com/in/deepak-manoharan-nz/"
    }
  ]

  const availability = [
    {
      icon: Calendar,
      title: "Availability",
      value: "4 Weeks Notice",
      description: "Ready to begin new opportunities"
    },
    {
      icon: Briefcase,
      title: "Work Authorization",
      value: "NZ Permanent Resident",
      description: "Eligible to work in New Zealand"
    },
    {
      icon: CheckCircle,
      title: "Status",
      value: "Actively Seeking Opportunities",
      description: "Open to Data Science & AI/ML roles"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss data science opportunities and how I can contribute to your team's success
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form + CTA */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover-lift border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardContent className="space-y-6 p-0">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                      <p className="text-muted-foreground">
                        I'm interested in hearing about new opportunities and collaborations
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@company.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                          Subject
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Job opportunity, collaboration, consultation..."
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about the opportunity, your project, or how I can help..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                          className="resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-3 text-lg hover-lift"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center">
                        Or email me directly at{' '}
                        <a 
                          href="mailto:deepakmanonz@gmail.com?subject=Data Science Opportunity"
                          className="text-primary hover:underline font-medium"
                        >
                          deepakmanonz@gmail.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA Card - Moved to Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-r from-primary/10 via-background/50 to-secondary/10 border-0 shadow-lg">
                  <CardContent className="text-center space-y-4 p-0">
                    <h3 className="text-xl font-bold text-foreground">Let's Build Something Amazing</h3>
                    <p className="text-muted-foreground">
                      Ready to leverage 9+ years of data science expertise to drive your business forward
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('mailto:deepakmanonz@gmail.com?subject=Senior Data Scientist Role&body=Hi Deepak,%0D%0A%0D%0AI would like to discuss a senior data scientist opportunity', '_blank')}
                      >
                        Quick Email
                      </Button>
                      {/* <Button 
                        size="sm"
                        onClick={() => window.open('tel:+64210830', '_self')}
                      >
                        Call Now
                      </Button> */}
                      <Button 
                        // variant="outline"
                        size="sm"
                        onClick={() => window.open('https://www.linkedin.com/in/deepak-manoharan-nz/', '_blank')}
                      >
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Contact Info & Availability */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardContent className="space-y-6 p-0">
                    <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="group">
                          {info.action ? (
                            <a 
                              href={info.action}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <info.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {info.title}
                                </h4>
                                <p className="text-foreground font-medium">{info.value}</p>
                                <p className="text-sm text-muted-foreground">{info.description}</p>
                              </div>
                            </a>
                          ) : (
                            <div className="flex items-start gap-4 p-4 rounded-lg">
                              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <info.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-semibold text-foreground">{info.title}</h4>
                                <p className="text-foreground font-medium">{info.value}</p>
                                <p className="text-sm text-muted-foreground">{info.description}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardContent className="space-y-6 p-0">
                    <h3 className="text-xl font-bold text-foreground">Availability & Status</h3>
                    
                    <div className="space-y-4">
                      {availability.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-foreground font-medium">{item.value}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
