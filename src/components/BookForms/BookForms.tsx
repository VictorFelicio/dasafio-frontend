import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { genereteID } from '../../utils/generateID';
import { Book } from '../../model/Book';
import './BookForms.scss';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
export function BookForms() {
    const { handleSubmit, register, reset } = useForm<Book>({});
    const { authors, addBook, updateBook } = useContext(LibraryContext);
    const { handleCloseModal, updateEvent, selectedBook } = useContext(ModalContext);

    useEffect(() => {
        if (selectedBook && updateEvent.isUpdateEvent) {
            reset(selectedBook);
        }
    }, [reset, selectedBook, updateEvent]);

    const onSubmitBook = (data: Book) => {
        if (updateEvent.isUpdateEvent && selectedBook) {
            updateBook(data);
        } else {
            const newBook: Book = {
                id: genereteID(),
                name: data.name,
                author_id: data.author_id,
                pages: data.pages ? data.pages : 'N/I',
            };
            addBook(newBook);
            reset();
        }
        handleCloseModal();
    };
    return (
        <form
            className="book-forms"
            onSubmit={handleSubmit(onSubmitBook)}
        >
            <div>
                <label htmlFor="name">Titulo</label>
                <input
                    type="text"
                    {...register('name')}
                    id="name"
                />
            </div>
            <div>
                <label htmlFor="">Autor</label>
                <select
                    {...register('author_id')}
                    id="author"
                >
                    {authors.map((author) => {
                        return (
                            <option
                                key={author.id}
                                value={author.id}
                            >
                                {author.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="pages">Páginas</label>
                <input
                    type="number"
                    id="pages"
                    {...register('pages')}
                />
            </div>
            <div>
                <button>{updateEvent.isUpdateEvent ? 'Atualizar' : 'Criar'}</button>
            </div>
        </form>
    );
}
