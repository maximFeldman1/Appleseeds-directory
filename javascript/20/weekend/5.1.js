const trimFirstLast1 = (str) => {
    const out =str.split('');
    out.pop();
    out.shift();
    return out.join('');
};

console.log(trimFirstLast1('1test2') );
console.log("sdasd".slice(1, -1));
console.log( );


