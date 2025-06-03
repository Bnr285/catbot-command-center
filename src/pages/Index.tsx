import React, { useEffect, useRef, useState } from 'react';
import ParticleSystem from '../components/ParticleSystem';
import PantherIllustration from '../components/PantherIllustration';
import DataPanel from '../components/DataPanel';
import SunshineCursor from '../components/SunshineCursor';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    
    if (name && email) {
      toast({
        title: "Mission Accepted! 🐾",
        description: `Welcome to the pack, ${name}! We'll send alpha signals to ${email} when CatBot goes live.`,
        duration: 5000,
      });
      
      // Reset form
      e.currentTarget.reset();
    }
  };

  const testimonials = [
    { quote: "Caught 37x on $PIZZA within 36 hrs.", handle: "@degenfinder" },
    { quote: "Feels like having a Solana whisperer in my pocket.", handle: "@anonbags" },
    { quote: "CatBot > 99% of paid alpha groups.", handle: "@whalebait" },
    { quote: "Finally, an AI that understands meme psychology.", handle: "@memegod" },
    { quote: "Turned $500 into $12k with one CatBot signal.", handle: "@cryptohunter" }
  ];

  const features = [
    {
      title: "Neural Net Signal Engine",
      description: "Analyzes on-chain data with deep learning models to detect early memecoin anomalies.",
      icon: "🧠"
    },
    {
      title: "Volume + Hype Detection", 
      description: "Scans exchange volume and social chatter, prioritizing coins with sudden buzz.",
      icon: "👁"
    },
    {
      title: "Sentiment Scanner",
      description: "Parses Telegram, Discord, and Twitter channels for sentiment indicators in real time.",
      icon: "❤️"
    },
    {
      title: "Rug Risk Classifier",
      description: "Uses heuristics & AI to estimate rugpull probability before you invest.",
      icon: "🛡️"
    },
    {
      title: "Wallet Radar",
      description: "Traces large wallet movements, identifying whale activity on Solana tokens.",
      icon: "🐾"
    },
    {
      title: "Smart Contract Analyzer",
      description: "Automatically scans smart contracts for potential vulnerabilities and red flags.",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-catbot-black relative overflow-x-hidden">
      {/* Sunshine Cursor Effect */}
      <SunshineCursor />
      
      {/* Particle System Background */}
      <ParticleSystem />
      
      {/* Vignette Effect */}
      <div className="fixed inset-0 vignette pointer-events-none z-10" />

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
                  AI MEME HUNTER
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
              <button onClick={scrollToContact} className="neon-button group relative overflow-hidden">
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

          {/* Right Column - Interactive Panther */}
          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <PantherIllustration />
          </div>
        </div>
      </section>

      {/* Features Section with Animated List */}
      <section id="features" className="min-h-screen relative py-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-3xl lg:text-5xl uppercase tracking-wider text-catbot-text-primary mb-4">
              AI CAPABILITIES
            </h2>
            <p className="font-inter text-lg text-catbot-text-secondary max-w-2xl mx-auto">
              Advanced neural networks designed to dominate the meme economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-panel p-6 opacity-0 animate-fade-in hover:scale-105 hover:shadow-[0_0_30px_rgba(153,69,255,0.4)] transition-all duration-500 transform hover:rotate-1"
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'forwards',
                  animationDuration: '0.8s'
                }}
              >
                <div className="text-4xl mb-4 animate-pulse hover:animate-bounce transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-ibm-mono font-bold text-lg text-catbot-text-primary mb-3 transform transition-all duration-300 hover:text-catbot-gold">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-catbot-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
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
                ORIGIN STORY
              </span>
            </div>
            
            <h2 className="font-orbitron font-bold text-3xl lg:text-5xl uppercase tracking-wider text-catbot-text-primary">
              ABOUT US
            </h2>
            
            {/* Animated Cat Paw */}
            <div className="relative flex justify-center mb-8">
              <div className="w-20 h-20 relative animate-bounce">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-catbot-gold animate-pulse"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))'
                  }}
                >
                  {/* Cat Paw */}
                  <ellipse cx="50" cy="65" rx="20" ry="25" fill="currentColor" opacity="0.9"/>
                  {/* Paw Pads */}
                  <ellipse cx="50" cy="55" rx="8" ry="10" fill="#FF69B4"/>
                  <ellipse cx="40" cy="45" rx="5" ry="6" fill="#FF69B4"/>
                  <ellipse cx="60" cy="45" rx="5" ry="6" fill="#FF69B4"/>
                  <ellipse cx="45" cy="40" rx="4" ry="5" fill="#FF69B4"/>
                  <ellipse cx="55" cy="40" rx="4" ry="5" fill="#FF69B4"/>
                  {/* Claws */}
                  <path d="M 35 50 L 30 40" stroke="white" strokeWidth="2" opacity="0.8"/>
                  <path d="M 65 50 L 70 40" stroke="white" strokeWidth="2" opacity="0.8"/>
                  <path d="M 50 35 L 50 25" stroke="white" strokeWidth="2" opacity="0.8"/>
                </svg>
              </div>
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="glass-panel p-6 opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <p className="font-inter text-lg text-catbot-text-secondary leading-relaxed">
                  It started in a Discord server at 3 AM. A group of sleep-deprived traders, watching another 100x gem slip through their fingers while they were analyzing charts manually.
                </p>
              </div>
              
              <div className="glass-panel p-6 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <p className="font-inter text-lg text-catbot-text-secondary leading-relaxed">
                  "What if we could teach a machine to smell the next BONK before it pumps?" said one frustrated degen. That question sparked a 6-month coding marathon fueled by energy drinks and pure spite.
                </p>
              </div>
              
              <div className="glass-panel p-6 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                <p className="font-inter text-lg text-catbot-text-primary leading-relaxed font-semibold">
                  We built neural networks that understand meme psychology. We trained algorithms on whale movements. We created the ultimate crypto predator.
                </p>
              </div>
              
              <div className="glass-panel p-6 opacity-0 animate-fade-in border-catbot-gold/30" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                <p className="font-inter text-xl text-catbot-gold leading-relaxed font-bold">
                  CatBot doesn't just find memecoins. It hunts them. 🐾
                </p>
              </div>
              
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                <p className="font-ibm-mono text-sm text-catbot-text-muted uppercase tracking-wider">
                  — Built by degens, for degens —
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen relative py-20 flex items-center justify-center">
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

            <form className="space-y-6" onSubmit={handleEmailSubmit}>
              <div>
                <label htmlFor="name" className="block font-dm-sans text-sm uppercase tracking-wider text-catbot-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
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
                  name="email"
                  required
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
