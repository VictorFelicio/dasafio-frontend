import { useContext } from 'react';
import { Book } from '../../../model/Book';
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import { LibraryContext } from '../../../contexts/LibraryContext/LibraryContext';
import { genereteID } from '../../../utils/generateID';

export function useSubmitBook() {
    const { updateEvent, selectedBook, handleCloseModal } = useContext(ModalContext);
    const { updateBook, addBook } = useContext(LibraryContext);

    function onSubmitBook(data: Book) {
        if (updateEvent.isUpdateEvent && selectedBook) {
            updateBook(data);
        } else {
            const newBook: Book = {
                id: genereteID(),
                name: data.name,
                author_id: data.author_id,
                pages: data.pages ? data.pages : 'N/I',
            };
            addBook(newBook);
        }
        handleCloseModal();
    }
    return { onSubmitBook };
}
