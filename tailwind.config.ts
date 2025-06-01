
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// CatBot.AI Custom Colors
				catbot: {
					black: '#0B0B0D',
					'black-light': '#131317',
					'black-lighter': '#1B1B1F',
					gold: '#FFD700',
					purple: '#9945FF',
					orange: '#FF7600',
					'text-primary': '#FFFFFF',
					'text-secondary': '#E1E1E1',
					'text-muted': '#BFBFBF',
					'text-subtle': '#8A8A8A'
				}
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'ibm-mono': ['IBM Plex Mono', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
				'dm-sans': ['DM Sans', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'eye-glow': {
					'0%': { opacity: '1' },
					'50%': { opacity: '0.75' },
					'100%': { opacity: '1' }
				},
				'nav-pulse': {
					'0%': { boxShadow: '0 0 5px rgba(255,215,0,0.2)' },
					'50%': { boxShadow: '0 0 15px rgba(255,215,0,0.4)' },
					'100%': { boxShadow: '0 0 5px rgba(255,215,0,0.2)' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' }
				},
				'particle-float': {
					'0%': { transform: 'translate(0, 0)', opacity: '0.05' },
					'50%': { transform: 'translate(10px, -20px)', opacity: '0.1' },
					'100%': { transform: 'translate(20px, -40px)', opacity: '0.05' }
				},
				'tail-sway': {
					'0%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
					'100%': { transform: 'rotate(-3deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'eye-glow': 'eye-glow 4s ease-in-out infinite',
				'nav-pulse': 'nav-pulse 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'orbit': 'orbit 25s linear infinite',
				'particle-float': 'particle-float 20s linear infinite',
				'tail-sway': 'tail-sway 8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
