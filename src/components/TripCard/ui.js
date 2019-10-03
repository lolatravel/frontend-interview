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
                <h3 className="nameText">{trip.name}</h3>
            </div>
        );
    }
}
