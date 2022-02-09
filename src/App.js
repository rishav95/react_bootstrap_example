import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Col1</h1>
          </div>

          <div className="col">
            <h1>Col2</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <h2>Col 4</h2>
          </div>

          <div className="col-8">
            <h2>Col 8</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
