
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    // default theme
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    //containers:
    container: {
      center: true,
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '100%',
        'xl': '100%',
        '2xl': '1900px',
    },
        
      padding: {
        DEFAULT: '2rem',
        screens: {
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
       '2xl': '6rem',
        }
      },
    },
    //colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      graylight: "#0000001a"
      
    },
    fontSize: {
      screens: {
      DEFAULT: '14px',
      sm: '10px',
      md: '11px',
      lg: '12px',
      xl: "13px"
      }
    },
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors :{
        "primary": "Var(--text-primary)",
        "primary-inverse": "var(--text-primary-inverse)",
      }
    },
  },
  plugins: [
    
  ],
}

