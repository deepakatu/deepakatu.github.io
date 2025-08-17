
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Code2, 
  Brain, 
  Cloud, 
  BarChart3, 
  Database,
  Cpu,
  Layers,
  GitBranch
} from 'lucide-react'

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-600",
      skills: [
        { name: "Python", level: 95, years: "7+" },
        { name: "R", level: 90, years: "6+" },
        { name: "SQL", level: 95, years: "9+" },
        { name: "Java", level: 80, years: "5+" },
        { name: "Excel VBA", level: 85, years: "8+" }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "text-purple-600",
      skills: [
        { name: "Generative AI", level: 90, years: "2+" },
        { name: "Computer Vision", level: 85, years: "3+" },
        { name: "Time Series Analysis", level: 92, years: "6+" },
        { name: "Predictive Modeling", level: 95, years: "8+" },
        { name: "Anomaly Detection", level: 88, years: "4+" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "text-green-600",
      skills: [
        { name: "AWS", level: 85, years: "4+" },
        { name: "Azure", level: 80, years: "3+" },
        { name: "Snowflake", level: 95, years: "3+" },
        { name: "Snowflake Cortex AI", level: 85, years: "2+" },
        { name: "DataRobot", level: 85, years: "3+" }
      ]
    },
    {
      icon: BarChart3,
      title: "Visualization & BI",
      color: "text-orange-600",
      skills: [
        { name: "PowerBI", level: 95, years: "4+" },
        { name: "Python Dash", level: 88, years: "3+" },
        { name: "R Shiny", level: 85, years: "4+" },
        { name: "React", level: 70, years: "1+" },
        { name: "Advanced Excel", level: 92, years: "9+" }
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "text-red-600",
      skills: [
        { name: "dbt", level: 85, years: "2+" },
        { name: "ETL Pipelines", level: 90, years: "6+" },
        { name: "Data Migration", level: 92, years: "4+" },
        { name: "Talend", level: 80, years: "3+" },
        { name: "PySpark/Snowpark", level: 85, years: "3+" }
      ]
    },
    {
      icon: GitBranch,
      title: "MLOps & DevOps",
      color: "text-indigo-600",
      skills: [
        { name: "Docker", level: 85, years: "3+" },
        { name: "Git", level: 95, years: "7+" },
        { name: "Azure DevOps", level: 82, years: "2+" },
        { name: "CI/CD Pipelines", level: 80, years: "3+" },
        { name: "Model Deployment", level: 88, years: "4+" }
      ]
    }
  ]

  const frameworks = [
    "Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", 
    "Scipy", "AutoML", "Jupyter", "Matplotlib", "Seaborn"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the entire data science and AI/ML technology stack
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group"
              >
                <Card className="p-6 hover-lift border-0 shadow-lg bg-background/60 backdrop-blur-sm">
                  <CardContent className="space-y-6 p-0">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-primary/10`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.years} experience
                            </span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Frameworks & Libraries */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Frameworks & Libraries
              </h3>
              <p className="text-muted-foreground">
                Extensive experience with industry-standard tools and frameworks
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/5 via-background/50 to-secondary/5 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-3 justify-center">
                  {frameworks.map((framework, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover-lift cursor-default"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {framework}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Domain Expertise */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-lift border-0 shadow-lg bg-background/60 backdrop-blur-sm">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground">Utilities Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Water management, smart meter analysis, infrastructure planning
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover-lift border-0 shadow-lg bg-background/60 backdrop-blur-sm">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground">Agricultural Technology</h4>
                <p className="text-sm text-muted-foreground">
                  Crop yield prediction, spatial analysis, resource optimization
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover-lift border-0 shadow-lg bg-background/60 backdrop-blur-sm">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground">Telecommunications</h4>
                <p className="text-sm text-muted-foreground">
                  Customer analytics, forecasting, business intelligence
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
