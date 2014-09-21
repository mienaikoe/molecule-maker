function Element(data){
	this.molecularWeight = data.molar;
	this.symbol = data.small;
	this.name = data.name;
	
	this.container = $("<div/>",{"class":"element", "style":"left:"+(data.position*Element.CONTAINER_WIDTH)+"px;"});
	$("<div/>",{"class": "small","text": data.molar}).appendTo(this.container);
	$("<div/>",{"class": "symbol","text": data.small}).appendTo(this.container);
	$("<div/>",{"class": "small","text": data.name}).appendTo(this.container);
};

Element.CONTAINER_WIDTH = 46;