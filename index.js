var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rect with l="+l+" and b="+b);
    if(l<0 || b<0){
        console.log("Shouldn't be negative");
    }
    else{
        console.log("Area of Rectangle= "+rect.area(l,b));
        console.log("Perimeter of Rectangle= "+rect.perimeter(l,b));
    }
}

solveRect(12,48);
solveRect(3,6);
solveRect(-2,8);