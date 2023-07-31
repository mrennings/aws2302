import './aufgabe1.css';
import { Header, Main, Footer } from './aufgabe1_comp.js';
import { Counter, Uhrzeit} from './Aufgabe2.js';

function Aufgabe1() {
    return (
        <>
        <Header name="Markus'"/>
        <Uhrzeit/>
        <Main />
        <Counter />
        <Footer />
        </>
    );
}

export default Aufgabe1;