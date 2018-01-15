var ListContainerView = SOCIView.extend({
	tagName: 'ul',
	template: _.template($('#ListContainerView').text()),
	className: 'ListContainerView',
	currentPage: 0,
	pageLimit: 5,
	firstPage: 0,
	lastPage: 0,

    initialize() {
		this.collection.on('change', this.render, this);
		this.collection.on('update', this.render, this);
		this.collection.bind('change', this.render, this);
		console.log(this.collection)
		this.currentPage = this.currentPage;
		this.pageLimit = this.pageLimit,
		this.firstPage = this.firstPage,
		this.lastPage = Math.ceil(this.collection.total / this.pageLimit);
		this.disablePageCtrl();
	},

	events: {
	 'click .previous' : 'previousPage',
	 'click .next' : 'nextPage',
	 'change select': 'sortPosts',
	 "keypress .search": "search"
	},
	
	render() {
		this.$el.html( this.template(this.collection.toJSON()));
		var pageOne = this.collection.slice(this.currentPage * 5, this.currentPage * 5 + this.pageLimit);
		pageOne.forEach((post) => {
			var itemView = new ListItemView({ model: post });
			this.$el[0].children[3].append(itemView.render().el);
		}, this);
		console.log(this);
		this.disablePageCtrl();
		return this;
	},

	previousPage() {
		this.currentPage > 0 ? this.currentPage-- : 0;
		this.render();
	},

	nextPage() {
		this.currentPage++;
		this.render();
	},
	
	sortPosts(e) {
		let field = e.currentTarget.value.split(" ")[0];
		let direction = e.currentTarget.value.split(" ")[1];
		this.collection.sortPosts(field, direction);
		this.render();
	},

    search(e) {
        if(e.keyCode === 13) {
			let query = e.currentTarget.value;
			this.collection.search(query);
			this.render();
        }
	},

	disablePageCtrl() {
		this.currentPage == this.firstPage ? $('.previous').prop('disabled', true) : $('.previous').prop('disabled', false);
		this.currentPage == this.lastPage - 1 ? $('.next').prop('disabled', true) : $('.next').prop('disabled', false);
	}

	
});