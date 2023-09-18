let score = 0;
let wicket = 0;
let ballWiseResult = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {
  hit = num;
  rootElement.render(<App />);
}
const addWicket = () => {
  hit = "W";
  rootElement.render(<App />);
};
const handleSubmit = (event) => {
  event.preventDefault();
  if (wicket < 10) {
    if (hit === "W") {
      wicket += 1;
    } else {
      score += hit;
    }

    ballWiseResult.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>);
  }
  rootElement.render(<App />);
  hit = 0;
  inputRef.current.value = "";
};
const ScoreButton = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);

const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <input value={hit} disabled />
      <input ref={inputRef} placeholder="Add comment here!" />
      <button>Submit</button>
    </form>
  </>
);
const App = () => (
  <>
    <h1>SCORE BOARD : CRICKET</h1>
    <h2>
      Score: {score}/{wicket}
    </h2>
    <ScoreButton />
    <br />
    <Form />
    <hr />
    <div>
      <h3>Commentary below:</h3>
    </div>
    <div>
      {ballWiseResult.map((result, index) => (
        <p key={index}>{result}</p>
      ))}
    </div>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
