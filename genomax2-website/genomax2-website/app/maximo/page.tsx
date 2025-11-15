'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MaximoPage() {
  const [email, setEmail] = useState('')

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Beta signup:', email)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-gray-200">
        <div className="section-container py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold">
            GenoMAX<sup className="text-sm">²</sup>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/maxima" className="text-brand-gray-600 hover:text-maxima-600 transition">
              MAXima² (Women)
            </Link>
            <button className="btn-primary-maximo text-sm">
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-maximo-50 to-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-maximo-100 rounded-full text-maximo-700 font-semibold text-sm mb-6">
                Optimized for Men
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                MAXimo<sup className="text-3xl md:text-4xl">²</sup>
                <br />
                <span className="gradient-text-maximo">Your Biological Operating System</span>
              </h1>
              <p className="text-xl text-brand-gray-600 mb-8 leading-relaxed">
                Not vitamins. A complete body and mind optimization protocol powered by AI, blood biomarkers, and male-specific biology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary-maximo">
                  Take AI Assessment
                </button>
                <button className="btn-secondary">
                  How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-maximo-200 to-maximo-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl font-bold mb-4">68</div>
                    <div className="text-xl">NPS Score</div>
                    <div className="text-sm opacity-80 mt-2">From Beta Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits optimized for men */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Built for Male Biology
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Testosterone support • Muscle performance • Mental clarity • Recovery optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-gray-50">
              <h3 className="text-xl font-bold mb-4">Testosterone Optimization</h3>
              <p className="text-brand-gray-600">
                Targeted support for healthy testosterone levels through zinc, magnesium, vitamin D, and ashwagandha.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-gray-50">
              <h3 className="text-xl font-bold mb-4">Performance & Recovery</h3>
              <p className="text-brand-gray-600">
                Optimized for muscle synthesis, workout recovery, and physical performance based on your activity level.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-gray-50">
              <h3 className="text-xl font-bold mb-4">Mental Sharpness</h3>
              <p className="text-brand-gray-600">
                Support for focus, memory, and cognitive performance under stress and high-demand situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-maximo-600 to-maximo-700 text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Join the MAXimo² Beta
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-maximo-50">
            Limited spots available. Early members get lifetime pricing and priority support.
          </p>
          <form onSubmit={handleBetaSignup} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-brand-black"
              required
            />
            <button type="submit" className="px-8 py-4 bg-white text-maximo-700 rounded-full font-semibold hover:bg-maximo-50 transition">
              Join Beta
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-black text-white">
        <div className="section-container text-center">
          <div className="font-display text-2xl font-bold mb-4">
            GenoMAX<sup className="text-sm">²</sup>
          </div>
          <p className="text-brand-gray-400 text-sm">
            © 2025 GenoMAX². All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
