/** @format */

import { Author } from '../../model/Author';
import { Book } from '../../model/Book';

export interface LibraryContextProps {
    authors: Author[];
    books: Book[];
    addAuthor: (author: Author) => void;
    updateAuthor: (updatedAuthor: Author) => void;
    removeAuthor: (id: string) => void;
    addBook: (book: Book) => void;
    updateBook: (updatedBook: Book) => void;
    removeBook: (id: string) => void;
    validateEmailUnique: (email: string | undefined, authors: Author[]) => true | string;
}
