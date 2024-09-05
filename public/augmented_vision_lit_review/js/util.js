// Point:	Represents a point in 2D space
// x:		the x-coordinate of the point
// y:		the y-coordinate of the point
function Point(x, y){
	this.x = x;
	this.y = y;

	// rotates a point on a given angle, pivot, and length
	this.rotate = function(angle, pivot, length){	
		this.x = pivot.x + length * Math.cos(angle); // Thanks to David Ledo
		this.y = pivot.y + length * Math.sin(angle); // for this math code
		
		return new Point(this.x, this.y);
	};
	
	// translate a  point by a given point
	this.translate = function(x, y){
		this.x += x;
		this.y += y;
		
		return new Point(this.x, this.y);
	};
	
	this.scale = function(scale){
		this.x *= scale;
		this.y *= scale;
		
		return new Point(this.x, this.y);
	};
}
		
// shifts mouse coordinates to coordinates within a canvas
function windowToCanvas(canvas, x, y){
	var bbox = canvas.getBoundingClientRect();
	return new Point(	x - bbox.left * (canvas.width / bbox.width),
						y - bbox.top * (canvas.height / bbox.height));
}

// Representation of a color
function Color(r, g, b, a)
{
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
	
	this.toString = function(){
		return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')'; 
	};
	
	this.fromStringRGBA = function(str){
		var strings = str.split('(');
		strings = strings[1].split(')');
		strings = strings[0].split(', ');
		this.r = parseInt(strings[0]);
		this.g = parseInt(strings[1]);
		this.b = parseInt(strings[2]);
		this.a = parseInt(strings[3]);
	};	
}

function getPixel(x, y)
{
	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	var data = imageData.data;
	
	var red = data[((canvas.width * y) + x) * 4];
	var green = data[((canvas.width * y) + x) * 4 + 1];
	var blue = data[((canvas.width * y) + x) * 4 + 2];
	
	var pixel = new Color(red, green, blue, 1);
	return pixel;
}

function back(){
	window.location = '../';
}

function move(href){
	window.location = href;
}

function submitForm(formID){
	document.forms[formID].submit();
}