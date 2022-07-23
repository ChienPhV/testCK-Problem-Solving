let b=[60, 40, 55, 75, 64];
function alternatingSums(b) {
    return [b.filter((el,i)=>i%2===0).reduce((b,c)=>b+c,0), b.filter((el,i)=>i%2!==0).reduce((b,c)=>b+c,0)];
}

let z=alternatingSums(b);
console.log(z);