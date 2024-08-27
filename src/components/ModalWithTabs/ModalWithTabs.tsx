import { useState } from 'react';
import { AuthorForms } from '../AuthorForms/AuthorForms';
import { BookForms } from '../BookForms/BookForms';
import './ModalWithTabs.scss';

interface ModalWithTabsProps {
    isOpen: boolean;
    closeModal: () => void;
}

export function ModalWithTabs({ isOpen, closeModal }: ModalWithTabsProps) {
    const [modalType, setModalType] = useState<'author' | 'book'>('author');

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <main className="content">
                <button onClick={() => closeModal()}>X</button>
                <div>
                    <header>
                        <nav>
                            <button onClick={() => setModalType('author')}>
                                Autor
                            </button>
                            <button onClick={() => setModalType('book')}>
                                Livro
                            </button>
                        </nav>
                    </header>
                </div>
                <div>
                    {modalType == 'author' ? <AuthorForms /> : <BookForms />}
                </div>
            </main>
        </div>
    );
}
