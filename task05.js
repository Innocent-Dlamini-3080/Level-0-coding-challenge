//the area opf a triangle
function triangleArea(a,b,c){
    let s = 0.5*(a+b+c);
    let sides = s*((s - a)*(s - b)*(s - c)); 
    let area = Math.sqrt(sides); 
    return area;
}
triangleArea(7,8,9);

