import React, { PureComponent } from 'react';
import { TripsUI } from './ui';
import { tripsData } from '../../data/trips';

export class TripsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            trips: tripsData
        };
    }

    filterTrips() {}

    render() {
        const { trips } = this.state;
        return <TripsUI trips={trips} />;
    }
}

export const Trips = TripsContainer;
