/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против."
        ]
    };

    

const rek = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      back = document.querySelector('.promo__bg'),
      filmList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addImput = addForm.querySelector('.adding__input'),
      chekbox = addForm.querySelector('[type="checkbox"]');
    
const deleteRek = (a) => {
    a.forEach(item => {
        item.remove();
    });
};
const sortArr = (arr) => {
    arr.sort();
};
const changes = () =>{
    genre.innerHTML= 'Драма';
    back.style.backgroundImage = 'url("img/bg.jpg")';
};
const creatFilmList = (films, parrent) => {
    parrent.innerHTML= '';
    
    films.forEach((film, n) => {
        parrent.innerHTML += `<li class="promo__interactive-item">${n+1}. ${film}
        <div class="delete"></div>
    </li>`;
    });
    deleteFilm();
    

};

const addNewFilm = () => {
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addImput.value;
        const favoriet = chekbox.checked;

        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`; 
            }
            
            if(favoriet){
                console.log("сасат");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            creatFilmList(movieDB.movies, filmList);
            addForm.reset();
        }
      });
};



const deleteFilm =() => {
    document.querySelectorAll('.delete').forEach((btn, i)=>{
        btn.addEventListener('click', () =>{
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        creatFilmList(movieDB.movies, filmList);
        });
    });
};







    
      addNewFilm();
      changes();
      creatFilmList(movieDB.movies, filmList);
      sortArr(movieDB.movies);
      deleteRek(rek);
});