import { Author } from './Author';

export interface Book {
    id: string;
    name: string;
    author_id: Author['id'];
    pages?: string;
}
