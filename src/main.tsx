import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './style/global.scss';
import { LibraryProvider } from './contexts/LibraryContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LibraryProvider>
            <App />
        </LibraryProvider>
    </StrictMode>
);
