import React from 'react';
import Header from '../components/Header.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
