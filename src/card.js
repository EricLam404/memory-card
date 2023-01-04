function Card(props) {
    return (
        <div className="card" id={props.name}>
            {props.name}
        </div>
    );
  }
  
  export default Card;
  