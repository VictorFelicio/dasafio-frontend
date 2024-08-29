import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import './Error.scss';

export function Error({ message }: { message: string | undefined }) {
    return (
        <div id="error">
            <ExclamationTriangleIcon />

            <span>{message}</span>
        </div>
    );
}
