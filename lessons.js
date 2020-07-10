"use strict";


const test = {
    nema: 1,
    nema2: 2,
    color:{
        sinie:3,
        serii:4,
        urur:{
            chtoto:5
        }
    }

};
let key;
for (key in test){
    if (typeof (test[key]) ===   'object'){
        for(let i in test[key]){
            if (typeof (test[key][i]) === 'object'){
                for (let a in test[key][i]){
                    console.log(`начинаю понимать ${a} или хуй там плавал ${test[key][i][a]}`);
                }
               } else {
                console.log(`начинаю понимать ${i} или хуй там плавал ${test[key][i]}`);
             }
                
        }
    } else {
    console.log(`начинаю понимать ${key} или хуй там плавал ${test[key]}`);
    }
}


const arr = [1, 2, 3];

arr.pop();
arr.push(4);

console.log(arr);


let t=1;
if (t){
    console.log('ttt');
}

console.log();

console.log(null || 24 || 12 || true);


{
    var a=50;
}

console.log(5%3);
function a(qq,ww,we){
    console.log(qq);
    console.log(ww);
    console.log(we);
}

a("dasd1", "sadasd2", 2);