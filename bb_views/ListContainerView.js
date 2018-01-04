
var ListContainerView = SOCIView.extend({
	// tagName: 'ul',
	template: _.template($('#ListContainerView').text()),
	className: 'ListContainerView',
	page: 0,
	pageLimit: 5,

    initialize() {
	},

	events: {
	 'click .previous' : 'previousPage',
	 'click .next' : 'nextPage'
	},
	
	render() {
		this.$el.html( this.template(this.collection.toJSON()));
		var pageOne = this.collection.slice(this.page * 5, this.page * 5 + this.pageLimit);
		pageOne.forEach((post) => {
			var itemView = new ListItemView({ model: post });
			this.$el.append(itemView.render().el);
		}, this);
		return this;
	},

	previousPage() {
		this.page > 0 ? this.page-- : 0;
		this.render();
	},

	nextPage() {
		this.page++;
		this.render();
	}

});