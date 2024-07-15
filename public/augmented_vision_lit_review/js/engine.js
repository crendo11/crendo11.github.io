var canvas;
var context;

var vis;
var highlight_color = 'rgba(178,223,138, 1)';

var useCustomHighlights = true;
var highlights = [];
highlights[''] = 'rgba(51,160,44, 1)';
highlights['Visual Perception Enhancement'] = 'rgba(143,70,168, 1)';
highlights['Vision Correction Systems'] = 'rgba(67, 205, 128, 1)';
highlights[''] = 'rgba(194,165,207, 1)';
highlights['Task Specific'] = 'rgba(0,109,44, 1)';


var intersect_color = 'rgba(255, 100, 150, 1)';//'rgba(0, 160, 100, 1)';//'rgba(113, 113, 198, 1)';

var tooltipIsVisible = false;
var drawTooltipLabels = false;
var label = 0;
var mouse_x = 0;
var mouse_y = 0;

var focused_nodes = [];
var highlighted_papers = [];
var offset_x = 0;
var offset_y = 0;

var _index = -1;
var _num = 0;
var vis_inited = false;

var clicks = 0;

// initialise function
function init() {
	// retrieve the canvas from the DOM and get its 2D context
	canvas = document.getElementById('vis');
	context = canvas.getContext('2d');
	// initialise the visualisation
	vis = new PVAspace(new Point(0, $("#ctrl_panel").height() + 50), canvas.width, canvas.height - ($("#ctrl_panel").height() + 100));
	getData(lit, node_list);
	// resize the canvas to fill in the window
	resize();

	if (!vis_inited) {
		// add event handlers	
		canvas.addEventListener('mousemove', function (e) {
			mouseMove(canvas, e.clientX, e.clientY);
		});
		canvas.addEventListener('click', function (e) {
			clicks++;
			console.log(clicks);
			if (clicks === 2) {
				mouseClick(canvas, e.clientX, e.clientY);
				clicks = 0;
			}
		});
		canvas.addEventListener('mouseout', function (e) {
			mouseMove(canvas, e.clientX, e.clientY);
		});
		// start the draw loop
	}
	draw();
	
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// PRESENTATION FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// the draw loop
function draw() {
	// clean the canvas every start of the loop
	context.clearRect(0, 0, canvas.width, canvas.height);

	if (_index != -1) {
		if (update(_index, _num) === true) {
			var temp = vis.nodes[_index];
			vis.nodes[_index] = vis.nodes[_index + _num];
			vis.nodes[_index + _num] = temp;
			vis.analyze(context);
			_index = -1;
		}
	}

	if (vis.hasBeenAnalyzed) {
		vis.draw(context);
		if (tooltipIsVisible && !drawTooltipLabels) {
			drawToolTip(label, mouse_x, mouse_y);
		}
	}
	else {
		showLoadingScreen('Loading...');
	}
	// loop the function based on the browser's time frame
	window.requestNextAnimationFrame(draw);
}

// resize the canvas according to the window size
function resize(analyze) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	vis.origin = new Point(0, $("#ctrl_panel").height() + 50);
	vis.width = canvas.width;
	vis.height = canvas.height - ($("#ctrl_panel").height() + 100);

	if (typeof analyze != 'undefined') {
		vis.analyze(context);
	}
}

function showLoadingScreen(msg) {
	context.save();
	context.font = '32px Open Sans';
	context.textAlign = 'center';
	context.textBaseline = 'middle';
	context.fillText(msg, vis.origin.x + (vis.width / 2), vis.origin.y + (vis.height / 2));
	context.restore();
}

function highlightPapers() {
	for (var i = 0; i < highlighted_papers.length; ++i) {
		highlighted_papers[i].isHighlighted = true;
		highlighted_papers[i].background = intersect_color;
		highlighted_papers[i].foreground = 'white';
	}
}

// Draw tool tips
// label: (string) the tooltip label
// x 	: (integer) the x starting position of the label
// y	: (integer) the y starting position of the label
function drawToolTip(label, x, y) {
	context.save();
	context.font = "14px Open Sans";
	var textSize = context.measureText(label).width;
	context.fillStyle = 'rgba(255, 255, 255, 0.65)';
	if (x + textSize < canvas.width - (canvas.width / 25) * 2) {
		context.beginPath();
		context.rect(x, y + 10, textSize + 20, 30);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		context.fill();
		context.font = "14px Open Sans";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillStyle = "#000000";
		context.fillText(label, x + (textSize + 20) / 2, y + 25);
	}
	// draws a mirror version of the tool tip drawn above,
	// this is drawn to prevent the tool tip from being cut
	// off when too near the edge of the browser
	else {
		context.beginPath();
		context.rect(x - (textSize * 1.25 + 20) - 20, y + 10, textSize * 1.25 + 20, 30);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		context.fill();
		context.font = "14px Open Sans";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillStyle = "#000000";
		context.fillText(label, x - (textSize * 1.25 + 20) / 2 - 20, y + 25);
	}
	context.restore();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// DATA FUNCTIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function getData(raw_literature, raw_nodes) {
	$(jQuery.parseJSON(JSON.stringify(raw_nodes))).each(
		function () {
			var node = new Node(this['title'], this);
			node.createNodelings();
			vis.nodes.push(node);
		}
	);

	$(jQuery.parseJSON(JSON.stringify(raw_literature))).each(
		function () {
			var paper = new Paper(this['first author name'], this['Title'] + ' (' + this['first author name'] + ')', this);
			vis.literature.push(paper);

			//if (vis.literature.length === 55){
			resize(true);
			//}
		}
	);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENTHANDLERS
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseMove(canvas, x, y) {
	mouse_x = x;
	mouse_y = y;
	var somethingIsHit = false;
	for (var i = 0; i < vis.literature.length; ++i) {
		if (vis.literature[i].isHit(new Point(x, y))) {
			tooltipIsVisible = true;
			label = vis.literature[i].title;
			$('#vis').css({ 'cursor': 'pointer' });

			if (useCustomHighlights)
				vis.literature[i].background = highlights[vis.literature[i].data.Application];
			else
				vis.literature[i].background = highlight_color;

			vis.literature[i].foreground = 'white';
			vis.literature[i].isHighlighted = true;

			for (var j = 0; j < vis.nodes.length; ++j) {
				for (var k = 0; k < vis.nodes[j].nodelings.length; ++k) {
					if (vis.literature[i].data[vis.nodes[j].title] === vis.nodes[j].nodelings[k].name) {
						if (useCustomHighlights && vis.nodes[j].nodelings[k].name in highlights)
							vis.nodes[j].nodelings[k].background = highlights[vis.nodes[j].nodelings[k].name];
						else
							vis.nodes[j].nodelings[k].background = highlight_color;
						somethingIsHit = true;
					}
					else {
						vis.nodes[j].nodelings[k].background = vis.nodes[j].nodelings[k].default_background;
					}
				}
			}
		}
		else {
			vis.literature[i].background = vis.literature[i].default_background;
			vis.literature[i].foreground = vis.literature[i].default_foreground;
			vis.literature[i].isHighlighted = false;
		}
	}

	if (!somethingIsHit) {
		for (var i = 0; i < vis.nodes.length; ++i) {
			for (var j = 0; j < vis.nodes[i].nodelings.length; ++j) {
				if (vis.nodes[i].nodelings[j].isHit(new Point(x, y))) {
					tooltipIsVisible = true;
					label = vis.nodes[i].nodelings[j].name + ' (' + vis.nodes[i].nodelings[j].amount + ')';
					$('#vis').css({ 'cursor': 'pointer' });

					if (useCustomHighlights && vis.nodes[i].nodelings[j].name in highlights)
						vis.nodes[i].nodelings[j].background = highlights[vis.nodes[i].nodelings[j].name];
					else
						vis.nodes[i].nodelings[j].background = highlight_color;

					for (var k = 0; k < vis.literature.length; ++k) {
						if (vis.literature[k].data[vis.nodes[i].title] === vis.nodes[i].nodelings[j].name) {

							if (useCustomHighlights)
								vis.literature[k].background = highlights[vis.literature[k].data.Application
								];
							else
								vis.literature[k].background = highlight_color;

							vis.literature[k].foreground = 'white';
							vis.literature[k].isHighlighted = true;
							somethingIsHit = true;
						}
						else {
							vis.literature[k].background = vis.literature[k].default_background;
						}
					}
				}
				else {
					vis.nodes[i].nodelings[j].background = vis.nodes[i].nodelings[j].default_background;
				}
			}
		}
	}

	var color = getPixel(x, y);
	if (color.toString() === 'rgba(0, 0, 0, 1)') {
		tooltipIsVisible = false;
		label = '';
		$('#vis').css({ 'cursor': 'auto' });
	}

	highlightPapers();
}

function mouseClick(canvas, x, y) {
	for (var i = 0; i < vis.nodes.length; ++i) {
		for (var j = 0; j < vis.nodes[i].nodelings.length; ++j) {
			var node = vis.nodes[i].nodelings[j];
			if (node.isHit(new Point(x, y))) {
				if (focused_nodes.indexOf(node) != -1) {
					node.isHighlighted = false;
					focused_nodes.splice(focused_nodes.indexOf(node), 1);
					membership();
				}
				else {
					node.isHighlighted = true;
					node.highlight = intersect_color;
					focused_nodes.push(node);
					membership();
					return;
				}
			}
		}
	}
	highlightPapers();
}

function membership() {
	if (focused_nodes.length === 0) {
		highlighted_papers = [];
		return;
	}

	for (var i = 0; i < vis.literature.length; ++i) {
		var flag = 'undefined';

		var paper = vis.literature[i];

		var flags_per_dimension = [];
		for (var j = 0; j < vis.nodes.length; ++j) {
			var flag = 'undefined';
			for (var k = 0; k < vis.nodes[j].nodelings.length; ++k) {
				if (focused_nodes.indexOf(vis.nodes[j].nodelings[k]) != -1) {
					if (paper.data[vis.nodes[j].nodelings[k].parent] === vis.nodes[j].nodelings[k].name) {
						flag = true;
						break;
					}
					else {
						flag = false;
					}
				}
			}

			flags_per_dimension[j] = flag;
		}

		for (var j = 0; j < flags_per_dimension.length; ++j) {
			if (flags_per_dimension[j] != 'undefined') {
				if (flag === 'undefined') {
					flag = flags_per_dimension[j];
				}
				else {
					flag = flag && flags_per_dimension[j];
				}
			}
		}


		if (flag === true) {
			if (highlighted_papers.indexOf(paper) === -1) {
				paper.isHighlighted = true;
				highlighted_papers.push(paper);
			}
		}
		else if (flag === false) {
			if (highlighted_papers.indexOf(paper) != -1) {
				paper.isHighlighted = false;
				highlighted_papers.splice(highlighted_papers.indexOf(paper), 1);
			}
		}
	}
}

function enableShuffle(enable) {
	if (enable) {
		vis.shuffleIsOn = true;
		vis.hasBeenShuffled = true;

		$('#shuffle_button').attr({ 'onclick': 'enableShuffle(false)' });
		$('#shuffle_button').text('disable shuffle');
		$('#shuffle_menu').css({ 'display': 'block' });

		var containers = $('.shuffle_button_container');
		for (var i = 0; i < containers.length; ++i) {
			$(containers[i]).css({ 'position': 'absolute', 'left': vis.nodes[i].origin.x - 15 });
		}
	}
	else {
		vis.shuffleIsOn = false;
		$('#shuffle_button').attr({ 'onclick': 'enableShuffle(true)' });
		$('#shuffle_button').text('enable shuffle');
		$('#shuffle_menu').css({ 'display': 'none' });
	}
}

function moveIndex(num, index) {
	_num = parseInt(num);
	_index = parseInt(index);
	vis.switchNodes(vis.nodes[index], vis.nodes[index + num], new Point(vis.nodes[index + num].origin.x, vis.nodes[index + num].origin.y), new Point(vis.nodes[index].origin.x, vis.nodes[index].origin.y))
}

function update(index, num) {
	return vis.switchNodes(vis.nodes[index], vis.nodes[index + num]);
	//return (vis.nodes[index].move(vis.nodes[index + num].origin) && vis.nodes[index + num].move(vis.nodes[index].origin));
}
