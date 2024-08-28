import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { Author } from '../../model/Author';
import { genereteID } from '../../utils/generateID';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import './AuthorForms.scss';

export function AuthorForms() {
    const { handleSubmit, register, reset } = useForm<Author>({
        defaultValues: {
            email: '',
            name: '',
        },
    });

    const { addAuthor, updateAuthor } = useContext(LibraryContext);

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
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    {...register('name')}
                />
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    {...register('email')}
                />
            </div>
            <div>
                {<button type="submit">{updateEvent.isUpdateEvent ? 'Atualizar' : 'Criar'}</button>}
            </div>
        </form>
    );
}
