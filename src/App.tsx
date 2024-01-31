import "./App.css";
import { useState } from "react";

function App() {
  const [abholung, setAbholung] = useState(0);
  const [clip, setClip] = useState(0);
  const [shooting, setShooting] = useState(0);
  const [album, setAlbum] = useState(0);

  // Entfernung
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);

  const handleAbholung = () => {
    setAbholung(abholung ? 0 : 1250);
  };

  const handleClip = () => {
    setClip(clip ? 0 : 500);
  };

  const handleShooting = () => {
    setShooting(shooting ? 0 : 300);
  };

  const handleAlbum = () => {
    setAlbum(album ? 0 : 250);
  };

  const handlePrice = (event: { target: { value: string } }) => {
    const inputPrice = parseFloat(event.target.value);
    setPrice(isNaN(inputPrice) ? 0 : inputPrice);
  };

  const handleDistance = (event: { target: { value: string } }) => {
    const inputDistance = parseFloat(event.target.value);
    setDistance(isNaN(inputDistance) ? 0 : inputDistance);
  };

  const result = () => {
    return abholung + clip + shooting + album + price * distance;
  };

  return (
    <div className="App">
      <h1>Rechner Luma Media</h1>
      <div>
        <h3>Preis per KM</h3>
        <input type="number" onChange={handlePrice} />
      </div>
      <div>
        <button onClick={handleAbholung}>Saal und Brautabholung</button>

        <button className="clip" onClick={handleClip}>
          Clip
        </button>
      </div>
      <div>
        <button onClick={handleShooting}>Foto-Shooting</button>

        <button onClick={handleAlbum}>Fotoalbum</button>
      </div>
      <div>
        <h3>Entfernung (km)</h3>
        <input type="number" onChange={handleDistance} />
      </div>
      <div>
        <p>Gesamt:</p>
        {result()}
      </div>
    </div>
  );
}

export default App;
