// 9. Write a JavaScript program to calculate the area and perimeter of a circle.

// let radius= 3;
// 1st method

// let area= 3.14 * (radius * radius)

// let perimeter= 2 * 3.14 * radius

// console.log(area, perimeter);

// 2nd Method

function findArea (radius){
    area= 3.14 * (radius * radius)
    return area
}
 console.log(findArea(radius));

 function findPerimeter(radius) {
    perimeter= 2 * 3.14 * radius
    return perimeter
 }

 console.log(findPerimeter(radius));