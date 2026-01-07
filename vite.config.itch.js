import { defineConfig } from "vite";

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist-itch',
        emptyOutDir: true,
    }
})
