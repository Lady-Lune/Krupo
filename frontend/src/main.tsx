import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import theme from '../config/theme'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
          <App />
    </MantineProvider>
);
