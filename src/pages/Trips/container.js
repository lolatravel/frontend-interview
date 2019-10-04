import React, { PureComponent } from 'react';
import { TripsUI } from './ui';
import { tripsData } from '../../data/trips';

export class TripsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filterType: 'allTrips'
        };

        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(type) {
        this.setState({ filterType: type });
    }

    render() {
        const { filterType } = this.state;
        return <TripsUI filterType={filterType} onFilterChange={this.onFilterChange} trips={tripsData} />;
    }
}

export const Trips = TripsContainer;
