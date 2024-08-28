import { useState } from 'react';
import { TableBook } from '../TableBook/TableBook';
import { TableAuthor } from '../TableAuthor/TableAuthor';
import './Table.scss';

type TableType = 'author' | 'book';

export function Table() {
    const [tableType, setTableType] = useState<TableType>('author');
    return (
        <section className="table-container">
            <div className="table-controls">
                <button onClick={() => setTableType('author')}>Ver autores</button>
                <button onClick={() => setTableType('book')}>Ver livros</button>
            </div>
            <main className="table-main">
                <table>{tableType == 'author' ? <TableAuthor /> : <TableBook />}</table>
            </main>
        </section>
    );
}
