// @ts-check
import { defineConfig } from 'astro/config';

// No adapter needed for static export with default settings
export default defineConfig({
  output: 'static', // ensures full static HTML output (default for most projects)
  base: '/',        // use '/' unless you're hosting under a subfolder
});