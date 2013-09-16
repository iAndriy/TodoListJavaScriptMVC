steal(
	'./todo.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'todo/item/create',
	'todo/item/list',
	function(){					// configure your application
		
		$('#items').todo_item_list();
		$('#create').todo_item_create();
})