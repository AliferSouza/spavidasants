// vite.config.js
export default {
    server: {
      proxy: {
          '*': 'http://localhost:5173/', 
        
      },
    },
  }
  