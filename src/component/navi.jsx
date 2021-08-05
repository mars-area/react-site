import React from 'react';
import './navi.css';

// create component navigation
class Navi extends React.Component {
    render() {
        return (
            <div className="navigation__wrapper">
                <div className="container"> 
                    <div className="navbrand">
                        <a href="/">Margatama</a>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li className="home">
                                <a href="#/home">Home</a>
                            </li>
                            <li className="about">
                                <a href="#/about">About</a>
                            </li>
                            <li className="Contact">
                                <a href="#/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
// export
export default Navi;