import { useContext } from 'react';
import { ModalWithTabs } from '../ModalWithTabs/ModalWithTabs';
import './Header.scss';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

export function Header() {
    const { isOpenModal, handleCloseModal, handleOpenModal } =
        useContext(ModalContext);

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
            <ModalWithTabs
                isOpen={isOpenModal}
                handleCloseModal={handleCloseModal}
            />
        </header>
    );
}
