/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        head: [
  				'Mystery Quest',
  				'serif'
  			]
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // New keyframe for pop-in
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '60%': { opacity: '1', transform: 'scale(1.05)' }, // Slightly overshoot for a "pop"
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite", // 8s, ease, infinite loop
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pop-in': 'popIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
