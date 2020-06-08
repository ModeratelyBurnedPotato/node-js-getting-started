/*var a = window.prompt("tell me your name", "Name");
window.alert("hello " + a);

func1(1,2,3); //this will work
func2(); //this will not work, as func2 has not been assigned yet
function func1(a,b,c){
  console.log(a+b+c);
}
var func2 = function(){
  console.log("hello world");
}
func2(); //this will work

function asc(a,b){
  return a-b;
}

var arr = [10,22,13,54,5,69];
arr.sort(asc);
for(i=0;i<arr.length;i++){
  console.log(arr[i]);
}

for(item in arr){
  console.log(arr[item]);
}

x = arr.every(function(val){
  return val > 5
})
console.log(x);

var person = {
  //.json form
  firstname: "Bob",
  lastname: "Smith",
  id: 5555,
  fullname: function(){
    return this.firstname + " " + this.lastname;
  }
}

function Person(f,l,i,a){
  this.firstname = f;
  this.lastname = l;
  this.id = i;
  this.age = a;
}
*/
// -- event handlers (only one can run for one event)
function runcommand(){
  document.getElementsByTagName("h1")[0].innerHTML = "ADD USERS";
}
document.getElementById("button").onclick = runcommand;
//document.getElementById("button").onclick = (evt)=>{console.log("hello")};
// -- event listeners all associated listeners will run for an event
document.getElementById("button").addEventListener('click',(evt)=>{console.log("Hello")})
document.getElementById("button").addEventListener('click',(evt)=>{console.log("World")})
window.addEventListener('keypress',(evt)=>{console.log(evt.keyCode)})
