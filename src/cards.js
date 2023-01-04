import { useState } from 'react';
import Card from "./card";

function Cards(props) {
    const [clickedCards, setClickedCards] = useState([]);
    const cards = createCards(10);
    

    function createCards(length){
        let arr = [];
        for(let i = 0; i < length; i++){
            arr.push({
                id: i,
                clicked: false,
            });
        }
        return arr;
    }
    return (
        <div id="cards">
            {cards.map((card) => {
                return(
                    <div className="card" id={card.id} key={card.id}>
                        {card.id}
                    </div>
                );
            })}
        </div>
    );
  }
  
  export default Cards;
  