"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  productName: string
  productPrice: string
}

export function WhatsAppButton({ productName, productPrice }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi AquaWave! I'm interested in ordering: ${productName} (${productPrice}). Please let me know more details and availability.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917278404766?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="glassmorphism flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-4 h-4" />
      <span className="hidden sm:inline">Order</span>
    </button>
  )
}
