steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'todo/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Todo.Item.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates items
 */
$.Controller('Todo.Item.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Adding...');
		new Todo.Models.Item(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Add');
		this.element[0].reset()
	}
})

});