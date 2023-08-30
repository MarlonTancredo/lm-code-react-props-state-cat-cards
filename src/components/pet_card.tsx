import PetImage from "./pet_image";
import { PetImageProps } from "./pet_image";

interface PetCardProps {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
  petImage: PetImageProps;
}

const PetCard = ({
  name,
  species,
  favFoods,
  birthYear,
  petImage,
}: PetCardProps) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favorite Food(s): {favFoods}</p>
    <p className="card__text">Birth Year: {birthYear}</p>
    <PetImage
      image={petImage.image}
      altText={petImage.altText}
      licenseType={petImage.licenseType}
      licenseUrl={petImage.licenseUrl}
      attributionName={petImage.attributionName}
      attributionUrl={petImage.attributionUrl}
    />
  </div>
);

export default PetCard;
