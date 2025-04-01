/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      colors: { myPizzaColor: '#fff' },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [
    {
      tailwindConfig: './styles/tailwind.config.js',
    },
  ],
};
