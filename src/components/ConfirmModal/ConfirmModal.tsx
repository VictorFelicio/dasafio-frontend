import './ConfirmModal.scss'; // Importa o arquivo SCSS

interface ConfirmModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export function ConfirmModal({ isOpen, onConfirm, onCancel }: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="confirm-dialog-overlay">
            <div className="confirm-dialog-content">
                <h2 className="confirm-dialog-title">Confirmação</h2>
                <p className="confirm-dialog-message">
                    Atenção ao excluir esse autor, todos os seus respectivos livros também serão
                    excluídos, deseja prosseguir?
                </p>
                <div className="confirm-dialog-buttons">
                    <button
                        className="confirm-dialog-cancel"
                        onClick={onCancel}
                    >
                        CANCELAR
                    </button>
                    <button
                        onClick={onConfirm}
                        className="confirm-dialog-confirm"
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
}
