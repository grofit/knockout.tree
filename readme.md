# Knockout.Tree

A bare bones binding for knockout 2.3+ to allow you to use jstree via a binding.

## Installing

Add knockout-2.3.js to your project, jstree.js then knockout.tree.js.

## Example

A simple example of checking when a user has started and stopped typing:
```
<div data-bind="tree: { data: directories }" />
<script>
	var directories = ko.observableArray(["folder 1", "folder 2"]);
</script>
```

Another example with a custom options
```
<div data-bind="tree: { data: directories, options: { core: { animation: 0} } }" />
```

The available options for this binding are:

* **data** - The directory information array, this should match the jstree documentation for json data
* **options** - The native options for the jstree instance

Behind the scenes the data gets appended to the options so its just a shortcut for setting `core.data`.

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.tree/master/example.html)