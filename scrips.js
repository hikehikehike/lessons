const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const MovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('какой фильм?', ''),
    b = prompt ('Оценка', ''),
    c = prompt ('какой фильм?', ''),
    d = prompt ('Оценка', '');

MovieBD.movies[a] = b;
MovieBD.movies[c] = d;

console.log(MovieBD);
