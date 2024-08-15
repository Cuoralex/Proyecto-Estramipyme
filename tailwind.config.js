/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Agrega tus archivos de Angular
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#020659', // Azul oscuro
        secondColor: '#010001', // Negro
        thirdColor: '#FEFFFE', // Blanco
        fourthColor: '#CCAF01', // Amarillo
        fifthColor: '#F25E3D', // Salmón
        paragraphColor: '#2c3e50', // Gris oscuro
        azulAlterno: '#049DBF', // Azul claro
        fondoAlterno: '#DFE3E4' // Fondo alternativo
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
