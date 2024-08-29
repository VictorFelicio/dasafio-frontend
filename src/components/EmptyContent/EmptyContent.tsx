import { FileTextIcon } from '@radix-ui/react-icons';
import './EmptyContent.scss';

export function EmptyContent({ message }: { message: string }) {
    return (
        <div className="empty-content">
            <FileTextIcon className="empty-content-icon" />
            <p>{message}</p>
        </div>
    );
}
