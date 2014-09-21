function MoleculeWorkspace(container, periodicTable){
	this.container = container;
	
	periodicTable.bindToElements("click", function(element){
		var cloned = element.container.clone();
		
	});
	
};
