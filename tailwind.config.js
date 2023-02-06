/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {

    minWidth: {
      l: "7rem"
    },
    minHeight: {
      l: "5rem"
    },
    fontWeight: {
      normal: 300,
      bold: 600,
      extraBold: 800
    },
    colors: {
      darkBlue: {
        100: 'hsl(209, 23%, 22%)',
        200: ' hsl(207, 26%, 17%)',
        300: ' hsl(200, 15%, 8%)'
      },
      gray: {
        100: ' hsl(0, 0%, 98%)',
        200: ' hsl(0, 0%, 52%)'
      },
      white: 'hsl(0, 0%, 100%)'
    },
    extend: {
      maxWidth: {
        ssm: "12.5rem",
        msm: "15.5rem",
        lsm: "20rem"
      },
    }
  },
  plugins: []
};
