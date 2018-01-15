var ItemDetailsView = SOCIView.extend({
	template: _.template($('#ItemDetailsView').text()),
    className: 'ItemDetailsView',
    model: ItemDetailsModel,
    
    initialize() {
    },

    events: {
        "click .close": "close"
    },

    render() {
        this.$el.html( this.template(this.model));
        return this;
    },

    close() {
        this.$el.remove()
    }

});