var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rect with l="+l+" and b="+b);
   rect(l,b, (err, rectangle)=> {
       if(err){
           console.log("ERROR: "+err.message);
       }
       else{
           console.log("Perimeter="+rectangle.perimeter());
           console.log("Area="+rectangle.area());
       }
   });
   console.log("this statement after the call to rect()");
}

solveRect(12,48);
solveRect(3,6);
solveRect(-2,8);