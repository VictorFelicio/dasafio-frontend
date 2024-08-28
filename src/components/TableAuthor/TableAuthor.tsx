import { useContext } from 'react';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';

export function TableAuthor() {
    const { authors } = useContext(LibraryContext);
    return (
        <>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>email</th>
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
                                <button>editar</button>
                            </td>
                            <td>
                                <button>excluir</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
