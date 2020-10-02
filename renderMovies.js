
function renderMovies(movies) {
    var newCard = movies.map(function(movie){
       return`<br>
            <div class="row">
               <div class="col-5"> 
                <img src="${movie.poster}">
               </div> 
               <div class="col-4" style="color:black;background-color:#f5f5f5;border-radius:35px;">
                <h1>${movie.title}<br><h4>${movie.year}</h4></h1>
                <br>
                <h2 style="color:light-grey;">IMDB:<br>${movie.imdbRating}/10</h2>
                <br>
                <h2 style="color:light-grey;">Rotten Tomatoes:<br>${rottenTomatoesRatingCalc(movie.rottenTomatoesRating)}%</h2>
               </div>
            </div>
            <br>`
    })
    return newCard.join(' ')
}
function rottenTomatoesRatingCalc(rating){
    return Math.round(rating)
}
function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}