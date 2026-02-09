import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.', // tetap OK

  globalSetup: './Setup/auth.setup.js',

  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'credential',
      testMatch: /TestCredential\/.*\.spec\.js/,
    },

    {
      name: 'authenticated',
      testMatch: /Feature\/.*\.spec\.js/,
      use: {
        storageState: 'auth.json',
      },
    },
  ],
});
/*
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.', // PENTING: karena config ada di TestCase
  
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },

  projects: [
    // 2️⃣ Test credential (TC 1 - TC 12)
    {
      name: 'credential',
      testMatch: /TestCredential\/.*\.spec\.js/,
    },
	
	// 1️⃣ Setup login (harus jalan dulu)
    {
      name: 'setup',
      testMatch: /Setup\/auth\.setup\.spec\.js/,

    },

    // 3️⃣ Feature test (TC 13 - TC 14, butuh login)
    {
      name: 'authenticated',
      testMatch: /Feature\/.*\.spec\.js/,
      dependencies: ['setup'],
      use: {
        storageState: 'auth.json',
      },
    },
  ],
});
*/