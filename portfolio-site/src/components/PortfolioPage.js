import React from 'react';
import { Link } from 'react';
import Item from './Item'

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out the things I've done:</p>
    <Route path="/portfolio/:id" component={Item}/>
  </div>
)

export default PortfolioPage;
