import React, { PureComponent } from 'react';
import { HeaderUI } from './ui';

export class HeaderContainer extends PureComponent {
    render() {
        return <HeaderUI />;
    }
}

export const Header = HeaderContainer;
