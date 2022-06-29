/*$(document).ready(function() {
	$('#box1').fadeOut(5000);
	$('#box1').fadeIn(5000);
	$('#box1').slideUp(5000);
	$('#box1').slideDown(5000);
	$('#box1').show(5000);
	$('#box1').hide(5000);
});
*/
//$("button").click(function() {
	/*$('#box1').fadeToggle(5000);*/
	/*$('#box1').slideToggle(5000);*/
	/*$('#box1').toggle(5000);*/
	//$('#box1').toggle(5000).delay(2000).fadeToggle(4000).slideToggle(5000) ;
	/*$("img").fadeTo(1000,0.4)*/
	//$("#box1").animate({
		//width: "700px",
		//height:"200px"},
		//5000)
//});

$("#start").click(function() {
	$("#box1").animate({
		marginLeft : 250, 
		opacity : 0.2
	},5000)
});

$("#stop").click(function() {
	$("#box1").animate({
		marginLeft : 0, 
		opacity : 1
	}, 5000)
});
$("#stop").click(function() {
	$("#box1").stop()
});
/*
$("#start").click(function() {
	$("#box1").animate({
		width: "+=200px",
		height: "+=100px"
	},5000)
});*/
/*
$("h1").append("<p>google</p>")

$("h1").text('some text')*/
/*$("h1").html("Welcome")

/*$("button").click(function() {
	$(this).after('<h5>web dev</h5>')
	var t = $('h5').length
	$('h1').text(t)
});*/
/*
$("h1").css({
	'color': 'blue',
	'background' : 'grey'
})

$("button").click(function() {
	$(this).before("<h5>web dev</h5>")
	var t = $('h5').length
	$('h1').text(t)
});*/
/*$("#add").click(function() {
	$('#remove').removeAttr('disabled')

	$('ul li').last().after('<li>JQUERY <button type="button" class="x">X</button></li>')

	$(".x").click(function() {
	var t = $(this).parent(); 
	t.remove()
});

});
$(".x").click(function() {
	var t = $(this).parent(); 
	t.remove()
});*/

/*$("body").on('click', '#add', function() {
	$("ul li").last().after('<li>jQuery <button type="button" class="x">X</button></li>')
});
$("body").on('click', '.x', function() {
	var t= $(this).parent();
	t.remove()
	
});*/
/*$("#remove").click(function() {
	var i = $("ul li").length;
	if (i<4) {
		$(this).attr({
			disabled: 'disabled',
		});
	}else {
		$('ul li').last().remove()
		
	}
	
});*/

/*$("#x").click(function() {
	alert("hello")
});*/

/*$("body").on('click', '#add', function() {
	$("ul li").last().clone(true).appendTo('ul')
	

});
*/

$("body").on('click', '#one', function() {
	
	$(".one").toggle(2000)	
	$(".two").slideToggle(2000)
	
});
$("body").on('click', '#two', function() {
	
	$(".one,.two").css('display', 'none')
	$('.three').show(2000);
});
$("body").on('click', '#three', function() {
	
	$(".two,.one,.three").css({
		display: 'none',
		
	});
	$('.result').show(2000);
});