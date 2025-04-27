"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви переглянули ?", "0");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
  alert("Ви переглянули доволі мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Ви класичний глядач");
} else if (personalMovieDB.count > 30) {
  alert("Ви кіноман");
} else {
  alert("Відбулася помилка");
}

for (let i = 0; i < 2; i++) {
  const movie = prompt("Один з останніх фільмів, який ви переглянули?");
  const rating = prompt("На скільки його оціните?");
  movie === "" ||
  movie === null ||
  rating === null ||
  rating === "" ||
  isNaN(rating) ||
  movie.length >= 50
    ? i--
    : (personalMovieDB.movies[movie] = rating);
}

console.log(personalMovieDB);
