// Codigo del cuadrado
console.group('squeares')

const squarePerimeter = (side) => {
     return side * 4; 
}

const squareArea = (side) => {
  return side * side;
} 

console.groupEnd();


// Codigo del triangulo 
console.log('triangle')
const perimeterOfTheTriangle = (side1, side2, base) => {
  return side1 + side2 + base;

} 

const triangleArea = ( base, height) => {
 return (base * height) / 2;
}

console.groupEnd();


// Codigo del circulo 
console.group('circle');

const circleDiameter = (radius) => {
     return radius * 2;
}

const PI = Math.PI;
console.log( 'Nuestro PI es: ' + PI);

const circlePerimeter = (radius) => {
 const diameter = circleDiameter(radius);
 return diameter * PI;
}

const circleArea = (radius) => {
   return  (radius * radius) * PI;

}
console.groupEnd();

// aqui espesaremos a manejar los botenes con el DOM en html funciones para el cuadrado. 
 document.getElementById("perimeter-square").addEventListener("click", () => {
   const inputSquare = document.getElementById("inputSquare").value; 
   const resultSquare = squarePerimeter(inputSquare);
   console.log(resultSquare);
 });

 document.getElementById("area-square").addEventListener("click", () => {
   const inputSquareArea = document.getElementById("inputSquare").value;
   const resultSquareArea = squareArea(inputSquareArea); 
   console.log(resultSquareArea);
 })

 // aqui espesaremos a manejar los botenes con el DOM en html funciones para el triangulo.

 document.getElementById("perimeter-Triangle").addEventListener("click", () => {
   const inputSide1 = parseInt(document.getElementById("triangleSide1").value);
   const inputSide2 = parseInt(document.getElementById("triangleSide2").value);
   const inputBase = parseInt(document.getElementById("triangleBase").value);
   const resultTriangle = perimeterOfTheTriangle(inputSide1, inputSide2, inputBase);
   console.log(resultTriangle);
 });

 document.getElementById("area-Triangle").addEventListener("click", () => {
   const inputBaseArea = parseInt(document.getElementById("triangleBase").value);
   const inputHeight = parseInt(document.getElementById("triangleHeight").value);
   const resultAreaTriangle = triangleArea(inputBaseArea, inputHeight);
   console.log(resultAreaTriangle)
 });

 //  aqui espesaremos a manejar los botenes con el DOM en html funciones para el circulo.
//PERIMETRO DEL CIRCULO
 document.getElementById("perimeter-circle").addEventListener( "click", () => {
   const inputRadius1 = document.getElementById("inputRadius").value;
   console.log(circlePerimeter(inputRadius1));
 });

 //Area del  circuulo 
 document.getElementById("area-circle").addEventListener( "click", () => {
  const inputRadius2 = document.getElementById("inputRadius").value;
  console.log(circleArea(inputRadius2));
});
  
