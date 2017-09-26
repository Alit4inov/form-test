var jqvalidation = function() {

	$.validator.addMethod('mindate',function(v,el,minDate){
    if (this.optional(el)){
        return true;
    }
    var curDate = $(el).datepicker('getDate');
    return minDate <= curDate;
	}, 'Plz enter date not below 1996');


	$.validator.addMethod("regex",function(value,element,regexp){
        var re= new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },"Only Characters from A-z");


	$( "form" ).validate({
		rules: {
			textfield: {
				required:true,
                regex:"^[a-zA-Z]+$"
			},
			calendar: {
				mindate: new Date(96, 1, 1),
				required: true
			}
		}
	});
};

export default jqvalidation;


