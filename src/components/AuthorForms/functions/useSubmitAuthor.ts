import { useContext } from 'react';
import { Author } from '../../../model/Author';
import { LibraryContext } from '../../../contexts/LibraryContext/LibraryContext';
import { ModalContext } from '../../../contexts/ModalContext/ModalContext';
import { genereteID } from '../../../utils/generateID';

export function useSubmitAuthor() {
    const { updateAuthor, addAuthor } = useContext(LibraryContext);
    const { selectedAuthor, updateEvent, handleCloseModal } = useContext(ModalContext);

    function onSubmitAuthor(data: Author) {
        if (updateEvent.isUpdateEvent && selectedAuthor) {
            updateAuthor(data);
        } else {
            const newAuthor: Author = {
                id: genereteID(),
                name: data.name,
                email: data.email ? data.email : 'N/I',
            };
            addAuthor(newAuthor);
        }
        handleCloseModal();
    }

    return { onSubmitAuthor };
}
