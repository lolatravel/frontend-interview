import React, { PureComponent } from 'react';
import XDate from 'xdate';
import { TripCardUI } from './ui';
import { TripType } from '../../constants';

export class TripCardContainer extends PureComponent {
    static propTypes = {
        trip: TripType
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
        const travelerNames = [];
        trip.travelers.forEach(traveler => {
            travelerNames.push(`${traveler.firstName} ${traveler.lastName}`);
        });
        return travelerNames.join(', ');
    }

    formatDate() {
        const { trip } = this.props;
        const length = new XDate(trip.startDate).diffDays(new XDate(trip.endDate));
        return `${trip.startDate} - ${trip.endDate} • ${length} nights`;
    }

    render() {
        const { trip } = this.props;
        return (
            <TripCardUI
                date={this.formatDate()}
                travelers={this.formatTravelers()}
                bookerName={this.formatBookerName()}
                trip={trip}
            />
        );
    }
}

export const TripCard = TripCardContainer;
