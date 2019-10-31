import React, { PureComponent } from 'react';
import { TripsUI } from './ui';
import { tripsData, currentUser } from '../../data/data';

export class TripsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filterType: 'allTrips',
            trips: tripsData
        };

        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentDidMount() {
        this.fetchTrips()
    }

    fetchTrips() {
        // fetch some data
        // there is a trips.json end point at this url
        // https://s3.amazonaws.com/frontend-candidate-homework.lola.co/trips.json
        // fetch the data and send it through the handleTripsData function and that will
        // update the trips data that is rendered
    }

    handleTripsData(data) {
        this.setState({ trips: data });
    }

    onFilterChange(type) {
        this.setState({ filterType: type });
    }

    filterData(trips, filterType, currentUser) {
        // This function should return the appropriate trips based on the filter type. When my trips is selected
        // filterType will be set to 'myTrips'. This function should return the trips that have the current user
        // as one of the travelers if my trips is selected and all the trips is all trips is selected.
        return trips;
    }

    render() {
        const { filterType, trips } = this.state;
        return <TripsUI filterType={filterType} onFilterChange={this.onFilterChange} trips={this.filterData(trips, filterType, currentUser)} />;
    }
}

export const Trips = TripsContainer;
