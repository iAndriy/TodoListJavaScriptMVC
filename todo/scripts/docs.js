//js todo/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('todo/todo.html', {
		markdown : ['todo']
	});
});