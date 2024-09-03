/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      animation: {
        'fade-up-1s': 'fade-up-1s 1s',
        'fade-up-2s': 'fade-up-2s 2s',
        'fade-up-3s': 'fade-up-3s 3s',
        'fade-up-4s': 'fade-up-4s 4s',
        'fade-up-5s': 'fade-up-5s 5s',

        'fade-left-1s': 'fade-left-1s 1s',
        'fade-left-2s': 'fade-left-2s 2s',
        'fade-left-3s': 'fade-left-3s 3s',

        'fade-right-1s': 'fade-right-1s 1s',
        'fade-right-2s': 'fade-right-2s 2s',
        'fade-right-3s': 'fade-right-3s 3s',
        'fade-right-4s': 'fade-right-4s 4s',

        'fade-down-1s': 'fade-down-1s 1s',
        'fade-down-2s': 'fade-down-2s 2s',
        'fade-down-3s': 'fade-down-3s 3s',
        
        'fade-in': 'fade-in 2s ease-out forwards'
      },
      keyframes: {
        // Fade Up
        'fade-up-1s': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-up-2s': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-up-3s': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-up-4s': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-up-5s': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },

        // Fade Down
        'fade-down-1s': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-down-2s': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-down-3s': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },

        // Fade Left
        'fade-left-1s': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-left-2s': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-left-3s': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },

        // Fade Right
        'fade-right-1s': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-right-2s': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-right-3s': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-right-4s': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },

        // Fade in
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },

    },
  },
  plugins: [
    daisyui,
  ],
}

