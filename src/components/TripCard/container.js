import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TripCardUI } from './ui';
import { TripType } from '../../constants';

export class TripCardContainer extends PureComponent {
    static propTypes = {
        trip: PropTypes.arrayOf(TripType)
    };

    static defaultProps = {
        trip: null
    };

    formatBookerName() {
        const { trip } = this.props;
        return `${trip.bookedBy.firstName} ${trip.bookedBy.lastName}`;
    }

    formatTravelers() {
        const { trip } = this.props;
        return trip.travelers.map(traveler => `${traveler.firstName} ${traveler.lastName}`).join(', ');
    }

    render() {
        const { trip } = this.props;
        return <TripCardUI travelers={this.formatTravelers()} bookerName={this.formatBookerName()} trip={trip} />;
    }
}

export const TripCard = TripCardContainer;
