import './style.css';
import React from 'react'
import Card from './components/Card.js';

function App() {
  const cardArray = [{locked: false, clicked: false, code: 0, id:1},{locked: false, clicked: false, code: 0, id:2},{locked: false, clicked: false, code: 0, id:3},{locked: false, clicked: false, code: 0, id:4},{locked: false, clicked: false, code: 0, id:5},{locked: false, clicked: false, code: 0, id:6},{locked: false, clicked: false, code: 0, id:7},{locked: false, clicked: false, code: 0, id:8},{locked: false, clicked: false, code: 0, id:9},{locked: false, clicked: false, code: 0, id:10},{locked: false, clicked: false, code: 0, id:11},{locked: false, clicked: false, code: 0, id:12},{locked: false, clicked: false, code: 0, id:13},{locked: false, clicked: false, code: 0, id:14},{locked: false, clicked: false, code: 0, id:15},{locked: false, clicked: false, code: 0, id:16}]
  const [boxes, setBoxes] = React.useState(cardArray)
  const [first, setFirst] = React.useState()
  const [map, setMap] = React.useState()

  if(!map){
    generatePairs()
  }

  function generatePairs(){
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    array.sort((a,b) => 0.5-Math.random())
    let mArray=[];
    for(let i = 0; i < array.length/2; i++){
      mArray.push(`${array[2*i]} ${array[2*i+1]}`)
    }
    setMap(mArray)

    setBoxes(prevState => prevState.map(card => ({...card, code: parseInt(array.indexOf(card.id)/2)})))
  }

  function flipCard(id){
    flip(id)
    if(!first){
      setFirst(id)
    } else {
      if(map.includes(`${first} ${id}`)||map.includes(`${id} ${first}`)){
        lockCards(first,id)
      }else{
        setTimeout(()=>{
          flip(first)
          flip(id)
        }, 1000)
      }
      setFirst()
    }
  }

  function flip(id){
    setBoxes(prevState => prevState.map(card => card.id === id ? {...card, clicked: !card.clicked} : card))
  }

  function lockCards(one, two){
    setBoxes(prevState => prevState.map(card => card.id === one || card.id === two ? {...card, locked: !card.locked} : card))
  }

  const cards = boxes.map(card => <Card className = "Card" key = {card.id} id = {card.id} clicked = {card.clicked} flipCard = {flipCard} code = {card.code} locked = {card.locked}/>)

  return (
    <div className="App">
      <div className="gameContainer">
        {cards}
      </div>
    </div>
  );
}

export default App;
