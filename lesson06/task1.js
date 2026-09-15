//Function Declaration
function areaDeclaration(width, height) {
  return width * height;
}
console.log(areaDeclaration(5, 10));

//Function Expression
const areaExpression = function(width, height) {
    return width * height;
};
console.log(areaExpression(5, 10));

//Arrow Function
const areaArrow = (width, height) => {
    return width * height;
};
console.log(areaArrow(5, 10));