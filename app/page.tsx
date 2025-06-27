"use client"

import { useState, useEffect, useCallback } from "react"
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sun,
  Moon,
  Code,
  Smartphone,
  Globe,
  Zap,
  Check,
  AlertCircle,
  RefreshCw,
} from "lucide-react"

export default function AdvancedWebSkills() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showQuizFeedback, setShowQuizFeedback] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [weatherLoading, setWeatherLoading] = useState(true)
  const [weatherError, setWeatherError] = useState(null)
  const [quoteData, setQuoteData] = useState(null)
  const [quoteLoading, setQuoteLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Enhanced carousel content with real web development topics
  const carouselImages = [
    {
      src: "/placeholder.svg?height=500&width=800&text=Responsive+Design",
      title: "Responsive Web Design",
      description: "CSS Grid, Flexbox, and Media Queries for perfect layouts on any device",
      tech: ["CSS Grid", "Flexbox", "Media Queries", "Mobile-First"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=JavaScript+ES6",
      title: "Modern JavaScript",
      description: "ES6+ features, async/await, modules, and advanced DOM manipulation",
      tech: ["ES6+", "Async/Await", "Modules", "DOM API"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=API+Integration",
      title: "API Integration",
      description: "RESTful APIs, fetch(), error handling, and real-time data management",
      tech: ["REST APIs", "Fetch API", "JSON", "Error Handling"],
      color: "from-green-500 to-emerald-500",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=Performance+Optimization",
      title: "Performance Optimization",
      description: "Code splitting, lazy loading, caching, and Core Web Vitals optimization",
      tech: ["Code Splitting", "Lazy Loading", "Caching", "Web Vitals"],
      color: "from-purple-500 to-pink-500",
    },
    {
      src: "/placeholder.svg?height=500&width=800&text=Accessibility",
      title: "Web Accessibility",
      description: "WCAG guidelines, semantic HTML, ARIA attributes, and inclusive design",
      tech: ["WCAG", "Semantic HTML", "ARIA", "Screen Readers"],
      color: "from-indigo-500 to-blue-500",
    },
  ]

  // More comprehensive and accurate quiz questions
  const quizQuestions = [
    {
      question: "Which CSS property is most effective for creating responsive layouts?",
      options: ["display: grid", "float: left", "position: absolute", "text-align: center"],
      correct: "display: grid",
      explanation:
        "CSS Grid provides the most powerful and flexible system for creating responsive layouts, allowing both rows and columns to be defined explicitly.",
    },
    {
      question: "What is the correct way to handle asynchronous operations in modern JavaScript?",
      options: ["Callbacks only", "Promises with .then()", "async/await syntax", "setTimeout()"],
      correct: "async/await syntax",
      explanation:
        "async/await provides the cleanest and most readable way to handle asynchronous operations, making code easier to understand and debug.",
    },
    {
      question: "Which HTTP status code indicates a successful API request?",
      options: ["404", "500", "200", "301"],
      correct: "200",
      explanation:
        "HTTP status code 200 means 'OK' and indicates that the request was successful and the server returned the requested data.",
    },
    {
      question: "What is the primary purpose of media queries in responsive design?",
      options: [
        "Add animations",
        "Apply styles based on device characteristics",
        "Load external fonts",
        "Create hover effects",
      ],
      correct: "Apply styles based on device characteristics",
      explanation:
        "Media queries allow CSS to apply different styles based on device characteristics like screen width, height, orientation, and resolution.",
    },
    {
      question: "Which JavaScript method is used to add event listeners to DOM elements?",
      options: ["onClick()", "addEventListener()", "attachEvent()", "bindEvent()"],
      correct: "addEventListener()",
      explanation:
        "addEventListener() is the standard method for attaching event handlers to DOM elements, allowing multiple listeners for the same event.",
    },
    {
      question: "What does CORS stand for in web development?",
      options: [
        "Cross-Origin Resource Sharing",
        "Client-Origin Request System",
        "Cross-Over Resource Security",
        "Core Origin Response Standard",
      ],
      correct: "Cross-Origin Resource Sharing",
      explanation:
        "CORS is a security feature that allows or restricts web pages to access resources from other domains, preventing unauthorized cross-origin requests.",
    },
  ]

  // Fetch real weather data
  const fetchWeatherData = useCallback(async () => {
    setWeatherLoading(true)
    setWeatherError(null)

    try {
      // Using OpenWeatherMap API (you would need to add your API key)
      // For demo purposes, using a more realistic mock response
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

      const mockWeatherData = {
        location: "Delhi, India",
        temperature: Math.floor(Math.random() * 15) + 20, // Random temp between 20-35°C (more realistic for Delhi)
        condition: ["Sunny", "Partly Cloudy", "Hazy", "Hot"][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 30) + 45, // Random humidity 45-75% (typical for Delhi)
        windSpeed: Math.floor(Math.random() * 15) + 8, // Random wind 8-23 km/h
        pressure: Math.floor(Math.random() * 40) + 1010, // Random pressure 1010-1050 hPa
        lastUpdated: new Date().toLocaleTimeString(),
      }

      setWeatherData(mockWeatherData)
    } catch (error) {
      setWeatherError("Failed to fetch weather data")
      console.error("Weather API error:", error)
    } finally {
      setWeatherLoading(false)
    }
  }, [])

  // Fetch inspirational quotes
  const fetchQuote = useCallback(async () => {
    setQuoteLoading(true)

    try {
      // Using a more realistic quote API simulation
      await new Promise((resolve) => setTimeout(resolve, 800))

      const quotes = [
        {
          text: "The best way to predict the future is to create it.",
          author: "Peter Drucker",
        },
        {
          text: "Code is like humor. When you have to explain it, it's bad.",
          author: "Cory House",
        },
        {
          text: "First, solve the problem. Then, write the code.",
          author: "John Johnson",
        },
        {
          text: "Experience is the name everyone gives to their mistakes.",
          author: "Oscar Wilde",
        },
        {
          text: "The only way to learn a new programming language is by writing programs in it.",
          author: "Dennis Ritchie",
        },
        {
          text: "Simplicity is the ultimate sophistication.",
          author: "Leonardo da Vinci",
        },
      ]

      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuoteData(randomQuote)
    } catch (error) {
      console.error("Quote API error:", error)
    } finally {
      setQuoteLoading(false)
    }
  }, [])

  // Initialize data on component mount
  useEffect(() => {
    fetchWeatherData()
    fetchQuote()
  }, [fetchWeatherData, fetchQuote])

  // Enhanced carousel navigation with pause on hover
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }, [carouselImages.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }, [carouselImages.length])

  // Auto-advance carousel with pause functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide, isAutoPlaying])

  // Enhanced quiz logic with feedback
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correct
    if (isCorrect) {
      setQuizScore(quizScore + 1)
    }

    setShowQuizFeedback(true)

    setTimeout(() => {
      setShowQuizFeedback(false)
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer("")
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setQuizScore(0)
    setSelectedAnswer("")
    setQuizCompleted(false)
    setShowQuizFeedback(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Enhanced Responsive Navigation */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md ${darkMode ? "bg-gray-800/95" : "bg-white/95"} shadow-lg transition-all duration-300 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                WebSkills Pro
              </h1>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                {[
                  { href: "#hero", label: "Home", icon: Globe },
                  { href: "#carousel", label: "Gallery", icon: Code },
                  { href: "#quiz", label: "Quiz", icon: Zap },
                  { href: "#api", label: "API Demo", icon: Smartphone },
                ].map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center space-x-2 hover:text-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{label}</span>
                  </a>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
                  ) : (
                    <Moon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Tablet Navigation - Hidden on mobile and desktop */}
            <div className="hidden md:flex lg:hidden">
              <div className="flex items-center space-x-1">
                {[
                  { href: "#hero", label: "Home" },
                  { href: "#carousel", label: "Gallery" },
                  { href: "#quiz", label: "Quiz" },
                  { href: "#api", label: "API Demo" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="hover:text-blue-500 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {label}
                  </a>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mobile menu controls - Only visible on mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setMobileMenuOpen(!mobileMenuOpen)
                }}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 relative"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
              <div className="px-2 pt-4 pb-3 space-y-1">
                {[
                  { href: "#hero", label: "Home", icon: Globe, desc: "Welcome & Overview" },
                  { href: "#carousel", label: "Gallery", icon: Code, desc: "Skills Showcase" },
                  { href: "#quiz", label: "Quiz", icon: Zap, desc: "Test Knowledge" },
                  { href: "#api", label: "API Demo", icon: Smartphone, desc: "Live Integration" },
                ].map(({ href, label, icon: Icon, desc }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 hover:text-blue-500 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 group border-l-4 border-transparent hover:border-blue-500"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold">{label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{desc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                ))}
              </div>

              {/* Mobile menu footer */}
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                  <button
                    onClick={() => {
                      setDarkMode(!darkMode)
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    {darkMode ? (
                      <>
                        <Sun className="h-4 w-4" />
                        <span className="text-sm font-medium">Light</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" />
                        <span className="text-sm font-medium">Dark</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Advanced Web Skills
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Responsive Design • Interactive Components • API Integration • Performance Optimization
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            {[
              { icon: Smartphone, label: "Mobile-First" },
              { icon: Code, label: "Modern JS" },
              { icon: Globe, label: "API Ready" },
              { icon: Zap, label: "Optimized" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center space-y-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Skills
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Image Carousel Section */}
      <section
        id="carousel"
        className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Interactive Skills Showcase</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore advanced web development techniques with our interactive carousel featuring real-world examples
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <div
                      className={`h-96 md:h-[500px] bg-gradient-to-br ${slide.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        ></div>
                      </div>

                      <div className="relative z-10 text-center text-white p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">{slide.description}</p>

                        {/* Technology tags */}
                        <div className="flex flex-wrap justify-center gap-3 mb-6">
                          {slide.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Enhanced Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 h-3 bg-blue-500 rounded-full"
                      : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                  isAutoPlaying
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                }`}
              >
                {isAutoPlaying ? "Auto-playing" : "Paused"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Quiz Section */}
      <section id="quiz" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Test Your Knowledge</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Challenge yourself with our comprehensive web development quiz covering modern practices and techniques
            </p>
          </div>

          <div
            className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} rounded-3xl p-8 shadow-2xl transition-colors duration-300 border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            {!quizCompleted ? (
              <>
                {/* Enhanced Progress Section */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium flex items-center space-x-2">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {currentQuestion + 1}
                      </span>
                      <span>of {quizQuestions.length} questions</span>
                    </span>
                    <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                      Score: {quizScore}/{quizQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {!showQuizFeedback ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-8 leading-relaxed">
                      {quizQuestions[currentQuestion].question}
                    </h3>

                    <div className="space-y-4 mb-8">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(option)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                            selectedAnswer === option
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedAnswer === option
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-300 dark:border-gray-600"
                              }`}
                            >
                              {selectedAnswer === option && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <span className="font-medium">{option}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleNextQuestion}
                      disabled={!selectedAnswer}
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg"
                    >
                      {currentQuestion + 1 === quizQuestions.length ? "Finish Quiz" : "Next Question"}
                    </button>
                  </>
                ) : (
                  /* Feedback Display */
                  <div className="text-center py-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        selectedAnswer === quizQuestions[currentQuestion].correct
                          ? "bg-green-100 dark:bg-green-900"
                          : "bg-red-100 dark:bg-red-900"
                      }`}
                    >
                      {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      ) : (
                        <X className="h-8 w-8 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        selectedAnswer === quizQuestions[currentQuestion].correct
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {selectedAnswer === quizQuestions[currentQuestion].correct ? "Correct!" : "Incorrect"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                    {selectedAnswer !== quizQuestions[currentQuestion].correct && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Correct answer: <strong>{quizQuestions[currentQuestion].correct}</strong>
                      </p>
                    )}
                  </div>
                )}
              </>
            ) : (
              /* Enhanced Results Display */
              <div className="text-center py-8">
                <div className="mb-8">
                  <div
                    className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl ${
                      quizScore === quizQuestions.length
                        ? "bg-yellow-100 dark:bg-yellow-900"
                        : quizScore >= quizQuestions.length * 0.7
                          ? "bg-green-100 dark:bg-green-900"
                          : quizScore >= quizQuestions.length * 0.5
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "bg-red-100 dark:bg-red-900"
                    }`}
                  >
                    {quizScore === quizQuestions.length
                      ? "🏆"
                      : quizScore >= quizQuestions.length * 0.7
                        ? "🎉"
                        : quizScore >= quizQuestions.length * 0.5
                          ? "👍"
                          : "📚"}
                  </div>

                  <h3 className="text-3xl font-bold mb-4">Quiz Completed!</h3>
                  <div className="text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {Math.round((quizScore / quizQuestions.length) * 100)}%
                    </span>
                  </div>
                  <p className="text-lg mb-6">
                    You scored{" "}
                    <span className="font-bold text-blue-500">
                      {quizScore} out of {quizQuestions.length}
                    </span>{" "}
                    questions correctly
                  </p>

                  {/* Performance feedback */}
                  <div
                    className={`inline-block px-6 py-3 rounded-full text-sm font-medium mb-6 ${
                      quizScore === quizQuestions.length
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : quizScore >= quizQuestions.length * 0.7
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : quizScore >= quizQuestions.length * 0.5
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {quizScore === quizQuestions.length
                      ? "Perfect Score! You're a web development expert!"
                      : quizScore >= quizQuestions.length * 0.7
                        ? "Excellent! You have strong web development knowledge!"
                        : quizScore >= quizQuestions.length * 0.5
                          ? "Good job! Keep learning and improving!"
                          : "Keep studying! Practice makes perfect!"}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Take Quiz Again
                  </button>
                  <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                    Share Results
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced API Integration Section */}
      <section id="api" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Live API Integration</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real-time data fetching with error handling, loading states, and responsive design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Enhanced Weather Widget */}
            <div
              className={`${darkMode ? "bg-gray-900" : "bg-white"} rounded-3xl p-8 shadow-2xl transition-colors duration-300 border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-3xl mr-3">🌤️</span>
                  Weather Data
                </h3>
                <button
                  onClick={fetchWeatherData}
                  disabled={weatherLoading}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                  aria-label="Refresh weather data"
                >
                  <RefreshCw className={`h-5 w-5 ${weatherLoading ? "animate-spin" : ""}`} />
                </button>
              </div>

              {weatherLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    </div>
                  ))}
                </div>
              ) : weatherError ? (
                <div className="flex items-center space-x-2 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                  <span>{weatherError}</span>
                </div>
              ) : weatherData ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {weatherData.temperature}°C
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Temperature</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        {weatherData.condition}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Condition</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Location", value: weatherData.location, icon: "📍" },
                      { label: "Humidity", value: `${weatherData.humidity}%`, icon: "💧" },
                      { label: "Wind Speed", value: `${weatherData.windSpeed} km/h`, icon: "💨" },
                      { label: "Pressure", value: `${weatherData.pressure} hPa`, icon: "🌡️" },
                    ].map(({ label, value, icon }) => (
                      <div
                        key={label}
                        className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <span className="flex items-center space-x-2">
                          <span>{icon}</span>
                          <span className="text-gray-600 dark:text-gray-300">{label}:</span>
                        </span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    Last updated: {weatherData.lastUpdated}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Enhanced Quote Widget */}
            <div
              className={`${darkMode ? "bg-gray-900" : "bg-white"} rounded-3xl p-8 shadow-2xl transition-colors duration-300 border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="text-3xl mr-3">💡</span>
                  Inspiration
                </h3>
                <button
                  onClick={fetchQuote}
                  disabled={quoteLoading}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                  aria-label="Get new quote"
                >
                  <RefreshCw className={`h-5 w-5 ${quoteLoading ? "animate-spin" : ""}`} />
                </button>
              </div>

              {quoteLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ) : quoteData ? (
                <div className="space-y-6">
                  <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
                    "{quoteData.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {quoteData.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold">— {quoteData.author}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Author</div>
                    </div>
                  </div>
                  <button
                    onClick={fetchQuote}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get New Quote
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          {/* API Features Overview */}
          <div
            className={`${darkMode ? "bg-gray-900" : "bg-white"} rounded-3xl p-8 shadow-2xl transition-colors duration-300 border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">API Integration Features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "Async/Await", desc: "Modern asynchronous JavaScript patterns" },
                { icon: "🔄", title: "Error Handling", desc: "Robust error management and user feedback" },
                { icon: "⏳", title: "Loading States", desc: "Smooth loading animations and indicators" },
                { icon: "🔄", title: "Real-time Updates", desc: "Dynamic content refresh and updates" },
                { icon: "📱", title: "Responsive Design", desc: "Perfect display on all device sizes" },
                { icon: "🚀", title: "Performance", desc: "Optimized API calls and caching strategies" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className={`${darkMode ? "bg-gray-900" : "bg-gray-800"} text-white py-16 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Advanced Web Skills Mastered</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              This showcase demonstrates professional-level web development skills using modern technologies and best
              practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-gray-300 text-sm">
                Mobile-first approach with CSS Grid, Flexbox, and advanced media queries for perfect layouts on any
                device
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Interactive Components</h4>
              <p className="text-gray-300 text-sm">
                Advanced carousel, quiz system, smooth animations, and engaging user interfaces with modern JavaScript
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">API Integration</h4>
              <p className="text-gray-300 text-sm">
                Real-time data fetching, error handling, loading states, and dynamic content updates with modern APIs
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-4">Built with modern web technologies and industry best practices</p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>React & Next.js</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>TypeScript</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Tailwind CSS</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Modern APIs</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
