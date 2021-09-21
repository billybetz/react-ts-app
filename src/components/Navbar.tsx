import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  useEffect(() => {
    console.log('mount Navbar');
  }, []);

  return (
    <ul>
      <li><Link to="/home/page1">page1</Link></li>
      <li><Link to="/home/page1?token=test">page1 with query param</Link></li>
      <li><Link to="/home/page2">page2</Link></li>
      <li><Link to="/home/page2/test">page2 with id</Link></li>
    </ul>
  );
};

export default Navbar;
