require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Link,IndexLink} from 'react-router';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">

        <ul role="nav">
          <li><IndexLink to="/" activeStyle={{color: 'red'}}>Main</IndexLink></li>
          <li><Link to="/welcome" activeStyle={{color: 'red'}}>welcome</Link></li>
        </ul>

        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>Hello</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>


      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
