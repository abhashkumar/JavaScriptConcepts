//https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
//https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/

//The bind() method creates a new function that, when called, has its this keyword set to the provided value. (It actually talks about even more stuff, but we’ll leave that for another time :) )

//The official docs for call() say: The call() method calls a function with a given this value and arguments provided individually.

//The main differences between bind() and call() is that the call() method:

//Accepts additional parameters as well
//Executes the function it was called upon right away.
//The call() method does not make a copy of the function it is being called on.

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var pokemonNameParam = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
var logPokemonParam = pokemonNameParam.bind(pokemon)


logPokemon(); // 'Pika Chu I choose you!'
logPokemonParam('sushi', 'algorithms'); 

//called immidiately
pokemonNameParam.call(pokemon, 'sushi','algorithm' )

//difference between call and apply is that call expects individual param apply expects params array

pokemonNameParam.apply(pokemon,['sushi', 'algorithms']);