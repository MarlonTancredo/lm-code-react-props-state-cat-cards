import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import PetCard from "./components/pet_card";
import { catData } from "./data/cat-data";
// import { dogData } from "./data/dog-data"; //An dog-images-data.ts must be created.

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="cards__wrapper">
          {catData.map((cat, index) => (
            <PetCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>
        {/* Uncomment */}
        {/* <div className="cards__wrapper">
          {dogData.map((dog, index) => (
            <CatCard
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              catIndex={index}
            />
          ))}
        </div> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
