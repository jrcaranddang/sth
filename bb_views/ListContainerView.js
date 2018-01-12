var ListContainerView = SOCIView.extend({
	tagName: 'ul',
	template: _.template($('#ListContainerView').text()),
	className: 'ListContainerView',
	page: 0,
	pageLimit: 5,

    initialize() {
		this.collection.on('change', this.render, this);
		this.collection.on('update', this.render, this);
		this.collection.bind('sort', this.render, this);
		console.log(this.$el)
	},

	events: {
	 'click .previous' : 'previousPage',
	 'click .next' : 'nextPage',
	 'change select': 'sortPosts'
	},
	
	render() {
		this.$el.html( this.template(this.collection.toJSON()));
		var pageOne = this.collection.slice(this.page * 5, this.page * 5 + this.pageLimit);
		pageOne.forEach((post) => {
			var itemView = new ListItemView({ model: post });
			this.$el[0].children[2].append(itemView.render().el);
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
	},
	
	sortPosts(e) {
		let field = e.currentTarget.value.split(" ")[0];
		let direction = e.currentTarget.value.split(" ")[1];
		this.collection.sortPosts(field, direction);
		this.render();
	}

});