import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Noto Sans JP'].join(','),
    allVariants: {
      color: '#000'
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
          padding: '6px 12px 7px',
          backgroundColor: '#000'
        },
        arrow: {
          color: '#000'
        }
      }
    }
  }
})
