import Header from "./components/Header";
import Song from "./components/Song";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="song-list">
        <Song title ='Leave The Door Open' artist='Bruno Mars' duration='4:20' />
        <Song title ='Lose Control' artist='Teddy Swims' duration='3:30' />
        <Song title ='Crazy' artist='Gnarls Barkle' duration='3:02' />
      </section>
    </div>
  );
}

export default App;
