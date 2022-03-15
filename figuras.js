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

// aqui espesaremos a manejar los botenes con el DOM en html 

 