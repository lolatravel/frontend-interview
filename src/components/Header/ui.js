import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Chevron } from '../../assets/Chevron';

export class HeaderUI extends PureComponent {
    static propTypes = {
        filterType: PropTypes.string,
        onFilterChange: PropTypes.func
    };

    static defaultProps = {
        filterType: 'allTrips',
        onFilterChange: undefined
    };

    render() {
        const { onFilterChange, filterType } = this.props;
        return (
            <header>
                <nav className="headerContainer">
                    <div className="verticallyCentered">
                        <ul className="menuList">
                            <li>
                                <p
                                    onClick={() => {
                                        onFilterChange('allTrips');
                                    }}
                                    className={`menuItem ${filterType === 'allTrips' && 'underline'}`}
                                >
                                    ALL TRIPS
                                </p>
                            </li>
                            <li>
                                <p
                                    onClick={() => {
                                        onFilterChange('myTrips');
                                    }}
                                    className={`menuItem ${filterType === 'myTrips' && 'underline'}`}
                                >
                                    MY TRIPS
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="filterMenu">
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
