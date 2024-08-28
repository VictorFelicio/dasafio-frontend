import { useContext, useState } from 'react';
import { TableBook } from '../TableBook/TableBook';
import { TableAuthor } from '../TableAuthor/TableAuthor';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import './Table.scss';

type TableType = 'author' | 'book';

export function Table() {
    const [tableType, setTableType] = useState<TableType>('author');
    const { authors, books } = useContext(LibraryContext);
    const isEmpty = authors.length <= 0 && books.length <= 0;
    return (
        <section className="table">
            <div>
                {isEmpty ? (
                    <div className="table-empty">sem conteudo</div>
                ) : (
                    <>
                        <div className="table-controls">
                            <button onClick={() => setTableType('author')}>Ver autores</button>
                            <button onClick={() => setTableType('book')}>Ver livros</button>
                        </div>
                        <main className="table-main">
                            <table>{tableType == 'author' ? <TableAuthor /> : <TableBook />}</table>
                        </main>
                    </>
                )}
            </div>
        </section>
    );
}
