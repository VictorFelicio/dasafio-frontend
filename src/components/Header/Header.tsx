import { useContext } from 'react';
import './Header.scss';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

export function Header() {
    const { handleOpenModal } = useContext(ModalContext);

    return (
        <header className="header">
            <nav>
                <div>
                    <div className="logo">Logo</div>
                </div>
                <div className="button-container">
                    <button onClick={() => handleOpenModal()}>Adicionar</button>
                </div>
            </nav>
        </header>
    );
}
