import React, { PureComponent } from 'react';
import './styles.css';
import { Chevron } from '../../assets/Chevron';

export class HeaderUI extends PureComponent {
    render() {
        return (
            <header>
                <nav className="headerContainer">
                    <div className="verticallyCentered">
                        <ul className="menuList">
                            <li>
                                <span className="menuItem">UPCOMING</span>
                            </li>
                            <li>
                                <span className="menuItem">PAST</span>
                            </li>
                        </ul>
                    </div>
                    <div className="verticallyCentered">
                        <span>SORT BY DATE</span>
                        <div className="chevronContainer verticallyCentered">
                            <Chevron color="#ffffff" />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
