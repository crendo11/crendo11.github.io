// the visualisation space
// for PVA literature
function PVAspace(origin, width, height, literature, nodes){
	this.origin = origin;
	this.width = width;
	this.height = height;
	
	this.literature = [];
	if (typeof literature != 'undefined'){
		this.literature = literature;
	}
	
	this.nodes = [];
	if (typeof nodes != 'undefined'){
		this.nodes = nodes;
	}
	
	this.hasBeenAnalyzed = false;
	this.titles = ["DATA", "CONTEXT", "INTERACTION"];
	
	this.shuffleIsOn = false;
	this.hasBeenShuffled = false;
	
	// find the amount of papers within each nodelings
	this.analyze = function(context){
		this.hasBeenAnalyzed = false;
		
		for (var i = 0; i < this.nodes.length; ++i){
			for (var j = 0; j < this.nodes[i].nodelings.length; ++j){
				var nodeling = this.nodes[i].nodelings[j];
				nodeling.amount_of_connections = 0;
				nodeling.amount = 0;
				for (var k = 0; k < this.literature.length; ++k){
					if (this.literature[k].data[this.nodes[i].title] === nodeling.name){
						nodeling.amount = nodeling.amount + 1;
					}
				}
			}
			this.nodes[i].height =  this.height - 15;
			this.nodes[i].resizeNodelings();
		}
		
		var space = this.width / (this.nodes.length+1);
		var width = 30;
		var height = this.height;
		for (var i = 0; i < this.nodes.length; ++i){
			var node = this.nodes[i];
			var origin = new Point(this.origin.x + space * (i + 1.5) + width, this.origin.y);
			node.origin = origin;
			node.width = width;
			node.draw(context, true);
		}
		
		width = this.width / (this.nodes.length*2) + 20;
		height = this.height / (this.literature.length );
		for (var i = 0; i < this.literature.length; ++i){
			var paper = this.literature[i];
			var origin = new Point(this.origin.x, this.origin.y + i * height);
			paper.origin = origin;
			paper.width = width;
			paper.height = height;
			paper.connections = [];

			for (var j = 0; j < this.nodes.length; ++j){
				for (var k = 0; k < this.nodes[j].nodelings.length; ++k){
					if (paper.data[this.nodes[j].title] === this.nodes[j].nodelings[k].name){
						if (j === 0){
							var awidth = this.nodes[j].nodelings[k].unit_height;
							var point1 = new Point(paper.origin.x + paper.width, paper.origin.y);
							var point2 = new Point(this.nodes[j].nodelings[k].origin.x, this.nodes[j].nodelings[k].origin.y + awidth * this.nodes[j].nodelings[k].amount_of_connections);
							var connection = new Connection(point1, point2, awidth);
							paper.connections.push(connection);
							this.nodes[j].nodelings[k].amount_of_connections += 1;
						}
						else {
							var awidth = this.nodes[j].nodelings[k].unit_height;
							var point1 = new Point(paper.connections[j - 1].point2.x 
								+ this.nodes[j - 1].width, 
								paper.connections[j - 1].point2.y
							);
							var point2 = new Point(this.nodes[j].nodelings[k].origin.x, this.nodes[j].nodelings[k].origin.y + awidth * this.nodes[j].nodelings[k].amount_of_connections);
							var connection = new Connection(point1, point2, awidth);
							paper.connections.push(connection);
							this.nodes[j].nodelings[k].amount_of_connections += 1;
						}
					}
				}
			}
		}
		
		this.hasBeenAnalyzed = true;
	};
	
	this.updateConnections = function(){
		for (var i = 0; i < this.literature.length; ++i){
			var paper = this.literature[i];
			for (var j = 0; j < this.nodes.length; ++j){
				for (var k = 0; k < this.nodes[j].nodelings.length; ++k){
					this.nodes[j].nodelings[k].amount_of_connections = 0;
					if (paper.data[this.nodes[j].title] === this.nodes[j].nodelings[k].name){
						if (j === 0){
							var awidth = this.nodes[j].nodelings[k].unit_height;
							paper.connections[j].point2 = new Point(this.nodes[j].nodelings[k].origin.x, this.nodes[j].nodelings[k].origin.y + awidth * this.nodes[j].nodelings[k].amount_of_connections);
							this.nodes[j].nodelings[k].amount_of_connections += 1;
						}
						else {
							var awidth = this.nodes[j].nodelings[k].unit_height;
							paper.connections[j - 1].point1 = new Point(paper.connections[j - 1].point2.x + this.nodes[j - 1].width, paper.connections[j - 1].point2.y);
							paper.connections[j].point2 = new Point(this.nodes[j].nodelings[k].origin.x, this.nodes[j].nodelings[k].origin.y + awidth * this.nodes[j].nodelings[k].amount_of_connections);
							this.nodes[j].nodelings[k].amount_of_connections += 1;
						}
					}
				}
			}
		}
	};
	
	this.newOrigin1;
	this.newOrigin2;
	
	this.switchNodes = function(node1, node2, newOrigin1, newOrigin2){
		if (typeof newOrigin1 != 'undefined'){
			this.newOrigin1 = newOrigin1;
		}
		if (typeof newOrigin2 != 'undefined'){
			this.newOrigin2 = newOrigin2;
		}
		
		var a = node1.move(this.newOrigin1);
		var b = node2.move(this.newOrigin2);
		this.updateConnectionBetween(node1, node2);
		
		return a && b;
	};
	
	this.updateConnectionBetween = function(node1, node2){
		for (var i = 0; i < this.literature.length; ++i){
			var paper = this.literature[i];
			if (node1.origin.x > node2.origin.x){
				if (this.nodes.indexOf(node2) - 1 >= 0)
					paper.connections[this.nodes.indexOf(node2) - 1].point2.x = node1.origin.x  + node1.width;
				paper.connections[this.nodes.indexOf(node2)].point1.x = node1.origin.x;
				paper.connections[this.nodes.indexOf(node2)].point2.x = node2.origin.x + node2.width;
				if (this.nodes.indexOf(node2) + 1 < paper.connections.length)
					paper.connections[this.nodes.indexOf(node2)+1].point1.x = node2.origin.x;

			}
			else if (node1.origin.x < node2.origin.x) {
				if (this.nodes.indexOf(node1) - 1 >= 0)
					paper.connections[this.nodes.indexOf(node1) - 1].point2.x = node2.origin.x + node2.width;
				paper.connections[this.nodes.indexOf(node1)].point1.x = node2.origin.x;
				paper.connections[this.nodes.indexOf(node1)].point2.x = node1.origin.x + node1.width;
				if (this.nodes.indexOf(node1) + 1 < paper.connections.length)
					paper.connections[this.nodes.indexOf(node1) + 1].point1.x = node1.origin.x;
			}
		}
	}
	
	this.draw = function(context){		
		for (var i = 0; i < this.literature.length; ++i){
			this.literature[i].draw(context);
		}
		for (var i = 0; i < this.literature.length; ++i){
			this.literature[i].drawConnections(context);
		}
		for (var i = 0; i < this.nodes.length; ++i){
			this.nodes[i].draw(context, false);
		}
		
		// var count = 0;
		// for (var i = 0; (i < this.nodes.length) && !(this.hasBeenShuffled); i = i+3){
		// 	var start_node = this.nodes[i];
		// 	var end_node = this.nodes[i+2];
			
		// 	var x1 = parseFloat(start_node.origin.x + start_node.nodelings[0].width / 2);
		// 	var y1 = parseFloat(start_node.nodelings[start_node.nodelings.length - 1].height + start_node.nodelings[start_node.nodelings.length - 1].origin.y + start_node.nodelings[0].unit_height);
		// 	var x2 = parseFloat(end_node.origin.x + (end_node.nodelings[0].width / 2));
		// 	var y2 = parseFloat(start_node.nodelings[start_node.nodelings.length - 1].height + start_node.nodelings[start_node.nodelings.length - 1].origin.y + (start_node.nodelings[0].unit_height * 2));
			
		// 	var center = x1 + parseFloat((x2 - x1) / 2);
			
		// 	context.save();
			
		// 	context.lineWidth = 2;
		// 	context.beginPath();
		// 	context.moveTo(x1, y1);
		// 	context.lineTo(x1, y2);
		// 	context.lineTo(x2, y2);
		// 	context.lineTo(x2, y1);
		// 	context.stroke();
		// 	context.closePath();
			
		// 	context.fillStyle = 'rgba(255, 255, 255, 1)';
		// 	context.fillRect(center - ((context.measureText(this.titles[count]).width / 2) + (context.measureText(this.titles[count]).width / 4)), y1, 
		// 					context.measureText(this.titles[count]).width + context.measureText(this.titles[count]).width / 2, 25);
			
		// 	context.fillStyle = 'rgba(0, 0, 0, 1)';
		// 	context.font = '14px Open Sans';
		// 	context.textAlign = 'center';
		// 	context.textBaseline = 'middle';
			
		// 	if (typeof center != 'undefined' && typeof y2 != 'undefined'){
		// 		context.fillText(this.titles[count], center, parseFloat(y2));
		// 	}
			
		// 	context.restore();
			
		// 	++count;
		// }
	};	
}

function Paper(author, title, data){
	this.origin = new Point(0, 0);
	this.width = 0;
	this.height = 0;
	
	this.default_background = 'rgba(255, 255, 255, 1)';
	this.default_foreground = 'rgba(0, 0, 1, 1)';
	this.background = 'rgba(255, 255, 255, 1)';
	this.foreground = 'rgba(0, 0, 1, 1)';

	this.shade = 'rgba(0, 0, 0, 0.15)';
	this.isHighlighted = false;
	this.connections = [];
	
	this.author = '';
	if (typeof author != 'undefined'){
		this.author = author;
	}
	
	this.title = '';
	if (typeof title != 'undefined'){
		this.title = title;
	}
	
	this.data = [];
	if (typeof data != 'undefined'){
		this.data = data;
	}
	
	this.draw = function(context){
		context.save();
		context.fillStyle = this.background;
		context.beginPath();
		context.rect(this.origin.x, this.origin.y, this.width, this.height);
		context.closePath();
		context.fill();
		
		context.fillStyle = this.foreground;
		var author_font_size = '14px';
		if (lit.length <= 10) '13px';
		else if (lit.length > 10 && lit.length < 30) author_font_size = '12px';
		else if (lit.length < 40) author_font_size = '11px';
		else if (lit.length < 80) author_font_size = '10px';
		else author_font_size = '7px';

		context.font = author_font_size+' Open Sans';
		context.textAlign = 'left';
		context.textBaseline = 'top';
		context.globalCompositeOperation = 'source-atop';
		//context.fillText('[' + this.data['reference number'] + ']  ' + this.author, this.origin.x + 10, this.origin.y);
		context.fillText(this.author, this.origin.x + 10, this.origin.y);
		context.restore();
	};
	
	this.drawConnections = function(context){
		for (var i = 0; i < this.connections.length; ++i){
			if (this.isHighlighted){
				this.connections[i].draw(context, this.background);
			}
			else {
				this.connections[i].draw(context, this.shade);
			}
		}
	}
	
	this.isHit = function(point){
		if ((point.x > this.origin.x && point.x < this.origin.x + this.width) &&
		(point.y > this.origin.y && point.y < this.origin.y + this.height)){
			return true;
		}
	}
}

function Connection(point1, point2, width){
	this.point1 = point1;
	this.point2 = point2;
	this.width = width;
	
	this.draw = function(context, color){
		context.save();
		context.fillStyle = color;
		context.beginPath();
		context.moveTo(point1.x, point1.y);
		context.bezierCurveTo(point1.x + 75, point1.y, point2.x - 75, point2.y, point2.x, point2.y);
		context.lineTo(point2.x, point2.y + width);
		context.bezierCurveTo(point2.x - 75, point2.y + width, point1.x + 75, point1.y + width, point1.x, point1.y + width);
		context.lineTo(point1.x, point1.y);
		context.closePath();
		context.fill();
		context.restore();
	};
}

function Node(title, data){
	this.origin = new Point(0, 0);
	this.width = 0;
	this.height = 0;
	
	this.default_background = 'rgba(255, 255, 255, 1)';
	this.default_foreground = 'rgba(0, 0, 1, 1)';
	this.background = 'rgba(255, 255, 255, 1)';
	this.foreground = 'rgba(0, 0, 1, 1)';
	
	this.title = '';
	if (typeof title != 'undefined'){
		this.title = title;
	}
	
	this.data;
	if (typeof data != 'undefined'){
		this.data = data;
	}
	
	this.nodelings = [];
	this.createNodelings = function(){
		this.nodelings = [];
		for (var i = 0; i < 6; ++i){
			if (this.data[i] != ''){
				var nodeling = new Nodeling(this.data[i]);
				nodeling.parent = this.title;
				this.nodelings.push(nodeling);
			}
		}
	};
	
	this.resizeNodelings = function(){
		var total_amount = 0;
		for (var i = 0; i < this.nodelings.length; ++i){
			total_amount += this.nodelings[i].amount;
		}
		
		var unit_height = (this.height / (total_amount + (this.nodelings.length - 1)));
		
		for (var i = 0; i < this.nodelings.length; ++i){
			this.nodelings[i].height = unit_height * (this.nodelings[i].amount + 1) - (unit_height / 2);
			this.nodelings[i].unit_height = unit_height;
			// if (this.nodelings[i].amount === 0){
			// 	this.nodelings[i].default_background = red;
			// 	this.nodelings[i].background = red;
			// }
		}
	};
	
	this.draw = function(context, set){
		context.save();
		context.font = '18px Open Sans';
		context.textAlign = 'center';
		context.textBaseline = 'top';
		context.fillText(this.title, this.origin.x + (this.width/2), this.origin.y - 20);
		context.restore();
	
		var total_height = 0;
		var count = 0;
		for (var i = 0; i < this.nodelings.length; ++i){
			var nodeling = this.nodelings[i];
			nodeling.width = this.width;
			if (i === 0){	
				nodeling.origin = new Point(this.origin.x, this.origin.y);
				total_height = nodeling.height;
			}
			else {
				nodeling.origin = new Point(this.origin.x, this.origin.y + total_height + (nodeling.unit_height / 2));
				total_height += nodeling.height + (nodeling.unit_height / 2);
			}
			
			if (!set)
				nodeling.draw(context);
		}
	};
	
	this.isHit = function(point){
		if ((point.x >= this.origin.x && point.x <= this.origin.x + this.width) &&
		(point.y >= this.origin.y && point.y <= this.origin.y + this.height)){
			return true;
		}
	};
	
	this.move = function(newOrigin){
		if (this.origin.x > newOrigin.x) {
			this.origin.x += (newOrigin.x - this.origin.x) / 2;
		}
		else if (this.origin.x < newOrigin.x) {
			this.origin.x -= (this.origin.x - newOrigin.x) / 2;
		}
		
		if (parseInt(this.origin.x) === parseInt(newOrigin.x) || parseInt(this.origin.x) + 1 === parseInt(newOrigin.x) || parseInt(this.origin.x) === parseInt(newOrigin.x) + 1){
			return true;
		}
		else {
			return false;
		}
	};
}

function Nodeling(name, origin, width, height){
	this.origin = origin;
	this.width = width;
	this.height = height;
	this.name = name;
	this.parent = '';
	
	this.amount = 0;
	this.unit_height = 0;
	
	this.amount_of_connections = 0;
	
	this.default_background = 'rgba(255, 255, 255, 1)';
	this.default_foreground = 'rgba(0, 0, 1, 1)';
	this.background = 'rgba(255, 255, 255, 1)';
	this.foreground = 'rgba(0, 0, 1, 1)';
	this.highlight = 'rgba(0, 160, 100, 1)';
	this.isHighlighted = false;
	
	this.draw = function(context){
		context.save();
		context.lineWidth = 2;
		context.fillStyle = this.background;
		if (this.isHighlighted){
			context.fillStyle = this.highlight;
		}
		context.strokeStyle = this.foreground;
		context.beginPath();
		context.rect(this.origin.x, this.origin.y, this.width, this.height);

		context.closePath();
		context.stroke();
		context.fill();
		
		context.fillStyle = this.foreground;
		if (drawTooltipLabels) 
			context.font =  '0px Open Sans';
		else 
			context.font = '14px Open Sans';

		context.textAlign = 'left';
		context.textBaseline = 'middle';
		context.translate(this.origin.x + this.width / 2, this.origin.y);
		context.rotate(Math.PI / 2);
		context.globalCompositeOperation = 'source-atop';
		// context.fillText(this.name + ' (' + this.amount + ')', 5, 0);
		context.fillText(this.name, 5, 0);
		
		context.restore();

		if (drawTooltipLabels)
		{
			var yPos = this.origin.y + this.height/4;
			if (this.height/6 < 3)
			{
				yPos = this.origin.y - 20;
			}
			drawToolTip(this.name, this.origin.x + this.width/2, yPos);
		}
	}
	
	this.isHit = function(point){
		if (this.origin && (point.x >= this.origin.x && point.x <= this.origin.x + this.width) &&
		(point.y >= this.origin.y && point.y <= this.origin.y + this.height)){
			return true;
		}
	}
}

var red = 'rgba(255, 100, 150, 1)';
