var ItemDetailsView = SOCIView.extend({
	template: _.template($('#ItemDetailsView').text()),
    className: 'ItemDetailsView',
    model: ItemDetailsModel,
    
    initialize() {
        console.log(this.model);
        // this.model.on('destroy', this.remove, this);
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