import { createContext, useState } from 'react';

interface ModalProps {
    isOpenModal: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    isUpdateEvent: boolean;
    handleUpdateEvent: () => void;
}

const ModalContext = createContext<ModalProps>({} as ModalProps);

function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isUpdateEvent, setIsUpdateEvent] = useState<boolean>(false);
    const handleOpenModal = () => {
        console.log('abrir modal chamado');

        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        console.log('fechar modal chamado');

        setIsOpenModal(false);
        setIsUpdateEvent(false);
    };

    const handleUpdateEvent = () => {
        setIsUpdateEvent(true);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpenModal,
                handleCloseModal,
                handleOpenModal,
                isUpdateEvent,
                handleUpdateEvent,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider };
