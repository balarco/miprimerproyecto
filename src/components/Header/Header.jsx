import React, { useState } from 'react';
import MyButton from '../Buttons/Buttons.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Header.css';

const MyHeader = ({ title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="header-content">
                <div className="header-left">
                    <img src="https://cdn-icons-png.flaticon.com/512/3408/3408931.png" alt="Logo"
                         className="header-logo"/>
                    <h1>Widun</h1>
                </div>
                <div className="header-right">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </div>
            </div>
            <nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={menuOpen ? 'open' : ''}>
                    <MyButton title="Vasijas"/>
                    <MyButton title="Pintura"/>
                    <MyButton title="Telares"/>
                </ul>
            </nav>
        </header>
    );
}

export default MyHeader;