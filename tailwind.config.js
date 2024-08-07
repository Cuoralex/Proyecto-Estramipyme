/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Agrega tus archivos de Angular
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#020659', //Azul oscuro
        secondColor: '#010001', //Negro
        thirdColor: '#FEFFFE', //Blanco
        fourthColor: '#CCAF01', //Amarillo
        fifthColor: '#F25E3D', //Salmon
        paragraphColor: '#2c3e50', //Gris Oscuro
        azulAlterno: '#049DBF', //Azul claro
      },
    },
  },
  plugins: [],
}


