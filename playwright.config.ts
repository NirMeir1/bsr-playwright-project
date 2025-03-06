import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://api.buf.build', // BSR API endpoint
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.BUF_API_TOKEN}`, // Set your API token
    },
  },
});
