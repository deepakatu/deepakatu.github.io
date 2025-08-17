
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  BookOpen,
  Trophy,
  Star
} from 'lucide-react'

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Master of Business Data Science",
      institution: "University of Otago",
      location: "New Zealand",
      duration: "2017 – 2018",
      type: "Master's Degree",
      focus: "Advanced analytics, machine learning, and business applications",
      description: "Comprehensive program focusing on the intersection of business strategy and data science, covering advanced statistical modeling, machine learning algorithms, and practical business applications.",
      highlights: [
        "Advanced Statistical Modeling and Machine Learning",
        "Business Intelligence and Analytics Strategy",
        "Data Visualization and Communication",
        "Practical Industry Project Experience"
      ],
      relevantCourses: [
        "Advanced Machine Learning",
        "Statistical Analysis",
        "Business Intelligence",
        "Data Mining",
        "Predictive Analytics"
      ]
    },
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Anna University",
      location: "India",
      duration: "2009 – 2013",
      type: "Bachelor's Degree",
      focus: "Programming, algorithms, and software engineering principles",
      description: "Strong foundation in computer science fundamentals including programming languages, data structures, algorithms, software engineering, and database management systems.",
      highlights: [
        "Strong Programming Foundation",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Engineering Principles"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "System Design"
      ]
    }
  ]

  const certifications = [
    {
      title: "SnowPro® Associate: Platform Certification",
      issuer: "Snowflake Inc.",
      year: "2025",
      description: "Snowflake platform fundamentals including architecture, data loading, and SQL operations",
      icon: Award,
      color: "text-cyan-600",
      logo: "/assets/certifications/snowpro-associate.png"
    },
    {
      title: "Visual AI Certificate",
      issuer: "DataRobot",
      year: "2023",
      description: "Advanced computer vision and AI model development using DataRobot platform",
      icon: Trophy,
      color: "text-blue-600",
      logo: "/assets/certifications/datarobot-visual-ai.png"
    },
    
    {
      title: "Oracle Certified Professional",
      issuer: "Oracle Corporation",
      year: "2018",
      description: "Java Programmer Certification demonstrating advanced Java development skills",
      icon: Award,
      color: "text-red-600",
      logo: "/assets/certifications/oracle-certified-professional.png"
    },
    {
      title: "Oracle SQL Developer Certified Associate",
      issuer: "Oracle Corporation", 
      year: "2017",
      description: "Database development and SQL optimization certification",
      icon: Star,
      color: "text-orange-600",
      logo: "/assets/certifications/oracle-sql-developer.png"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strong academic foundation in data science and computer science with industry-recognized certifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="hover-lift border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left Column - Basic Info */}
                      <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="outline">{edu.type}</Badge>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <BookOpen className="w-4 h-4" />
                              <span className="font-semibold text-primary">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.duration}</span>
                            </div>
                          </div>

                          <div className="bg-primary/5 rounded-lg p-3">
                            <p className="text-sm font-medium text-foreground mb-1">Focus Area</p>
                            <p className="text-sm text-muted-foreground">{edu.focus}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Columns - Details */}
                      <div className="lg:col-span-2 space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Program Highlights */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Program Highlights</h4>
                            <ul className="space-y-2">
                              {edu.highlights.map((highlight, hlIndex) => (
                                <li key={hlIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Relevant Courses */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Key Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.relevantCourses.map((course, courseIndex) => (
                                <Badge key={courseIndex} variant="secondary" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                Professional <span className="text-gradient">Certifications</span>
              </h3>
              <p className="text-muted-foreground">
                Industry-recognized certifications demonstrating expertise in key technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="p-6 h-full hover-lift border-0 shadow-md bg-background/80 backdrop-blur-sm text-center">
                    <CardContent className="space-y-4 p-0 flex flex-col h-full">
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300 border border-border/50">
                        <div className="relative w-16 h-16">
                          <Image
                            src={cert.logo}
                            alt={`${cert.title} logo`}
                            fill
                            className="object-contain"
                            sizes="64px"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-primary font-medium">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {cert.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Development Summary */}
          <motion.div variants={itemVariants} className="pt-12">
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-background/50 to-secondary/5 border-0 shadow-lg">
              <CardContent className="p-0 text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Continuous Learning & Development</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Committed to staying current with emerging technologies and industry best practices through 
                  continuous education, professional certifications, and practical application of cutting-edge 
                  data science and AI/ML methodologies.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Degrees Earned</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Professional Certifications</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">9+</div>
                    <div className="text-sm text-muted-foreground">Years of Applied Learning</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
