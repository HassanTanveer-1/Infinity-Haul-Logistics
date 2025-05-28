/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF5',
          100: '#C0D5E8',
          200: '#96B9D9',
          300: '#6C9DCA',
          400: '#4D88BE',
          500: '#2E73B3',
          600: '#1F5C96',
          700: '#0A3D62', // Main primary
          800: '#06304E',
          900: '#03233A',
        },
        secondary: {
          50: '#E6F7F6',
          100: '#C0ECE9',
          200: '#96E0DC',
          300: '#65D1CB',
          400: '#3EC4BD',
          500: '#12B0A4', // Main secondary
          600: '#0E8D83',
          700: '#0A6A63',
          800: '#064742',
          900: '#032421',
        },
        accent: {
          50: '#FCF3E9',
          100: '#F8E2C9',
          200: '#F3D0A7',
          300: '#EEBA7D',
          400: '#EAA75C',
          500: '#E67E22', // Main accent
          600: '#C56A1B',
          700: '#9E5516',
          800: '#754010',
          900: '#4D2A0A',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideIn': 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};