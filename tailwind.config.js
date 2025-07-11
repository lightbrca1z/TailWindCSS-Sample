/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./TailwindCSSStyle/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Yu Gothic', 'Hiragino Sans'],
      },
      colors: {
        'magenta': '#e4007f',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.list-image-img': {
          position: 'relative',
          paddingLeft: '2rem', // pl-8 相当
        },
        '.list-image-img::before': {
          content: "''",
          position: 'absolute',
          left: '0',
          top: '0.25rem',       // top-1 相当
          width: '1.25rem',     // w-5 相当
          height: '1.25rem',    // h-5 相当
          backgroundImage: "url('../img/list-image.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },
      });
    },
  ],
}
