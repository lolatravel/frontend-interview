import React, { PureComponent } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { TripType } from '../../constants';

export class TripCardUI extends PureComponent {
    static propTypes = {
        trip: PropTypes.arrayOf(TripType)
    };

    static defaultProps = {
        trip: null
    };

    render() {
        const { trip } = this.props;
        return (
            <div className="tripCard">
                <div className="image" />
                <h3 className="name">{trip.name}</h3>
                <text className="datesText">{trip.dates}</text>
                <text className="bookedByText">Booked by: {trip.bookedBy}</text>
                <text className="travelersText">Travelers: travelers</text>
            </div>
        );
    }
}
