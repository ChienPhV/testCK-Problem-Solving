let a=[2, 3, -5, -2, 4];
let adjacentElementsProduct = (a) => {
    return Math.max(...a.slice(1).map( (x,i) => x*a[i]) );

}
let y=adjacentElementsProduct(a);
console.log(y)
