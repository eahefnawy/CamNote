Template.camNote.helpers({
	time: function(){
		var epoch = this.createdAt;
		return moment.unix(epoch/1000).fromNow();
	},
});