Template.courses.helpers({
	camNotesHelper: function(){
		var id = this.id;
		return camNotes.find({"courseId": id}, { sort: { createdAt: -1}});
	},
	courseTitle: function(){
		var id = this.id;
		return Courses.findOne({_id: id}).name;
	}
});