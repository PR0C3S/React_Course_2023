const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
const book1 = getBook(1);

//* Traditional way to obtein value
// const title = book.title
// const author = book.author

//* DESTRUCTURING IN AN OBJECT
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

//* DESTRUCTURING IN AN ARRAY
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

//* REST OPERATOR
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondGenre, otherGenres);

const newGenres = [genres, "epic fantasy"];
newGenres;

//* SPREAD OPERATOR
//add element to the end of the array
const newGenres2 = [...genres, "epic fantasy"];
newGenres2;
//add element to the beginning of the array
const newGenres3 = ["epic fantasy", ...genres];
newGenres3;

//add and update properties to an object
const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 12 };
updatedBook;

//* Tradicional way for function
function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(publicationDate));

//* Arrow Functions
const getYearArrowFunction = (str) => str.split("-")[0];

console.log(getYearArrowFunction(publicationDate));

//* TERNARIES
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//* TEMPLATES
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published 
in ${getYearArrowFunction(publicationDate)}. The book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie`;
console.log(summary);

// * Logical operators

// AND OPERATOR
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

//falsy: 0, '',null
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// OR OPERATOR
console.log(true || "Some String");
console.log(false || "Some string");

console.log(book.translations.spanish);
const spanishTraslation = book.translations.spanish || "NOT TRANSLATED";
spanishTraslation;
const spanishTraslation2 = book1.translations.spanish || "NOT TRANSLATED";
spanishTraslation2;

console.log(book.reviews.librarything.reviewsCount);
console.log(book1.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong);

//it doesnt return the value when it is zero or an empty string
const count = book.reviews.librarything.reviewsCount ?? "No data";
console.log(count);

//* Optional chaining operator
// Is a way to control the value that we dont know if it exist in a object
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // we check if reviewscount exist if not we assigned the default value

  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

//* MAP
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book, index) => ({
  // if we add it into parenthesis is not necessary the return
  title: book.title,
  author: book.author,
  reviews: getTotalReviewCount(book),
  index,
}));
console.log(essentialData);

//* Filter Method
// add to the array if the condition is true
// ignore if the condition is false
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

//* Reduce Method
const pageAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pageAllBooks);

//* Sort Method
//Be carefull this method mutated the original array (Change the value to the original)
//To solve this issue first copy the array we can do it with slice
const arr = [3, 7, 1, 9, 6];

//ASCENDENT si el residuo es negativo se ordena ascendemente
const sortedA = arr.slice().sort((a, b) => a - b);
console.log(sortedA);
arr;

//DESCENDENT si el residuo es positivo se ordena descendentemente
const sortedD = arr.slice().sort((a, b) => b - a);
console.log(sortedD);
arr;

const sortedByPages = books.slice().sort((a, b) => b - a);
console.log(sortedByPages);

//? CRUD IN ARRAY
//* 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

//* Another way
//Copiar todas las tareas
const tempArrayAdd = [...books];
//agregamos el elemento
tempArrayAdd.push(newBook);

//* 2) Delete book object fro array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

//*Another way
//Obtain the index
const indexDelete = tempArrayAdd.indexOf(newBook);
// ?Buena practicas
//Copy the array
const tempArrayDelete = [...tempArrayAdd];
//Delete
tempArrayDelete.splice(indexDelete, 1);
console.log(tempArrayDelete);

//* 3) Update a book object in the array
const bookAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 10 } : book
);
console.log(bookAfterUpdate);

//*Another way
//Obtain the index
const indexUpdate = booksAfterDelete.indexOf(newBook);
// ?Buena practicas
//Copy the array
const tempBooksUpdate = [...books];
//Modify
tempBooksUpdate[indexUpdate].pages = 10;

//* Promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("We get an error: " + error));

//* Async/ Await
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos"); //stop until get the data
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getData();
console.log("Prueba");
