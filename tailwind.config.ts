
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
				// New modern hackathon theme
				hackathon: {
					primary: '#5B3AFF', // Vibrant purple
					secondary: '#00DCFF', // Bright cyan
					accent: '#FF3A8C', // Vibrant pink
					success: '#14F195', // Vibrant green
					warning: '#FFBA35', // Bright orange
					background: '#080E21', // Deep navy blue
					'card-dark': '#101935', // Slightly lighter blue
					'card-light': '#1A2346', // Even lighter blue
					border: '#2E385B', // Subtle border color
					muted: '#8491C3', // Muted text color
				},
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
						boxShadow: '0 0 5px rgba(91, 58, 255, 0.5), 0 0 10px rgba(91, 58, 255, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(91, 58, 255, 0.8), 0 0 20px rgba(91, 58, 255, 0.5)' 
					},
				},
				'text-glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px rgba(0, 220, 255, 0.5), 0 0 10px rgba(0, 220, 255, 0.3)'
					},
					'50%': { 
						textShadow: '0 0 15px rgba(0, 220, 255, 0.8), 0 0 20px rgba(0, 220, 255, 0.5)' 
					},
				},
				'pop': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'40%': { transform: 'scale(1.02)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'slideUp': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
				'pop': 'pop 0.4s ease-out',
				'slideUp': 'slideUp 0.6s ease-out',
				'fadeIn': 'fadeIn 0.6s ease-in-out',
				'rotate': 'rotate 20s linear infinite',
				'rotate-slow': 'rotate 30s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--radial-stops))',
				'gradient-conic': 'conic-gradient(var(--conic-stops))',
				'hero-pattern': 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(91,58,255,0.07)\'/%3E%3C/svg%3E")',
			},
			boxShadow: {
				'glow-primary': '0 0 15px rgba(91, 58, 255, 0.7)',
				'glow-secondary': '0 0 15px rgba(0, 220, 255, 0.7)',
				'glow-accent': '0 0 15px rgba(255, 58, 140, 0.7)',
				'glow-success': '0 0 15px rgba(20, 241, 149, 0.7)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
