
const nb_year = (start,percent,addedEachYear,end )=>{
    let count =0;
    let now = start;
    let percentByDecimal =  percent /100;
    while(now < end) {
        count++;
        now =  now + now*percentByDecimal +addedEachYear;       
    }

    return count;
    
}

console.log(nb_year(1500,5,100,5000));
console.log(nb_year(1500,0,100,5000));

console.log( nb_year(1500000, 2.5, 10000, 2000000));

//p(n) = p0 *x^n * s^(n-1) + s        