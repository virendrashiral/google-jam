import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   // The base path should be the name of your GitHub repository.
   // This is crucial for GitHub Pages deployments in a sub-directory.
   base: "/google-jam/", 
  plugins: [react()],
  
})
