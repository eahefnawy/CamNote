Template.settings.helpers({
	universities: function(){

	},
	faculties: function(){

	},
	departments: function(){

	},
	courses: function(){
		return Courses.find()
	},
});

Template.settings.events({
	'click ': function(e, t){

	}
});