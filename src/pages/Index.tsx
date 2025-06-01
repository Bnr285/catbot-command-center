
import React, { useEffect, useRef, useState } from 'react';
import ParticleSystem from '../components/ParticleSystem';
import CatIllustration from '../components/CatIllustration';
import FuturisticNavigation from '../components/FuturisticNavigation';
import DataPanel from '../components/DataPanel';
import SunshineCursor from '../components/SunshineCursor';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    { quote: "Caught 37x on $PIZZA within 36 hrs.", handle: "@degenfinder" },
    { quote: "Feels like having a Solana whisperer in my pocket.", handle: "@anonbags" },
    { quote: "CatBot > 99% of paid alpha groups.", handle: "@whalebait" },
    { quote: "Finally, an AI that understands meme psychology.", handle: "@memegod" },
    { quote: "Turned $500 into $12k with one CatBot signal.", handle: "@cryptohunter" }
  ];

  return (
    <div className="min-h-screen bg-catbot-black relative overflow-x-hidden">
      {/* Sunshine Cursor Effect */}
      <SunshineCursor />
      
      {/* Particle System Background */}
      <ParticleSystem />
      
      {/* Vignette Effect */}
      <div className="fixed inset-0 vignette pointer-events-none z-10" />

      {/* Navigation - Now emanates from cat */}
      <FuturisticNavigation />

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center relative px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center max-w-7xl">
          {/* Floating Data Panels */}
          <div className="absolute top-20 left-4 lg:left-20 animate-slide-in-left" style={{animationDelay: '0.5s'}}>
            <DataPanel
              title="System Status"
              value="SCANNING SOLANA"
              subtitle="Real-time market analysis"
              icon={<div className="w-2 h-2 bg-catbot-gold rounded-full animate-pulse" />}
              className="-rotate-3"
            />
          </div>
          
          <div className="absolute top-20 right-4 lg:right-20 animate-slide-in-right" style={{animationDelay: '0.7s'}}>
            <DataPanel
              title="Bot Uptime"
              value="12h 47m"
              subtitle="Continuous monitoring"
              icon={<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />}
              className="rotate-3"
            />
          </div>

          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8 z-20 relative">
            <div className="space-y-4">
              <div className="inline-block glass-panel px-4 py-2 border border-catbot-purple/40">
                <span className="font-ibm-mono text-sm uppercase tracking-wider text-catbot-purple">
                  OUR CREDENTIALS
                </span>
              </div>
              
              <h1 className={`font-orbitron font-black text-4xl lg:text-6xl xl:text-7xl uppercase tracking-wider text-catbot-text-primary leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                CATBOT.AI
                <br />
                <span className="text-catbot-gold">— THE MEME SNIPER —</span>
              </h1>

              <p className={`font-inter text-lg lg:text-xl text-catbot-text-secondary max-w-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Built to hunt 100x Solana gems before they hit the radar.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="neon-button group relative overflow-hidden">
                <span className="relative z-10">LAUNCH BOT</span>
                {/* Sparkle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-catbot-gold rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Cat Illustration */}
          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <CatIllustration />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="min-h-screen relative py-20 grid-overlay">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl lg:text-5xl uppercase tracking-wider text-catbot-text-primary mb-4">
              HOW IT WORKS
            </h2>
            <p className="font-inter text-lg text-catbot-text-secondary max-w-2xl mx-auto">
              Our AI-powered system monitors multiple data streams to identify the next big meme coin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Steps */}
            <div className="space-y-8">
              {[
                { icon: "🔍", title: "Real-Time Coin Scanner", description: "Monitors new token launches and trading activity" },
                { icon: "🐋", title: "Whale Wallet Tracker", description: "Tracks large wallet movements and smart money flows" },
                { icon: "💬", title: "Sentiment Signal Engine", description: "Analyzes social media buzz and community sentiment" },
                { icon: "🛡️", title: "Rug Risk Filter", description: "AI-powered risk assessment and community health check" }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 border-2 border-catbot-gold rounded-full flex items-center justify-center text-xl bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-ibm-mono font-semibold text-catbot-text-primary mb-2 uppercase tracking-wide">
                      {String(index + 1).padStart(2, '0')} – {step.title}
                    </h3>
                    <p className="font-inter text-catbot-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Holographic Diagram */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 glass-panel-purple rounded-full flex items-center justify-center">
                  <span className="font-orbitron font-bold text-xs text-catbot-purple text-center leading-tight">
                    CAT AI<br />CORE
                  </span>
                </div>

                {/* Orbiting Nodes */}
                {[
                  { label: "Volume Spikes", angle: 0 },
                  { label: "Tweet Bursts", angle: 90 },
                  { label: "Token Age", angle: 180 },
                  { label: "Holder Growth", angle: 270 }
                ].map((node, index) => (
                  <div
                    key={index}
                    className="absolute w-16 h-16 glass-panel rounded-full flex items-center justify-center animate-orbit"
                    style={{
                      animationDelay: `${index * 6.25}s`,
                      animationDuration: '25s'
                    }}
                  >
                    <span className="font-ibm-mono text-xs text-catbot-text-secondary text-center leading-tight">
                      {node.label}
                    </span>
                  </div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[0, 90, 180, 270].map((angle, index) => (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 25 * Math.cos(angle * Math.PI / 180)}%`}
                      y2={`${50 + 25 * Math.sin(angle * Math.PI / 180)}%`}
                      stroke="rgba(153, 69, 255, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="min-h-screen relative py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl lg:text-5xl uppercase tracking-wider text-catbot-text-primary mb-4">
              FEATURES
            </h2>
            <p className="font-inter text-lg text-catbot-text-secondary max-w-2xl mx-auto">
              Hover over the cat to discover our advanced AI capabilities.
            </p>
          </div>

          <div className="flex justify-center">
            <CatIllustration />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl lg:text-5xl uppercase tracking-wider text-catbot-text-primary mb-4">
              INTEL FEED
            </h2>
            <p className="font-inter text-lg text-catbot-text-secondary max-w-2xl mx-auto">
              Real feedback from traders who got early alpha.
            </p>
          </div>

          {/* Orbiting Testimonials */}
          <div className="relative h-96 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute w-72 h-32 glass-panel p-4 animate-orbit hover:pause"
                style={{
                  animationDelay: `${index * 5}s`,
                  animationDuration: '25s',
                  transform: `rotate(${index * 72}deg) translateX(200px) rotate(-${index * 72}deg)`
                }}
              >
                <p className="font-dm-sans italic text-catbot-text-secondary text-sm mb-2 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-ibm-mono font-semibold text-catbot-gold text-xs">
                  {testimonial.handle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative py-20 grid-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-catbot-black-light/30 to-transparent" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block glass-panel px-4 py-2 border border-catbot-purple/40 mb-4">
              <span className="font-ibm-mono text-sm uppercase tracking-wider text-catbot-purple">
                OUR CREDENTIALS
              </span>
            </div>
            
            <h2 className="font-orbitron font-bold text-3xl lg:text-5xl uppercase tracking-wider text-catbot-text-primary">
              ABOUT US
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="font-inter text-lg text-catbot-text-secondary leading-relaxed">
                We're a network of traders, engineers, and crypto degens.
              </p>
              <p className="font-inter text-lg text-catbot-text-secondary leading-relaxed">
                Our mission was to outsmart meme chaos using raw machine learning.
              </p>
              <p className="font-inter text-lg text-catbot-text-primary leading-relaxed">
                What we built became CatBot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen relative py-20 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="glass-panel-purple p-8 relative">
            {/* Animated border line */}
            <div className="absolute top-0 left-0 h-1 bg-catbot-purple animate-pulse" style={{width: '100%'}} />
            
            <div className="text-center mb-8">
              <h2 className="font-orbitron font-bold text-2xl lg:text-3xl uppercase tracking-wider text-catbot-text-primary mb-4">
                GET EARLY ACCESS
              </h2>
              <p className="font-inter text-catbot-text-secondary">
                Join the waitlist for exclusive alpha access.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-dm-sans text-sm uppercase tracking-wider text-catbot-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-catbot-text-primary placeholder-white/40 focus:border-catbot-purple focus:shadow-[0_0_10px_rgba(153,69,255,0.4)] transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-dm-sans text-sm uppercase tracking-wider text-catbot-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-catbot-text-primary placeholder-white/40 focus:border-catbot-purple focus:shadow-[0_0_10px_rgba(153,69,255,0.4)] transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <button type="submit" className="w-full neon-button mt-8">
                GET EARLY ACCESS
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-40 relative flex items-center justify-center">
        <div className="text-center space-y-6">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Discord', color: '#7289DA' },
              { name: 'Twitter', color: '#1DA1F2' },
              { name: 'Telegram', color: '#0088CC' }
            ].map((social, index) => (
              <button
                key={social.name}
                className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="w-4 h-4 bg-current rounded-sm" />
              </button>
            ))}
          </div>
          
          <p className="font-ibm-mono text-sm text-catbot-text-secondary tracking-wider">
            Made with AI, memes, and malice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
