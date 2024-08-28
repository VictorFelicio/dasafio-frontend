import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import logo from '../../assets/img/svg/library-svgrepo-com.svg';
import './Header.scss';

export function Header() {
    const { handleOpenModal } = useContext(ModalContext);

    return (
        <header className="header">
            <nav>
                <div>
                    <div className="header-logo">
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="header-button-container">
                    <button onClick={() => handleOpenModal()}>Adicionar</button>
                </div>
            </nav>
        </header>
    );
}
