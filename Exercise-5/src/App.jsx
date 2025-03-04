import { MOVIES } from "./data";
import Card from "./components/Card";
import './index.css';

function App() {
  return (
    <div className="app">
      <h1> Movie List</h1>
      <div className="card-list">
        {MOVIES.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
