"use client"
import { useState, useEffect } from "react"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BubbleBackground } from "@/components/bubble-background"
import {
  ArrowUp,
  ArrowRight,
  Droplet,
  Award,
  Users,
  Star,
  Quote,
  Zap,
  Shield,
  Headphones,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"

// Product data
const products = [
  {
    id: 1,
    name: "Premium Glass Aquarium 60L",
    price: "₹4,500",
    image: "/60l-glass-aquarium.jpg",
    description: "High-quality tempered glass aquarium perfect for freshwater fish",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 2,
    name: "Aquatic Air Pump System",
    price: "₹1,200",
    image: "/aquarium-air-pump-system.jpg",
    description: "Efficient oxygen circulation system with whisper-quiet operation",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Advanced Filter Unit",
    price: "₹2,800",
    image: "/aquarium-filter-unit.jpg",
    description: "Multi-stage filtration system for crystal clear water",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 4,
    name: "LED Aquarium Lights Pro",
    price: "₹3,200",
    image: "/led-aquarium-lights.jpg",
    description: "RGB LED lighting with adjustable brightness and color modes",
    rating: 4.9,
    reviews: 267,
  },
  {
    id: 5,
    name: "Aquatic Plants Starter Kit",
    price: "₹800",
    image: "/aquatic-plants-kit.jpg",
    description: "Complete assortment of live aquatic plants for aquascaping",
    rating: 4.6,
    reviews: 142,
  },
  {
    id: 6,
    name: "Premium Fish Food Set",
    price: "₹600",
    image: "/fish-food-premium.jpg",
    description: "Nutritious feed for tropical and cold-water fish",
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 7,
    name: "Aquarium Heater 200W",
    price: "₹1,500",
    image: "/aquarium-heater-200w.jpg",
    description: "Reliable temperature control for tropical aquariums",
    rating: 4.7,
    reviews: 95,
  },
  {
    id: 8,
    name: "Water Testing Kit",
    price: "₹950",
    image: "/water-testing-kit.jpg",
    description: "Comprehensive water quality testing with full parameter checks",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 9,
    name: "Decorative Cave Set",
    price: "₹700",
    image: "/aquarium-cave-decoration.jpg",
    description: "Natural-looking caves and hiding spots for fish",
    rating: 4.5,
    reviews: 121,
  },
]

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Sonarpur, Kolkata",
    rating: 5,
    text: "Exceptional quality and service! AquaWave helped me set up my first aquarium with expert guidance. Highly recommended!",
    date: "2 months ago",
    image: "/professional-man-avatar.jpg",
  },
  {
    name: "Priya Sharma",
    location: "Kolkata",
    rating: 5,
    text: "Best aquarium shop I've found! The fish are healthy, equipment is premium quality, and customer support is outstanding.",
    date: "1 month ago",
    image: "/professional-woman-avatar.jpg",
  },
  {
    name: "Amit Patel",
    location: "Sonarpur",
    rating: 4,
    text: "Great products and knowledgeable staff. The WhatsApp ordering system is super convenient!",
    date: "3 weeks ago",
    image: "/man-smile-avatar.jpg",
  },
  {
    name: "Neha Gupta",
    location: "Kolkata",
    rating: 5,
    text: "Amazing collection of plants and fish. The water testing kit they recommended works perfectly for my aquarium.",
    date: "2 weeks ago",
    image: "/woman-happy-avatar.jpg",
  },
  {
    name: "Vikram Singh",
    location: "Sonarpur",
    rating: 5,
    text: "Professional service from start to finish. They even provided setup tips and maintenance advice. Worth every penny!",
    date: "1 week ago",
    image: "/professional-man-portrait.jpg",
  },
  {
    name: "Anjali Das",
    location: "Kolkata",
    rating: 4,
    text: "Beautiful aquarium designs! The team really knows their stuff about fish care and equipment. Loved the experience.",
    date: "5 days ago",
    image: "/woman-professional-avatar.jpg",
  },
]

// Why we're best data
const reasons = [
  {
    icon: Award,
    title: "Premium Quality Guarantee",
    description:
      "Every product is handpicked and tested for quality. We only stock items from trusted, verified suppliers.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    description: "Quick processing of orders with same-day delivery options available in Sonarpur and nearby areas.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Our aquatic specialists are always available via WhatsApp to answer your questions and provide guidance.",
  },
  {
    icon: Shield,
    title: "Guaranteed Fish Health",
    description:
      "All fish come with health certification. We provide replacement guarantee for DOA (Dead on Arrival) items.",
  },
  {
    icon: Rocket,
    title: "Complete Aquarium Solutions",
    description: "From setup consultation to maintenance support, we handle everything for your aquatic ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description:
      "Best prices in the market without compromising on quality. Regular discounts and seasonal offers available.",
  },
]

// FAQs data
const faqsData = [
  {
    question: "What types of fish do you stock?",
    answer:
      "We stock a wide variety of freshwater and saltwater fish including tropical species, goldfish, bettas, cichlids, and many others. Visit our store or contact us on WhatsApp for specific species availability.",
  },
  {
    question: "Do you deliver to areas outside Sonarpur?",
    answer:
      "Yes! We deliver throughout Kolkata and nearby areas. Delivery times and charges depend on your location. Contact us via WhatsApp to confirm delivery to your area.",
  },
  {
    question: "What's your return policy?",
    answer:
      "All fish come with a health guarantee. If any fish arrives dead (DOA), we replace it free of cost. For equipment, we offer returns within 7 days if unopened.",
  },
  {
    question: "Do you offer aquarium setup services?",
    answer:
      "Yes! Our experts can help you set up your aquarium from scratch. We provide consultation on tank placement, equipment setup, and maintenance routines.",
  },
  {
    question: "How often should I maintain my aquarium?",
    answer:
      "Regular maintenance is crucial. We recommend weekly water testing, monthly 25% water changes, and filter cleaning every 2 weeks. Our team can guide you through the complete process.",
  },
  {
    question: "Are your products covered by warranty?",
    answer:
      "Yes! All equipment comes with manufacturer warranty. Fish are covered by our health guarantee for 48 hours from delivery.",
  },
  {
    question: "Can I order products online?",
    answer:
      "We primarily use WhatsApp for orders, which makes the process quick and personal. Simply message us with the product name and quantity, and we'll confirm availability and pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, UPI, online transfers, and digital wallets. Payment details are confirmed during order placement via WhatsApp.",
  },
]

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const increment = end / 50
    const interval = setInterval(() => {
      start += increment
      if (start >= end) {
        setDisplayValue(end)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(interval)
  }, [value])

  return <>{displayValue}</>
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="glassmorphism-lg rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-50 transition-all duration-300"
      >
        <h3 className="font-semibold text-left">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-border text-muted-foreground">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [showAllFAQs, setShowAllFAQs] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const visibleFAQs = showAllFAQs ? faqsData : faqsData.slice(0, 3)

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
        {/* ===== HERO SECTION ===== */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden px-4"
        >
          <BubbleBackground />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 from-cyan-400 to-blue-600 mix-blend-multiply"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 from-blue-400 to-cyan-600 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Welcome to AquaWave
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Premium aquariums, exotic fish, and complete aquatic solutions. Creating underwater worlds since day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#products"
                className="glassmorphism-lg px-8 py-4 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-white/50 hover:scale-105"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="glassmorphism-lg px-8 py-4 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* ===== ABOUT US SECTION ===== */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About AquaWave
            </h2>

            <div className="glassmorphism-lg p-12 rounded-2xl mb-12">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AquaWave was founded with a simple mission: to make the joy of keeping aquatic life accessible to
                  everyone. What started as a small passion has grown into a trusted destination for premium aquariums
                  and aquatic supplies in Sonarpur, Kolkata.
                </p>
                <p>
                  Over the years, we've built relationships with premium suppliers from around the world, ensuring that
                  our customers receive only the finest fish, plants, and equipment. Every product in our collection is
                  handpicked to meet our stringent quality standards.
                </p>
                <p>
                  Today, AquaWave stands as a beacon of expertise and reliability in the aquarium industry. We're not
                  just a shop; we're a community of aquatic enthusiasts dedicated to creating thriving underwater
                  ecosystems.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Quality First", desc: "Premium products sourced from trusted suppliers worldwide" },
                  { title: "Customer Care", desc: "Dedicated support through every step of your aquatic journey" },
                  { title: "Expert Guidance", desc: "Professional advice from experienced aquarium specialists" },
                  { title: "Sustainability", desc: "Committed to ethical practices and responsible sourcing" },
                ].map((value, idx) => (
                  <div key={idx} className="glassmorphism-lg p-6 rounded-xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES/WHY CHOOSE US SECTION ===== */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose AquaWave
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Droplet,
                  title: "Premium Quality",
                  description: "Handpicked fish and equipment from trusted suppliers",
                },
                {
                  icon: Award,
                  title: "Expert Guidance",
                  description: "Professional advice for setting up your perfect aquarium",
                },
                {
                  icon: Users,
                  title: "Customer Support",
                  description: "24/7 support via WhatsApp for all your aquatic needs",
                },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="glassmorphism-lg p-8 rounded-xl hover:bg-opacity-10 transition-all duration-300 hover:border-cyan-400/50"
                  >
                    <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Why We're Best Grid */}
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our Key Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <div
                    key={idx}
                    className="glassmorphism-lg p-8 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 10, label: "Years Experience" },
                { number: 5000, label: "Happy Customers" },
                { number: 1000, label: "Products Available" },
              ].map((stat, idx) => (
                <div key={idx} className="glassmorphism-lg p-6 rounded-xl text-center">
                  <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    <AnimatedNumber value={stat.number} />
                    {stat.label.includes("Available") ? "+" : stat.label.includes("Years") ? "+" : "+"}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
              {/* Rating stat with star icon */}
              <div className="glassmorphism-lg p-6 rounded-xl text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">4.8★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRODUCTS SECTION ===== */}
        <section id="products" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Premium Products
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Carefully curated selection of aquariums, fish, equipment, and accessories for your aquatic dreams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="glassmorphism-lg rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <WhatsAppButton productName={product.name} productPrice={product.price} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto glassmorphism-lg p-12 rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us via WhatsApp for custom orders and special requests
              </p>
              <a
                href="https://wa.me/917278404766?text=Hi%20AquaWave!%20I'm%20interested%20in%20custom%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glassmorphism px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-white/50 hover:scale-105"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ===== REVIEWS SECTION ===== */}
        <section id="reviews" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Customer Reviews
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Real experiences from our valued customers
            </p>

            <div className="glassmorphism-lg p-8 rounded-2xl w-fit mx-auto mb-16">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-4xl font-bold text-cyan-400">4.8</p>
                  <p className="text-sm text-muted-foreground">out of 5</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on 847 reviews</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="glassmorphism-lg p-8 rounded-xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Quote className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <p className="text-muted-foreground italic">{review.text}</p>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border border-cyan-400/30"
                      />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto glassmorphism-lg p-12 rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-6">Share Your Experience</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Have you had a great experience with AquaWave? We'd love to hear about it!
              </p>
              <a
                href="https://wa.me/917278404766?text=Hi%20AquaWave!%20I'd%20like%20to%20share%20my%20review%20and%20feedback."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glassmorphism px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-white/50 hover:scale-105"
              >
                Send Your Review
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQs SECTION ===== */}
        <section id="faqs" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 mb-8">
              {visibleFAQs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16">
              <button
                onClick={() => setShowAllFAQs(!showAllFAQs)}
                className="inline-block glassmorphism-lg px-8 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/50 dark:hover:shadow-white/50 hover:scale-105"
              >
                {showAllFAQs ? "View Less" : "View More"}
              </button>
            </div>

            <div className="max-w-4xl mx-auto glassmorphism-lg p-12 rounded-2xl text-center">
              <h3 className="text-3xl font-bold mb-6">Still Have Questions?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert team is ready to help. Contact us anytime via WhatsApp
              </p>
              <a
                href="https://wa.me/917278404766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glassmorphism px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <a
                href="https://wa.me/917278404766"
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism-lg p-8 rounded-xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-12 h-12 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">Quick replies for orders and queries</p>
                    <p className="text-2xl font-semibold text-green-500">+917278404766</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+917278404766"
                className="glassmorphism-lg p-8 rounded-xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <Phone className="w-12 h-12 text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone Call</h3>
                    <p className="text-muted-foreground mb-4">Speak directly with our team</p>
                    <p className="text-2xl font-semibold text-blue-500">+917278404766</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="glassmorphism-lg p-12 rounded-2xl mb-16">
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                  <p className="text-lg">Sonarpur, Kolkata</p>
                  <p className="text-muted-foreground mt-2">
                    Located in the heart of Sonarpur for easy accessibility to all customers in Kolkata
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8 mt-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    Phone
                  </h4>
                  <a href="tel:+917278404766" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">
                    +917278404766
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/917278404766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 text-lg font-semibold"
                  >
                    +917278404766
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Service Areas</h3>
              <div className="glassmorphism-lg p-8 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {["Sonarpur", "Kolkata", "South Kolkata", "East Kolkata", "North Kolkata", "Nearby Areas"].map(
                    (area, idx) => (
                      <div key={idx} className="py-3 px-4 rounded-lg bg-muted/50">
                        <p className="font-semibold">{area}</p>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-muted-foreground text-center mt-6 pt-6 border-t border-border">
                  We also accept orders from all locations. Contact us for delivery information and charges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center transition-all duration-300 z-40 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" /> {/* Changed from ArrowRight to ArrowUp */}
        </button>
      )}

      <Footer />
    </>
  )
}
