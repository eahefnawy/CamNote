Template.layout.helpers({
	title: function(){
		return Session.get('title');
	},
	courseList: function(){
		return followedCourses.find();
	}
});

Template.layout.rendered =  function(){
	perspectiveNav();
}