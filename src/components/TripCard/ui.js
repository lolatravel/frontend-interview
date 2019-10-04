import React, { PureComponent } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { TripType } from '../../constants';

export class TripCardUI extends PureComponent {
    static propTypes = {
        trip: PropTypes.arrayOf(TripType),
        bookerName: PropTypes.string,
        travelers: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
        date: PropTypes.string
    };

    static defaultProps = {
        trip: null,
        bookerName: null,
        travelers: [],
        date: null
    };

    render() {
        const { trip, bookerName, travelers, date } = this.props;
        return (
            <div className="tripCard">
                <img className="tripImage" src={trip.image} alt="trip" />
                <h3 className="nameText">{trip.name}</h3>
                <text className="datesText">{date}</text>
                <text className="uppercase">Booked By: {bookerName}</text>
                <text className="uppercase">Travelers: {travelers}</text>
            </div>
        );
    }
}
