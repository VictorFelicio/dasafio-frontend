import { useContext, useState } from 'react';
import { TableBook } from '../TableBook/TableBook';
import { TableAuthor } from '../TableAuthor/TableAuthor';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import './Table.scss';
import { EmptyContent } from '../EmptyContent/EmptyContent';

type TableType = 'author' | 'book';

export function Table() {
    const [tableType, setTableType] = useState<TableType>('author');
    const { authors, books } = useContext(LibraryContext);
    const isEmpty = authors.length <= 0 && books.length <= 0;
    return (
        <section className="table">
            <div>
                {isEmpty ? (
                    <EmptyContent message="VOCÊ AINDA NÃO ADICIONOU UM AUTOR OU LIVRO!" />
                ) : (
                    <>
                        <div className="table-controls">
                            <button onClick={() => setTableType('author')}>VER AUTORES</button>
                            <button onClick={() => setTableType('book')}>VER LIVROS</button>
                        </div>
                        <main className="table-main">
                            {tableType == 'author' ? <TableAuthor /> : <TableBook />}
                        </main>
                    </>
                )}
            </div>
        </section>
    );
}
