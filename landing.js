(function(){
	$(document).ready(init);
	temp = "";
	i = 0;
	
	function init(){
		setTimeout(function(){
			setInterval(function(){
				var name = "Matthew Williams II";
				temp += name[i];
				$('#name').text(name);
				i++;
			}, 200);
		}, 5000);
	}
})();