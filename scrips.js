"use strict";


let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

function start (){
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start ();

const MovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberFilm(){
    for (let i = 0; i < 2; i++){
        const a = prompt ('какой фильм?', ''),
              b = prompt ('Оценка', '');
    if (a !=null && b !=null && a !='' && b !='' && a.length < 50){
        MovieBD.movies[a] = b; 
        console.log('done');
    }   else {
        console.log('error');
        i--;
    }
    }
}

rememberFilm();

function level(){
    if (MovieBD.count < 10 ){
        console.log('Просмотренно мало фильмов');
    } else if (MovieBD.count >= 10 && MovieBD.count <= 30) {
        console.log('Вы классический зритель');
    } else if (MovieBD.count > 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
level();

function showMeDB () {
    if (MovieBD.privat == false) {
        console.log(MovieBD);
        
    }
}
showMeDB(MovieBD.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const gender = prompt(`Ваш любимый жанр под номером ${i}`);
        MovieBD.genres[i-1] = gender;
        
    }
}

writeYourGenres();
