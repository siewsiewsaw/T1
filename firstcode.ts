// Declare Variables
// let movieName: string = "Avengers Endgame"
// let yearReleased: number = 2019
// let director: string = "Russo"
// let isPopular: boolean = true
// let rating: number = 5
// let dateAired: string = "2019/6/12"

// console.log("Movie Name : " + movieName)
// console.log("Year Released : " + yearReleased)
// console.log("Director Name : " + director)
// console.log("Is Popular : " + isPopular)
// console.log("Rating : " + rating + " star") 
// console.log("Date Aired : " + dateAired)

// Collection of items

let movieNames: string[] = [
    "Avengers Endgame",
    "Spiderman Far From Home",
    "The Conjuring"
]
let yearReleased: Array<number> = [2019,2019,1999]
let directors: string[] = ["Russo", "Jon Watts", "Somebody"]
let isPopular: boolean[] = [true, true, false]
let rating: number[] = [5,4,3]
let dateAired: string[] = ["2019/06/07", "2019/07/07", "1999/03/20"]

let movie_4_information: Array<any> = ["Stranger Things", 2019, "Dunno", false, 2, "2019/07/17" ]

movieNames.push(movie_4_information[0])
yearReleased.push(movie_4_information[1])
directors.push(movie_4_information[2])
isPopular.push(movie_4_information[3])
rating.push(movie_4_information[4])
dateAired.push(movie_4_information[5])

// console.log(movieNames)
// console.log(yearReleased)
// console.log(directors)
// console.log(isPopular)
// console.log(rating)
// console.log(dateAired)

// Display specific values in array (2nd movie)
// Storing data of different types
// New Movie : [movieName, yearReleased, director, isPopular, rating, dateAired]

// Update items to array

// Adding items to array

// Loops - print all movie names
// let i: number = 0
// while(i < movieNames.length){
//     console.log(i + 1 + ". " + movieNames[i])
//     i += 1
// }

// for(let i:number = 0; i < movieNames.length; i++){
//     console.log(i + 1 + ". " + movieNames[i])
// }

// for(let i in movieNames){
//     console.log(parseInt(i) + 1 + ". " + movieNames[i])
// }

// for(let movie of movieNames){
//     console.log(movie)
// }

// Loops - print all movie information by index

// let i: number = 0
// while(i < movieNames.length){
//     console.log(movieNames[i])
//     console.log(yearReleased[i])
//     console.log(directors[i])
//     console.log(isPopular[i])
//     console.log(rating[i])
//     console.log(dateAired[i])
//     console.log("===================")
//     i ++
// }

// New Movie : [movieName, yearReleased, director, isPopular, rating, dateAired]
// Loops - arrange movie information in to new format (same as the new movie)
// [
//     [movieName, yearReleased, director, isPopular, rating, dateAired],
//     [movieName, yearReleased, director, isPopular, rating, dateAired],
//     [movieName, yearReleased, director, isPopular, rating, dateAired],
//     [movieName, yearReleased, director, isPopular, rating, dateAired]
// ]

let formattedMovies: Array<any> = []
let i: number = 0
while(i < movieNames.length){
    let movieInformation: Array<any> = []
    movieInformation.push(movieNames[i])
    movieInformation.push(yearReleased[i])
    movieInformation.push(directors[i])
    movieInformation.push(isPopular[i])
    movieInformation.push(rating[i])
    movieInformation.push(dateAired[i])
    formattedMovies.push(movieInformation)
    i ++
}

// Complex 

// Easy

// Conditionals for filtering (rating > 4)

// A     |   B    | A || B | A && B
// true  | true   |  true  |  true
// true  | false  |  true  | false
// false | true   |  true  | false
// false | false  | false  | false

for( let index in formattedMovies){
    let rating: number = formattedMovies[index][4]
    let director: string = formattedMovies[index][2]

    if(rating >= 4 && director != "Russo"){
        formattedMovies[index].push("Good")
    } else if (rating == 3 || director == "Russo"){
        formattedMovies[index].push("Average")
    } else {
        formattedMovies[index].push("Bad")
    }
}

// Objects: Converting a movie to an object

interface Movie {
    name: string
    yearReleased: number
    director: string
    dateAired: string
    isPopular: boolean
    rating: number
}

let movie: Movie = {
    name : "Avengers Endgame",
    yearReleased: 2019,
    director: "Russo",
    dateAired: "2019/06/07",
    isPopular: true,
    rating: 5
}

let finalMovieFormat: Movie[] = []
for(let movie of formattedMovies){
    let movieObject: Movie = {
        name: movie[0],
        yearReleased: movie[1],
        director: movie[2],
        isPopular: movie[3],
        rating: movie[4],
        dateAired: movie[5],
    }

    for (const key in movie) {
        //key = name
        //key = yearReleased
    }
    finalMovieFormat.push(movieObject)
}

console.log(finalMovieFormat)

// [
//     {...},
//     {...},
//     {...},
//     {...}
// ]

// // Accessing, add and update information from object

// Simple functions: Sum

const sum = (x, y) => {
    return x + y
}

// name: sum
// arg: 2 numbers, x and y
// block: adding them together
// return: the result of adding them together

// name: checkOldMovie
// arg: movie
// block: checking whether the movie release date is older than 2000
// return: boolean true/false

const checkOldMovie = (movie) => {
    return (movie["yearReleased"] < 2000)
}

const checkGoodMovie = (movie) => {
    return movie.rating > 2 && movie.isPopular === true
}

for (let i = 0; i < finalMovieFormat.length; i++) {
    const movie = finalMovieFormat[i];
    
}

for (let movie of finalMovieFormat) {
    console.log("checkOldMovie for "+ movie.name + " is " + checkOldMovie(movie))
    console.log("checkGoodMovie for "+ movie.name + " is " + checkGoodMovie(movie))
}

// name: checkGoodMovie
// arg: movie
// block: rating must be more than 2, isPopular must be true
// return: boolean

//const checkGoodStudent = (student) => {
//    return (
//        student.attendanceisHigh &&
//        student.scores // do a for loop
//        student.homework // do a for loop
//        student.speakInClass // do a for loop
//    )

//}


//if (checkGoodStudent(student)) {
//    issueCertificate()
//}
