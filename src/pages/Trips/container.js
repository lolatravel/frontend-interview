import React, { PureComponent } from 'react';
import { TripsUI } from './ui';
import { trips } from '../../data/trips';

export class TripsContainer extends PureComponent {
    render() {
        return <TripsUI trips={trips} />;
    }
}

export const Trips = TripsContainer;
