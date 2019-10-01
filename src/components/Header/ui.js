import React, { PureComponent } from 'react';
import './styles.css';
import { LolaLogo } from 'components';

export class HeaderUI extends PureComponent {
    render() {
        return (
            <header>
                <nav className="headerContainer">
                    <div class="verticallyCentered">
                        <LolaLogo />
                        <ul class="menuList">
                            <li>
                                <span class="menuItem">UPCOMING</span>
                            </li>
                            <li>
                                <span class="menuItem">PAST</span>
                            </li>
                        </ul>
                    </div>
                    <div class="verticallyCentered">
                        <span>SORT BY DATE</span>
                    </div>
                </nav>
            </header>
        );
    }
}
