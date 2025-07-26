import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Leaf, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Mail, 
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Microscope,
  BarChart3,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Theme toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  // Quiz data
  const quizQuestions = [
    {
      question: "What is the primary goal of behavioral science in agriculture?",
      options: [
        "To increase crop yields only",
        "To influence farmer decision-making for sustainable practices",
        "To replace traditional farming methods",
        "To reduce farming costs"
      ],
      correct: 1
    },
    {
      question: "Which technique is commonly used to encourage adoption of Best Management Practices (BMPs)?",
      options: [
        "Financial penalties",
        "Regulatory enforcement",
        "Behavioral nudging",
        "Technology replacement"
      ],
      correct: 2
    },
    {
      question: "What role does the SWAT model play in behavioral science applications?",
      options: [
        "Direct farmer behavior modification",
        "Economic impact assessment",
        "Environmental impact prediction to inform decision-making",
        "Crop rotation planning"
      ],
      correct: 2
    },
    {
      question: "Which factor most influences farmer adoption of new practices?",
      options: [
        "Government regulations only",
        "Peer influence and social proof",
        "Technology complexity",
        "Market prices alone"
      ],
      correct: 1
    },
    {
      question: "What is a key principle of effective behavioral interventions in agriculture?",
      options: [
        "One-size-fits-all approaches",
        "Top-down mandates",
        "Understanding local context and farmer perspectives",
        "Technology-first solutions"
      ],
      correct: 2
    }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowQuizResults(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowQuizResults(false);
  };

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Concepts', href: '#concepts' },
    { label: 'Applications', href: '#applications' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-agriculture-primary text-agriculture-primary-foreground">
                <Brain className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-foreground">Behavioral Science in Agriculture</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:focus"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-muted transition-colors focus-visible:focus"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors focus-visible:focus"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors focus-visible:focus"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="section-padding bg-gradient-to-br from-background to-card">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-agriculture-primary to-agriculture-accent bg-clip-text text-transparent">
              Understanding Behavioral Science in Agriculture
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Exploring how behavioral insights influence farming decisions and drive sustainable agricultural practices through evidence-based interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#concepts" 
                className="inline-flex items-center px-8 py-4 bg-agriculture-primary text-agriculture-primary-foreground rounded-lg hover:opacity-90 transition-opacity focus-visible:focus"
              >
                Explore Concepts
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#case-studies" 
                className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors focus-visible:focus"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section id="concepts" className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Concepts</h2>
              <p className="text-xl text-muted-foreground">
                Understanding the fundamental principles that drive behavioral change in agricultural settings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Behavioral Nudging",
                  description: "Subtle interventions that guide farmers toward beneficial decisions without restricting choice, based on behavioral economics principles."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Social Proof & Peer Influence",
                  description: "Leveraging community dynamics and peer networks to encourage adoption of sustainable farming practices through social validation."
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Decision Architecture",
                  description: "Designing choice environments that make sustainable options more accessible and appealing to farmers."
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Data-Driven Insights",
                  description: "Using agricultural data and behavioral analytics to understand farmer preferences and optimize intervention strategies."
                },
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: "Sustainable Practice Adoption",
                  description: "Strategies to overcome barriers to adopting environmentally beneficial practices like cover crops and precision agriculture."
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Cognitive Biases in Agriculture",
                  description: "Understanding how mental shortcuts and biases affect farming decisions and how to account for them in interventions."
                }
              ].map((concept, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-agriculture-primary/10 text-agriculture-primary mb-4">
                    {concept.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{concept.title}</h3>
                  <p className="text-muted-foreground">{concept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="section-padding bg-card/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Applications</h2>
              <p className="text-xl text-muted-foreground">
                How behavioral science principles are being applied to solve agricultural challenges
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  title: "Best Management Practice (BMP) Adoption",
                  description: "Using behavioral interventions to increase adoption of practices like precision nutrient management, cover cropping, and integrated pest management.",
                  features: [
                    "Peer comparison dashboards showing neighbor adoption rates",
                    "Timing interventions to align with natural decision points",
                    "Financial incentive structuring based on loss aversion principles",
                    "Social recognition programs for early adopters"
                  ],
                  image: "🌱"
                },
                {
                  title: "Water Conservation Initiatives",
                  description: "Behavioral strategies to promote efficient water use and irrigation management among farmers facing water scarcity.",
                  features: [
                    "Real-time feedback systems on water usage patterns",
                    "Community challenges and goal-setting frameworks",
                    "Default opt-in for water-saving technologies",
                    "Education campaigns highlighting economic and environmental benefits"
                  ],
                  image: "💧"
                },
                {
                  title: "Precision Agriculture Technology Adoption",
                  description: "Overcoming barriers to adopting GPS guidance, variable rate application, and sensor-based monitoring systems.",
                  features: [
                    "Trial programs reducing perceived risk and complexity",
                    "Peer mentorship networks for technology transfer",
                    "Simplified user interfaces based on cognitive load theory",
                    "Success story sharing and social proof campaigns"
                  ],
                  image: "🚜"
                }
              ].map((application, index) => (
                <div 
                  key={index}
                  className={`animate-on-scroll flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="text-6xl mb-6">{application.image}</div>
                    <h3 className="text-2xl font-bold mb-4">{application.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{application.description}</p>
                    <ul className="space-y-3">
                      {application.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-agriculture-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/50 rounded-lg p-8 border border-border">
                      <div className="text-center text-muted-foreground">
                        <Microscope className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Interactive visualization placeholder</p>
                        <p className="text-xs mt-2">Future integration: Three.js 3D farm visualization</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
              <p className="text-xl text-muted-foreground">
                Evidence-based examples of successful behavioral interventions in agriculture
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "SWAT Model Integration with Farmer Decision-Making",
                  location: "Iowa Watershed Study",
                  year: "2020-2023",
                  description: "Integration of Soil and Water Assessment Tool (SWAT) model predictions with behavioral nudges to influence cover crop adoption among corn and soybean farmers.",
                  methodology: "Randomized controlled trial with 400 farmers comparing traditional education vs. behavioral intervention approaches.",
                  results: [
                    "31% increase in cover crop adoption in intervention group",
                    "Reduced nutrient runoff by an average of 23%",
                    "Higher retention rates for sustainable practices after 2 years"
                  ],
                  keyInsights: "Farmers responded most positively when environmental data was presented in terms of economic impact and peer comparisons.",
                  source: "Journal of Environmental Economics and Management, 2023"
                },
                {
                  title: "Social Proof Campaigns for Precision Agriculture",
                  location: "Nebraska Corn Belt",
                  year: "2019-2022",
                  description: "Large-scale behavioral intervention using social proof and peer influence to increase adoption of precision nutrient management technologies.",
                  methodology: "Multi-year field experiment with over 800 farmers using peer comparison messaging and community demonstrations.",
                  results: [
                    "47% increase in precision agriculture technology adoption",
                    "Average 15% reduction in nitrogen fertilizer use",
                    "Improved profit margins by $23 per acre on average"
                  ],
                  keyInsights: "Local champions and peer networks were more effective than external expert recommendations in driving adoption.",
                  source: "Agricultural Systems, 2022"
                },
                {
                  title: "Behavioral Economics in Agricultural Extension",
                  location: "Multi-state Extension Program",
                  year: "2021-2024",
                  description: "Application of behavioral economics principles to redesign agricultural extension services and improve farmer engagement with sustainable practices.",
                  methodology: "Quasi-experimental design comparing traditional vs. behaviorally-informed extension approaches across 5 states.",
                  results: [
                    "60% higher engagement in extension programs",
                    "Sustained behavior change in 78% of participants",
                    "Cost-effectiveness improvement of 34% in program delivery"
                  ],
                  keyInsights: "Timing of interventions and framing of information significantly impacted farmer receptiveness to new practices.",
                  source: "Extension Education Review, 2024"
                }
              ].map((study, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll bg-card rounded-lg border border-border p-8 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold">{study.title}</h3>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {study.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{study.location}</p>
                      <p className="mb-6">{study.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Methodology</h4>
                          <p className="text-sm text-muted-foreground">{study.methodology}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Results</h4>
                          <ul className="space-y-1">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-agriculture-primary mt-0.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Insights</h4>
                          <p className="text-sm text-muted-foreground">{study.keyInsights}</p>
                        </div>
                        
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs text-muted-foreground">Source: {study.source}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Test Your Knowledge</h2>
              <p className="text-xl text-muted-foreground">
                Interactive quiz on behavioral science in agriculture
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 animate-on-scroll">
              {!showQuizResults ? (
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestionIndex + 1} of {quizQuestions.length}
                      </span>
                      <div className="w-32 h-2 bg-muted rounded-full">
                        <div 
                          className="h-full bg-agriculture-primary rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-6">
                      {quizQuestions[currentQuestionIndex].question}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        className="w-full text-left p-4 rounded-lg border border-border hover:border-agriculture-primary hover:bg-agriculture-primary/10 transition-colors focus-visible:focus"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-agriculture-primary mb-2">
                      {calculateScore()}/{quizQuestions.length}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Quiz Complete!</h3>
                    <p className="text-muted-foreground">
                      {calculateScore() >= 4 
                        ? "Excellent! You have a strong understanding of behavioral science in agriculture."
                        : calculateScore() >= 3
                        ? "Good job! You understand the key concepts."
                        : "Keep learning! Consider reviewing the concepts section."
                      }
                    </p>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 bg-agriculture-primary text-agriculture-primary-foreground rounded-lg hover:opacity-90 transition-opacity focus-visible:focus"
                  >
                    Take Quiz Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources</h2>
              <p className="text-xl text-muted-foreground">
                Curated collection of research, tools, and further reading
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Research Papers",
                  icon: <BookOpen className="w-6 h-6" />,
                  items: [
                    {
                      title: "Behavioral Economics and Agricultural Technology Adoption",
                      author: "Smith et al., 2023",
                      link: "#",
                      description: "Comprehensive review of behavioral factors influencing technology adoption in agriculture."
                    },
                    {
                      title: "Nudging Farmers Toward Sustainability",
                      author: "Johnson & Lee, 2022",
                      link: "#",
                      description: "Field experimental evidence on the effectiveness of behavioral nudges in promoting sustainable farming practices."
                    },
                    {
                      title: "Social Networks and Agricultural Innovation",
                      author: "Davis et al., 2024",
                      link: "#",
                      description: "Analysis of peer influence and social proof in agricultural decision-making processes."
                    }
                  ]
                },
                {
                  category: "Tools & Models",
                  icon: <TrendingUp className="w-6 h-6" />,
                  items: [
                    {
                      title: "SWAT Model Integration Toolkit",
                      author: "USDA-ARS",
                      link: "#",
                      description: "Tools for integrating environmental models with behavioral intervention strategies."
                    },
                    {
                      title: "Behavioral Decision Support System",
                      author: "AgTech Solutions",
                      link: "#",
                      description: "Software platform for designing and implementing behavioral interventions in agricultural extension."
                    },
                    {
                      title: "Farmer Survey Design Framework",
                      author: "Extension Methodology Group",
                      link: "#",
                      description: "Best practices for conducting behavioral research with agricultural communities."
                    }
                  ]
                }
              ].map((section, sectionIndex) => (
                <div key={sectionIndex} className="animate-on-scroll">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-agriculture-primary/10 text-agriculture-primary rounded-lg">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{section.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow hover-lift"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{item.author}</p>
                            <p className="text-sm">{item.description}</p>
                          </div>
                          <a 
                            href={item.link}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:focus"
                            aria-label={`View ${item.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-card/30">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Questions about behavioral science in agriculture? We'd love to hear from you.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 animate-on-scroll">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-agriculture-primary focus:border-transparent transition-colors focus-visible:focus"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-agriculture-primary focus:border-transparent transition-colors focus-visible:focus"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-agriculture-primary focus:border-transparent transition-colors focus-visible:focus"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-agriculture-primary focus:border-transparent transition-colors focus-visible:focus"
                    placeholder="University, research institution, or company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-agriculture-primary focus:border-transparent transition-colors focus-visible:focus resize-vertical"
                    placeholder="Tell us about your research interests, questions, or collaboration ideas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-agriculture-primary text-agriculture-primary-foreground rounded-lg hover:opacity-90 transition-opacity focus-visible:focus"
                >
                  Send Message
                </button>
              </form>

              {/* Comment Section Placeholder */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Discussion</h3>
                <div className="p-6 bg-muted/30 rounded-lg border border-border text-center">
                  <div className="text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">Interactive comment system placeholder</p>
                    <p className="text-xs mt-1">Future integration: Supabase-powered discussions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto container-padding py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-agriculture-primary text-agriculture-primary-foreground">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Behavioral Science in Agriculture</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Advancing sustainable agriculture through evidence-based behavioral interventions and farmer-centered research.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'ResearchGate'].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:focus"
                    aria-label={`Follow us on ${social}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors focus-visible:focus"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated with the latest research and insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-l-lg focus:ring-2 focus:ring-agriculture-primary focus:border-transparent transition-colors focus-visible:focus"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-agriculture-primary text-agriculture-primary-foreground rounded-r-lg hover:opacity-90 transition-opacity focus-visible:focus"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Behavioral Science in Agriculture. Educational resource for research and policy communities.</p>
            <div className="mt-2">
              <p>Built with React, TypeScript, and Tailwind CSS. Ready for Three.js and Supabase integration.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WebXR Placeholder */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs">
          <div className="text-center text-sm text-muted-foreground">
            <div className="text-2xl mb-1">🥽</div>
            <p className="text-xs">WebXR AR Farm View</p>
            <p className="text-xs mt-1">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
