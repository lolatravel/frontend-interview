import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { TripCard, Header } from 'components';
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
            <>
                <Header />
                <div className="tripsContainer">
                    <div className="tripsColumn">
                        {trips.map(trip => (
                            <TripCard trip={trip} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
