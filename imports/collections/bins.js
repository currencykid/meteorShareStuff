import {Mongo} from 'meteor/mongo';

Meteor.methods({

  'bins.insert': function(){
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized'); 
    }
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      owner: this.userId
    });
  }, 

  'bins.remove': function(bin){
    return Bins.remove(bin); 
  }
});
export const Bins = new Mongo.Collection('bins'); 
