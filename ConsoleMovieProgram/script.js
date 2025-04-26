"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви переглянули ?", "0");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const movie = prompt("Один з останніх фільмів, який ви переглянули?");
  const rating = prompt("На скільки його оціните?");
  personalMovieDB.movies[movie] = rating;
}

console.log(personalMovieDB);
