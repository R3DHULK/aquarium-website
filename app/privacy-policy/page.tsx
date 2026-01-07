import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | AquaWave - Aquarium Shop",
  description: "Privacy Policy for AquaWave. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="glassmorphism-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>
                AquaWave ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone number, address, and any other information
                  you voluntarily provide.
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, IP address, operating system, and device
                  identifiers.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and interaction patterns.
                </li>
                <li>
                  <strong>Location Data:</strong> General geographic location based on IP address.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Your Information</h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your product inquiries and orders</li>
                <li>Send promotional communications about new products and services</li>
                <li>Improve our website and services</li>
                <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Administer contests, promotions, and surveys</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">We may share information we have collected about you in certain situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If required by law or if we have a good-faith belief
                  that disclosure is necessary.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share your information with vendors,
                  consultants, and service providers who assist us in operating our website and conducting our business.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We will share your personal information with third parties when
                  you consent to such sharing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information.
                However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                Therefore, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> info@aquawave.com
                </p>
                <p>
                  <strong>Phone:</strong> +917278404766
                </p>
                <p>
                  <strong>Address:</strong> Sonarpur, Kolkata, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
