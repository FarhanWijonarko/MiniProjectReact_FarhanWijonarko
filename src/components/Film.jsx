import './Carosel.css';

const Film = () => {
  return (
    <div className="film">
      <h1>All Film</h1>
      <div className="container">
        <div className="card">
          <img src="../public/img/avangers.jpg" alt="" />
          <div className="content">
            <h2 className="title">The Avengers</h2>
            <p className="paragraf">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
            <button className="watch">Watch Now</button>
          </div>
        </div>
        <div className="card">
          <img src="../public/img/ironman.jpg" alt="" />
          <div className="content">
            <h2 className="title">Ironman 3</h2>
            <p className="paragraf">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
            <button className="watch">Watch Now</button>
          </div>
        </div>
        <div className="card">
          <img src="../public/img/spiderman.jpeg" alt="" />
          <div className="content">
            <h2 className="title">Spiderman</h2>
            <p className="paragraf">
              With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
            </p>
            <button className="watch">Watch Now</button>
          </div>
        </div>
        <div className="card">
          <img src="../public/img/marvelcapt.jpg" alt="" />
          <div className="content">
            <h2 className="title">Captain Marvel</h2>
            <p className="paragraf">Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</p>
            <button className="watch">Watch Now</button>
          </div>
        </div>
        <div className="card">
          <img src="../public/img/amerika.jpg" alt="" />
          <div className="content">
            <h2 className="title">Captain America</h2>
            <p className="paragraf">Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.</p>
            <button className="watch">Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Film;
