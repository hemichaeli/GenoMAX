'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MaximaPage() {
  const [email, setEmail] = useState('')

  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement beta signup
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
            <Link href="/maximo" className="text-brand-gray-600 hover:text-maximo-600 transition">
              MAXimo² (Men)
            </Link>
            <button className="btn-primary text-sm">
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-maxima-50 to-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-maxima-100 rounded-full text-maxima-700 font-semibold text-sm mb-6">
                Optimized for Women
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                MAXima<sup className="text-3xl md:text-4xl">²</sup>
                <br />
                <span className="gradient-text-maxima">Your Biological Operating System</span>
              </h1>
              <p className="text-xl text-brand-gray-600 mb-8 leading-relaxed">
                Not vitamins. A complete body and mind optimization protocol powered by AI, blood biomarkers, and gender-specific biology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Take AI Assessment
                </button>
                <button className="btn-secondary">
                  How It Works
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8 text-sm text-brand-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-maxima-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>FDA-compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-maxima-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tested formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-maxima-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Science-backed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-maxima-200 to-maxima-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl font-bold mb-4">72</div>
                    <div className="text-xl">NPS Score</div>
                    <div className="text-sm opacity-80 mt-2">From Beta Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Generic Vitamins Don't Work
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Your body is unique. Your biology is complex. One-size-fits-all supplementation is like using the same password for everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-gray-50">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Wrong Dosages</h3>
              <p className="text-brand-gray-600">
                Generic supplements ignore your body's actual needs, leading to waste, imbalances, or deficiencies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-gray-50">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Gender-Blind</h3>
              <p className="text-brand-gray-600">
                Women's hormonal cycles, metabolic rates, and nutritional needs are fundamentally different from men's.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-gray-50">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">No Adaptation</h3>
              <p className="text-brand-gray-600">
                Your needs change with age, stress, sleep, and activity. Static protocols can't keep up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-maxima-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              The MAXima² System
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Three pillars of precision optimization, working together to maximize your biological potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border-2 border-maxima-200">
              <div className="w-12 h-12 rounded-full bg-maxima-100 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-maxima-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Assessment</h3>
              <p className="text-brand-gray-600 mb-6">
                9-step intelligent questionnaire analyzes your lifestyle, health goals, symptoms, and medical history.
              </p>
              <ul className="space-y-2 text-sm text-brand-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hormonal cycle tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Stress & sleep patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Energy & cognitive goals</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-maxima-200">
              <div className="w-12 h-12 rounded-full bg-maxima-100 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-maxima-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Blood Biomarkers</h3>
              <p className="text-brand-gray-600 mb-6">
                28 key markers reveal your actual deficiencies, hormone levels, and metabolic health.
              </p>
              <ul className="space-y-2 text-sm text-brand-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Vitamin D, B12, Iron, Folate</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Thyroid function (TSH, T3, T4)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Hormone levels & inflammation</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-maxima-200">
              <div className="w-12 h-12 rounded-full bg-maxima-100 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-maxima-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Gender Biology</h3>
              <p className="text-brand-gray-600 mb-6">
                Algorithms trained on female-specific research optimize for your unique physiology.
              </p>
              <ul className="space-y-2 text-sm text-brand-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Estrogen metabolism support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Bone density optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-maxima-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Female metabolic patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Measurable Results
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              What beta users are experiencing within 8-12 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-maxima mb-4">89%</div>
              <p className="text-brand-gray-600">Improved energy levels</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-maxima mb-4">76%</div>
              <p className="text-brand-gray-600">Better sleep quality</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-maxima mb-4">82%</div>
              <p className="text-brand-gray-600">Enhanced mental clarity</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-maxima mb-4">91%</div>
              <p className="text-brand-gray-600">Would recommend</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-maxima-50 to-white border border-maxima-200">
              <div className="flex items-start gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold">Sarah M.</div>
                  <div className="text-sm text-brand-gray-500">Tech Executive, 34</div>
                </div>
              </div>
              <p className="text-brand-gray-700 italic">
                "After 3 months on MAXima², my energy is consistent throughout the day, brain fog is gone, and my bloodwork shows actual improvements. This isn't just supplements, it's a system."
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-maxima-50 to-white border border-maxima-200">
              <div className="flex items-start gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="User" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold">Jessica L.</div>
                  <div className="text-sm text-brand-gray-500">Entrepreneur, 29</div>
                </div>
              </div>
              <p className="text-brand-gray-700 italic">
                "The AI recommendations based on my blood test were eye-opening. I was deficient in areas I never would have guessed. Three months later, I feel like a different person."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-brand-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Getting Started Is Simple
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              From assessment to optimized protocol in one week
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-maxima-600 text-white flex items-center justify-center font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete AI Assessment</h3>
                  <p className="text-brand-gray-600">15-minute intelligent questionnaire about your health, goals, and lifestyle. No medical knowledge required.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-maxima-600 text-white flex items-center justify-center font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Choose Blood Test Tier</h3>
                  <p className="text-brand-gray-600">Essential (8 markers), Complete (18 markers), or Premium (28 markers). At-home kit ships within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-maxima-600 text-white flex items-center justify-center font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Your Protocol</h3>
                  <p className="text-brand-gray-600">AI analyzes your results and generates your personalized supplement protocol. Delivered to your door monthly.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-maxima-600 text-white flex items-center justify-center font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Track & Optimize</h3>
                  <p className="text-brand-gray-600">Dashboard tracks adherence, symptoms, and progress. AI Advisor answers questions 24/7. Retest every 3 months to adapt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-maxima-600 to-maxima-700 text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Join the MAXima² Beta
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-maxima-50">
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
            <button type="submit" className="px-8 py-4 bg-white text-maxima-700 rounded-full font-semibold hover:bg-maxima-50 transition">
              Join Beta
            </button>
          </form>
          <p className="mt-6 text-sm text-maxima-100">
            No credit card required • Cancel anytime • Money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-black text-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-display text-2xl font-bold mb-4">
                GenoMAX<sup className="text-sm">²</sup>
              </div>
              <p className="text-brand-gray-400 text-sm">
                Gender-Optimized Biological Operating System
              </p>
            </div>
            <div>
              <div className="font-bold mb-4">Product</div>
              <ul className="space-y-2 text-sm text-brand-gray-400">
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Science</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">Company</div>
              <ul className="space-y-2 text-sm text-brand-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">Legal</div>
              <ul className="space-y-2 text-sm text-brand-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Medical Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-brand-gray-800 text-center text-sm text-brand-gray-400">
            © 2025 GenoMAX². All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
