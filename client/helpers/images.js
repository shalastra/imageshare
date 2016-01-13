Template.images.helpers({
  images: function() {
    if (Session.get("userFilter")) { // they set a filter
      return Images.find({
        createdBy: Session.get("userFilter")
      }, {
        sort: {
          createdOn: -1,
          rating: -1
        }
      });
    } else {
      return Images.find({}, {
        sort: {
          createdOn: -1,
          rating: -1
        },
        limit: Session.get("imageLimit")
      });
    }
  },
  filteringImages: function() {
    if (Session.get("userFilter")) { // they set a filter
      return true;
    } else {
      return false;
    }
  },
  getUser: function(user_id) {
    var user = Meteor.users.findOne({
      _id: user_id
    });

    if (user) {
      return user.username;
    } else {
      return "anonymous";
    }
  },
  getFilterUser: function() {
    if (Session.get("userFilter")) { // they set a filter
      var user = Meteor.users.findOne({
        _id: Session.get("userFilter")
      });
      return user.username;
    } else {
      return false;
    }
  }
});
