//the area opf a triangle
function triangleArea(a,b,c){
    const s = 0.5*(a+b+c);
    const sides = s*((s - a)*(s - b)*(s - c)); 
    const area = Math.sqrt(sides); 
    return area;
}
triangleArea(7,8,9);

