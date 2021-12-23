const rectangles = [{
	id: 1,
	width: 5,
	height: 10,
	color: "green"
}, {
	id: 2,
	width: 2,
	height: 4,
	color: "blue"
}, {
	id: 3,
	width: 6,
	height: 3,
	color: "green"
}, {
	id: 4,
	width: 7,
	height: 7,
	color: "purple"
}, {
	id: 5,
	width: 10,
	height: 10,
	color: "red"
}];

rectangles.filter(rec => rec.color==="red" || rec.color==="green")
.map(rec => rec.id + ': ' + (rec.width * rec.height)) 
.forEach(element => console.log(element));