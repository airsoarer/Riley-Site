(function(){
	$(document).ready(init);
	
	function init(){
		setTimeout(function(){
			var name = "Matthew Williams II";
			for(var i = 0; i < name.length; i++){
				$('#name').empty();
				$('#name').append(name[i]);
			}
		}, 5000);
	}
})();