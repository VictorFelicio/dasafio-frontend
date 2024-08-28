import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './style/global.scss';
import { LibraryProvider } from './contexts/LibraryContext/LibraryContext.tsx';
import { ModalProvider } from './contexts/ModalContext/ModalContext.tsx';

createRoot(document.getElementById('root')!).render(
    <LibraryProvider>
        <ModalProvider>
            <App />
        </ModalProvider>
    </LibraryProvider>
);
