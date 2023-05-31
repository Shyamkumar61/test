// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // optimizeDeps: {
//   //   allowNodeBuiltins: ['@emotion/styled']
//   // }
// })
import { defineConfig } from 'vite';

export default defineConfig({
  // ...other configuration options
  server: {
    host: true,
    strictPort: true,
    port: 5173
  },
  build: {
    outDir: 'dist', // Change the output directory if necessary

    // Set the appropriate asset output paths
    assetsDir: 'static', // Directory for all assets
    assetsInlineLimit: 0, // Disable asset inlining for files exceeding the limit

    rollupOptions: {
      output: {
        // Modify the asset file names to match the desired structure
        assetFileNames: 'static/[ext]/[name].[ext]',
      },
    },
  },
});