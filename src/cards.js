import React, { useState, useEffect } from "react";

function Cards(props) {
    const [clickedCards, setClickedCards] = useState([]);
    const shuffledCards = createCards(10);
    
    useEffect(() => {
        shuffle();
    });
      

    function createCards(length){
        let arr = [];
        for(let i = 0; i < length; i++){
            arr.push({
                id: i,
            });
        }
        return arr;
    }
    function shuffle() {
        for (let i = shuffledCards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }        
    }
    function handleClick(e) {
        const clickedCardId = Number(e.target.id);
        for(let i = 0; i < shuffledCards.length; i++){
            if(clickedCards[i] === clickedCardId){
                props.checkBestscore(clickedCards.length);
                props.resetScore();
                setClickedCards([]);
                return
            }
        }
        const arr = [...clickedCards];
        arr.push(clickedCardId);
        setClickedCards(arr);
        props.increaseScore();
    }  
    return (
        <div id="cards">
            {shuffledCards.map((card) => {
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
  