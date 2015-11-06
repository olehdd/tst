
	function addPicture()
	{
	//var url = prompt('Введіть посилання!');
	//if (url.length>0)
	var urlContainer = document.getElementById('url');
	var url = urlContainer.value;
	
	//ajax
	/*var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "filework.php", true);
	xhttp.send();
	*/
	newPhoto(url);
	
	}
	
	function howManyPictures(){
	var w = document.getElementById('circles');
		var count = 0;
	for (var i = 0; i < w.childNodes.length; i++) {
		var node = w.childNodes[i];
		
		if ( node.tagName === "LI") {
			count++;
		}
	}
	return count;
	}
	
	function rmLastPhoto(){
	
	}
	
	function newPhoto (url){
	var div = document.createElement('div');
	var li = document.createElement('li');
	var img = document.createElement('img');
	var count = howManyPictures();
	li.setAttribute("data-target", "#myCarousel");
	li.setAttribute("data-slide-to", count);

	div.className ="item";
	img.src=url;
	img.style.width='600px';
	img.style.height='600px';
	div.appendChild(img);
	document.getElementById('inner').appendChild(div);
	document.getElementById('circles').appendChild(li);
	
	}
	