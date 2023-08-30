import PetImage from "./pet_image";
import { images } from "../data/cat-images-data";

interface PetCardProps {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
  catIndex: number;
}

const PetCard = ({
  name,
  species,
  favFoods,
  birthYear,
  catIndex,
}: PetCardProps) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favorite Food(s): {favFoods}</p>
    <p className="card__text">Birth Year: {birthYear}</p>
    <PetImage
      image={images[catIndex].image}
      altText={images[catIndex].altText}
      licenseType={images[catIndex].licenseType}
      licenseUrl={images[catIndex].licenseUrl}
      attributionName={images[catIndex].attributionName}
      attributionUrl={images[catIndex].attributionUrl}
    />
  </div>
);

export default PetCard;
