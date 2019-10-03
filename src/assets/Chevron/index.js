import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Chevron extends PureComponent {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;
        return (
            <svg color={color} height="5" width="8.333333333333334" viewBox="0 0 10 6">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="chevron" stroke={color} transform="translate(1.000000, 0.000000)" strokeWidth="1.5">
                        <polyline points="0 0.698834 4.025585 4.724419 8.05117 0.698834"></polyline>
                    </g>
                </g>
            </svg>
        );
    }
}
