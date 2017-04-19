import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Pricing from './Pricing'
import Contact from './Contact'
import {Link} from 'react-router'

class Main extends Component {

  render() {

    return (
     
      {this.props.children}
      </div>
      )
  }
}

module.exports = Main;
