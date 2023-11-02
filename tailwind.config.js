module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      colors: {
        'dot': "#E6E6E6",
        'purblur': "#C186B0",
        'yelblur':"#F6E4C9"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}