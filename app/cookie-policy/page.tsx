import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cookie Policy | AquaWave - Aquarium Shop",
  description: "Cookie Policy for AquaWave. Learn about how we use cookies on our website.",
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans">
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <div className="glassmorphism-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used in order to make websites work, or work more efficiently, as well as to provide
                information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">AquaWave uses cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Essential Cookies:</strong> These are required for the website to function properly. They
                  enable user authentication, prevent fraud, and ensure secure connections.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> These allow us to analyze how visitors interact with our website
                  so we can optimize it for better functionality.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These enable the website to remember choices you have made to
                  provide a more personalized experience.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These are used to track visitors across websites to display
                  targeted advertisements based on their interests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <p className="mb-4">We use both session-based and persistent cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Session Cookies:</strong> These are temporary cookies that expire once you close your browser.
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> These remain on your device for a set period even after you close
                  your browser.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may allow third parties (such as analytics providers and advertising
                partners) to place cookies on your device. These third parties use cookies to track your online activity
                across different websites for the purpose of serving targeted advertisements and analyzing website
                usage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="mb-4">You can control and manage cookies in various ways:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Most browsers allow you to refuse cookies or alert you when cookies are being sent.</li>
                <li>You can delete cookies that have already been set on your device.</li>
                <li>You can set your browser to not accept cookies from specific websites.</li>
                <li>Please note that disabling cookies may affect the functionality of our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookie List</h2>
              <p className="mb-4">Here are the main cookies we use on our website:</p>
              <div className="bg-muted/30 p-4 rounded-lg space-y-2 text-sm">
                <p>
                  <strong>theme:</strong> Stores your preferred theme (dark/light mode)
                </p>
                <p>
                  <strong>_ga:</strong> Google Analytics cookie to track user interactions
                </p>
                <p>
                  <strong>_gid:</strong> Google Analytics cookie for session identification
                </p>
                <p>
                  <strong>session_id:</strong> Session identifier for your browsing session
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to This Cookie Policy</h2>
              <p>
                AquaWave may update this Cookie Policy from time to time. We will notify you of any changes by updating
                the "Last updated" date of this policy. Your continued use of the website following the posting of
                revised Cookie Policy means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p>If you have any questions or concerns about our use of cookies, please contact us at:</p>
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
