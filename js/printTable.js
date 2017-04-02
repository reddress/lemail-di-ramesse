function numberToEntity(num) {
  return "&#" + num + ";";
}

function alphaToHiero(letter) {
  var num = charTable[letter] || 0x13257;
  return numberToEntity(num);
}

/*
var table = document.getElementById("displayTable");

for (var i = 65; i < 91; i++) {
  var row = table.insertRow();
  var alphaCell = row.insertCell(0);
  var hieroCell = row.insertCell(1);
  
  alphaCell.innerHTML = numberToEntity(i);
  hieroCell.innerHTML = alphaToHiero(String.fromCharCode(i));
}

var numbers = ['1', '10', '100', '1000'];

numbers.forEach(function(number) {
  var row = table.insertRow();
  var alphaCell = row.insertCell(0);
  var hieroCell = row.insertCell(1);

  alphaCell.innerHTML = number;
  alphaCell.className = 'numberCell';
  hieroCell.innerHTML = numberToEntity(charTable[number]);
});
*/


function addDiv(i) {
  var div = document.createElement('div');
  div.className = 'hieroLetter card card-3';
  var roman = String.fromCharCode(i);
  
  if (typeof charTable[roman] === "number") {
    div.innerHTML = alphaToHiero(String.fromCharCode(i)) + "<br>" + numberToEntity(i);
    document.body.appendChild(div);
  } else {
    div.innerHTML = numberToEntity(charTable[roman][0]) + "<br>" + numberToEntity(i);
    document.body.appendChild(div);
    
    var divAlt = document.createElement('div');
    divAlt.className = 'hieroLetter card card-3';

    divAlt.innerHTML = numberToEntity(charTable[roman][1]) + "<br>" + numberToEntity(i);
    document.body.appendChild(divAlt);
  }  
}

for (var i = 65; i < 91; i++) {
  addDiv(i);
}

var numbers = ['1', '10', '100', '1000'];

numbers.forEach(function(number) {
  var div = document.createElement('div');
  div.className = 'hieroLetter card card-3';
  div.innerHTML = numberToEntity(charTable[number]) + "<br><span class='numberCell'>" + number + '</span>';
  document.body.appendChild(div);
});
