import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HeaderUI } from './ui';

export class HeaderContainer extends PureComponent {
    static propTypes = {
        filterType: PropTypes.string,
        onFilterChange: PropTypes.func
    };

    static defaultProps = {
        filterType: 'allTrips',
        onFilterChange: undefined
    };

    render() {
        const { filterType, onFilterChange } = this.props;
        return <HeaderUI filterType={filterType} onFilterChange={onFilterChange} />;
    }
}

export const Header = HeaderContainer;
