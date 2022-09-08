import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Hero.css';

const Hero = () => {
  return (
    <div className={'hero'}>
      <NavLink className={({isActive}) => (isActive ? 'hero-elem active' : 'hero-elem' )} to={'/'}>Home</NavLink>
      <NavLink className={'hero-elem'} to={'/movies'}>Movie</NavLink>
    </div>
  );
};

export default Hero;
