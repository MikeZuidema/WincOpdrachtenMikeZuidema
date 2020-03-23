const favoriteMovie = {
    title: '1917',
    duration: 119,
    stars: ['George MackKay', 'Benedict Cumberbatch', 'Colin Firth']
};

const printMovie = function (favoriteMovie) {
    console.log('my favorite movie =' + ' ' + favoriteMovie.title + ' ' + 'it lasts for' + ' ' + favoriteMovie.duration + ' ' + 'minutes');
    console.log('Star actors: ' + favoriteMovie.stars.join(', '));
};

printMovie(favoriteMovie);