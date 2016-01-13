Template.image_add_form.events({
  'submit .js-add-image': function(event) {
    var img_src, img_alt;

    img_src = event.target.img_src.value;
    img_alt = event.target.img_alt.value;

    if (Meteor.user()) {
      Images.insert({
        img_src: img_src,
        img_alt: img_alt,
        createdOn: new Date(),
        createdBy: Meteor.user()._id
      });
    }
    $("#image_add_form").modal('hide');
    return false;
  }
});
