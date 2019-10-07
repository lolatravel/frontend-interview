import React, { PureComponent } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import image from '../../assets/img/no-photo-image.png';
import { TripType } from '../../constants';

export class TripCardUI extends PureComponent {
    static propTypes = {
        trip: TripType,
        bookerName: PropTypes.string,
        travelers: PropTypes.string,
        date: PropTypes.string
    };

    static defaultProps = {
        trip: null,
        bookerName: null,
        travelers: null,
        date: null
    };

    render() {
        const { trip, bookerName, travelers, date } = this.props;
        return (
            <div className="tripCard">
                <img className="tripImage" src={trip.image || image} alt="trip" />
                <h3 className="nameText">{trip.name}</h3>
                <p className="datesText">{date}</p>
                <p className="uppercase">Booked By: {bookerName}</p>
                <p className="uppercase">Travelers: {travelers}</p>
            </div>
        );
    }
}
