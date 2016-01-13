Images = new Mongo.Collection("images");

// set up security on Images collection
Images.allow({
  insert: function(userId, doc) {
    if (Meteor.user()) { // they are logged in
      if (userId != doc.createdBy) { // the user is messing around
        return false;
      } else { // the user is logged in, the image has the correct user Id
        return true;
      }
    } else { // user not logged in
      return false;
    }
  },
  update: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return true;
  }
});
