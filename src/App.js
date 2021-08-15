import "./App.css";
import Message from "./components/Message";

function App({ name, message }) {
  return (
    <div className="App">
      <header className="App-header">
        My first React app
        <h2 className="App-title">Hello World {name}</h2>
        <Message message={message} />
      </header>
    </div>
  );
}

export default App;
