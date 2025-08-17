
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Droplets, 
  Brain, 
  Shield, 
  Cloud,
  Sprout,
  Phone,
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  Database,
  Zap,
  Eye
} from 'lucide-react'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Smart Meter Anomaly Detection System",
      category: "Water Management & Utilities Analytics",
      icon: Droplets,
      description: "Advanced ML system for real-time anomaly detection in smart meter data with fraud identification capabilities",
      impact: "87% precision rate with early detection of system irregularities and multiple fraud cases identified",
      achievements: [
        "Single-handedly led project development and implementation",
        "Integrated multiple data sources including weather, consumption patterns, and infrastructure data",
        "Achieved early detection of system irregularities enabling proactive maintenance",
        "Successfully identified multiple fraudulent activities saving significant revenue"
      ],
      technologies: ["Python", "Scikit-learn", "Time Series Analysis", "Anomaly Detection", "PowerBI", "AWS"],
      stakeholders: "Operations teams, Customer Service, Security departments",
      metrics: {
        accuracy: "87%",
        improvement: "35%",
        impact: "Multiple fraud cases detected"
      }
    },
    {
      title: "Water Consumption Forecasting Platform",
      category: "Predictive Analytics & Infrastructure Planning",
      icon: TrendingUp,
      description: "Time-series forecasting models for demand planning across Auckland region with seasonal pattern integration",
      impact: ">80% BSP accuracy supporting infrastructure planning for 1.7M+ residents",
      achievements: [
        "Built comprehensive forecasting models achieving >80% BSP accuracy",
        "Incorporated seasonal patterns, weather data, and demographic factors",
        "Supported infrastructure planning decisions for 1.7M+ Auckland residents",
        "Improved resource allocation efficiency by 25%"
      ],
      technologies: ["Python", "R", "Time Series Analysis", "Neural Networks", "Snowflake", "PowerBI"],
      stakeholders: "Operations management, Engineering teams, Executive leadership",
      metrics: {
        accuracy: ">80%",
        improvement: "25%",
        impact: "1.7M+ residents served"
      }
    },
    {
      title: "Visual AI & Computer Vision Solutions",
      category: "AI Innovation & Automation",
      icon: Eye,
      description: "Sophisticated computer vision models for operational efficiency improvements using cutting-edge AI technologies",
      impact: "90%+ accuracy in computer vision models with measurable operational improvements",
      achievements: [
        "Led Visual AI, Generative AI, and Cortex AI initiatives using DataRobot and Databricks",
        "Created computer vision models achieving 90%+ accuracy",
        "Established automated MLOps workflows reducing deployment time by 60%",
        "Integrated with Snowflake and AWS for enterprise-scale deployment"
      ],
      technologies: ["Computer Vision", "DataRobot", "Databricks", "Snowflake", "AWS", "MLOps", "Cortex AI"],
      stakeholders: "Operations teams, IT leadership, Engineering departments",
      metrics: {
        accuracy: "90%+",
        improvement: "60%",
        impact: "Automated operational processes"
      }
    },
    {
      title: "Fraud Detection & Security Initiative",
      category: "Security & Risk Management",
      icon: Shield,
      description: "ML-based fraud detection system with advanced algorithms for identifying suspicious activities",
      impact: "Successfully identified multiple fraudulent activities with 85%+ precision in anomaly detection",
      achievements: [
        "Led fraud detection project identifying multiple fraudulent activities",
        "Implemented ML-based anomaly detection algorithms with >85% precision",
        "Collaborated with Operations and Security teams for fraud prevention measures",
        "Saved significant revenue and improved system integrity"
      ],
      technologies: ["Machine Learning", "Anomaly Detection", "Python", "Statistical Analysis", "Security Analytics"],
      stakeholders: "Operations teams, Security departments, Executive leadership",
      metrics: {
        accuracy: "85%+",
        improvement: "Multiple cases detected",
        impact: "Significant revenue saved"
      }
    },
    {
      title: "Enterprise Data Migration Project",
      category: "Data Engineering & Cloud Migration",
      icon: Cloud,
      description: "End-to-end migration from AWS Redshift to Snowflake with comprehensive data integration",
      impact: "40% query performance improvement and 25% cost reduction with zero data loss",
      achievements: [
        "Led enterprise-scale data migration from Redshift to Snowflake",
        "Managed end-to-end integration using dbt, Snowflake, and Snowpark",
        "Achieved zero data loss and minimal downtime during migration",
        "Improved query performance by 40% and reduced infrastructure costs by 25%"
      ],
      technologies: ["Snowflake", "AWS Redshift", "dbt", "Snowpark", "Data Engineering", "Cloud Migration"],
      stakeholders: "IT Operations, Engineering teams, Executive leadership",
      metrics: {
        accuracy: "100%",
        improvement: "40%",
        impact: "25% cost reduction"
      }
    },
    {
      title: "Agricultural Yield Prediction System",
      category: "Agricultural Technology & Geospatial Analytics",
      icon: Sprout,
      description: "Predictive models for crop yield forecasting integrating GIS data with climatic datasets",
      impact: "82% accuracy in crop yield forecasting with 50% efficiency improvement in data preparation",
      achievements: [
        "Integrated GIS farm management data with climatic datasets",
        "Developed predictive models achieving 82% accuracy in yield forecasting",
        "Created automated data preparation workflows improving efficiency by 50%",
        "Built heatmaps and visualization tools for farming strategy optimization"
      ],
      technologies: ["R", "Python", "GIS Analysis", "Spatial Statistics", "Predictive Modeling", "Data Visualization"],
      stakeholders: "Agricultural clients, Farm management teams, Resource planners",
      metrics: {
        accuracy: "82%",
        improvement: "50%",
        impact: "Optimized farming strategies"
      }
    }
  ]

  const githubRepos = [
    {
      name: "snowflake-cortex-analysis",
      description: "Advanced analytics using Snowflake Cortex AI capabilities with automated pipelines",
      technologies: ["Snowflake", "Cortex AI", "Python", "ML"],
      status: "Public"
    },
    {
      name: "pdf-expense-extraction", 
      description: "Automated expense extraction from PDF documents using computer vision and NLP",
      technologies: ["Computer Vision", "OCR", "NLP", "Python"],
      status: "Public"
    },
    {
      name: "smart-meter-anomaly-detection",
      description: "Real-time anomaly detection system for smart meter data with IoT processing",
      technologies: ["Time Series", "Anomaly Detection", "IoT", "Python"],
      status: "Public"
    },
    {
      name: "redshift-snowflake-migration",
      description: "Comprehensive migration toolkit with ETL pipelines and performance optimization",
      technologies: ["Data Engineering", "ETL", "Cloud Migration", "SQL"],
      status: "Public"
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
    <section ref={ref} className="py-20">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformative data science projects with measurable business impact across multiple industries
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-background/60 backdrop-blur-sm group-hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 space-y-6 h-full flex flex-col">
                    {/* Project Header */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {project.category}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Impact Metrics */}
                    <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Key Impact</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                      <div className="grid grid-cols-3 gap-4 pt-2">
                        <div className="text-center">
                          <div className="font-bold text-primary text-lg">{project.metrics.accuracy}</div>
                          <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary text-lg">{project.metrics.improvement}</div>
                          <div className="text-xs text-muted-foreground">Improvement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-primary text-lg">✓</div>
                          <div className="text-xs text-muted-foreground">Success</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-3 flex-1">
                      <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stakeholders */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="font-medium">Stakeholders:</span>
                        <span>{project.stakeholders}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Portfolio Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-foreground">
                GitHub <span className="text-gradient">Portfolio</span>
              </h3>
              <p className="text-muted-foreground">
                Open source projects and code repositories showcasing technical expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {githubRepos.map((repo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="p-6 hover-lift border-0 shadow-md bg-background/80 backdrop-blur-sm">
                    <CardContent className="space-y-4 p-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {repo.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {repo.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {repo.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {repo.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <Database className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          Available for code review upon request
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center pt-8">
              <Card className="p-6 bg-gradient-to-r from-primary/5 via-background/50 to-secondary/5 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Database className="w-5 h-5" />
                    <span>Complete GitHub profile available upon request for detailed code review and technical assessment</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
