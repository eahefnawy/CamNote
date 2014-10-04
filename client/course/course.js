Template.course.events({
	'click .followButton': function(e, t){
		
		if(Meteor.isClient)
			followedCourses.insert(this);

	}
});