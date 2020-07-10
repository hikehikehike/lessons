"use strict";


const MovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        MovieBD.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (MovieBD.count == '' || MovieBD.count == null || isNaN(MovieBD.count)){
            MovieBD.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberFilm: function(){
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
    },
    level: function(){
        if (MovieBD.count < 10 ){
            console.log('Просмотренно мало фильмов');
        } else if (MovieBD.count >= 10 && MovieBD.count <= 30) {
            console.log('Вы классический зритель');
        } else if (MovieBD.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMeDB: function () {
        if (MovieBD.privat == false) {
            console.log(MovieBD);
            
        }
    },
    toggleVisibleMyDB: function()
    {
        if(MovieBD.privat){
            MovieBD.privat= true;
        } else {
            MovieBD.privat= false;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null){
                console.log('вы не ввели данные');
                i--;
            } else {
                MovieBD.genres[i-1] =  genre; 
            }       
        }
        MovieBD.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }

};
