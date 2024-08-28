import { useContext } from 'react';
import { LibraryContext } from '../../contexts/LibraryContext';

export function TableBook() {
    const { books } = useContext(LibraryContext);
    return (
        <>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Páginas</th>
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
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
