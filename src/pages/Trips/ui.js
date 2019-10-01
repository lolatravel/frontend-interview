import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { TripCard } from 'components';
import { TripType } from '../../constants';

export class TripsUI extends PureComponent {
    static propTypes = {
        trips: PropTypes.arrayOf(TripType)
    };

    static defaultProps = {
        trips: []
    };

    render() {
        const { trips } = this.props;
        return (
            <div>
                <div className="tripsColumn">
                    {trips.map(trip => (
                        <TripCard trip={trip} />
                    ))}
                </div>
            </div>
        );
    }
}
