
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, 
  TrendingUp, 
  Award, 
  Target,
  MapPin,
  Calendar,
  Mail
} from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Users,
      title: "Leadership Excellence",
      description: "Led cross-functional teams and mentored 2-3 junior staff members while serving as sole data scientist for 2+ years"
    },
    {
      icon: TrendingUp,
      title: "Quantifiable Impact",
      description: "Achieved >80% accuracy in forecasting models, reduced false-positives by 35%, and improved operational efficiency significantly"
    },
    {
      icon: Award,
      title: "Domain Expertise",
      description: "Deep expertise in utilities analytics, serving 1.7M+ Auckland residents through advanced water management solutions"
    },
    {
      icon: Target,
      title: "AI Innovation",
      description: "Led Visual AI, Generative AI, and Snowflake Cortex AI initiatives with measurable operational improvements across enterprise systems"
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming complex data challenges into intelligent business solutions through innovative AI/ML approaches
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-8 hover-lift border-0 shadow-lg bg-background/60 backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Dynamic and results-driven Senior Data Scientist with <strong className="text-foreground">9+ years</strong> of comprehensive 
                    experience in data science, machine learning, and advanced analytics across utilities, telecommunications, 
                    agriculture, and urban infrastructure sectors.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Currently serving as the <strong className="text-foreground">sole data scientist</strong> at Watercare Services Ltd, 
                    New Zealand's largest water utility, where I lead enterprise-scale ML initiatives, mentor cross-functional 
                    teams, and develop solutions that impact <strong className="text-foreground">1.7M+ residents</strong> across Auckland.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    My expertise spans from traditional machine learning to cutting-edge <strong className="text-foreground">Generative AI</strong> and 
                    <strong className="text-foreground"> Computer Vision</strong>, with a proven track record of translating complex analytics 
                    into actionable business insights and operational improvements.
                  </p>

                  {/* Contact Info Cards */}
                  <div className="grid grid-cols-1 gap-4 pt-6">
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-sm text-muted-foreground">Auckland, New Zealand</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Experience</div>
                        <div className="text-sm text-muted-foreground">9+ Years in Data Science & AI/ML</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">Work Authorization</div>
                        <div className="text-sm text-muted-foreground">NZ Permanent Resident</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Differentiators */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Differentiators</h3>
              
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <Card className="p-6 hover-lift border-0 shadow-md bg-background/80 backdrop-blur-sm group-hover:bg-background transition-all duration-300">
                      <CardContent className="flex items-start gap-4 p-0">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <highlight.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievement Stats */}
          <motion.div variants={itemVariants} className="pt-12">
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-background/50 to-secondary/5 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-center text-foreground mb-8">Career Achievements</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">80%+</div>
                    <div className="text-sm text-muted-foreground">Forecasting Accuracy</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">35%</div>
                    <div className="text-sm text-muted-foreground">False-Positive Reduction</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">60%</div>
                    <div className="text-sm text-muted-foreground">Deployment Time Improvement</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">40%</div>
                    <div className="text-sm text-muted-foreground">Query Performance Boost</div>
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
