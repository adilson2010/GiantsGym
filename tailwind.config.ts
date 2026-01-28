/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Cores personalizadas usadas nos estilos da aplicação */
        background: "#fdfdfd",   /* fundo claro neutro */
        foreground: "#1a1a1a",   /* texto principal escuro */
      },
    },
  },
  plugins: [],
}