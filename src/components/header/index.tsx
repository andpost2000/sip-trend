import * as React from 'react';

import './index.scss';

import MainNav from '../main-nav';
import { HeaderTop } from './header-top';

interface Props {
  msg?: string;
}
interface State {
  isOpen: boolean;
}

class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  public render(): JSX.Element {
    return (
      <header className='header'>
        <HeaderTop />
        <MainNav />
      </header>
    );
  }

}

export default Header;
