Template.navbar.helpers({
	activeIfTemplateIs: function(template) {
		// Set the current active route in the navbar by setting the active css class according to the current route name

		// Track current route name
		Tracker.autorun(function() {
			// Track route changes
			FlowRouter.watchPathChange();
			// Set a Session to use as a reactive variable
			Session.set('currentRoute', FlowRouter.getRouteName());
		});

		// Get the current route
		var currentRoute = Session.get('currentRoute');
		// Return active where the route matches the template name
		return currentRoute &&
			template === currentRoute ? 'active' : '';
	}
});
