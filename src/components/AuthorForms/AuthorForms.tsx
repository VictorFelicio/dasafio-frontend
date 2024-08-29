import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { Author } from '../../model/Author';
import { genereteID } from '../../utils/generateID';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import './AuthorForms.scss';
import { Error } from '../Error/Error';

export function AuthorForms() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<Author>({
        defaultValues: {
            email: '',
            name: '',
        },
    });

    const { addAuthor, updateAuthor, validateEmailUnique, authors } = useContext(LibraryContext);

    const { updateEvent, selectedAuthor, handleCloseModal } = useContext(ModalContext);

    useEffect(() => {
        if (selectedAuthor && updateEvent.isUpdateEvent) {
            reset(selectedAuthor);
        }
    }, [reset, selectedAuthor, updateEvent]);

    const onSubmitAuthor = (data: Author) => {
        if (updateEvent.isUpdateEvent && selectedAuthor) {
            updateAuthor(data);
        } else {
            const newAuthor: Author = {
                id: genereteID(),
                name: data.name,
                email: data.email ? data.email : 'N/I',
            };
            addAuthor(newAuthor);
        }
        handleCloseModal();
    };

    return (
        <form
            className="author-forms"
            onSubmit={handleSubmit(onSubmitAuthor)}
        >
            <div>
                <label htmlFor="name">NOME</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', {
                        required: 'O nome do autor é obrigatório',
                        minLength: { value: 4, message: 'O nome deve possuir 4 letras ou mais' },
                    })}
                />
            </div>
            <div>
                <label htmlFor="email">E-MAIL</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'E-mail inválido',
                        },
                        validate: (email) => validateEmailUnique(email, authors),
                    })}
                />
            </div>
            <div className="author-forms-options-buttons">
                {
                    <button type="submit">
                        {updateEvent.isUpdateEvent ? 'ATUALIZAR' : 'ADICIONAR'}
                    </button>
                }
                <button
                    onClick={handleCloseModal}
                    className="author-form-abort-btn"
                >
                    CANCELAR
                </button>
            </div>
            {errors.name && <Error message={errors.name.message} />}
            {errors.email && <Error message={errors.email.message} />}
        </form>
    );
}
