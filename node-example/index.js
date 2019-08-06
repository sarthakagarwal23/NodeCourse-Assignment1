var rect = require("./rectangle");

function solveRect(l,b){
  console.log("solving for reactnagle");

  if(l <=0 || b<=0){
      console.log("error values");
  }
  else{
      console.log("their area is " + rect.area(l,b));
      console.log("their peri is " + rect.peri(l,b));
  }
}

solveRect(3,4);

solveRect(5,6);


solveRect(0,1);