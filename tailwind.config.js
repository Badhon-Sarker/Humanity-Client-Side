/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login' : "url('https://i.ibb.co/z4pW9sj/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh.jpg')",
        'register' : "url('https://i.ibb.co/b18xQsL/360-F-590138937-m-F4-O0-QI7-S72o4tu-Ck96-Ay-Xb-Eahu-Ji-LJL.jpg')"
      },
      fontFamily: {
        'playfair': '"Playfair Display", serif',
      }
    },
  },
  plugins: [require("daisyui")],
}

