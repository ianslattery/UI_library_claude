import type { StorybookConfig } from '@storybook/angular-vite';

const base = process.env.STORYBOOK_BASE ?? '/';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/angular-vite',
  viteFinal: async (viteConfig) => ({ ...viteConfig, base }),
};
export default config;
