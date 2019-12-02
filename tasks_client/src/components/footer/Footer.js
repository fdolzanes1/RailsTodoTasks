import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
 render() {
   return (
     <div>
      <Navbar fixed="bottom">
        Fabiano Dolzanes 2019
      </Navbar>
     </div>
   );
 }
}

export default Header;

