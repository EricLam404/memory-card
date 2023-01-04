import React, { useState, useEffect } from "react";

function Cards(props) {
    const [cards, setCards] = useState(createCards(10));
    
    useEffect(() => {
        shuffle();
    }, []);
      

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
    function shuffle() {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        setCards(shuffledCards);
    }
      
    function handleClick(e){

    }
    return (
        <div id="cards">
            {cards.map((card) => {
                return(
                    <div className="card" id={card.id} key={card.id} onClick={(e) => handleClick(e)}>
                        {card.id}
                    </div>
                );
            })}
        </div>
    );
  }
  
  export default Cards;
  