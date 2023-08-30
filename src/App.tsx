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
          {catData.map(({ id, name, species, favFoods, birthYear }, index) => (
            <PetCard
              key={id}
              name={name}
              species={species}
              favFoods={favFoods}
              birthYear={birthYear}
              petImage={catImages[index]}
            />
          ))}
          {dogData.map(({ id, name, species, favFoods, birthYear }, index) => (
            <PetCard
              key={id}
              name={name}
              species={species}
              favFoods={favFoods}
              birthYear={birthYear}
              petImage={catImages[index]} //Change to dogImages
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
