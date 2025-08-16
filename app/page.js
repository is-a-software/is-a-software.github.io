import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "is-a.software",
            "description": "Claim your sleek new .is-a.software subdomain and stand out in the digital world.",
            "url": "https://is-a.software",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://is-a.software",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://github.com/is-a-software/is-a-software",
              "https://instagram.com/is.a.software",
              "https://x.com/is_a_software"
            ]
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center z-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Image
              src="/logo.png"
              alt="is-a.software logo"
              width={32}
              height={32}
              className="rounded-lg md:w-10 md:h-10"
            />
            <div className="text-white font-bold text-lg md:text-xl">is-a.software</div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 pt-20 md:pt-12">
          <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex justify-center mb-8 md:mb-12">
              <Image
                src="/hero.png"
                alt="is-a.software hero"
                width={600}
                height={300}
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[400px] md:max-w-[600px]"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Claim Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sleek New
              </span>
              <span className="block text-white">Subdomain</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Get your own <span className="font-mono bg-white/10 px-2 py-1 rounded">yourname.is-a.software</span> subdomain and stand out in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <a
                href="https://github.com/is-a-software/is-a-software"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get Started Now
              </a>
              <a
                href="#features"
                className="text-white/70 hover:text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>

          <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-white/70">Instant setup and deployment. Your subdomain is ready in seconds, not minutes.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
              <p className="text-white/70">Built with enterprise-grade security and 99.9% uptime guarantee.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customizable</h3>
              <p className="text-white/70">Full control over your subdomain with custom DNS, SSL certificates, and more.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10 mx-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Mark?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join thousands of developers, creators, and businesses who trust is-a.software for their online presence.
            </p>
            <a
              href="https://github.com/is-a-software/is-a-software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Claim Your Subdomain →
            </a>
          </div>
          </div>
        </main>

        <footer className="bg-gradient-to-t from-black/20 to-transparent backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="is-a.software logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div>
                  <div className="text-white font-bold text-lg">is-a.software</div>
                  <div className="text-white/60 text-sm">Claim your sleek new subdomain</div>
                </div>
              </div>

              <div className="flex justify-center space-x-6 md:space-x-8">
                <a
                  href="https://is-a.software/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span>Website</span>
                </a>
                <a
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Features</span>
                </a>
              </div>

              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://github.com/is-a-software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/is.a.software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/is_a_software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
              © 2025 is-a.software. All rights reserved..
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}
