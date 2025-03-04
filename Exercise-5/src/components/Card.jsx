export default function Card({ movie }) {
    return (
      <div className="card">
        <img src={movie.image} alt={movie.title} className="card-image" />
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-genre">{movie.genre}</p>
        <p className="card-description">{movie.description}</p>
      </div>
    );
  }
  