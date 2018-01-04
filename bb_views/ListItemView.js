
var ListItemView = SOCIView.extend({
    // tagName: 'li',
	template: _.template($('#ListItemView').text()),
    className: 'ListItemView',
    
    initialize() {
        this.status = this.getStatus();
    },

    render() {
        this.$el.html( this.template(this.model.toJSON()));
        return this;
    },
    
    getStatus() {
        if(this.model.attributes.customer_approved > 0 && this.model.attributes.manager_approved > 0) {
            return "approved";
        } else if (this.model.attributes.customer_approved == 0 || this.model.attributes.manager_approved == 0) {
            return "pending";
        } else if (this.model.attributes.customer_approved == -1 || this.model.attributes.manager_approved == -1) {
            return "rejected";
        }
    }
});