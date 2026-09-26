import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  // site: { title: "講評世界" },
  // seo: { twitter: "@moeyua13" },

  appearance: {
    colorsLight: {
      primary: '#333333',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#eeeeee',
      background: '#232222',
    },
  },
}
