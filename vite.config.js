import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the server accessible on the local network
    port: 5817,      // Ensure the port matches the one you want to use
  },
})
