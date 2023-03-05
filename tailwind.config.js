module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation :{
        'fade-in-up': 'fade-in-up 0.3s ease-in-out'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require("@tailwindcss/forms")],
}
