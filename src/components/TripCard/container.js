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

    render() {
        const { trip } = this.props;
        return <TripCardUI trip={trip} />;
    }
}

export const TripCard = TripCardContainer;
