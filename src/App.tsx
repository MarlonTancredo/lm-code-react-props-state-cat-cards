import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import CatCard from "./components/cat_card";
import { cats } from "./data/cat-data";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App(): JSX.Element {
  const catData = cats;
  catData.forEach((cat) => (cat.id = uuidv4()));

  const [catsState, setCatsState] = useState(catData);

  return (
    <>
      <Navbar />
      <Header />

      <main>
        <div className="cards__wrapper">
          {catsState.map((cat, index) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
