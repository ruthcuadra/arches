define(['knockout', 'underscore', 'plugins/knockout-select2'], function (ko, _) {
    /**
    * registers a select-widget component for use in forms
    */
    return ko.components.register('select-widget', {
        viewModel: function(params) {
            this.value = params.value;
            _.extend(this, _.pick(params.config, 'label', 'placeholder', 'options'));
        },
        template: { require: 'text!widget-templates/select' }
    });
});