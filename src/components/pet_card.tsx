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
  petImage: {
    image,
    altText,
    licenseType,
    licenseUrl,
    attributionName,
    attributionUrl,
  },
}: PetCardProps) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favorite Food(s): {favFoods}</p>
    <p className="card__text">Birth Year: {birthYear}</p>
    <PetImage
      image={image}
      altText={altText}
      licenseType={licenseType}
      licenseUrl={licenseUrl}
      attributionName={attributionName}
      attributionUrl={attributionUrl}
    />
  </div>
);

export default PetCard;
