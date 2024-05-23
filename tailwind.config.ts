import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'media-1563': {'max': '1536px'},
      'media-1083': {'max': '1083px'},
      'media-1467':{'max': '1467px'},
      'media-1200':{'max': '1200px'},
    },
    extend: {
      colors:
      {
        "primary": "#179DD8",
        "secondary": "#0F2A5D",
        "green": "#3A8B54",
        "datacloud": "#3A49DC",
        "einstein":"#179DD8",
        "marketing":"#FF914D",
        "salescloud":"#0A8680",
        "white":"#f9f9f9",
        "gray-line":"#D3D3D3",
        "gray":"#808080",
        "dark":"#0A2647",
      },
      borderColor: {
        "primary": "#179DD8",
        "secondary": "#0F2A5D",
        "green": "#3A8B54",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.13rem',
        h1: '2.75rem',
        h2: '2.5rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      padding:{
        'button':'0.50rem 2rem'
      },
      backgroundImage: {
        "garden": "url('/img/garden-bg2.png')",
        "marketing": "url('/img/marketing-bg.webp')",
        "mountain": "url('/img/mountain-bg.png')",
        "datacloud": "url('/img/datacloud-bg.webp')",
        "datacloud-drk": "url('/img/datacloud-bg-dark2.png')",
        "clouds": "url('/img/clouds.png')",
      },
      lineHeight: {
          'base': '2.25rem',
          '3': '3rem',
      },
      dropShadow: {
        '2xl-white': '0px 0px 4px rgba(255, 255, 255, 1)',
        
      },
    },
    plugins: [],
  }
}
export default config;