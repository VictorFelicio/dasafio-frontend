import { useContext, useEffect, useState } from 'react';
import { AuthorForms } from '../AuthorForms/AuthorForms';
import { BookForms } from '../BookForms/BookForms';
import './ModalWithTabs.scss';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { Cross1Icon } from '@radix-ui/react-icons';

export function ModalWithTabs() {
    const [modalType, setModalType] = useState<'author' | 'book' | undefined>('author');
    const { isOpenModal, handleCloseModal, updateEvent } = useContext(ModalContext);

    useEffect(() => {
        if (updateEvent.isUpdateEvent) {
            setModalType(updateEvent.type);
        }
    }, [updateEvent]);

    if (!isOpenModal) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <main className="modal-content">
                <div>
                    <header>
                        <nav className="modal-tabs">
                            {updateEvent.isUpdateEvent ? (
                                updateEvent.type == 'author' ? (
                                    <button
                                        onClick={() => setModalType('author')}
                                        className={`modal-tab-button ${modalType === 'author' ? 'active' : ''}`}
                                    >
                                        Autor
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setModalType('book')}
                                        className={`modal-tab-button ${modalType === 'book' ? 'active' : ''}`}
                                    >
                                        Livro
                                    </button>
                                )
                            ) : (
                                <>
                                    <button
                                        onClick={() => setModalType('author')}
                                        className={`modal-tab-button ${modalType === 'author' ? 'active' : ''}`}
                                    >
                                        Autor
                                    </button>
                                    <button
                                        onClick={() => setModalType('book')}
                                        className={`modal-tab-button ${modalType === 'book' ? 'active' : ''}`}
                                    >
                                        Livro
                                    </button>
                                </>
                            )}
                        </nav>
                        <button
                            className="modal-close-button"
                            onClick={handleCloseModal}
                        >
                            <Cross1Icon />
                        </button>
                    </header>
                </div>
                <div className="modal-tab-content">
                    {modalType === 'author' ? <AuthorForms /> : <BookForms />}
                </div>
            </main>
        </div>
    );
}
