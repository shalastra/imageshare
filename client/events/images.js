Template.images.events({
  'click .js-del-image': function(event) {
    var image_id = this._id;

    // use jquery to hide the image component
    // then remove it at the end of animation
    $("#" + image_id).hide('slow', function() {
      Images.remove({
        "_id": image_id
      });
    });
  },
  'click .js-rate-image': function(event) {
    var rating = $(event.currentTarget).data("userrating");
    console.log(rating);
    var image_id = this.id;
    console.log(image_id);

    Images.update({
      _id: image_id
    }, {
      $set: {
        rating: rating
      }
    });
  },
  'click .js-show-image-form': function(event) {
    $('#image_form_modal').modal('show');
  },
  'click .js-set-image-filter': function(event) {
    Session.set("userFilter", this.createdBy);
  },
  'click .js-unset-image-filter': function(event) {
    Session.set("userFilter", undefined);
  }
});
