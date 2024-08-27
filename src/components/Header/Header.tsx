import { useState } from 'react';
import { ModalWithTabs } from '../ModalWithTabs/ModalWithTabs';
import './Header.scss';

export function Header() {
    const [isOpen, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        console.log(isOpen);

        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        console.log(isOpen);
        setIsOpenModal(false);
    };

    return (
        <header className="header">
            <nav>
                <div>
                    <div>Logo</div>
                </div>
                <div>
                    <button onClick={() => handleOpenModal()}>Adicionar</button>
                </div>
            </nav>
            <ModalWithTabs isOpen={isOpen} closeModal={handleCloseModal} />
        </header>
    );
}
