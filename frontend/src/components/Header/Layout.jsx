/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Header from './Header';
import Footer from '../Footer/Footer';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

class Layout extends Component {
  // eslint-disable-next-line react/state-in-constructor
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = (e) => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { children } = this.props;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App'>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        {children}
        <Footer />
      </div>
    );
  }

}

export default Layout;
