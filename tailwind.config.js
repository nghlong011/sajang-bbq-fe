/** @type {import('tailwindcss').Config} */
const colorsOriginal = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 3px 10px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        logo: "url('/src/assets/images/logo.png')",
        'home-concept': "url('/src/assets/images/concept.jpg')",
        menu1: "url('/src/assets/images/menu/menu1.jpg')",
        menu2: "url('/src/assets/images/menu/menu2.jpg')",
        menu3: "url('/src/assets/images/menu/menu3.jpg')",
        menu4: "url('/src/assets/images/menu/menu4.jpg')",
        sale1: "url('/src/assets/images/sale/sale1.jpg')",
        sale2: "url('/src/assets/images/sale/sale2.jpg')",
        sale3: "url('/src/assets/images/sale/sale3.jpg')",
        sale4: "url('/src/assets/images/sale/sale4.jpg')",
        gallery1: "url('/src/assets/images/gallery/gallery1.png')",
        gallery2: "url('/src/assets/images/gallery/gallery2.png')",
        gallery3: "url('/src/assets/images/gallery/gallery3.png')",
        gallery4: "url('/src/assets/images/gallery/gallery4.png')",
        blog1: "url('/src/assets/images/blog/blog1.jpg')",
        offer: "url('/src/assets/images/Sajang-BBQ-web-Uu-dai-dong-ho-dem-nguoc.jpg')",
        home_address: "url('/src/assets/images/home2.jpg')",
        home_offer: "url('/src/assets/images/sajang-23-scaled.jpg')",
      },
    },
    colors: {
      ...colorsOriginal,
      primary: '#a31d24',
      'primary-hover': '#a31d24d2',
      secondary: '#666666',
      'secondary-hover': '#666666d2',
      dark: '#424242',
      light: '#EBEBEB',
      tertiary: '#03A9F4',
      error: '#F31700',
      info: '#0058E9',
      success: '#37B400',
      warning: '#FFC000',
      white: '#ffffff',
      black: '#000000',
      'dark-blue': '#215E74',
      'dark-green': '#529949',
      'light-gray': '#F0F0F0',
      link: '#5284FF',
      red: '#CF2B27',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
