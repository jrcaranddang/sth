var ListContainerView = SOCIView.extend({
	tagName: 'ul',
	template: _.template($('#ListContainerView').text()),
	className: 'ListContainerView',

	render: function() {
		this.collection.post.forEach(function(post) {
			var itemView = new ListItemView({ model: post });
			this.$el.append(itemView.render().el);
		}, this);
		return this;
	}
});