Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  //this code only runs on the client
  Template.body.helpers({
    tasks: function() {
      //show newest tasks first
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
  Template.body.events({
    "submit .new-task": function(event) {
      //this function is called when the new task form is submitted

      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date() //curent time
      });

      //clear form
      event.target.text.value = "";

      //prevent default form submit
      return false;
    }
  });    
}
