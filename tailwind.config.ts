import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-center': 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 65%)',
      },
      animation: {
        // 'glow': 'glow 4s ease-in-out infinite',
        "fade-right": "fade-right 3s ease-in-out infinite",
      },
      keyframes: {
      
        "fade-right": {
					"0%": {
						transform: "translateX(-10%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
            transform: "translateX(10%)",
					},
        
				},
      }
    },
  },
  plugins: [],
}
export default config
