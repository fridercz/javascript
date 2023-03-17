// 1
console.log("1")

setTimeout(function () {
	console.log("2")
}, 0);

console.log("3")

console.log(mivariable)

var mivariable = "hola"

// Clase javascript
class Poligono {
	constructor(alto, ancho) {
		this.alto = alto;
		this.ancho = ancho;
	}
}

const usuario = {
	id: 47,
	nombre: "Sebastián Freitez",
	edad: 26,
	cargo: "Desarrollador",
	departamento: "Desarrollo",
	misc: [007, "jb"],
};

console.log(
	JSON.stringify(usuario, (indice, valor) => {
		if (typeof valor === "string") {
			return undefined;
		}
		return valor;
	})
);

const myDate = new Date()

console.log(myDate)
   
function foo() {
	var b = 1
	return 
	b;
}

console.log(foo());

/*
function getPokemons() {
	fetch('https://pokeapi.co/api/v2/pokemon/')
		.then((resp) => resp.json())
		.then(function(resp) {
			let pokemon = {
				'id': resp.id,
				'name': resp.name,
				'frontDefault': resp.sprites.front_default,
				'bigImg': resp.sprites.other["official-artwork"].front_default,
				'price': (Math.random() * (9.99 - 1.99) + 1.99).toFixed(2),
			};
			allPokeData[resp.id] = pokemon;
		})
		.catch(function(error) {
			console.log(error);
		})
}

console.log(getPokemons())
*/

/*
const getPokemons = async function() {
	fetch('https://pokeapi.co/api/v2/pokemon/')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			// Aquí puedes manipular los datos recibidos
			//console.log(data);
		})
		.catch(error => {
			// Aquí manejas el error
			console.error('There was a problem with the fetch operation:', error);
		})
}
*/

//console.log(getPokemons('https://pokeapi.co/api/v2/pokemon/'))

/*
const getPokemons = async () => {
	try {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
		const json = await response.json()
		return json
	}catch(error) {
		console.log(error)
	}
}
*/

const  getPokemons = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon/'

    // appelle de la requete avec fetch
    const response  = await fetch(url);
    console.log(response);
    
    let data = await response.json()
    console.log(data);

	return data

}

const loadPokemons = getPokemons()
	.then((data) => {
		console.log(data)
	})
	.catch(error => {
		console.log(error)
	})

let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name")

const  changePokemon = async () => {
    let randomNumber =Math.ceil(Math.random() *150 ) +1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber }  `;

    // appelle de la requete avec fetch
    let data  = await fetch(requestString);
    console.log(data);
    
    let response = await data.json()
    console.log(response);

    // apelle de l 'image default
    image.src =  response.sprites.front_default;

    pokeNumber.textContent  = `${response.id}  `;

    pokeName.textContent = response.name;

}

changePokemon()

button.addEventListener('click',changePokemon);

