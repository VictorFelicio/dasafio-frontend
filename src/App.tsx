import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ModalWithTabs } from './components/ModalWithTabs/ModalWithTabs';
import { Table } from './components/Table/Table';

export function App() {
    return (
        <>
            <Header />
            <Table />
            <Footer />
            <ModalWithTabs />
        </>
    );
}
