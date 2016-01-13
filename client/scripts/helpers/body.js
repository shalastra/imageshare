Template.body.helpers({
  username: function() {
    if (Meteor.user()) {
      return Meteor.user().username;
    } else {
      return "anonymous internet user";
    }
  }
});
