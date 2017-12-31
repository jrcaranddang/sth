var ListItemView = SOCIView.extend({
    tagName: 'li',
	template: _.template($('#ListItemView').text()),
    className: 'ListItemView',

    initialize: function() {
        console.log(this.model);
    }
});