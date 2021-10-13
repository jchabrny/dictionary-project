import book from "./book.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
        <img src={book} className="App-book img-fluid" alt="book" />
      </header>
    </div>
  );
}

export default App;
