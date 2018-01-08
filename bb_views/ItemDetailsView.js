var ItemDetailsView = SOCIView.extend({
	template: _.template($('#ItemDetailsView').html()),
    className: 'ItemDetailsView',
    model: ItemDetailsModel,
    
    initialize() {
    },

    events: {
    },

    render() {
        this.$el.html( this.template(this.model));
        return this;
    }

});