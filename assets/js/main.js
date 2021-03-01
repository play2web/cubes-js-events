var movies = [

    {
        name: '1',
        image: 'https://via.placeholder.com/100x40.png?text=1'
    },
    {
        name: '2',
        image: 'https://via.placeholder.com/100x40.png?text=2'
    },
    {
        name: '3',
        image: 'https://via.placeholder.com/100x40.png?text=3'
    },
    {
        name: '4',
        image: 'https://via.placeholder.com/100x40.png?text=4'
    },
    {
        name: '5',
        image: 'https://via.placeholder.com/100x40.png?text=5'
    },
    {
        name: '6',
        image: 'https://via.placeholder.com/100x40.png?text=6'
    },
    {
        name: '7',
        image: 'https://via.placeholder.com/100x40.png?text=7'
    },
    {
        name: '8',
        image: 'https://via.placeholder.com/100x40.png?text=8'
    },
    {
        name: '9',
        image: 'https://via.placeholder.com/100x40.png?text=9'
    },
    {
        name: '10',
        image: 'https://via.placeholder.com/100x40.png?text=10'
    },
    {
        name: '11',
        image: 'https://via.placeholder.com/100x40.png?text=11'
    },
    {
        name: '12',
        image: 'https://via.placeholder.com/100x40.png?text=12'
    }
];


function createMoviesList(moviesList) {
    var moviesListElement = document.querySelector('#moviesList');
    for (var i = 0; i < moviesList.length; i++) {
        var movie = '<div class="movie-info"><img class="movie-image" src="' + moviesList[i].image + '" alt="' + i + '"><span class="movie-name">' + moviesList[i].name + '</span> <img class="movie-remove" src="https://static.thenounproject.com/png/3823-200.png"></div>';
        moviesListElement.innerHTML = moviesListElement.innerHTML + movie;
    }
}

function searchMovies() {
    var inputElement = document.getElementById('movieeSearch');
    var searchMovieName = inputElement.value.toUpperCase();

    var moviesElement = document.getElementById('moviesList');
    var movies = moviesElement.getElementsByTagName('div');

    for (var i = 0; i < movies.length; i++) {
        var movieName = movies[i].getElementsByTagName('span')[0].innerText.toUpperCase();
        (movieName.indexOf(searchMovieName) > -1) ? movies[i].classList.remove('hidden') : movies[i].classList.add('hidden');
    }
}

function addRemoveEvent() {
    var btn = document.getElementsByClassName('movie-remove')
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function(e) {
        e.currentTarget.parentNode.remove();
      }, false);
    }
}

createMoviesList(movies);
addRemoveEvent();