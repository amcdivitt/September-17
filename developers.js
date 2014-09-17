var gamedeveloper = [
  {name: "Steve 'Slug' Russell", Famousfor: "Spacewar", Year: "1961"},
  {name: "Martin 'Shag' Graetz", Famousfor: "Spacewar", Year: "1961"},
  {name: "Wayne Wiitanen", Famousfor: "Spacewar", Year: "1961"},
  {name: "Nolan Bushnell", Famousfor: ["Pong", "Computer Space"], Year: "1971"},
  {name: "Allan Alcorn", Famousfor: "Pong", Year: "1971"},
  {name: "Steve Wozniak", Famousfor: "Breakout", Year: "1973"},
  {name: "Steve Jobs", Famousfor: "Breakout", Year: "1973"},
];



function Gamedevelopers(name, knownfor, year) {
  this.name = name;
  this.knownfor = knownfor;
  this.year = year;
  this.speaks = function() {
  	return "Hi, my name is " + this.name;
  }
}

var guy1 = new Gamedevelopers ("Steve 'Slug' Russell", "Spacewar!", 1961);
var guy2 = new Gamedevelopers ("Martin 'Shag' Graetz", "Spacewar!", 1961);
var guy3 = new Gamedevelopers ("Wayne Wiitanen", "Spacewar!", 1961);
var guy4 = new Gamedevelopers ("Nolan Bushnell", "Pong", 1971);
var guy4 = new Gamedevelopers ("Allan Alcorn", "Pong", 1971);
var guy4 = new Gamedevelopers ("Steve Wozniak", "Breakout", 1973);
var guy4 = new Gamedevelopers ("Steve Jobs", "Breakout", 1973);
