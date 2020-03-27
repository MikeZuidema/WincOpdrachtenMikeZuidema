/* Ik heb het helaas niet af kunnen maken. Ik liep helemaal vast bij stap 16..
en ik weet dat ik mijn eigen herhaalt heb in mijn code...
van het weekend ga ik nog kijken maar ben bang dat ik het niet ga vinden.
hou niet van opgeven maar het is niet anders.
Hoop dat het genoeg is voor in iedergeval Oranje stoplicht*/
//Buttons
const newButton = document.getElementById("new");
const avengerButton = document.getElementById("avenger");
const xMenButton = document.getElementById("xmen");
const princessButton = document.getElementById("princess");
const batmanButton = document.getElementById("batman");
const movieUl = document.getElementById("moviePosters");
let currentposters = movieUl.getElementsByTagName("li");



let moviesList = movies.map(function (movies) {
    return movies
});

const movieLinks = movies.map(function (movies) {
    return movies.imdbID
})
const moviesPosters = moviesList.map(function (movies) {
    return movies.Poster

});


const posters = moviesPosters.forEach(function (element) {
    li = document.createElement("li");
    movieUl.appendChild(li);
    newA = document.createElement("a");
    li.appendChild(newA);
    movieLinks.forEach(function (element) {
        newA.href = element
    })
    newImg = document.createElement("img");
    newA.appendChild(newImg);
    newImg.src = element;
})

//new filter
const newMovies = moviesList.filter(function (element) {
    if (element.Year >= 2014) {
        return element
    }

})
const newPosters = newMovies.map(function (element) {
    return element.Poster
})

//avenger filter
const avengerMovies = moviesList.filter(function (element) {
    if (element.Title.includes("Avengers")) {
        return moviesList
    }
})

const avengerfilter = avengerMovies.map(function (element) {
    return element.Poster
})

//X-Men filter
const xmenMovies = moviesList.filter(function (element) {
    if (element.Title.includes("X-Men")) {
        return moviesList
    }
})

const xmenfilter = xmenMovies.map(function (element) {
    return element.Poster
})

//Princess filter
const princessMovies = moviesList.filter(function (element) {
    if (element.Title.includes("Princess")) {
        return moviesList
    }
})

const princessfilter = princessMovies.map(function (element) {
    return element.Poster
})

//Batman
const batmanMovies = moviesList.filter(function (element) {
    if (element.Title.includes("Batman")) {
        return moviesList
    }
})

const batmanfilter = batmanMovies.map(function (element) {
    return element.Poster
})



//New
const newfunction = newButton.addEventListener("change", function () {
    newUl = document.getElementById("moviePosters");
    first = newUl.firstElementChild;
    while (first) {
        first.remove();
        first = newUl.firstElementChild;
    }
    newPosters.forEach(function (element) {
        li = document.createElement("li");
        movieUl.appendChild(li);
        newImg = document.createElement("img");
        li.appendChild(newImg);
        newImg.src = element;
    })
});
//Avenger
const avengerFunction = avengerButton.addEventListener("change", function () {
    newUl = document.getElementById("moviePosters");
    first = newUl.firstElementChild;
    while (first) {
        first.remove();
        first = newUl.firstElementChild;
    }

    avengerfilter.forEach(function (element) {
        li = document.createElement("li");
        movieUl.appendChild(li);
        newImg = document.createElement("img");
        li.appendChild(newImg)
        newImg.src = element;
    })
});
//Xmen
const xmenFunction = xMenButton.addEventListener("change", function () {
    newUl = document.getElementById("moviePosters");
    first = newUl.firstElementChild;
    while (first) {
        first.remove();
        first = newUl.firstElementChild;
    }
    xmenfilter.forEach(function (element) {
        li = document.createElement("li");
        movieUl.appendChild(li);
        newImg = document.createElement("img");
        li.appendChild(newImg)
        newImg.src = element;
    })
});
//Princess
const princessFunction = princessButton.addEventListener("change", function () {
    newUl = document.getElementById("moviePosters");
    first = newUl.firstElementChild;
    while (first) {
        first.remove();
        first = newUl.firstElementChild;
    }
    princessfilter.forEach(function (element) {
        li = document.createElement("li");
        movieUl.appendChild(li);
        newImg = document.createElement("img");
        li.appendChild(newImg)
        newImg.src = element;
    })
});
//Batman
const batmanFunction = batmanButton.addEventListener("change", function () {
    newUl = document.getElementById("moviePosters");
    first = newUl.firstElementChild;
    while (first) {
        first.remove();
        first = newUl.firstElementChild;
    }
    batmanfilter.forEach(function (element) {
        li = document.createElement("li");
        movieUl.appendChild(li);
        newImg = document.createElement("img");
        li.appendChild(newImg)
        newImg.src = element;
    })
});


