module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#D9D9D9", 
        button1: "#5E4340", 
        button2: "#747171", 
        gradient1: "#E2CAAE" ,
        gradient2:"#CFC9C9",
      },
      fontSize: {
        'size1': '14px',    
        'size2': '17px', 
        'size3': '19px',    
        'size4': '40px',  
            
      },
      
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
      },

        screens: {
          'sm': '500px', 
        },
        customUtilities: {
          mobile: {
            '@screen sm': {
              width: '100%',
            },
          },
        },
        
      
    },
  },
  plugins: [],
}
