import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='titling'>
        <span className='siteTitle'>BalancedEating</span>
        <span className='siteCredit'>By Ramūnas Bagdonas</span>
      </div>
      <div className='endInfo'>
        <span>All the food items are displayed in sizes of 100g</span>
      </div>

    </header>
  )
}

export default Header