
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  Calendar, 
  MapPin, 
  TrendingUp,
  Users,
  Award,
  Target
} from 'lucide-react'

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Data Scientist",
      company: "Watercare Services Ltd",
      location: "Auckland, New Zealand",
      duration: "2021 – Present",
      type: "Current Role",
      companyInfo: "New Zealand's largest water utility serving 1.7M+ Auckland residents",
      achievements: [
        "Led Visual AI, Generative AI, and Snowflake Cortex AI initiatives achieving 90%+ accuracy in computer vision models",
        "Developed water consumption forecasting models with >80% BSP accuracy, supporting infrastructure planning for 1.7M+ residents",
        "Built anomaly detection systems reducing false-positive alerts by 35% and enabling identification of multiple fraud cases",
        "Single-handedly led data migration from Redshift to Snowflake, improving query performance by 40% and reducing costs by 25%",
        "Mentored and trained junior staff members in data science best practices and tools",
        "Created MLOps pipelines reducing model deployment time by 60% using AWS Lambda and Azure DevOps"
      ],
      technologies: ["Python", "R", "Snowflake", "AWS", "Azure", "DataRobot", "PowerBI", "MLOps", "Generative AI"],
      keyProjects: [
        "Smart Meter Anomaly Detection System",
        "Water Consumption Forecasting Platform", 
        "Fraud Detection Initiative",
        "Health & Safety AI Solutions",
        "Enterprise Data Migration Project"
      ]
    },
    {
      title: "Data Analyst / Data Engineer",
      company: "Watercare Services Ltd",
      location: "Auckland, New Zealand", 
      duration: "2019 – 2021",
      type: "Previous Role",
      companyInfo: "Focus on data engineering and analytics foundation",
      achievements: [
        "Led complex data migration projects with 100% data accuracy through precision migration protocols",
        "Conducted ETL operations using Talend and SQL ensuring data integrity across enterprise systems",
        "Generated detailed reconciliation reports and conducted in-depth trend analysis",
        "Provided technical guidance on data storage structures and quality assessments",
        "Collaborated closely with IT Operations and Engineering teams throughout migration processes"
      ],
      technologies: ["SQL", "Talend", "ETL", "Data Migration", "Python", "R", "Excel"],
      keyProjects: [
        "Large-Scale Data Migration Projects",
        "Data Quality Framework Implementation",
        "Reconciliation and Reporting Systems"
      ]
    },
    {
      title: "Geospatial Analyst",
      company: "TracMap Ltd",
      location: "Mosgiel, New Zealand",
      duration: "2017 – 2018", 
      type: "Industrial Research Project",
      companyInfo: "Agricultural technology and farm management solutions",
      achievements: [
        "Conducted spatial data analysis and time-series analysis on large agricultural datasets",
        "Developed predictive models for vegetation analysis and agricultural yield forecasting with 82% accuracy",
        "Automated merging of GIS farm management data with climatic datasets",
        "Created time-series models and heatmaps for predictive agricultural planning",
        "Streamlined data preparation processes improving efficiency by 50%"
      ],
      technologies: ["R", "Python", "GIS", "SQL", "Excel", "Spatial Analytics"],
      keyProjects: [
        "Agricultural Yield Prediction System",
        "Spatial Analysis & Resource Optimization",
        "Climate Data Integration Platform"
      ]
    },
    {
      title: "Data Analyst",
      company: "Tata Consultancy Services",
      location: "India",
      duration: "2014 – 2017",
      type: "Consulting Role",
      companyInfo: "Telecom Analytics for TalkTalk, UK - Major telecommunications client",
      achievements: [
        "Conducted comprehensive data analysis and generated insights reports for UK telecom operations",
        "Developed automated workflows using SQL, R, Excel, and Shell scripting improving analysis efficiency",
        "Designed and tested analytical and forecasting application workflows",
        "Ensured seamless data integration and reporting using MSBI tools",
        "Contributed to multiple analytic and forecasting projects with measurable business impact"
      ],
      technologies: ["SQL", "PL/SQL", "SSIS", "R", "MSBI", "Excel", "Shell Scripting"],
      keyProjects: [
        "Customer Analytics & Forecasting Platform",
        "Automated Reporting Systems",
        "Business Intelligence Solutions"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
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
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              9+ years of progressive experience across utilities, agriculture, and telecommunications sectors
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-12 md:pl-0' : 'md:pl-12 pl-12'}`}>
                    <Card className="hover-lift border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-8 space-y-6">
                        {/* Header */}
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                                <Building2 className="w-5 h-5" />
                                {exp.company}
                              </div>
                            </div>
                            <Badge 
                              variant={exp.type === "Current Role" ? "default" : "secondary"}
                              className="ml-2"
                            >
                              {exp.type}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground italic">
                            {exp.companyInfo}
                          </p>
                        </div>

                        {/* Key Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Projects */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            Key Projects
                          </h4>
                          <div className="space-y-1">
                            {exp.keyProjects.map((project, projIndex) => (
                              <div key={projIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                {project}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="pt-12">
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-background/50 to-secondary/5 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-center text-foreground mb-8">Career Summary</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <div className="text-3xl font-bold text-primary">2+</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Years as Sole Data Scientist</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <div className="text-3xl font-bold text-primary">8+</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Major Projects Led</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <div className="text-3xl font-bold text-primary">4</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Industry Sectors</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      <div className="text-3xl font-bold text-primary">3</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Team Members Mentored</div>
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
