module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        // Configure your color palette here
        'Türkis': '#8acbc1',
        'Dunkelblau': '#2e4053',
        'Gelb': '#f1ea75',
        'Rot': '#ef7983',
      },
      fontFamily: {
        //Stolzl Medium für Headlines, Roboto Regular Text 
        'sans': ['Roboto'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
