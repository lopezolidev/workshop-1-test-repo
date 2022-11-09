import fetch from 'node-fetch'; //important for using fetch

// steps:
// 1- create variables for url and options for fetch
// 2- async function to obtain elements from API
// 3- parse json file and display it in console
// 4- cycle to render elements in the DOM
// 5- add classes and structure to each element for display

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b91953192amshd6d146aa60aaa00p173316jsnd391fb75a86f',
		'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
	}
};

const API = 'https://pokedex2.p.rapidapi.com/pokedex/uk';

// 1- DONE!

async function fetchData(url, options) {
    const response = await fetch(url, options);
    const responseJSON = await response.json();
    console.log(responseJSON);
}

fetchData(API, options);

// 2- DONE!

//Example output: 
// [
//     {
//       "number": "001",
//       "name": "Bulbasaur",
//       "slug": "bulbasaur",
//       "weight": 6.9,
//       "height": 0.7,
//       "abilities": [
//         "Overgrow"
//       ],
//       "weakness": [
//         "Fire",
//         "Psychic",
//         "Flying",
//         "Ice"
//       ],
//       "type": [
//         "grass",
//         "poison"
//       ],
//       "ThumbnailAltText": "Bulbasaur",
//       "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
//     },
//     {
//       "number": "002",
//       "name": "Ivysaur",
//       "slug": "ivysaur",
//       "weight": 13,
//       "height": 1,
//       "abilities": [
//         "Overgrow"
//       ],
//       "weakness": [
//         "Fire",
//         "Psychic",
//         "Flying",
//         "Ice"
//       ],
//       "type": [
//         "grass",
//         "poison"
//       ],
//       "ThumbnailAltText": "Ivysaur",
//       "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
//     },
//     {
//       "number": "003",
//       "name": "Venusaur",
//       "slug": "venusaur",
//       "weight": 100,
//       "height": 2,
//       "abilities": [
//         "Overgrow"
//       ],
//       "weakness": [
//         "Fire",
//         "Psychic",
//         "Flying",
//         "Ice"
//       ],
//       "type": [
//         "grass",
//         "poison"
//       ],
//       "ThumbnailAltText": "Venusaur",
//       "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"
//     }
//   ]