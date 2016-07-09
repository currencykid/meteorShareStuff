import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../../collections/bins'; 

class BinsList extends Component{
  onBinRemove(bin){
    //passing bin as second arg makes it show up as the bin inside the
    //remove function in collections/bins.js remove method
    Meteor.call('bins.remove', bin); 
  }

  renderList(){
    return this.props.bins.map(bin => {
      return(
        <li className="list-group-item" key={bin._id}>
          Bin {bin._id} 
          <span className="pull-right">
            <button 
              className="btn btn-danger"
              onClick={() => this.onBinRemove(bin)}>
              Delete
            </button>
          </span>
        </li>
      ); 
});
}

render(){
  return(
    <div>
      <ul className="list-group">
        {this.renderList()} 
      </ul>
    </div>
  );
}
}

export default createContainer(()=>{
  Meteor.subscribe('bins');
  return { 
    bins: Bins.find({}).fetch()
  }; 
}, BinsList);
