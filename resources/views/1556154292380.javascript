var SimpleLinearRegression = require("ml-regression-simple-linear")

const x=[1,2];
const y=[96,80];
// for(var i=0;i<1;i++){
//     x.push(i*3);
//     y.push(i);
// }

const regression = new SimpleLinearRegression(x, y);

var cost = regression.predict(3); 
console.log(cost);
