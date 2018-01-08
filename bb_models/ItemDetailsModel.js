var ItemDetailsModel = Backbone.Model.extend({
    defaults: {
        schedule: 'schedule',
        // - The network TYPE (i.e. facebook) for which the post is scheduled
        network: 'network',
        // - The network NAME
        network_name: 'network_name',
        // - The network thumbnail
        network_thumb: 'network_thumb',
        // - The date/time the post the date was created
        created_at: 'created_at',
        // - The name of the person who created the post
        created_by_name: 'created_by_name',
        // - An indication of its approval status
        status: 'status'
    }
});