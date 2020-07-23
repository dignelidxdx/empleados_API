/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../../assets/styles/components/Backdrop.scss';

const SideDrawer = (props) => (
  <div className='backdrop' onClick={props.click} />
);

export default SideDrawer;
