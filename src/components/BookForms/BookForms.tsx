import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { Book } from '../../model/Book';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { Error } from '../Error/Error';
import { useSubmitBook } from './functions/useSubmitBook';
import './BookForms.scss';

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
    const { authors } = useContext(LibraryContext);
    const { handleCloseModal, updateEvent, selectedBook } = useContext(ModalContext);

    const { onSubmitBook } = useSubmitBook();

    useEffect(() => {
        if (selectedBook && updateEvent.isUpdateEvent) {
            reset(selectedBook);
        }
    }, [reset, selectedBook, updateEvent]);

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
