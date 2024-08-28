import { useContext } from 'react';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { Book } from '../../model/Book';
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
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Páginas</th>
                    <th>Visualizar</th>
                    <th>Excluir</th>
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
                                    Editar
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        removeBook(book.id);
                                    }}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
