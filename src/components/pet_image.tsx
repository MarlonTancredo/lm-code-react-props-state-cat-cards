interface PetImageProps {
  image: string;
  altText: string;
  licenseType: string;
  licenseUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const PetImage: React.FC<PetImageProps> = ({
  image,
  altText,
  licenseType,
  licenseUrl,
  attributionName,
  attributionUrl,
}: PetImageProps) => (
  <>
    <img className="card__image" src={image} alt={altText} />
    <p className="card__text__small">
      Image licensed under <a href={licenseUrl}>{licenseType}</a>
      {attributionName && (
        <>
          &nbsp;by <a href={attributionUrl}>{attributionName}</a>
        </>
      )}
    </p>
  </>
);

export default PetImage;
