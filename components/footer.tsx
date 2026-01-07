"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, MessageCircle, Phone, MapPin } from "lucide-react"

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update year on component mount and whenever date changes
    const updateYear = () => {
      setYear(new Date().getFullYear())
    }
    updateYear()

    // Optional: Update at midnight
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)
    const timeUntilMidnight = tomorrow.getTime() - now.getTime()

    const timeout = setTimeout(() => {
      updateYear()
      // Then update every day
      setInterval(updateYear, 24 * 60 * 60 * 1000)
    }, timeUntilMidnight)

    return () => clearTimeout(timeout)
  }, [])

  const footerLinks = {
    Company: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Why We're Best", href: "#why-best" },
    ],
    Products: [
      { label: "All Products", href: "#products" },
      { label: "Filter & Equipment", href: "#products" },
      { label: "Fish & Plants", href: "#products" },
    ],
    Support: [
      { label: "FAQs", href: "#faqs" },
      { label: "Contact Us", href: "#contact" },
      { label: "Reviews", href: "#reviews" },
    ],
  }

  return (
    <footer className="glassmorphism-lg border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AquaWave
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium aquarium solutions and expert guidance for your aquatic dreams.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: MessageCircle, href: "https://wa.me/917278404766" },
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 hover:text-cyan-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+917278404766"
                className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+917278404766</span>
              </a>
              <a
                href="https://wa.me/917278404766"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Sonarpur, Kolkata</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Copyright &copy; {year} <span className="text-cyan-400 font-semibold">AquaWave</span>. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-4">Trusted by thousands of aquatic enthusiasts</p>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-muted/50">✓ 100% Authentic Products</span>
            <span className="px-3 py-1 rounded-full bg-muted/50">✓ Money Back Guarantee</span>
            <span className="px-3 py-1 rounded-full bg-muted/50">✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
