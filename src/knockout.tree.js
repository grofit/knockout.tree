ko.bindingHandlers.tree = {
	init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		var allBindings = allBindingsAccessor();
		var options, data;
		var treeBinding = allBindings.tree;

		data = ko.unwrap(treeBinding.data);
		options = ko.unwrap(treeBinding.options) || {};

		if(!data) { return; }

		options.core = options.core || {};
		options.core.data = data;

		$(element).jstree(options);
	},
    update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		var allBindings = allBindingsAccessor();
		var data;
		var treeBinding = allBindings.tree;

		data = ko.unwrap(treeBinding.data);
		if(!data) { return; }

		$(element).jstree(true).settings.core.data = data;
		$(element).jstree("refresh");
    }
};