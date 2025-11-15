import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-gray-50 to-brand-gray-100">
      <div className="section-container py-20">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-brand-black">
            GenoMAX<sup className="text-3xl md:text-5xl">²</sup>
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray-600 mb-4">
            Gender-Optimized Biological Operating System
          </p>
          <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto">
            Precision supplementation powered by AI, blood biomarkers, and gender-specific biology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MAXima² - Women */}
          <Link href="/maxima">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-maxima-500 to-maxima-700 p-12 h-96 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10 text-white h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-4xl font-bold mb-4">
                    MAXima<sup className="text-2xl">²</sup>
                  </h2>
                  <p className="text-xl mb-6 text-maxima-50">
                    Optimized for Women
                  </p>
                  <p className="text-lg text-maxima-100 leading-relaxed">
                    Hormonal balance • Energy metabolism • Cognitive performance • Stress resilience
                  </p>
                </div>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold text-lg">Explore MAXima²</span>
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-maxima-900/50 to-transparent"></div>
            </div>
          </Link>

          {/* MAXimo² - Men */}
          <Link href="/maximo">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-maximo-500 to-maximo-700 p-12 h-96 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative z-10 text-white h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-4xl font-bold mb-4">
                    MAXimo<sup className="text-2xl">²</sup>
                  </h2>
                  <p className="text-xl mb-6 text-maximo-50">
                    Optimized for Men
                  </p>
                  <p className="text-lg text-maximo-100 leading-relaxed">
                    Testosterone support • Muscle performance • Mental clarity • Recovery optimization
                  </p>
                </div>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold text-lg">Explore MAXimo²</span>
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-maximo-900/50 to-transparent"></div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-16">
          <p className="text-brand-gray-500">
            Not vitamins. A complete body and mind optimization system.
          </p>
        </div>
      </div>
    </div>
  )
}
