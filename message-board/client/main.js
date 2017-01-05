


Template.listing.helpers({
	entries: function() {
		return Messages.find();
	}
});

Template.newEntry.events({
	'submit #entryForm': function(event){
		event.preventDefault();

		var c = $('#content').val();
		Messages.insert({content: c, date: new Date()});
		$('#content').val('');
	}
});

