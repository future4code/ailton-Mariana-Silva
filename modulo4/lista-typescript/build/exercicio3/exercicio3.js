var Genre;
(function (Genre) {
    Genre["action"] = "a\u00E7\u00E3o";
    Genre["drama"] = "drama";
    Genre["comedy"] = "comedia";
    Genre["romance"] = "romance";
    Genre["horror"] = "terror";
})(Genre || (Genre = {}));
const infoMovie = (name, year, genre, review) => {
    if (review) {
        return {
            name,
            year,
            genre,
            review,
        };
    }
    else {
        return {
            name,
            year,
            genre,
        };
    }
};
console.log(infoMovie("Duna", 2001, Genre.drama, 74));
console.log(infoMovie("Duna", 2021, Genre.drama));
//# sourceMappingURL=exercicio3.js.map