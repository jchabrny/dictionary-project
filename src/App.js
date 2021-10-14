import strawhat2 from "./strawhat2.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dic•tio•na•ry</h1>
          <img
            src={strawhat2}
            className="App-strawhat img-fluid"
            alt="strawhat"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://de.linkedin.com/in/dr-jacqueline-chabrny-6a1273149"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jacqueline Chabrny
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/jchabrny/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
