/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      cart = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
     filmList = document.querySelector('.promo__interactive-list');


adv.forEach(time => {
    time.remove();  //удаление элемента
});
filmList.innerHTML= '';//удаление элемента через код html
genre.textContent = 'драма'; //изменение текста элемента
cart.style.backgroundImage ='url("img/bg.jpg")'; // меняем катинку бекграунда

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>`
    ;
});
