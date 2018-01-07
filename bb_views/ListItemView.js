
var ListItemView = SOCIView.extend({
    // tagName: 'li',
	template: _.template($('#ListItemView').text()),
    className: 'ListItemView',
    
    initialize() {
        this.status = this.getStatus();
        this.model.on('change', this.render, this);
        this.model.collection.on('destroy', this.render, this);
    },

    events: {
        "mouseover": "showDelete",
        "mouseleave": "hideDelete",
        "click .delete": "deleteItem",
        "click": "details"
    },

    render() {
        this.$el.html( this.template(this.model.toJSON() ));
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
    },

    showDelete(e) {
        $(e.currentTarget).children(".delete").show();
    },

    hideDelete(e) {
        $(e.currentTarget).children(".delete").hide();
    },

    deleteItem(e) {
        this.$el.remove()
        this.model.collection.remove(this.model)
    },

    details() {
        console.log("clicked");
    }

});