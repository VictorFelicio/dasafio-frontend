import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { genereteID } from '../../utils/generateID';
import { Book } from '../../model/Book';
import './BookForms.scss';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { Error } from '../Error/Error';
export function BookForms() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<Book>({
        defaultValues: {
            name: '',
            pages: '',
            author_id: '',
        },
    });
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
                <label htmlFor="name">TÍTULO</label>
                <input
                    type="text"
                    {...register('name', {
                        required: 'O título do livro é obrigatório!',
                        minLength: {
                            value: 4,
                            message: 'O título deve conter 4 caracteres ou mais!',
                        },
                    })}
                    id="name"
                />
            </div>
            <div>
                <label htmlFor="">AUTOR</label>
                <select
                    {...register('author_id', { required: 'O autor do livro é obrigatório!' })}
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
                <label htmlFor="pages">PÁGINAS</label>
                <input
                    type="number"
                    id="pages"
                    {...register('pages')}
                />
            </div>
            <div className="book-forms-options-buttons">
                <button>{updateEvent.isUpdateEvent ? 'ATUALIZAR' : 'ADICIONAR'}</button>
                <button
                    className="book-form-abort-btn"
                    onClick={handleCloseModal}
                >
                    CANCELAR
                </button>
            </div>
            {errors.name && <Error message={errors.name.message} />}
            {errors.author_id && <Error message={errors.author_id.message} />}
        </form>
    );
}
