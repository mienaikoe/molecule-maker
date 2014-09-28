function MoleculeWorkspace(container, periodicTable){
	this.container = container;
	this.elements = {};
	
	var self = this;
	periodicTable.bindToElements("click", function(element){
		var elementSection = $("<div/>",{"class":"elementSection"}).appendTo(this.elementalDivision);
		element.container.clone().css("left","").appendTo(elementSection);
		var statPart = $("<div/>",{"class":"statPart"}).appendTo(elementSection);
		var percenter = $("<div/>",{"class":"percent"}).appendTo(statPart);
		$("<input/>",{"class":"count","type":"number", "value": 1}).on("keyup mouseup",function(ev){
			self.updateWeight(element, this.value, percenter);
		}).appendTo(statPart);
		this.updateWeight(element, 1, percenter);
	}.bind(this));
	
	this.elementalDivision = $("<div/>",{"class":"division","id":"elementalDivision"}).appendTo(this.container);
	
	this.molecularDivision = $("<div/>",{"class":"division","id":"molecularDivision"}).appendTo(this.container);
	var totalMolSection = $("<div/>",{"class":"stat"}).appendTo(this.molecularDivision);
	$("<label/>",{text:"Total Molecular Weight"}).appendTo(totalMolSection);
	this.totalMolOutput = $("<div/>",{"class":"output"}).appendTo(totalMolSection);
	$("<button/>",{"text":"Reset"}).click(function(ev){
		self.reset();
	}).appendTo(this.molecularDivision);
};

MoleculeWorkspace.prototype = {
	updateWeight: function(element, amount, percenter){
		var contribution = element.molecularWeight * amount;
		this.elements[element.symbol] = {
			percenter: percenter,
			contribution: contribution
		};
		var total = 0;
		for( symbol in this.elements ){
			if(this.elements.hasOwnProperty(symbol)){
				total += this.elements[symbol].contribution;
			}
		}
		for( symbol in this.elements ){
			if(this.elements.hasOwnProperty(symbol)){
				var elemental = this.elements[symbol];
				elemental.percenter.html(Math.round10(100*(elemental.contribution/total), -2)+"%")
			}
		}
		this.totalMolOutput.html(total+" g/mol");
	},
	reset: function(){
		this.elements = {};
		this.elementalDivision.html("");
		this.totalMolOutput.html("");
	}
};
