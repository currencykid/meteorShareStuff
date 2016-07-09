console.log("Starting server...");

import '../../api/api.js';
import {Meteor} from 'meteor/meteor';
import {Bins} from '../../collections/bins.js'; 

Meteor.startup(() => {
  Meteor.publish('bins', function binsPublication(){
      return Bins.find({
        owner: this.userId
      }) ;     
  });
});
