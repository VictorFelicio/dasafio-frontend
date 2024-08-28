import { v4 } from 'uuid';

export function genereteID(): string {
    return v4().slice(0, 8);
}
