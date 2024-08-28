import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LibraryContext } from '../../contexts/LibraryContext/LibraryContext';
import { Author } from '../../model/Author';
import { genereteID } from '../../utils/generateID';

export function AuthorForms() {
    const { handleSubmit, register, reset } = useForm<Author>();
    const { addAuthor } = useContext(LibraryContext);
    return (
        <form
            onSubmit={handleSubmit((data) => {
                const newAuthor: Author = {
                    id: genereteID(),
                    name: data.name,
                    email: data.email ? data.email : 'N/I',
                };
                addAuthor(newAuthor);
                reset();
                console.log(newAuthor);
            })}
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
                <button type="submit">Criar</button>
            </div>
        </form>
    );
}
