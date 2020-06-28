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