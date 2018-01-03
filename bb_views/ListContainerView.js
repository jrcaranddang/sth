
var ListContainerView = SOCIView.extend({
	// tagName: 'ul',
	template: _.template($('#ListContainerView').text()),
	className: 'ListContainerView',

    initialize: function() {
	},
	
	render: function() {
        this.$el.html( this.template(this.collection.toJSON()));
		this.collection.each(function(post) {
			var itemView = new ListItemView({ model: post });
			this.$el.append(itemView.render().el);
			// console.log(post);
		}, this);
		return this;
	}
});