import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const [animals, setAnimals] = useState([])
    //useState(0) is a function that returns a two element array with count = 0
    //The first element is the piece of data that is going to change over time
    //The second element is a function that is in charge of re-rendering (calling App()) the screen
    //setCount is a variable that represents this function
    //setCount takes in a parameter for count and updates all instances of count while re-rendering

    // NEVER GOING TO DO THIS:
    //count = count + 1 HAVE TO USE SETCOUNT FUNCTION

    const handleClick = () => {
        //handleClick is a variable that represents a function
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key = {index} />
        // equivalent to const renderedAnimals =  <AnimalShow type={animals[0]}/>
        //                                        <AnimalShow type={animals[1]}/>
    });

    return (
        <div className = "app"> 
            <button onClick = {handleClick}> Add Animal </button>
            <div className='animal-list'> {renderedAnimals} </div>
         </div>
    );
}
export default App;

//const doGreeting = () => {return hi there}
//1. console.log( doGreeting ) **reference to the function so that when we do click, it is called**
//v.s.
//2. console.log( doGreeting() )
// 1 logs the doGreeting function but does not call it
// 2 immediately calls and in the onClick situation, 2 calls the function while
// the code is being rendered/displayed because once React interprets that code even if a 
//button is not pressed, it still calls on it
// For 2, the button gets the return value
// 1 is a reference to the function while 2 is the actual value that the function returns.
// In order for buttons to work when one presses on it, it needs a function that it can rely on when
// someone preeses the button

//<button onClick = {handleClick}> Add Animal </button> is the same ass
// <button onClick = {() => console.log('Button was clicked')}