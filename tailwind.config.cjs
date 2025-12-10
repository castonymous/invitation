module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive']
      },
      colors: {
        rose: {
          50: '#fff5f6',
          500: '#B66B6B',
          600: '#A64F54'
        }
      }
    }
  },
  plugins: []
}