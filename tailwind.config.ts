
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
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
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
				// Custom colors for the hackathon theme
				hackathon: {
					purple: '#8A2BE2',
					blue: '#00FFFF',
					green: '#39FF14',
					black: '#0D0D0D',
					'dark-gray': '#121212',
					'light-gray': '#2A2A2A',
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
				}
			},
			fontFamily: {
				'barlow': ['Barlow', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(138, 43, 226, 0.5), 0 0 10px rgba(138, 43, 226, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.5)' 
					},
				},
				'text-glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(57, 255, 20, 0.5), 0 0 10px rgba(57, 255, 20, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 15px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.5)' 
					},
				},
				'blue-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)' 
					},
				},
				'green-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(57, 255, 20, 0.5), 0 0 10px rgba(57, 255, 20, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.5)' 
					},
				},
				'purple-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(138, 43, 226, 0.5), 0 0 10px rgba(138, 43, 226, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.5)' 
					},
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
				},
				'scroll-x': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'scaleIn': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'countdownFlip': {
					'0%, 100%': { transform: 'rotateX(0deg)' },
					'50%': { transform: 'rotateX(90deg)' },
				},
				'backgroundPan': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
				'blue-glow': 'blue-glow 2s ease-in-out infinite',
				'green-glow': 'green-glow 2s ease-in-out infinite',
				'purple-glow': 'purple-glow 2s ease-in-out infinite',
				'glitch': 'glitch 1s ease-in-out infinite',
				'scroll-x': 'scroll-x 20s linear infinite',
				'fadeIn': 'fadeIn 0.6s ease-in-out',
				'scaleIn': 'scaleIn 0.5s ease-out',
				'countdownFlip': 'countdownFlip 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
				'backgroundPan': 'backgroundPan 3s ease infinite alternate',
			},
			backgroundImage: {
				'gradient-conic': 'conic-gradient(var(--conic-stops))',
				'gradient-radial': 'radial-gradient(var(--radial-stops))',
				'cyber-grid': 'linear-gradient(rgba(57, 255, 20, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.05) 1px, transparent 1px)',
				'neon-glow': 'linear-gradient(to right, rgba(138, 43, 226, 0.4), rgba(0, 255, 255, 0.4))',
			},
			boxShadow: {
				'neon-purple': '0 0 5px #8A2BE2, 0 0 10px #8A2BE2, 0 0 15px #8A2BE2',
				'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
				'neon-green': '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
			},
			textShadow: {
				'neon': '0 0 5px currentColor, 0 0 10px currentColor',
			},
			backdropFilter: {
				'blur-xs': 'blur(2px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
