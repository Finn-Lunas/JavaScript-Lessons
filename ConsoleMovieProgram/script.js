"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви переглянули ?", "0");

  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Скільки фільмів ви переглянули ?", "0");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  isPrivat: false,
};

detectPersonalLevel(personalMovieDB.count);
rememberMyFilms(personalMovieDB.movies);
writeYourGenres(personalMovieDB.genres);
showMyDB(personalMovieDB.isPrivat);

function detectPersonalLevel(count) {
  if (count < 10 && count >= 0) {
    alert("Ви переглянули доволі мало фільмів");
  } else if (count >= 10 && count <= 30) {
    alert("Ви класичний глядач");
  } else if (count > 30) {
    alert("Ви кіноман");
  } else {
    alert("Відбулася помилка");
  }
}

function rememberMyFilms(movies) {
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
      : (movies[movie] = rating);
  }
}

function writeYourGenres(genres) {
  for (let i = 0; i < 3; i++) {
    const favoritegenre = prompt(`Ваш улублений жанр під номером ${i + 1}`);
    genres[i] = favoritegenre;
  }
}

function showMyDB(isPrivat) {
  isPrivat === false ? console.log(personalMovieDB) : console.log("");
}
