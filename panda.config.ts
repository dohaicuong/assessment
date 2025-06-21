import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      tokens: {
        durations: {
          turtle: { value: '1000ms' },
        },
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  outdir: 'styled-system',
})
