//Variable declaration

var solution = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
var countH = [
  [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]
]
var countY = [
  [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]
]
var counter1 = 0;
var counter2 = 0;
var boolean1 = 1;
var boolean2 = 1;
var tbl  = document.getElementById(1234),rowsIndex,cellsIndex;
var lock = 0;
//Function declaration
function newBoard(){
  counter1 = 0;
  counter2 = 0;
  boolean1 = 1;
  boolean2 = 1;
  for(i = 0; i < solution.length; i++){
    for(k = 0; k < solution[0].length; k++){
      solution[i][k] = Math.round(Math.random());
      //console.log(solution[i][k]);
      if(solution[i][k] == 1){
        if(boolean1 == 1){
          countH[i][counter1]++;
        }
        if(boolean1 == 0) {
          counter1++;
          countH[i].push(1);
          boolean1 = 1;
        }
      }
      if(solution[i][k] != 1 && countH[i][0]!=0){
        boolean1 = 0;
      }
      if(solution[i][k] != 1){
        boolean2 = 0;
      }
    }
    counter1 = 0;
    counter2 = 0;
    boolean1 = 1;
    boolean2 = 1;
  }
  for(i = 0; i < solution.length; i++){
    for(k = 0; k < solution[0].length; k++){
      //solution[i][k] = Math.round(Math.random());
      //console.log(solution[i][k]);
      if(solution[k][i] == 1){
        if(boolean1 == 1){
          countY[i][counter1]++;
        }
        if(boolean1 == 0) {
          counter1++;
          countY[i].push(1);
          boolean1 = 1;
        }

      }
      if(solution[k][i] != 1 && countY[i][0]!=0){
        boolean1 = 0;
      }


    }
    counter1 = 0;
    counter2 = 0;
    boolean1 = 1;
    boolean2 = 1;
  }
}

function createTable(Reveal){
  var table = document.getElementById(1234);  // set this to your table
  var tbody = document.createElement("tbody");
  var row = document.createElement("tr");
  var number = document.createElement("th");

    row.appendChild(number);
    table.appendChild(tbody);

  for(i = 0; i <= solution.length; i++){
      number = document.createElement("th");
      number.textContent = countY[i];
      row.appendChild(number);
  }
  tbody.appendChild(row);
  solution.forEach(function(items) {
    row = document.createElement("tr");
    number = document.createElement("th");
    number.textContent = countH[counter1];
    counter1++;
    row.appendChild(number);
      items.forEach(function(item) {
        var cell = document.createElement("td");
        cell.textContent = 0;
        if(Reveal == 1){
          cell.textContent = item;
        }

        row.appendChild(cell);
      });

    tbody.appendChild(row);
  });
}

function omedetou(cheat){
  if(cheat == 0){
    window.alert("Congratulations! You got it right!" )
  }
  else{
    window.alert("Congratulations! You got it right (by cheating :P)" );
  }
}
function checkForCompletion(){
  for(i = 1; i < tbl.rows.length; i ++){
    for(k = 1; k < tbl.rows[i].cells.length; k++){
      if(tbl.rows[i].cells[k].innerHTML != solution[i-1][k-1]){
        return;
      }
    }
  }
  omedetou(0);
  lock = 1;
}

newBoard();
createTable(0);
//detecting clicks
// --New Puzzle
document.getElementById("New Puzzle").addEventListener('click',(evt)=>{
  tbl  = document.getElementById(1234)
  for(i = 1; i < tbl.rows.length; i ++){
    for(k = 1; k < tbl.rows[i].cells.length; k++){
      tbl.rows[i].cells[k].innerHTML = "0";
    }
  }
  //reset variables
  solution = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];
  countH = [
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]
  ]
  countY = [
    [0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]
  ]
  newBoard();
  for(i = 1; i < tbl.rows.length; i ++){
    tbl.rows[i].cells[0].innerHTML = countH[i-1];
    console.log(countH[i-1]);
  }
  for(k = 1; k < tbl.rows[0].cells.length-1; k++){
    tbl.rows[0].cells[k].innerHTML = countY[k-1];
    console.log(countY[k -1]);
  }
});


// -- reset
document.getElementById("Reset").addEventListener('click',(evt)=>{
  tbl  = document.getElementById(1234)
  for(i = 1; i < tbl.rows.length; i ++){
    for(k = 1; k < tbl.rows[i].cells.length; k++){
      tbl.rows[i].cells[k].innerHTML = "0";
    }
  }
  lock = 0;
});
// -- Reveal
document.getElementById("Reveal").addEventListener('click',(evt)=>{
  tbl  = document.getElementById(1234)
  for(i = 1; i < tbl.rows.length; i ++){
    for(k = 1; k < tbl.rows[i].cells.length; k++){
      tbl.rows[i].cells[k].innerHTML = solution[i-1][k-1];
    }
  }
  omedetou(1);
  //lock = 1;
});
// -- Instructions
document.getElementById("Instructions").addEventListener('click',(evt)=>{
  window.alert("This puzzle is made up of a n by m table containing numbers are given at the top (and left side) of the table to indicate the number of unbroken “marked” lines in each column (and row). The player’s job is to solve the puzzle by filling the cells of the table accordingly.")
});
document.getElementById("Instructions for Congratulations").addEventListener('click',(evt)=>{
  window.alert("To see the default puzzle complete message, use Reveal button, then toggle any one cell twice")
});
// -- Controls
document.getElementById("Controls").addEventListener('click',(evt)=>{
  window.alert("Left click or drag over the cells to change their markings. When your markings and the answers match, you will win automatically")
});
// -- Dimensions
/*
document.getElementById("Dimensions").addEventListener('click',(evt)=>{
  var tall = window.prompt("How tall should the puzzle be?", 16);
  var wide = window.prompt("How wide should the puzzle be?", 16);
  countH = []
  countY = []
  solution = []
  for(i = 0; i < tall; i ++){
    countH.push([0])
  }

  for(i = 0; i < wide; i ++){
    countY.push([0])
  }
  for(i = 0; i < tall; i ++){
    solution.push([0]);
    for(k = 0; k < wide; k ++){
      solution[i].push(0);
    }
  }
  newBoard();
});
*/
// --table cells
for(i = 0; i < tbl.rows.length; i ++){
  for(k = 0; k < tbl.rows[i].cells.length; k++){
    tbl.rows[i].cells[k].onclick = function(){
      if(lock == 0){
        rowsIndex = this.parentElement.rowIndex;
        cellsIndex = this.cellIndex;
        //console.log(rIndex, cIndex);
        if(tbl.rows[rowsIndex].cells[cellsIndex].innerHTML == 0){
          tbl.rows[rowsIndex].cells[cellsIndex].innerHTML = "1";
        }
        else if(tbl.rows[rowsIndex].cells[cellsIndex].innerHTML == 1){
          tbl.rows[rowsIndex].cells[cellsIndex].innerHTML = "0";
        }
        checkForCompletion();
      }
      else{
        window.alert("The puzzle is complete! Use the new puzzle button to generate a new puzzle, or the reset button to play the same puzzle again.");
      }
    }
  }
}
