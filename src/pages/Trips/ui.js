import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Header } from 'components';
import { TripType } from '../../constants';

export class TripsUI extends PureComponent {
    static propTypes = {
        trips: PropTypes.arrayOf(TripType),
        onFilterChange: PropTypes.func.isRequired,
        filterType: PropTypes.string.isRequired
    };

    static defaultProps = {
        trips: []
    };

    render() {
        const { trips, filterType, onFilterChange } = this.props;
        return (
            <>
                <Header filterType={filterType} onFilterChange={onFilterChange} />
                <div className="tripsContainer">
                    <div className="tripsColumn">
                        {trips.map(trip => (
                            <div className="card">
                                <text>{trip.name}</text>{' '}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
