// Searchbar Handler
$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');
	
	// Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'
		},400);
		$(icon).animate({
			right: '10px'
		}, 400);
	});
	
	// Blur Event Handler
	$(searchField).on('blur', function(){
		if(searchField.val() == ''){
			$(searchField).animate({
				width:'45%'
			},400, function(){});
			$(icon).animate({
				right:'360px'
			},400, function(){});
		}
	});
	
	$('#search-form').submit(function(e){
		e.preventDefault();
	});
});

function search(){
	// clear results
	$('#results').html('');
	$('#buttons').html('');

	q = $('#query').val();

	$.get(
		"https://www.googleapis.com/youtube/v3/search",
		{
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: 'AIzaSyCho-qt9KljKcSiN1YOT2OO03fQcz1o23U'
		}, function(data) {
			$.each(data.items, function(i, item){
				console.log(item);
			});
		}
	);
}