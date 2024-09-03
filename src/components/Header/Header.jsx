import MyButton from '../Buttons/Buttons.jsx';
import './Header.css';

const MyHeader = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    <MyButton title="Teehee" />
                </ul>
            </nav>
        </header>
    );
}

export default MyHeader;