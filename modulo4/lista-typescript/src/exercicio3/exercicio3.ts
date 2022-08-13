enum Genre {
  action = "ação",
  drama = "drama",
  comedy = "comedia",
  romance = "romance",
  horror = "terror",
}

type Movie = {
  name: string;
  year: number;
  genre: Genre;
  review?: number;
};

const infoMovie = (
  name: string,
  year: number,
  genre: Genre,
  review?: number
): Movie => {
  if (review) {
    return {
      name,
      year,
      genre,
      review,
    };
  } else {
    return {
      name,
      year,
      genre,
    };
  }
}

console.log(infoMovie("Duna", 2001, Genre.drama, 74));
console.log(infoMovie("Duna", 2021, Genre.drama));
