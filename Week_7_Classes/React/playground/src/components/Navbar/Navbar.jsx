import React, { Component } from 'react';
import Button from './components/Button/Button';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
      <ul><li><a href="https://www.github.com/lzaquine">Visit Github</a></li>
      <li><a href="https://www.linkedin.com/in/lucaszaquine">Visit Linkedin</a></li>
      <li> <Button link="https://www.google.com" text="Visit Google" /> </li>
      </ul>
        

      </nav>
    )
  }
}
