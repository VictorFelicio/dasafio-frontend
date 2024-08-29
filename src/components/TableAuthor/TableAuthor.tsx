import { useContext, useState } from 'react';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { Author } from '../../model/Author';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import { EyeOpenIcon, TrashIcon } from '@radix-ui/react-icons';

export function TableAuthor() {
    const { authors, removeAuthor } = useContext(LibraryContext);
    const { handleOpenModal, handleUpdateAuthorEvent } = useContext(ModalContext);

    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
    const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);

    function handleUpdateAuthor(author: Author) {
        handleOpenModal();
        handleUpdateAuthorEvent(author);
    }

    function handleConfirmDelete() {
        if (selectedAuthorId) {
            removeAuthor(selectedAuthorId);
            setIsOpenConfirmModal(false);
            setSelectedAuthorId(null);
        }
    }

    function handleCancelDelete() {
        setIsOpenConfirmModal(false);
        setSelectedAuthorId(null);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th colSpan={2}>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author) => {
                        return (
                            <tr key={author.id}>
                                <td>{author.id}</td>
                                <td>{author.name}</td>
                                <td>{author.email}</td>
                                <td>
                                    <button
                                        id="update"
                                        name="update"
                                        onClick={() => handleUpdateAuthor(author)}
                                    >
                                        <EyeOpenIcon />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        id="exclude"
                                        onClick={() => {
                                            setSelectedAuthorId(author.id);
                                            setIsOpenConfirmModal(true);
                                        }}
                                    >
                                        <TrashIcon />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <ConfirmModal
                isOpen={isOpenConfirmModal}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </>
    );
}
