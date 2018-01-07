
var ItemDetailsView = SOCIView.extend({
    // tagName: 'li',
	template: _.template($('#ItemDetailsView').text()),
    className: 'ItemDetailsView',
    
    initialize() {
    },

    events: {
    },

    render() {
        this.$el.html( this.template(this.model.toJSON() ));
        return this;
    }

});