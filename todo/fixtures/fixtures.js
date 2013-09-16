// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("item", 5, function(i, item){
		//var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "item "+i,
			//description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})