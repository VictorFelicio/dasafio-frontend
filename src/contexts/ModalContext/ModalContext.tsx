import { createContext, useState } from 'react';
import { Author } from '../../model/Author';
import { Book } from '../../model/Book';

interface ModalProps {
    isOpenModal: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    updateEvent: UpdateEvent;
    handleUpdateAuthorEvent: (author: Author) => void;
    selectedAuthor: Author | undefined;
    setSelectedAuthor: (author: Author | undefined) => void;
    handleUpdateBookEvent: (book: Book) => void;
    selectedBook: Book | undefined;
    setSelectedBook: (book: Book | undefined) => void;
}

interface UpdateEvent {
    isUpdateEvent: boolean;
    type?: 'author' | 'book';
}

const ModalContext = createContext<ModalProps>({} as ModalProps);

function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [updateEvent, setUpdateEvent] = useState<UpdateEvent>({ isUpdateEvent: false });
    const [selectedAuthor, setSelectedAuthor] = useState<Author | undefined>();
    const [selectedBook, setSelectedBook] = useState<Book | undefined>();

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
        setUpdateEvent({ isUpdateEvent: false });
    };

    const handleUpdateAuthorEvent = (author: Author) => {
        setUpdateEvent({ isUpdateEvent: true, type: 'author' });
        setSelectedAuthor(author);
    };
    const handleUpdateBookEvent = (book: Book) => {
        setUpdateEvent({ isUpdateEvent: true, type: 'book' });
        setSelectedBook(book);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpenModal,
                handleCloseModal,
                handleOpenModal,
                updateEvent,
                handleUpdateAuthorEvent,
                selectedAuthor,
                setSelectedAuthor,
                handleUpdateBookEvent,
                selectedBook,
                setSelectedBook,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider };
