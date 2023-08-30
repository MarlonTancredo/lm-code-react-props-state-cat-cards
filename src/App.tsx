import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import PetCard from "./components/pet_card";
import { catData } from "./data/cat-data";
import { catImages } from "./data/cat-images-data";
import { dogData } from "./data/dog-data";
// import { dogImages } from "./data/dog-images-data"; //Must be created.

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
              petImage={catImages[index]}
            />
          ))}
        </div>
        <div className="cards__wrapper">
          {dogData.map((dog, index) => (
            <PetCard
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              petImage={catImages[index]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
