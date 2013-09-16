steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'todo/models' )
.then( './views/init.ejs', 
       './views/item.ejs', 
       function($){

/**
 * @class Todo.Item.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists items and lets you destroy them.
 */
$.Controller('Todo.Item.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Todo.Models.Item.findAll()) )
	},
	'.destroy click': function( el ){
		var animate_site=Math.random();
		if (animate_site>0.5){
		el.closest('.item').css("position","relative").css("color","red").animate({left:'300px'},1000)
		.fadeOut().wait().model().destroy();
		}
		else{
		el.closest('.item').css("position","relative").css("color","red").animate({right:'300px'},1000)
		.fadeOut().wait().model().destroy();
		}
	},
	'span click': function( el ){
		el.replaceWith('<input type="text" class="item_edited" value="'+el.text()+'"/>');
		$('.item_edited').focus();
	},
	'.item_edited blur':function( el ){
		el.replaceWith('<span>'+el.val()+'</span>');
	},
	"{Todo.Models.Item} destroyed" : function(Item, ev, item) {
		item.elements(this.element).remove();
	},
	"{Todo.Models.Item} created" : function(Item, ev, item){
		this.element.append(this.view('init', [item]))
	},
	"{Todo.Models.Item} updated" : function(Item, ev, item){
		item.elements(this.element)
		      .html(this.view('item', item) );
	}
});

});