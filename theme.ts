import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
    fonts: {
      heading: "'Ubuntu', -apple-system, system-ui, sans-serif",
      body: "'Open Sans', -apple-system, system-ui, sans-serif",
    },
  },
  proTheme,
)
