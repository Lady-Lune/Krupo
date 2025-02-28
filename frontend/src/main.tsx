import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, CssBaseline } from '@mui/material';
import main_theme from "./themes/main_theme.ts";


createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={main_theme}>
    <CssBaseline /> {/* Ensures consistent styling across browsers */}
    <StrictMode>
      <App />
    </StrictMode>,
  </ThemeProvider>
)
