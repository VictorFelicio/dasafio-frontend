import { useState } from 'react';
import { TableBook } from '../TableBook/TableBook';
import { TableAuthor } from '../TableAuthor/TableAuthor';

type TableType = 'author' | 'book';

export function Table() {
    const [tableType, setTableType] = useState<TableType>('author');
    return (
        <section>
            <div>
                <button onClick={() => setTableType('author')}>
                    Ver autores
                </button>
                <button onClick={() => setTableType('book')}>Ver livros</button>
            </div>
            <main>
                <table>
                    {tableType == 'author' ? <TableAuthor /> : <TableBook />}
                </table>
            </main>
        </section>
    );
}
