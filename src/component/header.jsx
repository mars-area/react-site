import React from 'react';
import './header.css';
import Earth from './earth';
import Stars from './stars';
import Window from './window';

class Header extends React.Component {
    render() {
        return (
            <header className="header__wrapper">
                <Window />
                <Stars />
                <Earth />
            </header>
        );
    }
}

export default Header;