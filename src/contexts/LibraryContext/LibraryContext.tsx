import React, { createContext, useEffect, useState } from 'react';
import { Book } from '../../model/Book';
import { Author } from '../../model/Author';
import { localStorageKey } from '../../enum/localStorageKey';
import { LibraryContextProps } from '../interface/LibraryContextProps';

const LibraryContext = createContext<LibraryContextProps>({} as LibraryContextProps);

function LibraryProvider({ children }: { children: React.ReactNode }) {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const localAuthors = localStorage.getItem(localStorageKey.AUTHOR);
        const localBooks = localStorage.getItem(localStorageKey.BOOK);

        if (localAuthors) {
            setAuthors(JSON.parse(localAuthors));
        }
        if (localBooks) {
            setBooks(JSON.parse(localBooks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorageKey.BOOK, JSON.stringify(books));
    }, [books]);

    useEffect(() => {
        localStorage.setItem(localStorageKey.AUTHOR, JSON.stringify(authors));
    }, [authors]);

    function addAuthor(author: Author) {
        setAuthors((prevAuthors) => [...prevAuthors, author]);
    }

    function updateAuthor(authorToUpdated: Author) {
        setAuthors((prevAuthors) =>
            prevAuthors.map((author) =>
                author.id === authorToUpdated.id ? { ...author, ...authorToUpdated } : author
            )
        );
    }

    function removeAuthor(id: string) {
        setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id != id));

        setBooks((prevBooks) => prevBooks.filter((book) => book.author_id != id));
    }

    function addBook(book: Book) {
        setBooks((prevBooks) => [...prevBooks, book]);
    }

    function updateBook(updatedBook: Book) {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id == updatedBook.id ? { ...book, ...updatedBook } : book
            )
        );
    }

    function removeBook(id: string) {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id != id));
    }

    return (
        <LibraryContext.Provider
            value={{
                authors,
                addAuthor,
                updateAuthor,
                removeAuthor,
                books,
                addBook,
                updateBook,
                removeBook,
            }}
        >
            {children}
        </LibraryContext.Provider>
    );
}

export { LibraryContext, LibraryProvider };
