import React from 'react';
import { Link } from 'react-router';
import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  
  onCreateClick(event){
    event.preventDefault(); 

    Meteor.call('bins.insert'); 
  }

  render() {
    return (
      <header className='Header'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="#" onClick={this.onCreateClick.bind(this)}>Create</a></li>
                <li> <LoginButtons align='left' /></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
