
import './App.css';

function App() {

  function checkprime(n) {
    var i, flag = true;

    if (n < 2) return false

    for (i = 2; i <= n - 1; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }

    }
    if (flag === true)
      return true
    return false
  }



  return (
    <div className="App">
      <p className="para">30 Days of React </p>
      <p className="para1">Number Generator </p>
      <div className="maindiv">
        { Array(32).fill(" ").map((e, i) => {
          return (

            <div className="mapArr" style={ { backgroundColor: checkprime(i) ? "red" : i % 2 === 0 ? "green" : "#CFC52A" } }>{ i }</div>
          )
        }) }
      </div>
    </div>
  );
}

export default App;
