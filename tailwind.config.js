/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        pie: "url('/img/FLSAiBEXoAAtS93.jpg')",

        oatmeal: "url('https://images.unsplash.com/photo-1584970922591-5b91e5f927a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' )",
      },

    

     
    },
  },
  plugins: [require("daisyui")],
}

