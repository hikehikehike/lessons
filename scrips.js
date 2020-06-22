"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const MovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (MovieBD.count < 10 ){
    console.log('Просмотренно мало фильмов');
} else if (MovieBD.count >= 10 && MovieBD.count <= 30) {
    console.log('Вы классический зритель');
} else if (MovieBD.count > 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

let i = 0;
do {
    const a = prompt ('какой фильм?', ''),
          b = prompt ('Оценка', '');
if (a !=null && b !=null && a !='' && b !='' && a.length < 50){
    MovieBD.movies[a] = b; 
    console.log('done');
}   else {
    console.log('error');
    i--;
}
i++;
  }while (i < 2);


console.log(MovieBD);

function calc (a, b){
    return (a+b);
}
console.log(calc(5, 8));

