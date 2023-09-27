/** @type {import('tailwindcss').Config} */

module.exports = {
  // content: ["./Public/index.html"],
  content: ["./Public/*.html"],
  theme: {
    screens:{
      'sm':'100px',
      'md':'640px',
      'lg':'1024px',
      'xl':'1280px'
    }
    ,
    extend: {
      "colors":{
        "red":{
          "85":"green"
        },
        "yellow":{
          "2023":"orange"
        },
      }
    },
    "animation":{
      "light1":"light1 12s linear infinite",
      "light2":"light2 12s linear infinite",
      "light3":"light3 12s linear infinite"
    },
   
    "keyframes":{
      "light1":{
        '0%': { color:'black' }, '10%':{color:'red'} ,'20%':{color:'black'}
      },
      "light2":{
        '0%': { color:'black' }, '10%':{color:'red'} ,'20%':{color:'black'}
      },
      "light3":{
        '0%': { color:'black' }, '10%':{color:'red'} ,'20%':{color:'black'}
      },
    }
    
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

