function hideAll(){
	$('#homepage').hide();
	$('#introduction').hide();
	$('#news').hide();
	$('#consultant').hide();
	$('#training').hide();
	$('#process').hide();
	$('#service').hide();
	$('#management').hide();
	$('#contact').hide();
	$('#elite').hide();
	$('#cooperation').hide();
}


function showPage(titleNo){
	hideAll();
	switch(titleNo){
		case 0:
			$('#homepage').show();
			break;
		case 1:
			$('#introduction').show();
			break;
		case 2:
			$('#news').show();
			break;
		case 3:
			$('#consultant').show();
			break;
		case 4:
			$('#training').show();
			break;
		case 5:
			$('#process').show();
			break;
		case 6:
			$('#service').show();
			break;
		case 7:
			$('#management').show();
			break;
		case 8:
			$('#contact').show();
			break;
		case 9:
			$('#elite').show();
			break;
		case 10:
			$('#cooperation').show();
			break;
		default:
			break;
	}

}