/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#86888a',
          200: '#767676',
          300: '#282828',
          400: '#202124',
          500: '#060606',
        },
        whitesmoke: {
          100: '#f1f3f4',
          200: '#f1f1f1',
        },
        silver: {
          100: '#c4c4c4',
          200: '#b6b6b6',
        },
        white: '#fff',
        darkslategray: {
          100: '#3d4043',
          200: '#35363a',
        },
        black: '#000',
        forestgreen: '#58a942',
        gainsboro: '#d9d9d9',
        tomato: '#ff3b30',
        darkgray: 'rgba(177, 177, 177, 0.5)',
      },
      borderRadius: {
        sm: '14px',
        '8xs': '5px',
        mini: '15px',
      },
      spacing: {},
      fontFamily: {},
    },
    fontSize: {},
  },
  corePlugins: {
    preflight: false,
  },
};
