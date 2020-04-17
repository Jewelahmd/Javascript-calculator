function insert(num)
{
	document.form.mainview.value = document.form.mainview.value+num;
}
function equal(){
	var exp = document.form.mainview.value;
	if (exp) {
		document.form.mainview.value = eval(exp)
	}
}
function reset()
{
	document.form.mainview.value = "";
}
function back()
{
	var exp = document.form.mainview.value;
	document.form.mainview.value = exp.substring(0,exp.length-1);
}
