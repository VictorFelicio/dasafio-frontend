import { useContext } from 'react';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { Book } from '../../model/Book';
import { EyeOpenIcon, TrashIcon } from '@radix-ui/react-icons';
export function TableBook() {
    const { books, removeBook } = useContext(LibraryContext);
    const { handleOpenModal, handleUpdateBookEvent } = useContext(ModalContext);

    const handleUpdateBook = (book: Book) => {
        console.log(book);
        handleOpenModal();
        handleUpdateBookEvent(book);
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>AUTOR</th>
                        <th>PÁGINAS</th>
                        <th colSpan={2}>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => {
                        return (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.author_id}</td>
                                <td>{book.pages}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleUpdateBook(book);
                                        }}
                                    >
                                        <EyeOpenIcon />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            removeBook(book.id);
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
        </>
    );
}
