function Header(props) {
  return (
      <div id="header">
        <div id= "header-left">
          <div id="header-title">
            <h1>Memory Game</h1>
          </div>
          <div>Get points by clicking on an a new image! The game ends if you clicked on an image you previously  clicked</div>
        </div>
        <div id= "header-right">
          <div>Score: {props.score}</div>
          <div>Best Score: {props.bestScore}</div>
        </div>
      </div>
  );
}

export default Header;
