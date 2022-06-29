$(document).ready(function() {
	$(document).on('keyup change','input[name=prix],input[name=qty]',function () {
		/*var prix = $("#prix").val()
		var qty = $("#qty").val()
		$("#total").val(prix*qty)*/
$(".vente").each(function() {
	var prix = $(this).find("[name=prix]").val()
	var qty = $(this).find("[name=qty]").val()
	console.log(prix,qty)
	$(this).find("[name=total]").val(prix*qty)
})

	})

	$("#add").click(function() {
		$(".vente").last().clone(true).insertAfter(".vente:last")

	});

	$(".remove").on('click',function () {
		var del = $(this).parent().parent()
		var cpt = 	$(".vente").length;
		console.log(cpt)
		if (cpt>1) {	
			del.remove()
		}else{
			$(".remove").attr("disabled","disabled")
			alert("dfgdfgsgjl")
		}
	

	
	})
});